import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";

const LabTechnicianDetails = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [labtechnician, setlabtechnician] = useState([]);
  useEffect(() => {
    handleGetLabTechnician();
  }, []);

  const handleGetLabTechnician = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.post(
        `${baseURL}/LabTechnicianRoutes/trackingLabTechnician`,
        { id: match?.params?.id },
        config
      );
      console.log("res", res);
      setlabtechnician(res?.data?.labTechnicians);
    } catch (err) {
      console.log(err);
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
                    <Link to="/LabTechnician">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Lab Technician detail
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    <a href="#_" className="my-label d-inline-block">
                      Status:{" "}
                      <span
                        className={
                          labtechnician?.status == "Active"
                            ? "active-td"
                            : "inactive-td"
                        }
                      >
                        {labtechnician?.status}
                      </span>
                    </a>
                    <h2 className="my-label my-1">
                      Technician.Id: {labtechnician?._id}
                    </h2>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xl-6">
                        {labtechnician?.status == "Active" && (
                          <div className="row">
                            <div className="col-12">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1638272432426!5m2!1sen!2s"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="w-100 map-iframe mb-2"
                                height={250}
                              />
                            </div>
                          </div>
                        )}
                        <div className="row">
                          <div className="col-12 mb-lg-5 mb-3">
                            <img
                              src={
                                labtechnician?.userImage?.length > 0
                                  ? `${imageURL}${labtechnician?.userImage}`
                                  : "images/online-avatar.png"
                              }
                              alt=""
                              className="user-proffile"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Full Name
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.firstName +
                                " " +
                                labtechnician?.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Email
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.email}
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
                              {labtechnician?.specialization}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Qualification
                            </label>
                          </div>

                          <div className="col-lg-6">
                            {labtechnician?.qualification?.length > 0 &&
                              labtechnician?.qualification?.map((qual) => (
                                <p className="label-value">{qual}</p>
                              ))}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Qualified
                            </label>
                          </div>

                          <div className="col-lg-6">
                            {labtechnician?.qualified?.length > 0 &&
                              labtechnician?.qualified?.map((qual) => (
                                <p className="label-value">{qual?.value}</p>
                              ))}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Phone No
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.phone}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Car
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.vehicle}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Modal
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.model}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Color
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {labtechnician?.color}
                            </p>
                          </div>
                        </div>
                        {labtechnician?.rating?.rateCleanliness && (
                          <div className="row">
                            <div className="col-lg-6">
                              <label htmlFor className="my-label">
                                Ratings
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <p className="label-value">Courtesy</p>
                              <div>
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCourtesy >= 1
                                      ? "fas fa-star"
                                      : labtechnician?.rating?.rateCourtesy >=
                                        0.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCourtesy >= 2
                                      ? "fas fa-star"
                                      : labtechnician?.rating?.rateCourtesy >=
                                        1.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCourtesy >= 3
                                      ? "fas fa-star"
                                      : labtechnician?.rating?.rateCourtesy >=
                                        2.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCourtesy >= 4
                                      ? "fas fa-star"
                                      : labtechnician?.rating?.rateCourtesy >=
                                        3.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCourtesy >= 5
                                      ? "fas fa-star"
                                      : labtechnician?.rating?.rateCourtesy >=
                                        4.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                              </div>
                              <p className="label-value mt-1">Friendliness</p>
                              <div>
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateFriendliness >= 1
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateFriendliness >= 0.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateFriendliness >= 2
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateFriendliness >= 1.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateFriendliness >= 3
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateFriendliness >= 2.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateFriendliness >= 4
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateFriendliness >= 3.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateFriendliness >= 5
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateFriendliness >= 4.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                              </div>
                              <p className="label-value mt-1">Cleanliness</p>
                              <div>
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCleanliness >= 1
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateCleanliness >= 0.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCleanliness >= 2
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateCleanliness >= 1.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCleanliness >= 3
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateCleanliness >= 2.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCleanliness >= 4
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateCleanliness >= 3.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    labtechnician?.rating?.rateCleanliness >= 5
                                      ? "fas fa-star"
                                      : labtechnician?.rating
                                          ?.rateCleanliness >= 4.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />{" "}
                              </div>
                              <p className="label-value mt-1">Overall</p>
                              <div>
                                <i className="fas fa-star fill-star" />
                                <i className="fas fa-star fill-star" />
                                <i className="fas fa-star fill-star" />
                                <i className="fas fa-star fill-star" />
                                <i className="fas fa-star fill-star" />
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="row">
                          <div className="col-12 mt-2">
                            <Link
                              to="#"
                              className="general-btn d-inline-block px-5"
                            >
                              Track
                            </Link>
                          </div>
                        </div>
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

export default LabTechnicianDetails;
