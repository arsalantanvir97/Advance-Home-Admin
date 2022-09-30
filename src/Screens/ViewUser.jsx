import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import DocumentCard from "../components/DocumentCard";
import Loader from "../components/Loader";

const ViewUser = ({ match }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/user/getProfile/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false)

      console.log("res", res);
      setuser(res?.data?.user);
    } catch (err) {
      console.log(err);
    }
    setloading(false)

  };

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          {loading ? (
                      <Loader />
                    ) : (
          <section id="configuration">
            <div className="row card px-lg-5 pb-5">
              <div className="col-12">
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <Link to="/User">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        User Details
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    <a
                      href="#_"
                      data-toggle="modal"
                      data-target="#inactivate"
                      className="my-label d-inline-block"
                    >
                      Status:{" "}
                      <span className="active-td">
                        {user?.status == true ? "Active" : "Inactive"}
                      </span>
                    </a>
                    <h2 className="my-label my-1">Mr-No: {user?._id}</h2>
                    <h2 className="my-label">Added by:{user?.type}</h2>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 mb-lg-5 mb-3">
                        <img
                          src={
                            user?.userImage?.length > 0
                              ? `${imageURL}${user?.userImage}`
                              : "images/online-avatar.png"
                          }
                          alt=""
                          className="user-proffile"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              First Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.firstname + " " + user?.lastname}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Birthdate
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {moment.utc(user?.createdAt).format("LL")}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Gender
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.gender}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Primary Insurance Co. Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceName1}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Primary Insurance Group
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceGroup1}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Primary Insurance Policy No
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsurancePolicyNo1}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Primary Insurance Address
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceAddress1}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Secondary Insurance Co. Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceName2}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Secondary Insurance Address
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceAddress2}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Secondary Insurance Group
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsuranceGroup2}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Secondary Insurance Policy No
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.InsurancePolicyNo2}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Insured
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.insured == true ? "Yes" : "No"}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Policy NO
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.policyno}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Fax
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.fax}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Provider Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.provider}</p>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Company Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.companyname}</p>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Address
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.address}</p>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Blood Type
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.bloodtype?.type + user?.bloodtype?.sign}
                            </p>
                          </div>
                        </div> */}
                        {/* <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Insurance No
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {user?.insuranceNumber}
                            </p>
                          </div>
                        </div> */}
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Home Address
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.address}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Phone No
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.phoneNumber}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Email Address
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{user?.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <label htmlFor className="my-label">
                              User Insuance Card
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <DocumentCard
                              text={`Document`}
                              doc={user?.insurancecard}
                              key={0}
                              index={user?._id}
                              only_pdf={true}
                              enable_delete={false}
                              // handleDelete={()=>{handleDeleteLive(schedule?._id)}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>)}
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
