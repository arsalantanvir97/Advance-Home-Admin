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

const Labortaries = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const [labortary, setlabortary] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetLabortary();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetLabortary = async () => {
    setloading(true);
    try {
      const res = await axios({
        url: `${baseURL}/labortary/labortaryLogs`,
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
      setlabortary(res.data?.labortary);
    } catch (err) {
      console.log("err", err);
    }
    setloading(false);
  };

  const toggleActiveStatus = async (id, status) => {
    try {
      const res = await axios({
        url: `${baseURL}/labortary/toggleActiveStatus/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: res.data.message,
        showConfirmButton: false,
        timer: 1500
      });
      handleGetLabortary();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.message
          ? err?.response?.data?.message
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
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
                    <h1 className="ml-1 main-heading">Laboratories</h1>
                  </div>
                  <div className="col-lg-6 text-right">
                    <Link
                      to="/AddLabortary"
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
                                  handleGetLabortary();
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
                                    <th className="sorting">Lab.Id</th>
                                    <th className="sorting">Email</th>
                                    <th className="sorting">Date</th>
                                    <th className="sorting_asc">Status</th>
                                    <th className="sorting">ACTIONs</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {labortary?.docs?.length > 0 &&
                                    labortary?.docs?.map((labor, index) => (
                                      <tr>
                                        <td>{index + 1}</td>
                                        <td>{labor?.fullname}</td>
                                        <td>{labor?._id}</td>
                                        <td>{labor?.email}</td>
                                        <td>
                                          {moment
                                            .utc(labor?.createdAt)
                                            .format("LL")}
                                        </td>
                                        <td>
                                          <span
                                            className={
                                              labor?.status == "Active"
                                                ? "active-td"
                                                : "inactive-td"
                                            }
                                          >
                                            {labor?.status}
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
                                                to={`/EditLabortary/${labor?._id}`}
                                              >
                                                View
                                              </Link>
                                              <Link
                                                to="#"
                                                onClick={() =>
                                                  toggleActiveStatus(
                                                    labor._id,
                                                    !labor.status
                                                  )
                                                }
                                                className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#activate"
                                              >
                                                {labor?.status == "Active"
                                                  ? "Inactive"
                                                  : "Active"}
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
                          {labortary?.docs?.length > 0 && (
                            <Pagination
                              totalDocs={labortary?.totalDocs}
                              totalPages={labortary?.totalPages}
                              currentPage={labortary?.page}
                              setPage={setPage}
                              hasNextPage={labortary?.hasNextPage}
                              hasPrevPage={labortary?.hasPrevPage}
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

export default Labortaries;
