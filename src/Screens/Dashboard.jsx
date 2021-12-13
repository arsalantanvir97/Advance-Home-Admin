import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { gettingallNotif } from "../actions/notifAction";

const Dashboard = () => {
    const dispatch = useDispatch();
    const adminLogin = useSelector((state) => state.adminLogin);
    const { adminInfo } = adminLogin;
  
    useEffect(() => {
        handleGetNotification()
    }, [])

    const handleGetNotification = async () => {
        dispatch(gettingallNotif());
    
      };
    return (
        <div className="app-content content dashboard">
  <div className="content-wrapper content-wrapper-2">
    <div className="content-body">
      {/* Basic form layout section start */}
      <section id="configuration">
        <div className="row card py-lg-5 py-3">
          <div className="col-12">
            <h1 className="ml-1 main-heading">Admin Dashboard</h1>
            <div className="row mt-md-2 mt-1">
              <div className="col-xl-3 col-md-6 mt-2">
                <div className=" circlebox card-1-box">
                  <div className="text-right">
                    <h3 className="dash-card-heading-2 mb-0">200</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src="images/card-1.png" alt="" className="img-fluid mr-1" />
                    <div>
                      <h6 className="dash-card-heading mb-0">Total</h6>
                      <h6 className="dash-card-heading-2 mb-0">Doctors</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-2">
                <div className=" circlebox card-2-box">
                  <div className="text-right">
                    <h3 className="dash-card-heading-2 mb-0">200</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src="images/card-2.png" alt="" className="mr-1" />
                    <div>
                      <h6 className="dash-card-heading mb-0">Total</h6>
                      <h6 className="dash-card-heading-2 mb-0">Laboratories</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-2">
                <div className=" circlebox card-3-box">
                  <div className="text-right">
                    <h3 className="dash-card-heading-2 mb-0">200</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src="images/card-3.png" alt="" className="mr-1" />
                    <div>
                      <h6 className="dash-card-heading mb-0">Total</h6>
                      <h6 className="dash-card-heading-2 mb-0">Technicians</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-2">
                <div className=" circlebox card-1-box">
                  <div className="text-right">
                    <h3 className="dash-card-heading-2 mb-0">200</h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src="images/card-4.png" alt="" className="mr-1" />
                    <div>
                      <h6 className="dash-card-heading mb-0">Total</h6>
                      <h6 className="dash-card-heading-2 mb-0">Users</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6">
                <h2 className="sub-heading ml-1">Total Users per Month</h2>
              </div>
              <div className="col-lg-6 text-right mt-lg-0 mt-2">
                <select name id className="general-select w-50">
                  <option value>Year</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-1 my-auto">
                <h3 className="no-of-user">No.of Users</h3>
              </div>
              <div className="col-lg-11">
                <img src="images/chart.png" alt="" className="img-fluid w-100" />
              </div>
              <div className="col-12 text-center">
                <h3 className="no-of-user">Months</h3>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <h2 className="sub-heading ml-1">Total Tests per Month</h2>
              </div>
              <div className="col-lg-6 text-right mt-lg-0 mt-2">
                <select name id className="general-select w-50">
                  <option value>Year</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                  <option value>2012</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <img src="images/chart.png" alt="" className="img-fluid w-100" />
              </div>
              <div className="col-12 text-center">
                <h3 className="no-of-user">Day</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    )
}

export default Dashboard
