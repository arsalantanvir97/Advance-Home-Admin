import React, { useState, useEffect } from "react";
import { baseURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Padgination";
import { useSelector } from "react-redux";
import moment from "moment";

const Notification = () => {
  const [notifcation, setnotification] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  useEffect(() => {
    handleGetUsers();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetUsers = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/notification/notificationlogs`,
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
      setnotification(res.data?.notification);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row white-div px-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="ml-1 main-heading">Notifications</h1>
                  </div>
                </div>
                {notifcation?.docs?.length > 0 &&
                  notifcation?.docs?.map((not, index) => (
                    <>
                      <div className="row mt-2">
                        <div className="col-12">
                          <div className="noti-div px-lg-3 px-1">
                            <div className="d-lg-flex justify-content-between align-items-center">
                              <div className="d-lg-flex align-items-start">
                                <img
                                  src="images/noti-img.png"
                                  alt=""
                                  className="mr-3 img-fluid mb-lg-0 mb-2"
                                />
                                <div>
                                  <h3 className="noitfication-p">
                                    {" "}
                                    {" " + not.body}
                                  </h3>

                                  <h6 className="noti-small noti-date mt-2">
                                    {moment(not?.createdAt).fromNow()}{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                {notifcation?.docs?.length > 0 && (
                  <Pagination
                    totalDocs={notifcation?.totalDocs}
                    totalPages={notifcation?.totalPages}
                    currentPage={notifcation?.page}
                    setPage={setPage}
                    hasNextPage={notifcation?.hasNextPage}
                    hasPrevPage={notifcation?.hasPrevPage}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notification;
