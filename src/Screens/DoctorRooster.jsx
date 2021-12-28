import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import Pagination from "../components/Padgination";

const DoctorRooster = ({ match }) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [schedule, setschedule] = useState([]);
  const [rerender, setrerender] = useState(true);
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    getDoctorTests();
  }, [page, perPage, from, to, status, searchString, rerender]);

  const getDoctorTests = async () => {
    const id = match?.params?.id;
    console.log(id, "id");
    try {
      const res = await axios({
        url: `${baseURL}/schedule/schedulelogs`,
        method: "GET",
        params: {
          id,
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
      setschedule(res.data?.schedule);
    } catch (err) {
      console.log("err", err);
    }
  };

  const deleteTestHandler = async (id) => {
    try {
      const res = await axios({
        url: `${baseURL}/schedule/deleteSchedule/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "Test Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log("res", res);
      // setschedule(res?.data?.schedule);
    } catch (err) {
      console.log(err);
    }
    setrerender(!rerender);
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
                    <Link to="/Doctor">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Doctor Rooster
                      </h1>
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
                                  DoctorRooster();
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
                                  <th className="sorting">Doctor Name</th>
                                  <th className="sorting">File Name</th>
                                  <th className="sorting">File</th>
                                  <th className="sorting">Date</th>
                                  <th className="sorting">ACTIONs</th>
                                </tr>
                              </thead>
                              <tbody>
                                {schedule?.docs?.length > 0 &&
                                  schedule?.docs?.map((sch, index) => (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{sch?.doctorid?.fullname}</td>
                                      <td>{sch?.pdfname}</td>
                                      <td>
                                        <Link
                                          to="#"
                                          onClick={() =>
                                            window.open(
                                              `${baseURL}/download/${sch?.pdfdocs}`,
                                              "_blank"
                                            )
                                          }
                                          className="active-td"
                                        >
                                          <img
                                            src="images/download-file.png"
                                            alt=""
                                          />
                                          Download
                                        </Link>
                                      </td>
                                      <td>
                                        {moment
                                          .utc(sch?.createdAt)
                                          .format("LL")}
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
                                              onClick={() =>
                                                window.open(
                                                  `${baseURL}/download/${sch?.pdfdocs}`,
                                                  "_blank"
                                                )
                                              }
                                              to="#"
                                              data-target="#import"
                                              data-toggle="modal"
                                            >
                                              Import
                                            </Link>
                                            <Link
                                              className="dropdown-item"
                                              to="#"
                                              data-target="#delete"
                                              data-toggle="modal"
                                              onClick={() => {
                                                deleteTestHandler(sch?._id);
                                              }}
                                            >
                                              Delete
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
                        {schedule?.docs?.length > 0 && (
                          <Pagination
                            totalDocs={schedule?.totalDocs}
                            totalPages={schedule?.totalPages}
                            currentPage={schedule?.page}
                            setPage={setPage}
                            hasNextPage={schedule?.hasNextPage}
                            hasPrevPage={schedule?.hasPrevPage}
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

export default DoctorRooster;
