import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/adminActions";
import { imageURL } from "../utils/api";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const logOutHandler = async () => {
    console.log("logOutHandler");
    dispatch(logout());
  };
  return (
    <>
      <nav
        className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border"
        style={{}}
      >
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="navbar-brand" to="/dashboard">
                  {" "}
                  <img
                    className="brand-logo img-fluid"
                    alt="stack admin logo"
                    src="images/logo.png"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-item d-md-none">
                {" "}
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left"></ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-notification nav-item two-bell-icons">
                  <Link
                    className="nav-link nav-link-label"
                    to="#"
                    data-toggle="dropdown"
                    onClick={() => {
                      history.push("/Notification");
                    }}
                  >
                    <i className="fas fa-bell notifications-bell" />
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up"></span>
                  </Link>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="avatar avatar-online">
                      <img
                        src={
                          adminInfo?.userImage && adminInfo?.userImage !== null
                            ? `${imageURL}${adminInfo?.userImage}`
                            : "images/online-avatar.png"
                        }
                        alt="avatar"
                      />{" "}
                    </span>
                    <span className="user-name">
                      Hi, {adminInfo?.firstName}
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/EditProfile">
                      <i className="fas fa-user-circle" />
                      Profile
                    </Link>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt" />
                      Signout
                    </a>
                  </div>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs is-active"
                    href="#"
                  >
                    <i className="ft-menu greey-menu-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="logoutModal"
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
              <p className="modal-text">Are you sure you want to logout?</p>
              <div className="modal-btn-div">
                <Link
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  to="#"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={logOutHandler}
                >
                  Yes
                </Link>
                <Link
                  className="general-btn d-inline-block px-3 mx-1 mt-1"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  No
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
