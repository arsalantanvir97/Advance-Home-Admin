import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";

const AddUser = ({ history }) => {
  const [username, setusername] = useState();
  const [gender, setgender] = useState();
  const [address, setaddress] = useState();
  const [email, setemail] = useState();
  const [insuranceNumber, setinsuranceNumber] = useState();
  const [bloodtypee, setbloodtypee] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [birthDate, setbirthDate] = useState();
  const [image, setimage] = useState();
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const addUserHandler = async () => {
    let bloodtype =
      bloodtypee == "A+"
        ? { type: "A", sign: "+" }
        : bloodtypee == "AB-"
        ? { type: "AB", sign: "-" }
        : bloodtypee == "0+"
        ? { type: "0", sign: "+" }
        : bloodtypee == "0-"
        ? { type: "0", sign: "-" }
        : null;

    console.log("bloodtype", bloodtype);

    try {
      const formData = new FormData();
      formData.append("user_image", image);
      formData.append("username", username);
      formData.append("gender", gender);
      formData.append("address", address);
      formData.append("email", email);
      formData.append("insuranceNumber", insuranceNumber);
      formData.append("bloodtype", JSON.stringify(bloodtype));
      formData.append("phoneNumber", phoneNumber);
      formData.append("birthDate", birthDate);
      formData.append("type", "Admin");

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(`${baseURL}/user/createUser`, body, config);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/User");
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
                    <Link to="/User">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        User Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Mr-No: 1246</h3>
                  </div>
                </div>
                <form action>
                  <div className="main-over-box">
                    <ImageSelector
                      setImage={setimage}
                      image={image}
                      is_edit={is_edit}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Full Name"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Birthdate*
                      </label>

                      <div
                        role="wrapper"
                        className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                      >
                        <DatePicker
                          selected={birthDate}
                          onChange={(birthDate) => setbirthDate(birthDate)}
                          className="sort-date customdate form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Select Gender*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={gender}
                          onChange={() => {
                            setgender("Male");
                          }}
                          type="radio"
                          id="test1"
                          name="radio-group"
                          defaultChecked
                        />
                        <label htmlFor="test1">Male</label>
                      </p>
                      <p className="d-inline-block mr-1">
                        <input
                          type="radio"
                          id="test2"
                          name="radio-group"
                          value={gender}
                          onChange={() => {
                            setgender("Female");
                          }}
                        />
                        <label htmlFor="test2">Female</label>
                      </p>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-4 mt-1">
                    <label htmlFor className="site-labell">
                      Blood Type
                    </label>
                    <select
                      name
                      id
                      className="general-select-6 w-100"
                      value={bloodtypee}
                      onChange={(e) => {
                        setbloodtypee(e.target.value);
                      }}
                    >
                      <option value={"A+"}>A+</option>
                      <option value={"AB-"}>AB-</option>
                      <option value={"0+"}>0+</option>
                      <option value={"0-"}>0-</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Insurance No*
                    </label>
                    <input
                      type="text"
                      maxlength="9"
                      className="all-inputt w-100"
                      placeholder="Enter Insurance No"
                      value={insuranceNumber}
                      onChange={(e) => {
                        setinsuranceNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Phone*
                    </label>
                    <input
                      value={phoneNumber}
                      type="tel"
                      maxlength="11"
                      onChange={(e) => {
                        setphoneNumber(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Home Address*
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                      className="all-inputt w-100"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Email*
                    </label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      type="email"
                      className="all-inputt w-100"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="general-btn mt-3 px-3"
                      data-toggle="modal"
                      data-target="#user-added"
                      onClick={addUserHandler}
                    >
                      Add
                    </button>
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

export default AddUser;
