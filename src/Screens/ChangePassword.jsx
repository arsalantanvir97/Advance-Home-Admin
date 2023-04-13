import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminverfyadnresetpasword } from "../actions/adminActions";
const ChangePassword = ({ history }) => {
  const dispatch = useDispatch();
  const [existingpassword, setexistingpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [showicon3, setshowicon3] = useState(true);
  const [loading, setloading] = useState(false);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const submitHandler = async () => {
    setloading(true);
    console.log("submitHandler");
    console.log(
      "submitHandlerreqbody",
      existingpassword,
      newpassword,
      confirm_password
    );
    await dispatch(
      adminverfyadnresetpasword(
        existingpassword,
        newpassword,
        confirm_password,
        adminInfo?.email,
        history
      )
    );
    setloading(false);

    setexistingpassword("");
    setnewpassword("");
    setconfirm_password("");
  };
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12 white-div px-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Link to="/EditProfile">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-chevron-left mr-1" />
                        Change Password
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group position-relative">
                              <label htmlFor className="my-label">
                                Current Password*
                              </label>
                              <input
                                type={showicon ? "password" : "text"}
                                className="pro-input-22 w-100 enter-input"
                                placeholder="Enter Current Password"
                                value={existingpassword}
                                onChange={(e) => {
                                  setexistingpassword(e.target.value);
                                }}
                              />
                              <i
                                onClick={() => setshowicon(!showicon)}
                                className={
                                  showicon
                                    ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                                    : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                                }
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 mt-2">
                            <div className="form-group position-relative">
                              <label htmlFor className="my-label">
                                New Password*
                              </label>
                              <input
                                type={showicon2 ? "password" : "text"}
                                className="pro-input-22 w-100 enter-input-2"
                                placeholder="New Password"
                                value={newpassword}
                                onChange={(e) => {
                                  setnewpassword(e.target.value);
                                }}
                              />
                              <i
                                onClick={() => setshowicon2(!showicon2)}
                                className={
                                  showicon2
                                    ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                                    : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                                }
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 mt-2">
                            <div className="form-group position-relative">
                              <label htmlFor className="my-label">
                                Confirm Password*
                              </label>
                              <input
                                type={showicon3 ? "password" : "text"}
                                className="pro-input-22 w-100 enter-input-3"
                                placeholder="Confirm Password"
                                value={confirm_password}
                                onChange={(e) => {
                                  setconfirm_password(e.target.value);
                                }}
                              />
                              <i
                                onClick={() => setshowicon3(!showicon3)}
                                className={
                                  showicon3
                                    ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                                    : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                                }
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-4">
                        {!loading ? (
                          <Link
                            to="#"
                            onClick={
                              existingpassword?.length > 0 &&
                              newpassword?.length > 0 &&
                              confirm_password?.length > 0
                                ? submitHandler()
                                : null
                            }
                            className="general-btn d-inline-block px-3"
                          >
                            Update
                          </Link>
                        ) : (
                          <i className="fas fa-spinner fa-pulse"></i>
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

export default ChangePassword;
