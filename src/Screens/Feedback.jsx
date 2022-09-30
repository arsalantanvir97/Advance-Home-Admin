import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Pagination from "../components/Padgination";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Feedback = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [feedback, setFeedback] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetFeedbacks();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetFeedbacks = async () => {
    setloading(true);
    try {
      const res = await axios({
        url: `${baseURL}/feedback/Feedbacklogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false);

      console.log("res", res);
      setFeedback(res.data?.feedback);
    } catch (err) {
      console.log("err", err);
      setloading(false);
    }
    setloading(false);
  };
  useEffect(() => {
    console.log("feedback", feedback);
  }, [feedback]);
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
                    <h1 className="ml-1 main-heading">Feedback Logs</h1>
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
                          }}
                        >
                          {" "}
                          <option value="">All</option>
                          <option value={"User"}>User</option>
                          <option value={"Doctor"}>Doctor</option>
                          <option value={"Lab Technician"}>
                            Lab Technician
                          </option>
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
                                  handleGetFeedbacks();
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {loading ? (
                    <Loader />
                  ) : (
                    <div className="row row-table">
                      <div className="main-tabble table-responsive">
                        <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                          <div className="row">
                            <div className="col-sm-12">
                              <table className="table table-borderless dataTable">
                                <thead>
                                  <tr>
                                    <th className="sorting_asc">SR. No.</th>
                                    <th className="sorting">Full Name</th>
                                    <th className="sorting">Email</th>
                                    <th className="sorting">Date</th>
                                    <th className="sorting">User Type</th>
                                    <th className="sorting">ACTIONs</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {feedback?.docs?.length > 0 &&
                                    feedback?.docs?.map((feed, index) => (
                                      <>
                                        <tr>
                                          <td>{index + 1}</td>
                                          <td>{feed?.name}</td>
                                          <td>{feed?.email}</td>
                                          <td>
                                            {moment
                                              .utc(feed?.createdAt)
                                              .format("LL")}
                                          </td>
                                          <td>{feed?.type}</td>
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
                                                  to={`/FeedbackDetail/${feed?._id}`}
                                                  className="dropdown-item"
                                                >
                                                  View
                                                </Link>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {feedback?.docs?.length > 0 && (
                            <Pagination
                              totalDocs={feedback?.totalDocs}
                              totalPages={feedback?.totalPages}
                              currentPage={feedback?.page}
                              setPage={setPage}
                              hasNextPage={feedback?.hasNextPage}
                              hasPrevPage={feedback?.hasPrevPage}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
