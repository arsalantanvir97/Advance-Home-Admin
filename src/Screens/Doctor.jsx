import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Pagination from "../components/Padgination";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Doctor = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [doctor, setdoctor] = useState([]);
  const [doctorbyregister, setdoctorbyregister] = useState([]);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [page2, setPage2] = useState(1);
  const [perPage2, setPerPage2] = useState(10);
  const [searchString2, setSearchString2] = useState("");
  const [from2, setFrom2] = useState("");
  const [to2, setTo2] = useState("");
  const [status2, setStatus2] = useState("");

  useEffect(() => {
    handleGetDoctorsAddedbyAdmin();
  }, [page, perPage, from, to, status, searchString]);

  useEffect(() => {
    doctorAddedbyRegister();
  }, [page2, perPage2, from2, to2, status2, searchString2]);

  const handleGetDoctorsAddedbyAdmin = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/doctor/DoctorAddedbyAdminLogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });

      console.log("res", res);
      setdoctor(res.data?.doctor);
    } catch (err) {
      console.log("err", err);
    }
  };

  const doctorAddedbyRegister = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/doctor/doctorAddedbyRegister`,
        method: "GET",
        params: {
          page2,
          perPage2,
          searchString2,
          from2,
          to2,
          status2,
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });

      console.log("res", res);
      setdoctorbyregister(res.data?.doctor);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleChangeStatus = async (id, status) => {
    try {
      const res = await axios({
        url: `${baseURL}/doctor/toggleActiveStatus/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: res.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      handleGetDoctorsAddedbyAdmin();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.message
          ? err?.response?.data?.message
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row card py-lg-5 py-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="ml-1 main-heading">Doctor</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="active-td d-inline-block">
                      {" "}
                      <span className="my-label" />
                    </p>
                  </div>
                </div>
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="pills-doctor-logs-tab"
                      data-toggle="pill"
                      href="#pills-doctor-logs"
                      role="tab"
                      aria-controls="pills-doctor-logs"
                      aria-selected="true"
                    >
                      Doctor Logs
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="pills-verification-tab"
                      data-toggle="pill"
                      href="#pills-verification"
                      role="tab"
                      aria-controls="pills-verification"
                      aria-selected="false"
                    >
                      Doctor Verification
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-doctor-logs"
                        role="tabpanel"
                        aria-labelledby="pills-doctor-logs-tab"
                      >
                        <div className="row">
                          <div className="offset-lg-6 col-lg-6 text-right">
                            <Link
                              to="/AddDoctor"
                              className="general-btn d-inline-block"
                            >
                              Add New
                            </Link>
                          </div>
                        </div>
                        <div className="dataTables_wrapper">
                          <div className="user-listing-top">
                            <div className="row align-items-end d-flex mb-4">
                              <div className="col-xl-6 mt-2 sort-datepicker">
                                <div className="d-sm-flex align-items-center">
                                  <label className>Sort by:</label>
                                  <div className="ml-2">
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <DatePicker
                                        selected={from}
                                        onChange={(from) => setFrom(from)}
                                        className="sort-date customdate form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    {/* <p class="l-grey source mb-1">To</p> */}
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <DatePicker
                                        selected={to}
                                        onChange={(to) => setTo(to)}
                                        className="sort-date customdate form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 text-right mt-2">
                                <label className>Filter by:</label>
                                <select
                                  name
                                  id
                                  className="general-select w-50"
                                  value={status}
                                  onChange={(e) => {
                                    setStatus(e.target.value);
                                    setPage(1);
                                  }}
                                >
                                  <option value={"Active"}>Active</option>
                                  <option value={"Inactive"}>Inactive</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                <div className="dataTables_length">
                                  <label className="d-inline-block">Show</label>
                                  <select
                                    className="form-control d-inline-block table-entry"
                                    value={perPage}
                                    onChange={(e) => {
                                      setPerPage(e.target.value);
                                      setPage(1);
                                    }}
                                  >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>
                                  <label className="d-inline-block ml-1">
                                    Entries
                                  </label>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                                <div className="dataTables_filter">
                                  <div className="search-wrap">
                                    <input
                                      type="search"
                                      className="form-control"
                                      placeholder="Search"
                                      value={searchString}
                                      onChange={(e) => {
                                        setSearchString(e.target.value);
                                        setPage(1);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          handleGetDoctorsAddedbyAdmin();
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row row-table">
                            <div className="main-tabble table-responsive">
                              <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <table className="table table-borderless dataTable">
                                      <thead>
                                        <tr>
                                          <th className="sorting_asc">
                                            SR. No.
                                          </th>
                                          <th className="sorting">Full Name</th>
                                          <th className="sorting">DOC. ID</th>
                                          <th className="sorting">Email</th>
                                          <th className="sorting">Date</th>
                                          <th className="sorting_asc">
                                            Status
                                          </th>
                                          <th className="sorting">ACTIONs</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {doctor?.docs?.length > 0 &&
                                          doctor?.docs?.map((doct, index) => (
                                            <tr>
                                              <td>{index + 1}</td>
                                              <td>{doct?.firstName + " " + doct?.lastName}</td>
                                              <td>{doct?._id}</td>
                                              <td>{doct?.email}</td>
                                              <td>
                                                {" "}
                                                {moment
                                                  .utc(doct?.createdAt)
                                                  .format("LL")}
                                              </td>
                                              <td>
                                                <span
                                                  className={
                                                    doct?.status == "Active"
                                                      ? "active-td"
                                                      : "inactive-td"
                                                  }
                                                >
                                                  {doct?.status}
                                                </span>
                                              </td>
                                              <td>
                                                <div className="btn-group ml-1">
                                                  <button
                                                    type="button"
                                                    className="btn dropdown-toggle"
                                                    data-toggle="dropdown"
                                                  >
                                                    <i className="fa fa-ellipsis-v" />
                                                  </button>
                                                  <div className="dropdown-menu">
                                                    <Link
                                                      className="dropdown-item"
                                                      to={`/ViewDoctor/${doct?._id}`}
                                                    >
                                                      View
                                                    </Link>
                                                    <Link
                                                      to="#"
                                                      onClick={() =>
                                                        handleChangeStatus(
                                                          doct._id,
                                                          !doct.status
                                                        )
                                                      }
                                                      className="dropdown-item"
                                                      data-toggle="modal"
                                                      data-target="#activate"
                                                    >
                                                      {doct?.status == "Active"
                                                        ? "Inactive"
                                                        : "Active"}
                                                    </Link>
                                                    <Link
                                                      className="dropdown-item"
                                                      to={`/EditDoctor/${doct?._id}`}
                                                    >
                                                      Edit
                                                    </Link>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                          ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                {doctor?.docs?.length > 0 && (
                                  <Pagination
                                    totalDocs={doctor?.totalDocs}
                                    totalPages={doctor?.totalPages}
                                    currentPage={doctor?.page}
                                    setPage={setPage}
                                    hasNextPage={doctor?.hasNextPage}
                                    hasPrevPage={doctor?.hasPrevPage}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-verification"
                        role="tabpanel"
                        aria-labelledby="pills-verification-tab"
                      >
                        <div className="row">
                          <div className="offset-lg-6 col-lg-6 text-right">
                            <Link
                              to="/AddDoctor"
                              className="general-btn d-inline-block"
                            >
                              Add New
                            </Link>
                          </div>
                        </div>
                        <div className="dataTables_wrapper">
                          <div className="user-listing-top">
                            <div className="row align-items-end d-flex mb-4">
                              <div className="col-xl-6 mt-2 sort-datepicker">
                                <div className="d-sm-flex align-items-center">
                                  <label className>Sort by:</label>
                                  <div className="ml-2">
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <DatePicker
                                        selected={from2}
                                        onChange={(from2) => setFrom2(from2)}
                                        className="sort-date customdate form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    {/* <p class="l-grey source mb-1">To</p> */}
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <DatePicker
                                        selected={to2}
                                        onChange={(to2) => setTo2(to2)}
                                        className="sort-date customdate form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 text-right mt-2">
                                <label className>Filter by:</label>
                                <select
                                  name
                                  id
                                  className="general-select w-50"
                                  value={status2}
                                  onChange={(e) => {
                                    setStatus2(e.target.value);
                                    setPage2(1);
                                  }}
                                >
                                  <option value={"Pending"}>Pending</option>
                                  <option value={"Accepted"}>Accepted</option>
                                  <option value={"Rejected"}>Rejected</option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                                <div className="dataTables_length">
                                  <label className="d-inline-block">Show</label>
                                  <select
                                    className="form-control d-inline-block table-entry"
                                    value={perPage2}
                                    onChange={(e) => {
                                      setPerPage2(e.target.value);
                                      setPage2(1);
                                    }}
                                  >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>
                                  <label className="d-inline-block ml-1">
                                    Entries
                                  </label>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                                <div className="dataTables_filter">
                                  <div className="search-wrap">
                                    <input
                                      type="search"
                                      className="form-control"
                                      placeholder="Search"
                                      value={searchString2}
                                      onChange={(e) => {
                                        setSearchString2(e.target.value);
                                        setPage2(1);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          handleGetDoctorsAddedbyAdmin();
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row row-table">
                            <div className="main-tabble table-responsive">
                              <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <table className="table table-borderless dataTable">
                                      <thead>
                                        <tr>
                                          <th className="sorting_asc">
                                            SR. No.
                                          </th>
                                          <th className="sorting">Full Name</th>
                                          <th className="sorting">Email</th>
                                          <th className="sorting">Date</th>
                                          <th className="sorting_asc">
                                            Status
                                          </th>
                                          <th className="sorting">ACTIONs</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {doctorbyregister?.docs?.length > 0 &&
                                          doctorbyregister?.docs?.map(
                                            (doct, index) => (
                                              <tr>
                                                <td>{index + 1}</td>
                                                <td>{doct?.firstName + " " + doct?.lastName}</td>
                                                <td>{doct?.email}</td>
                                                <td>
                                                  {" "}
                                                  {moment
                                                    .utc(doct?.createdAt)
                                                    .format("LL")}
                                                </td>
                                                <td>
                                                  <span   className={
                                                    doct?.status == "Accepted"
                                                      ? "active-td"
                                                      : "inactive-td"
                                                  }>
                                                    {doct?.status}
                                                  </span>
                                                </td>
                                                <td>
                                                  <div className="btn-group ml-1">
                                                    <button
                                                      type="button"
                                                      className="btn dropdown-toggle"
                                                      data-toggle="dropdown"
                                                    >
                                                      <i className="fa fa-ellipsis-v" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                      <Link
                                                        className="dropdown-item"
                                                        to={`/DoctorVerification/${doct?._id}`}
                                                      >
                                                        View
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            )
                                          )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                {doctorbyregister?.docs?.length > 0 && (
                                  <Pagination
                                    totalDocs={doctorbyregister?.totalDocs}
                                    totalPages={doctorbyregister?.totalPages}
                                    currentPage={doctorbyregister?.page}
                                    setPage={setPage}
                                    hasNextPage={doctorbyregister?.hasNextPage}
                                    hasPrevPage={doctorbyregister?.hasPrevPage}
                                  />
                                )}
                              </div>
                            </div>
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

export default Doctor;
