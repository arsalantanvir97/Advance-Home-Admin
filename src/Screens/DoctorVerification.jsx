import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";

const DoctorVerification = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [doctor, setdoctor] = useState([]);
  useEffect(() => {
    handleGetDoctor();
  }, []);

  const handleGetDoctor = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/doctor/getProfile/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      console.log("res", res);
      setdoctor(res?.data?.doctor);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleStatusHandler = async (status) => {
    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const res = await axios.post(
      `${baseURL}/doctor/toggleStatus`,
      { id: match?.params?.id, status: status },
      config
    );
    if (res?.status == 201) {
      Swal.fire({
        icon: "success",
        title: "",
        text: "Status updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      history.replace("/Doctor");
    }
  };


  
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row card px-lg-5 pb-5">
              <div className="col-12">
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <Link to="/Doctor">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Doctor Verification Details
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    <Link to="#" className="my-label d-inline-block">
                      Status:{" "}
                      <span className="inactive-td">{doctor?.status}</span>
                    </Link>
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
                              Full Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{doctor?.fullname}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Phone No
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{doctor?.phoneNumber}</p>
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
                        {doctor?.status == "Pending" ? (
                          <div className="row">
                            <div className="col-12">
                              <Link
                                to="#_"
                                onClick={() => {
                                  toggleStatusHandler("Accepted");
                                }}
                                className="general-btn-2 d-inline-block px-3"
                                data-toggle="modal"
                                data-target="#verify"
                              >
                                Verify
                              </Link>
                              <Link
                                to="#_"
                                onClick={() => {
                                  toggleStatusHandler("Rejected");
                                }}
                                className="general-btn d-inline-block px-3"
                                data-toggle="modal"
                                data-target="#reject"
                              >
                                Reject
                              </Link>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DoctorVerification;
