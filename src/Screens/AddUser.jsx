import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import DatePick from "../components/DatePick";
import Toasty from "../utils/toast";
import { handleChange } from "../utils/InputNumberValidation";
import { validateEmail } from "../utils/ValidateEmail";

const AddUser = ({ history }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [provider, setprovider] = useState("");
  const [InsuranceName1, setInsuranceName1] = useState("");
  const [InsuranceAddress1, setInsuranceAddress1] = useState("");
  const [InsuranceGroup1, setInsuranceGroup1] = useState("");
  const [InsurancePolicyNo1, setInsurancePolicyNo1] = useState("");
  const [InsuranceName2, setInsuranceName2] = useState("");
  const [InsuranceAddress2, setInsuranceAddress2] = useState("");
  const [InsuranceGroup2, setInsuranceGroup2] = useState("");
  const [InsurancePolicyNo2, setInsurancePolicyNo2] = useState("");
  const [doc_schedule, setdoc_schedule] = useState("");

  const [companyname, setcompanyname] = useState("");
  const [policyno, setpolicyno] = useState("");
  const [insured, setinsured] = useState(true);
  const [fax, setfax] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  // const [bloodtypee, setbloodtypee] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  useEffect(() => {
    console.log(birthDate, "birthDate");
  }, [birthDate]);
  const addUserHandler = async () => {
    // let bloodtype =
    //   bloodtypee == "A+"
    //     ? { type: "A", sign: "+" }
    //     : bloodtypee == "AB-"
    //     ? { type: "AB", sign: "-" }
    //     : bloodtypee == "0+"
    //     ? { type: "0", sign: "+" }
    //     : bloodtypee == "0-"
    //     ? { type: "0", sign: "-" }
    //     : null;

    // console.log("bloodtype", bloodtype);

    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
        const formData = new FormData();
        formData.append("user_image", image);
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("provider", provider);
        formData.append("doc_schedule", doc_schedule);

        formData.append("companyname", companyname);
        formData.append("InsuranceName1", InsuranceName1);
        formData.append("InsuranceAddress1", InsuranceAddress1);
        formData.append("InsuranceGroup1", InsuranceGroup1);
        formData.append("InsurancePolicyNo1", InsurancePolicyNo1);
        formData.append("InsuranceName2", InsuranceName2);
        formData.append("InsuranceAddress2", InsuranceAddress2);
        formData.append("InsuranceGroup2", InsuranceGroup2);
        formData.append("InsurancePolicyNo2", InsurancePolicyNo2);
        formData.append("policyno", policyno);
        formData.append("insured", insured);
        formData.append("fax", fax);
        formData.append("password", password);

        formData.append("gender", gender);
        formData.append("address", address);
        formData.append("email", email);
        // formData.append("bloodtype", JSON.stringify(bloodtype));
        formData.append("phoneNumber", phoneNumber);
        formData.append("birthDate", birthDate);
        formData.append("type", "Admin");

        const body = formData;
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        const res = await axios.post(
          `${baseURL}/user/createUser`,
          body,
          config
        );
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/User");
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
  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_schedule(e?.target?.files[0]);
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
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter First Name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
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
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
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
                        <DatePick
                          // selected={birthDate}

                          // onChange={(birthDate) => setbirthDate(birthDate)}
                          setbirthDate={setbirthDate}
                          birthDate={birthDate}
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

                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Select Insurance*
                      </label>
                      <p className="d-inline-block mr-1">
                        <input
                          value={insured}
                          onChange={() => {
                            setinsured(true);
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
                          value={insured}
                          onChange={() => {
                            setinsured(false);
                          }}
                        />
                        <label htmlFor="test7">No</label>
                      </p>
                    </div>
                  </div>
                </form>
                {/* <div className="row">
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
                </div> */}

                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Co. Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Co. Name"
                      value={InsuranceName1}
                      onChange={(e) => {
                        setInsuranceName1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Group*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Group"
                      value={InsuranceGroup1}
                      onChange={(e) => {
                        setInsuranceGroup1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Policy No*
                    </label>
                    <input
                      type="number"
                      min={0}
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Policy No"
                      value={InsurancePolicyNo1}
                      onChange={(e) => {
                        setInsurancePolicyNo1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Primary Insurance Address*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Primary Insurance Address"
                      value={InsuranceAddress1}
                      onChange={(e) => {
                        setInsuranceAddress1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Co. Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Secondary Insurance Co. Name*"
                      value={InsuranceName2}
                      onChange={(e) => {
                        setInsuranceName2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Address*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter   Secondary Insurance Address*"
                      value={InsuranceAddress2}
                      onChange={(e) => {
                        setInsuranceAddress2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Group*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Secondary Insurance Group"
                      value={InsuranceGroup2}
                      onChange={(e) => {
                        setInsuranceGroup2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Secondary Insurance Policy No*
                    </label>
                    <input
                      type="number"
                      className="all-inputt w-100"
                      min={0}
                      placeholder="Enter Secondary Insurance Policy No"
                      value={InsurancePolicyNo2}
                      onChange={(e) => {
                        setInsurancePolicyNo2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Policy No*
                    </label>
                    <input
                      type="number"
                      maxlength="9"
                      min={0}
                      className="all-inputt w-100"
                      placeholder="Enter Policy No"
                      value={policyno}
                      onChange={(e) => {
                        setpolicyno(e.target.value);
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
                      type="number"
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
                      Fax No*
                    </label>
                    <input
                      type="number"
                      maxlength="9"
                      className="all-inputt w-100"
                      placeholder="Enter Fax No"
                      value={fax}
                      onChange={(e) => {
                        setfax(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Doctor Name*
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Doctor Name"
                      value={provider}
                      onChange={(e) => setprovider(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
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
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Password*
                    </label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      type="password"
                      className="all-inputt w-100"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor>
                      Please Upload User Insurance Card
                      <br></br>
                      <br></br>
                    </label>
                    <div className="file-inpt">
                      <input
                        type="file"
                        accept="application/pdf,application/vnd.ms-excel"
                        onChange={filedocsHandler}
                      />
                      {/* <input type="file" onChange={filedocsHandler} /> */}
                      <i className="fas fa-cloud-upload-alt" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="general-btn mt-3 px-3"
                      data-toggle="modal"
                      data-target="#user-added"
                      onClick={() => {
                        image?.name?.length > 0 &&
                        firstname?.length > 0 &&
                        lastname?.length > 0 &&
                        provider?.length > 0 &&
                        InsuranceAddress1?.length > 0 &&
                        InsuranceGroup1?.length > 0 &&
                        InsurancePolicyNo1 > 0 &&
                        InsuranceName2?.length > 0 &&
                        InsuranceAddress2?.length > 0 &&
                        InsuranceGroup2?.length > 0 &&
                        InsurancePolicyNo2 > 0 &&
                        InsuranceName1?.length > 0 &&
                        companyname?.length > 0 &&
                        policyno?.length > 0 &&
                        fax?.length > 0 &&
                        password?.length > 0 &&
                        gender?.length > 0 &&
                        address?.length > 0 &&
                        email?.length > 0 &&
                        // bloodtypee?.length > 0 &&
                        phoneNumber?.length > 0
                          ? addUserHandler()
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
