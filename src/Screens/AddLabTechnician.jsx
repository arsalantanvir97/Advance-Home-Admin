import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import TagsInput from "react-tagsinput";
import { MultiSelect } from "react-multi-select-component";
import Toasty from "../utils/toast";
import { validateEmail } from "../utils/ValidateEmail";
import InputPhone from "../components/InputPhone";
import InputNumber from "../components/InputNumber";

const AddLabTechnician = ({ history }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [loading, setloading] = useState(false);

  const [qualification, setqualification] = useState([]);
  const [qualified, setqualified] = useState([]);

  const [specialization, setspecialization] = useState("");
  const [email, setemail] = useState("");
  const [color, setcolor] = useState("");
  const [vehicle, setvehicle] = useState("");
  const [modal, setmodal] = useState("");

  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const [image, setimage] = useState();
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const handleChange = (value) => {
    setqualification(value);
  };
  useEffect(() => {
    console.log("phoneNumber", qualification, qualified, specialization);
  }, [phoneNumber]);
  const AddLabTechnicianHandler = async () => {
    setloading(true)
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
        const formData = new FormData();
        formData.append("user_image", image);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);

        formData.append("qualification", JSON.stringify(qualification));
        formData.append("qualified", JSON.stringify(qualified));

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
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        const res = await axios.post(
          `${baseURL}/LabTechnicianRoutes/register`,
          body,
          config
        );
        setloading(false)

        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Lab Technician Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/LabTechnician");
        }
      } else {
        Toasty("error", `Please enter a valid email`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setloading(false)

  };

  const options = [
    { label: "X-ray", value: "X-ray" },
    { label: "Ultrasound", value: "Ultrasound" },
    { label: "EKG", value: "EKG" },
    { label: "Drug Collector", value: "Drug Collector" },
    { label: "Breath Alcohol", value: "Breath Alcohol" },
    { label: "Phlebotomy", value: "Phlebotomy" }
  ];

  useEffect(() => {
    console.log("qualified", qualified);
  }, [qualified]);

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
                    <Link to="/LabTechnician">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Lab Technician Add
                      </h1>
                    </Link>
                  </div>
                  
                </div>
                <br/><br/>
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
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-2">
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
                    <div className="col-lg-6 mt-2 phoneInput">
                      <label htmlFor className="site-labell">
                        Phone*
                      </label>
                      <InputPhone
                        value={phoneNumber}
                        onChange={setphoneNumber}
                      />
                      </div>

                      <div className="col-lg-6 mt-2">
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
                  <br/>
                  <hr/>
                  <div className="row">
                  <div className="col-lg-6 mt-1">
                      <label htmlFor className="site-labell selectBox">
                        Qualified
                      </label>
                      <MultiSelect
                        options={options}
                        value={qualified}
                        onChange={setqualified}
                        labelledBy="Qualified"
                      />
                    </div>
                   
                  <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        Qualification*
                      </label>
                      <TagsInput
                        inputProps={{ placeholder: "Qualification" }}
                        style={{ color: "black", width: "100%" }}
                        value={qualification}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-6 mt-2">
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
<br/>

<hr/>

                  <div className="row">
                    <div className="col-lg-6 mt-2">
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
                   

                    <div className="col-lg-6 mt-2">
                      <label htmlFor className="site-labell">
                        Model*
                      </label>
                      <InputNumber
                        value={modal}
                        onChange={setmodal}
                        max={14}
                        className="all-inputt w-100"
                      />
                    </div>

                  
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-6 mt-2">
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
                    <div className="col-12">
                      {!loading ? (
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#useractivated"
                          className="general-btn mt-3 px-3"
                          onClick={() => {
                            image?.name?.length > 0 &&
                            firstName?.length > 0 &&
                            lastName?.length > 0 &&
                            qualification?.length > 0 &&
                            qualified?.length > 0 &&
                            specialization?.length > 0 &&
                            color?.length > 0 &&
                            password?.length > 0 &&
                            email?.length > 0 &&
                            vehicle?.length > 0 &&
                            phoneNumber > 0 &&
                            modal > 0
                              ? AddLabTechnicianHandler()
                              : Toasty(
                                  "error",
                                  `Please fill out all the required fields`
                                );
                          }}
                        >
                          Add
                        </button>
                      ) : (
                        <i className="fas fa-spinner fa-pulse"></i>
                      )}
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
