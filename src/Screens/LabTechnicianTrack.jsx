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

const LabTechnicianTrack = ({ match, history }) => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const [labtechnician, setlabtechnician] = useState([]);
  const { adminInfo } = adminLogin;
  const [loading, setloading] = useState("");

  useEffect(() => {
    handleGetLabTechnician();
  }, []);

  const handleGetLabTechnician = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/LabTechnicianRoutes/labTechnicianLogs`,
        method: "GET",
        params: {
          page:1,
          perPage:10,
        },
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      setloading(false)

      console.log("res", res);


      let markers = [];
      if(res.data?.labtechnician.docs.length > 0 ){
        res.data?.labtechnician.docs.forEach((doc, index) => {
          if(doc.location){
            markers.push({
              id: index + 1,
              name: doc.firstName + " " + doc.lastName,
              position: {
                lat: doc.location.latitude,
                lng: doc.location.longitude
              }
            })
          }
        })
      }

      

      setlabtechnician(markers);
    } catch (err) {
      console.log("err", err);
    }
    setloading(false)

  };

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
                        Lab Technician Tracking
                      </h1>
                    </Link>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <div style={{ minHeight: "500px" }}>
                      <MapContainer markers={labtechnician} />
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

export default LabTechnicianTrack;
