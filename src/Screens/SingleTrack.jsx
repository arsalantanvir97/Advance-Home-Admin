import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import MapContainer from "../components/Map";

const LabTechnicianDetails = ({ match, history }) => {
  const locations = [
    { lat: 51.505, lng: -0.09, name: "Location 1" },
    { lat: 51.51, lng: -0.1, name: "Location 2" },
  ];

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}

          <section id="configuration">
            <div className="row card px-lg-5 pb-5">
              <div className="col-12">
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <Link to="/LabTechnician">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Track Booking
                      </h1>
                    </Link>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <div style={{ minHeight: "500px" }}>
                      <MapContainer locations={locations} />
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

export default LabTechnicianDetails;
