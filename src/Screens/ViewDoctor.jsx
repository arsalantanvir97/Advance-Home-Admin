import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

const ViewDoctor = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [doctor, setdoctor] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetDoctor();
  }, []);

  const handleGetDoctor = async () => {
    setloading(true);
    try {
      const res = await axios({
        url: `${baseURL}/doctor/getProfile/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false);

      console.log("res", res);
      setdoctor(res?.data?.doctor);
    } catch (err) {
      console.log(err);
    }
    setloading(false);
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
                      <Link to="/Doctor">
                        <h1 className="ml-1 main-heading">
                          <i className="fas fa-angle-left mr-1" />
                          Doctor Details
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
                        <span
                          className={
                            doctor?.status == "Active"
                              ? "active-td"
                              : "inactive-td"
                          }
                        >
                          {doctor?.status}
                        </span>
                      </a>
                      <h2 className="my-label my-1">Doc-No: {doctor?._id}</h2>
                      {doctor?.status == "Active" && (
                        <Link
                          to={`/DoctorRooster/${doctor?._id}`}
                          className="my-label d-inline-block"
                        >
                          <span className="active-td text-decoration-underline">
                            Doctor Roosters
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 mb-lg-5 mb-3">
                          <img
                            src={
                              doctor?.userImage?.length > 0
                                ? `${imageURL}${doctor?.userImage}`
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
                                {doctor?.firstName + " " + doctor?.lastName}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Address
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">{doctor?.address}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Office Phone
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.phoneNumber}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Company Name
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.companyname}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                NPI
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">{doctor?.npi}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Qualification
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.qualification}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Specialization
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.specialization}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Direct Phone
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.directphone}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                HIPAA
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">
                                {doctor?.hipa == true ? "Yes" : "No"}
                              </p>
                            </div>
                          </div>
                          {/* <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Insured
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{doctor?.insurance==true? 'Yes': 'No'}</p>
                          </div>
                        </div> */}
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Fax
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">{doctor?.fax}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Email Address
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">{doctor?.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDoctor;
