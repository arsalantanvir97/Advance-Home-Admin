import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TagsInput from "react-tagsinput";
import Swal from "sweetalert2";
import ImageSelector from "../components/ImageSelector";
import InputNumber from "../components/InputNumber";
import InputPhone from "../components/InputPhone";
import { baseURL } from "../utils/api";
import Toasty from "../utils/toast";
import { validateEmail } from "../utils/ValidateEmail";

const EditLabTEchnician = ({ match, history }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [qualified, setqualified] = useState("");

  const [qualification, setqualification] = useState("");
  const [specialization, setspecialization] = useState("");
  const [email, setemail] = useState("");
  const [color, setcolor] = useState("");
  const [vehicle, setvehicle] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [labtechdata, setlabtechdata] = useState();
  const [modal, setmodal] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    getLabTechnician();
  }, []);
  const handleChange = (value) => {
    setqualification(value);
  };
  const options = [
    { label: "X-ray", value: "X-ray" },
    { label: "Ultrasound", value: "Ultrasound" },
    { label: "EKG", value: "EKG" },
    { label: "Drug Collector", value: "Drug Collector" },
    { label: "Breath Alcohol", value: "Breath Alcohol" },
    { label: "Phlebotomy", value: "Phlebotomy" }
  ];

  const getLabTechnician = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.post(
        `${baseURL}/LabTechnicianRoutes/trackingLabTechnician`,
        { id: match?.params?.id },
        config
      );
      console.log("res", res);
      setfirstName(res?.data?.labTechnicians?.firstName);
      setlastName(res?.data?.labTechnicians?.lastName);
      setqualified(res?.data?.labTechnicians?.qualified);

      setqualification(res?.data?.labTechnicians?.qualification);
      setspecialization(res?.data?.labTechnicians?.specialization);
      setemail(res?.data?.labTechnicians?.email);
      setmodal(res?.data?.labTechnicians?.model);

      setcolor(res?.data?.labTechnicians?.color);
      setvehicle(res?.data?.labTechnicians?.vehicle);
      setphoneNumber(res?.data?.labTechnicians?.phone);
      setimage(res?.data?.labTechnicians?.userImage);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfileData = async (e) => {
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
      const formData = new FormData();

      formData.append("id", match?.params?.id);
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

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.post(
        `${baseURL}/LabTechnicianRoutes/editProfile`,
        body,
        config
      );
      console.log("editres", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "LabTechnician Updated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        history.replace("/LabTechnician");
      }}else {
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

    setIsEdit(false);
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
                    <Link to="/LabTechnician">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Lab Technician Edit
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">
                      Lab Techncian.Id: {match?.params?.id}
                    </h3>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <ImageSelector
                      setImage={setimage}
                      image={image}
                      is_edit={is_edit}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        First Name{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter First Name"
                          value={firstName}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{firstName}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Last Name{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Last Name"
                          value={lastName}
                          onChange={(e) => {
                            setlastName(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{firstName}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Email{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="email"
                          className="all-inputt w-100"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{email}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Qualification{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <TagsInput
                          inputProps={{ placeholder: "Qualification" }}
                          style={{ color: "black", width: "100%" }}
                          value={qualification}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{qualification}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Phone{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                         <InputPhone
                         value={phoneNumber}
                         onChange={setphoneNumber}
                       />
                        // <input
                        //   type="number"
                        //   min={0}
                        //   maxlength="11"
                        //   className="all-inputt w-100"
                        //   placeholder="Enter Phone"
                        //   value={phoneNumber}
                        //   onChange={(e) => {
                        //     handleChange(e, setphoneNumber)                           }}
                        // />
                      ) : (
                        <p>{phoneNumber}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Specialization{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Specialization"
                          value={specialization}
                          onChange={(e) => {
                            setspecialization(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{specialization}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Car/Bike{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Car/Bike"
                          value={vehicle}
                          onChange={(e) => {
                            setvehicle(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{vehicle}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Password{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="*******"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{"*******"}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Modal{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <InputNumber
                        value={modal}
                        onChange={setmodal}
                        max={12}
                        className="all-inputt w-100"
                      />
                     
                      ) : (
                        <p>{modal}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Color{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Color"
                          value={color}
                          onChange={(e) => {
                            setcolor(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{color}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Qualified{is_edit&&'*'}
                      </label>
                      {is_edit ? (
                        <MultiSelect
                          options={options}
                          value={qualified}
                          onChange={setqualified}
                          labelledBy="Qualified"
                        />
                      ) : (
                        <>
                          {qualified?.length > 0 &&
                            qualified?.map((qual) => <p>{qual?.value}</p>)}{" "}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div style={{ height: "30px" }}></div>
                      <Link
                        to="#"
                        className="general-btn mt-3 px-3"
                        onClick={() => {
                          if (!is_edit) {
                            setIsEdit(true);
                          } else {
                            updateProfileData();
                          }
                        }}
                      >
                        {" "}
                        {is_edit ? "Update" : "Edit"}
                      </Link>
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

export default EditLabTEchnician;
