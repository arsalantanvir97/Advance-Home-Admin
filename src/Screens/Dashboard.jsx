import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../components/Graph";
import moment from "moment";
import { gettingallNotif } from "../actions/notifAction";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [dashboardata, setdashboardata] = useState([]);
  const [year1, setyear1] = useState("");
  const [year2, setyear2] = useState("");
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    handleGetNotification();
  }, []);
  useEffect(() => {
    handleGetDashboardData();
  }, [year1, year2]);

  const handleGetNotification = async () => {
    dispatch(gettingallNotif());
  };

  const handleGetDashboardData = async () => {
    console.log("handleGetDashboardData");
    try {
      setloading(true);
      const res = await axios({
        url: `${baseURL}/admin/getCountofallCollection`,
        method: "GET",
        params: { year1, year2 },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      setloading(false);

      console.log("res", res);
      setdashboardata(res.data);
    } catch (err) {
      console.log("err", err);
      setloading(false);
    }
    setloading(false);
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
                    {loading ? (
                      <Loader />
                    ) : (
                      <div className=" circlebox card-1-box">
                        <div className="text-right">
                          <h3 className="dash-card-heading-2 mb-0">
                            {dashboardata?.doctorcount}
                          </h3>
                        </div>
                        <div className="d-flex align-items-center">
                          <img
                            src="images/card-1.png"
                            alt=""
                            className="img-fluid mr-1"
                          />
                          <div>
                            <h6 className="dash-card-heading mb-0">Total</h6>
                            <h6 className="dash-card-heading-2 mb-0">
                              Doctors
                            </h6>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-xl-3 col-md-6 mt-2">
                  {loading ? (
                      <Loader />
                    ) : (
                    <div className=" circlebox card-2-box">
                      <div className="text-right">
                        <h3 className="dash-card-heading-2 mb-0">
                          {dashboardata?.labortarycount}
                        </h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <img src="images/card-2.png" alt="" className="mr-1" />
                        <div>
                          <h6 className="dash-card-heading mb-0">Total</h6>
                          <h6 className="dash-card-heading-2 mb-0">
                            Laboratories
                          </h6>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <div className="col-xl-3 col-md-6 mt-2">
                  {loading ? (
                      <Loader />
                    ) : (
                    <div className=" circlebox card-3-box">
                      <div className="text-right">
                        <h3 className="dash-card-heading-2 mb-0">
                          {dashboardata?.labtechniciancount}
                        </h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <img src="images/card-3.png" alt="" className="mr-1" />
                        <div>
                          <h6 className="dash-card-heading mb-0">Total</h6>
                          <h6 className="dash-card-heading-2 mb-0">
                            Technicians
                          </h6>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <div className="col-xl-3 col-md-6 mt-2">
                  {loading ? (
                      <Loader />
                    ) : (
                    <div className=" circlebox card-1-box">
                      <div className="text-right">
                        <h3 className="dash-card-heading-2 mb-0">
                          {dashboardata?.userscount}
                        </h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <img src="images/card-4.png" alt="" className="mr-1" />
                        <div>
                          <h6 className="dash-card-heading mb-0">Total</h6>
                          <h6 className="dash-card-heading-2 mb-0">Users</h6>
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>
                
                <div className="row mt-2">
                  <div className="col-lg-6">
                    <h2 className="sub-heading ml-1">Total Users per Month</h2>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <select
                      name
                      id
                      className="general-select w-50"
                      value={year1}
                      onChange={(e) => {
                        setyear1(e.target.value);
                      }}
                    >
                      <option value={"2020"}>2020</option>
                      <option value={"2021"}>2021</option>
                      <option value={"2022"}>2022</option>
                      <option value={"2023"}>2023</option>
                      <option value={"2024"}>2024</option>
                      <option value={"2025"}>2025</option>
                      <option value={"2026"}>2026</option>
                      <option value={"2027"}>2027</option>
                      <option value={"2028"}>2028</option>
                      <option value={"2029"}>2029</option>
                      <option value={"2030"}>2030</option>
                      <option value={"2031"}>2031</option>
                      <option value={"2032"}>2032</option>
                      <option value={"2033"}>2033</option>
                    </select>
                  </div>
                </div>
                {loading ? (
                      <Loader />
                    ) : (
                <div className="row mt-2">
                  <div className="col-lg-1 my-auto">
                    <h3 className="no-of-user">No.of Users</h3>
                  </div>
                  
                  <Graph graph_data={dashboardata?.graph_data} />
                  <div className="col-12 text-center">
                    <h3 className="no-of-user">Months</h3>
                  </div>
                </div>)}
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <h2 className="sub-heading ml-1">Total Tests per Month</h2>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <select
                      name
                      id
                      className="general-select w-50"
                      value={year2}
                      onChange={(e) => {
                        setyear2(e.target.value);
                      }}
                    >
                      <option value={"2020"}>2020</option>
                      <option value={"2021"}>2021</option>
                      <option value={"2022"}>2022</option>
                      <option value={"2023"}>2023</option>
                      <option value={"2024"}>2024</option>
                      <option value={"2025"}>2025</option>
                      <option value={"2026"}>2026</option>
                      <option value={"2027"}>2027</option>
                      <option value={"2028"}>2028</option>
                      <option value={"2029"}>2029</option>
                      <option value={"2030"}>2030</option>
                      <option value={"2031"}>2031</option>
                      <option value={"2032"}>2032</option>
                      <option value={"2033"}>2033</option>
                    </select>
                  </div>
                </div>
                {loading ? (
                      <Loader />
                    ) : (
                <div className="row mt-2">
                  <Graph graph_data={dashboardata?.graph_datatest} />
                  {/* <div className="col-12">
                    <img
                      src="images/chart.png"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div> */}
                  <div className="col-12 text-center">
                    <h3 className="no-of-user">Months</h3>
                  </div>
                </div>)}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
