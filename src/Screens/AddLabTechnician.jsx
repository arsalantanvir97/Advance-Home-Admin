import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";

const AddLabTechnician = ({ history }) => {
  const [fullname, setfullname] = useState();
  const [qualification, setqualification] = useState();
  const [specialization, setspecialization] = useState();
  const [email, setemail] = useState();
  const [color, setcolor] = useState();
  const [vehicle, setvehicle] = useState();
  const [modal, setmodal] = useState();

  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState();

  const [image, setimage] = useState();
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const AddLabTechnicianHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("user_image", image);
      formData.append("fullname", fullname);
      formData.append("qualification", qualification);
      formData.append("specialization", specialization);
      formData.append("color", color);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("vehicle", vehicle);
      formData.append("phoneNumber", phoneNumber);
      formData.append("modal", modal);
      formData.append("type", "Admin");

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/LabTechnicianRoutes/register`,
        body,
        config
      );
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Lab Technician Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/LabTechnician");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row card px-lg-5 py-lg-5 py-3">
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-lg-6">
                    <Link to='/LabTechnician'>
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Lab Technician Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Lab Techncian.Id: 1246</h3>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-over-box">
                        <ImageSelector
                          setImage={setimage}
                          image={image}
                          is_edit={is_edit}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                      <div className="col-lg-12">
                        <span className="position-relative">
                          <img src="images/profile.png" alt="" className="user-proffile" />
                          <label htmlFor="picture" className="d-block">
                            <img src="images/uplod-profile-img.png" alt="" className="pro-upload" />
                          </label>
                        </span>
                        <div className="d-none">
                          <input type="file" name="pic" accept=".gif,.jpg,.png,.tif|image/*" id="picture" />
                          <input type="submit" />
                        </div>
                      </div>
                    </div> */}
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setfullname(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Color*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Blue"
                        value={color}
                        onChange={(e) => setcolor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="all-inputt w-100"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Qualification*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Qualification"
                        value={qualification}
                        onChange={(e) => setqualification(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Phone*
                      </label>
                      <input
                        type="number"
                        maxlength="11"
                        className="all-inputt w-100"
                        placeholder="Enter Phone"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Specialization*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Specialization"
                        value={specialization}
                        onChange={(e) => setspecialization(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Car/Bike*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Car"
                        value={vehicle}
                        onChange={(e) => setvehicle(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Password*
                      </label>
                      <input
                        type="password"
                        className="all-inputt w-100"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Modal*
                      </label>
                      <input
                        type="number"
                        className="all-inputt w-100"
                        placeholder={2002}
                        value={modal}
                        onChange={(e) => setmodal(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#useractivated"
                        className="general-btn mt-3 px-3"
                        onClick={AddLabTechnicianHandler}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddLabTechnician;
