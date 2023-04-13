import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
const FeedbackDetail = ({ match }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const [feedback, setFeedback] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handleGetFeedback();
  }, []);

  const handleGetFeedback = async () => {
    try {
      setloading(true)
      const res = await axios({
        url: `${baseURL}/feedback/feedback-details/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      setloading(false)

      console.log("res", res);
      setFeedback(res?.data?.feedback);
    } catch (err) {
      console.log(err);
    }
    setloading(false)

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
                    <Link to="/Feedback">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Feedback Details
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <h1 className="ml-1 main-heading">
                          Feedback Information{" "}
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
                            <p className="label-value">{feedback?.name}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Email:
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{feedback?.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Date Submitted:
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">
                              {moment.utc(feedback?.createdAt).format("LL")}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Subject:
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{feedback?.subject}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              User Type
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">User</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <label htmlFor className="my-label">
                              Message:
                            </label>
                          </div>
                          <div className="col-lg-6">
                            <p className="label-value">{feedback?.msg}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>)}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
