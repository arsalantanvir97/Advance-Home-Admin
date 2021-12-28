import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  const [openusersidebar, setopenusersidebar] = useState(false);
  console.log("props?.match?.path", props?.match?.path);
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion"
      data-scroll-to-active="true"
    >
      <div
        className="main-menu-content ps-container ps-theme-dark"
        data-ps-id="3a9d3eb6-82bd-4b9c-95bd-52bbec8b2916"
        style={{ height: "882px" }}
      >
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li
            className={
              props?.match?.path == "/dashboard"
                ? "nav-item active "
                : "nav-item"
            }
          >
            <Link to="/dashboard">
              <img src="images/dashboard.png" alt="" className="mr-1" />
              <span className="menu-title" data-i18n>
                Dashboard
              </span>
            </Link>
          </li>
          <li
            className={
              props?.match?.path == "/User" ||
              props?.match?.path == "/Doctor" ||
              props?.match?.path == "/LabTechnician" ||
              props?.match?.path == "/Labortaries"
                ? "nav-item has-sub active open"
                : `nav-item has-sub ${openusersidebar && "open"}`
            }
          >
            <Link
              to="#"
              onClick={() => {
                setopenusersidebar(!openusersidebar);
              }}
            >
              <img src="images/user.png" className="mr-1" alt="" />
              <span className="menu-title" data-i18n>
                User Management
              </span>
            </Link>
            <ul className="menu-content">
              <li>
                <Link className="menu-item active " to="/User">
                  Users
                </Link>{" "}
              </li>
              <li>
                <Link className="menu-item " to="/Doctor">
                  Doctors
                </Link>{" "}
              </li>
              <li>
                <Link className="menu-item " to="/LabTechnician">
                  Lab Technicians
                </Link>{" "}
              </li>
              <li>
                <Link className="menu-item " to="/Labortaries">
                  Laboratories
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li
            className={
              props?.match?.path == "/ContentManagement"
                ? "nav-item active "
                : "nav-item"
            }
          >
            <Link to="/ContentManagement">
              <img src="images/content.png" className="mr-1" alt="" />
              <span className="menu-title" data-i18n>
                Content Management
              </span>
            </Link>
          </li>
          <li
            className={
              props?.match?.path == "/TestManagement"
                ? "nav-item active "
                : "nav-item"
            }
          >
            <Link to="/TestManagement">
              <img src="images/test.png" className="mr-1" alt="" />
              <span className="menu-title" data-i18n>
                Tests Management
              </span>
            </Link>
          </li>
          <li
            className={
              props?.match?.path == "/Booking" ? "nav-item active " : "nav-item"
            }
          >
            <Link to="/Booking">
              <img src="images/booking.png" className="mr-1" alt="" />
              <span className="menu-title" data-i18n>
                Bookings
              </span>
            </Link>
          </li>
          <li
            className={
              props?.match?.path == "/Feedback"
                ? "nav-item active "
                : "nav-item"
            }
          >
            <Link to="/Feedback">
              <img src="images/feedback.png" alt="" className="mr-1" />
              <span className="menu-title" data-i18n>
                Feedbacks
              </span>
            </Link>
          </li>
        </ul>
        <div
          className="ps-scrollbar-x-rail"
          style={{ left: "0px", bottom: "3px" }}
        >
          <div
            className="ps-scrollbar-x"
            tabIndex={0}
            style={{ left: "0px", width: "0px" }}
          />
        </div>
        <div
          className="ps-scrollbar-y-rail"
          style={{ top: "0px", right: "3px" }}
        >
          <div
            className="ps-scrollbar-y"
            tabIndex={0}
            style={{ top: "0px", height: "0px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
