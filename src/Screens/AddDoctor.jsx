import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";
import { handleChange } from "../utils/InputNumberValidation";
import { validateEmail } from "../utils/ValidateEmail";
import InputNumber from "../components/InputNumber";
import InputPhone from "../components/InputPhone";

const AddDoctor = ({ history }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [fax, setfax] = useState("");
  const [npi, setnpi] = useState("");
  const [hipa, sethipa] = useState(true);
  // const [insurance, setinsurance] = useState(true);

  const [qualification, setqualification] = useState("");
  const [specialization, setspecialization] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [directphone, setdirectphone] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const [image, setimage] = useState();
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const addDoctorHandler = async () => {
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
        const formData = new FormData();

        formData.append("user_image", image);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("companyname", companyname);
        formData.append("fax", fax);
        formData.append("npi", npi);
        formData.append("hipa", hipa);
        // formData.append("insurance", insurance);
        formData.append("qualification", qualification);
        formData.append("specialization", specialization);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("directphone", directphone);
        formData.append("phoneNumber", phoneNumber);
        formData.append("type", "Admin");

        const body = formData;
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        const res = await axios.post(
          `${baseURL}/doctor/createDoctor`,
          body,
          config
        );
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Doctor Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/Doctor");
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
                    <Link to="/Doctor">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Doctor Add
                      </h1>
                    </Link>
                  </div>
                  {/* <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Doc-Id: 1246</h3>
                  </div> */}
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
                  <div className="row">
                    <div className="col-lg-4 mt-2">
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
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Company Name"
                        value={companyname}
                        onChange={(e) => setcompanyname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Fax No*
                      </label>
                      <InputNumber
                        value={fax}
                        onChange={setfax}
                        max={5}
                        className="all-inputt w-100"
                      />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        NPI*
                      </label>
                      <InputNumber
                        value={npi}
                        onChange={setnpi}
                        max={14}
                        className="all-inputt w-100"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Office Phone*
                      </label>
                      <InputPhone
                        value={phoneNumber}
                        onChange={setphoneNumber}
                      />
                    </div>
                  </div>

                  <div className="row">
                    {/* <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Select insurance*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={insurance}
                          onChange={() => {
                            setinsurance(true);
                          }}
                          type="radio"
                          id="test1"
                          name="radio-group"
                          defaultChecked
                        />
                        <label htmlFor="test1">Yes</label>
                      </p>
                      <p className="d-inline-block mr-1">
                        <input
                          type="radio"
                          id="test2"
                          name="radio-group"
                          value={insurance}
                          onChange={() => {
                            setinsurance(false);
                          }}
                        />
                        <label htmlFor="test2">No</label>
                      </p>
                    </div> */}
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Select HIPAA*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={hipa}
                          onChange={() => {
                            sethipa(true);
                          }}
                          type="radio"
                          id="test6"
                          name="radio-groups"
                          defaultChecked
                        />
                        <label htmlFor="test6">Yes</label>
                      </p>
                      <p className="d-inline-block mr-1">
                        <input
                          type="radio"
                          id="test7"
                          name="radio-groups"
                          value={hipa}
                          onChange={() => {
                            sethipa(false);
                          }}
                        />
                        <label htmlFor="test7">No</label>
                      </p>
                    </div>
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
                  </div>

                  <div className="row">
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

                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Direct Phone*
                      </label>
                      <InputPhone
                        value={directphone}
                        onChange={setdirectphone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Address*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
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
                    <div className="col-12">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#useractivated"
                        className="general-btn mt-3 px-3"
                        onClick={() => {
                          image?.name?.length > 0 &&
                          firstName?.length > 0 &&
                          lastName?.length > 0 &&
                          companyname?.length > 0 &&
                          fax > 0 &&
                          npi > 0 &&
                          qualification?.length > 0 &&
                          specialization?.length > 0 &&
                          directphone > 0 &&
                          password?.length > 0 &&
                          address?.length > 0 &&
                          email?.length > 0 &&
                          phoneNumber > 0
                            ? addDoctorHandler()
                            : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              );
                        }}
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

export default AddDoctor;
