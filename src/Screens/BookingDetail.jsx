import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
const BookingDetail = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [booking, setbooking] = useState([]);
  const [labtechnician, setlabtechnician] = useState([]);
  const [selectedlabtechnician, setselectedlabtechnician] = useState("");
  const [rejectionReason, setrejectionReason] = useState("");

  useEffect(() => {
    handleGetBooking();
    handleGetLabtechnician();
  }, []);

  const handleGetBooking = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/testbooking/bookingDetails/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      console.log("res", res);
      setbooking(res?.data?.booking);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("selectedlabtechnician", selectedlabtechnician);
  }, [selectedlabtechnician]);

  const handleGetLabtechnician = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/LabTechnicianRoutes/getalllabTechnicians`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      console.log("res", res);
      setlabtechnician(res?.data?.labTechnicians);
    } catch (err) {
      console.log(err);
    }
  };
  const addLabTechnicianHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/testbooking/addLabTechnian`,
        {
          bookingid: match?.params?.id,
          labtechicianid: selectedlabtechnician?._id,
        },
        config
      );
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Lab Technician Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/Booking");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const setselectedlabtechnicianHandler = (lab) => {
    console.log(lab);
    setselectedlabtechnician(lab);
  };
  const rejectBookingHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/testbooking/rejectBooking`,
        {
          bookingid: match?.params?.id,
          rejectionReason: rejectionReason,
        },
        config
      );
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Booking Status Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/Booking");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="app-content content dashboard">
        <div className="content-wrapper content-wrapper-2">
          <div className="content-body">
            {/* Basic form layout section start */}

            <section id="configuration">
              <div className="row card px-lg-5 pb-5">
                <div className="col-12">
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <Link to="/Booking">
                        <h1 className="ml-1 main-heading">
                          <i className="fas fa-angle-left mr-1" />
                          Booking Details
                        </h1>
                      </Link>
                    </div>
                    <div className="col-lg-6 text-right my-auto">
                      <a href="#_" className="my-label d-inline-block">
                        Status:{" "}
                        <span className="pending-td">{booking?.status}</span>
                      </a>
                      <h2 className="my-label my-1">Test.Id: {booking?._id}</h2>
                      <Link 
                        to={`/PaymentDetail/${booking?._id}`}
                        className="my-label d-inline-block"
                      >
                        <span className="active-td underline">
                          Payment Status
                        </span>
                      </Link>
                    </div>
                  </div>
                  {booking?.status == "Pending" ? (
                    <div className="row mt-2">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 mb-lg-5 mb-3">
                            <img
                              src={
                                booking?.userid?.userImage &&
                                booking?.userid?.userImage !== null
                                  ? `${imageURL}${booking?.userid?.userImage}`
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
                                  Test Name:
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <p className="label-value">
                                  {booking?.testTypeId?.title}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label htmlFor className="my-label">
                                  Date Selected:
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <p className="label-value">
                                  {" "}
                                  {moment.utc(booking?.date).format("LL")}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label htmlFor className="my-label">
                                  Time Selected:
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <p className="lble-back"> {booking?.time}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label htmlFor className="my-label">
                                  User Name:
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <p className="label-value">
                                  {booking?.userid?.username}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label htmlFor className="my-label">
                                  User ID:
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <p className="label-value">
                                  {" "}
                                  {booking?.userid?._id}
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
                                <p className="label-value">
                                  {booking?.userid?.address}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <Link
                                  to="#_"
                                  className="general-btn-2 d-inline-block px-3"
                                  data-toggle="modal"
                                  data-target="#verify"
                                >
                                  Approve
                                </Link>
                                <Link
                                  to="#_"
                                  className="general-btn d-inline-block px-3"
                                  data-toggle="modal"
                                  data-target="#reject"
                                >
                                  Rejection
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : booking?.status == "Approved" ? (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-xl-6">
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
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Test Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.testTypeId?.title}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment.utc(booking?.date).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="lble-back">{booking?.time}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.username}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?._id}
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
                                  <p className="label-value">
                                    {booking?.userid?.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <p className="active-td">Assign other Lab Tech</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Lab Tech:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.labTechnicianId?.fullname}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Lab Tech ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.labTechnicianId?._id}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 mt-2">
                                  <a
                                    href="#_"
                                    className="general-btn d-inline-block px-5"
                                  >
                                    Track
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : booking?.status == "Rejected" ? (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Test Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.testTypeId?.title}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {moment.utc(booking?.date).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="lble-back">{booking?.time}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.username}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?._id}
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
                                  <p className="label-value">
                                    {booking?.userid?.address}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <h2 className="main-heading">
                                    Rejection Reason
                                  </h2>
                                </div>
                                <div className="col-12">
                                  <p className="label-value">
                                    {booking?.rejectionReason}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : booking?.status == "On Way" ||
                    booking?.status == "Reached" ? (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Test Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.testTypeId?.title}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment.utc(booking?.date).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time Selected:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="lble-back">{booking?.time}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.username}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    User ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?._id}
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
                                  <p className="label-value">
                                    {booking?.userid?.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <p className="active-td">Assign other Lab Tech</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Lab Tech:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.labTechnicianId?.fullname}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Lab Tech ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.labTechnicianId?._id}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time Status Changed:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {new Date(
                                      booking?.changeStatusDateTime
                                    ).toLocaleTimeString()}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time Arrived:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {new Date(
                                      booking?.changeStatusDateTime
                                    ).toLocaleTimeString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : booking?.status == "Completed" ? (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Job ID:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.jobid}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date Assigned:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment
                                      .utc(booking?.dateassigned)
                                      .format("LL")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-2">
                              <h1 className="ml-1 main-heading">
                                User Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Full Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.username}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Birth Date:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment
                                      .utc(booking?.userid?.birthDate)
                                      .format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Gender:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.gender}
                                  </p>
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
                                    {booking?.userid?.phoneNumber}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Home Address:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.userid?.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Test Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Test Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.testTypeId?.title}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment.utc(booking?.date).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">{booking?.time}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Status Update:
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6 user-listing-top">
                                  <select
                                    name
                                    id
                                    className="general-select w-100"
                                  >
                                    <option value>Select</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Result Details:
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment
                                      .utc(booking?.resultid?.createdAt)
                                      .format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.resultid?.time}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Performed By:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.resultid?.performedBy}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 text-center">
                                  <i className="fas fa-file-pdf pdf-file d-block" />
                                  <Link
                                    to="#"
                                    className="active-td underline d-inline-block mr-1"
                                    onClick={() =>
                                      window.open(
                                        `${imageURL}${booking?.resultid?.result}`,
                                        "_blank"
                                      )
                                    }
                                  >
                                    Preview
                                  </Link>
                                  <Link
                                    to="#"
                                    download
                                    className="active-td underline d-inline-block ml-1"
                                    onClick={() =>
                                      window.open(
                                        `${baseURL}/download/${booking?.resultid?.result}`,
                                        "_blank"
                                      )
                                    }
                                  >
                                    Download
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : booking?.status == "Delivered to Courier" ? (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                User Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Full Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.userid?.username}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Birth Date:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {moment
                                      .utc(booking?.userid?.birthDate)
                                      .format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Gender:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.gender}
                                  </p>
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
                                    {" "}
                                    {booking?.userid?.phoneNumber}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Home Address:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.userid?.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Test Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Test Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.testTypeId?.title}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Date:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {moment.utc(booking?.date).format("LL")}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Time:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">{booking?.time}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Laboratory Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {" "}
                                    {booking?.resultid?.performedBy}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="ml-1 main-heading">
                                Courier Details
                              </h1>
                            </div>
                            <div className="col-xl-6">
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Name:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.courierDetails?.courierName}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label htmlFor className="my-label">
                                    Tracking Id:
                                  </label>
                                </div>
                                <div className="col-lg-6">
                                  <p className="label-value">
                                    {booking?.courierDetails?.trackingId}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="verify"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className="text-center">
              <img src="images/question.png" alt="" />
              <h2 className="modal-hading">System Message</h2>
              <p className="modal-text">
                Are you sure you want to Approve this Request?
              </p>
              <div className="modal-btn-div">
                <a
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  href="#_"
                  data-target="#booking"
                  data-toggle="modal"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Yes
                </a>
                <a
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="reject"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className="text-center">
              <img src="images/question.png" alt="" />
              <h2 className="modal-hading">System Message</h2>
              <p className="modal-text">
                Are you sure you want to Reject this Request
              </p>
              <div className="modal-btn-div">
                <a
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  href="#_"
                  data-target="#userrejected"
                  data-toggle="modal"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Yes
                </a>
                <a
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="booking"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className="text-center" id="configuration">
              <h2 className="modal-hading">Bookings Pending </h2>
              <p className="modal-text">
                Please Select a Lab technician to Continue *
              </p>
              <div className="modal-search position-relative mb-lg-5 mb-3">
                <input
                  type="search"
                  className="w-75 all-inputt mx-auto"
                  placeholder="Serach Laboratory"
                />
              </div>
              <div className="doctor-div ss-container" ss-container>
                <div className="ss-wrapper">
                  <div className="ss-content">
                    {labtechnician?.length > 0 &&
                      labtechnician?.map((lab, index) => (
                        <div
                          className="d-flex justify-content-between align-items-center  px-1 mt-1"
                          onClick={() => setselectedlabtechnicianHandler(lab)}
                        >
                          <div className="d-flex">
                            <img
                              src={
                                lab?.userImage && lab?.userImage !== null
                                  ? `${imageURL}${lab?.userImage}`
                                  : "images/online-avatar.png"
                              }
                              alt=""
                              className="modal-doctor mr-1"
                            />
                            <div className="text-left">
                              <h6 className="doctor-heading">
                                {lab?.fullname}
                              </h6>
                              <h6 className="doctor-heading">ID. {lab?._id}</h6>
                            </div>
                          </div>
                          <p>
                            <input
                              type="radio"
                              id={`test5${index}`}
                              value={lab?._id}
                              name="platform"
                              checked={lab?._id == selectedlabtechnician?._id}
                            />
                            <label htmlFor="test5" />
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className="ss-scroll"
                  style={{
                    height: "82.8947%",
                    top: "17.1053%",
                    right: "-441px",
                  }}
                />
              </div>
              <div className="modal-btn-div">
                <Link
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  to="#_"
                  data-target="#techinactivated"
                  data-toggle="modal"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={addLabTechnicianHandler}
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="userrejected"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className>
              <h2 className="modal-hading">Please Select One Reason:</h2>
              <p>
                <input type="radio" id="test6" name="radio-group" />
                <label htmlFor="test6">Option 1</label>
              </p>
              <p>
                <input type="radio" id="test7" name="radio-group" />
                <label htmlFor="test7">Option 2</label>
              </p>
              <p>
                <input type="radio" id="test8" name="radio-group" />
                <label htmlFor="test8">Option 3</label>
              </p>
              <p>
                <input type="radio" id="test9" name="radio-group" />
                <label htmlFor="test9">Other</label>
              </p>
              <div className="modal-search mb-lg-5 mb-3" id="configuration">
                <textarea
                  name
                  id
                  rows={8}
                  className="w-100 all-inputt mx-auto p-2"
                  defaultValue={""}
                  value={rejectionReason}
                  onChange={(e) => {
                    setrejectionReason(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className>
              <Link
                className="general-btn d-inline-block px-3 mx-1 mt-1"
                data-dismiss="modal"
                aria-label="Close"
                to="#"
                onClick={rejectBookingHandler}
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetail;
