import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Pagination from "../components/Padgination";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Booking = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const [bookings, setbookings] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    handleGetBookings();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetBookings = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/testbooking/bookingLogs`,
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
      setbookings(res.data?.bookings);
    } catch (err) {
      console.log("err", err);
    }
  };

  const toggleActiveStatus = async (id, status) => {
    try {
      const res = await axios({
        url: `${baseURL}/testtype/toggleActiveStatus/${id}`,
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
      handleGetBookings();
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
                    <h1 className="ml-1 main-heading">Booking</h1>
                  </div>
                  <div className="col-lg-6 text-right">
                    <Link to="/AddTest" className="general-btn d-inline-block">
                      Add New{" "}
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
                          <option value={"Pending"}>Pending</option>
                          <option value={"Approved"}>Approved</option>
                          <option value={"Rejected"}>Rejected</option>
                          <option value={"Completed"}>Completed</option>
                          <option value={"Delivered to Courier"}>
                            Delivered to Courier
                          </option>
                          <option value={"On Way"}>On Way</option>
                          <option value={"Reached"}>Reached</option>
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
                          <label className="d-inline-block ml-1">Entries</label>
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
                                  handleGetBookings();
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
                                  <th className="sorting_asc">SR. No.</th>
                                  <th className="sorting">User Name</th>
                                  <th className="sorting">MR.No</th>
                                  <th className="sorting">Date</th>
                                  <th className="sorting">Status</th>
                                  <th className="sorting">ACTIONs</th>
                                </tr>
                              </thead>
                              <tbody>
                                {bookings?.docs?.length > 0 &&
                                  bookings?.docs?.map((book, index) => (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{book?.userid?.firstname}</td>
                                      <td>{book?._id}</td>
                                      <td>
                                        {" "}
                                        {moment
                                          .utc(book?.createdAt)
                                          .format("LL")}
                                      </td>
                                      <td>
                                        <span className="active-td">
                                          {book?.status}
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
                                              to={`/BookingDetail/${book?._id}`}
                                            >
                                              View
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
                        {bookings?.docs?.length > 0 && (
                          <Pagination
                            totalDocs={bookings?.totalDocs}
                            totalPages={bookings?.totalPages}
                            currentPage={bookings?.page}
                            setPage={setPage}
                            hasNextPage={bookings?.hasNextPage}
                            hasPrevPage={bookings?.hasPrevPage}
                          />
                        )}
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

export default Booking;
