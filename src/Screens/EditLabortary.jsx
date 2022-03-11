import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import InputPhone from "../components/InputPhone";
import { baseURL } from "../utils/api";
import { handleChange } from "../utils/InputNumberValidation";
import Toasty from "../utils/toast";
import { validateEmail } from "../utils/ValidateEmail";
const EditLabortary = ({ match, history }) => {
  const [fullname, setfullname] = useState("");
  const [labspecialization, setlabspecialization] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const [labortarystatus, setlabortarystatus] = useState("");

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    getDoctorData();
  }, []);

  const getDoctorData = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/labortary/getProfile/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      console.log("res", res);
      setfullname(res?.data?.labortary?.fullname);
      setlabspecialization(res?.data?.labortary?.labspecialization);
      setemail(res?.data?.labortary?.email);
      setaddress(res?.data?.labortary?.address);
      setphone(res?.data?.labortary?.phone);
      setlabortarystatus(res?.data?.labortary?.status);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("labortarystatus", labortarystatus);
  }, [labortarystatus]);
  const updateLabortaryData = async () => {
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      console.log("beforehit");
      const res = await axios.post(
        `${baseURL}/labortary/editProfile`,
        {
          id: match?.params?.id,
          fullname,
          labspecialization,
          address,
          phone,
          password,
          email,
        },
        config
      );
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Labortary Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        history.replace("/Labortaries");
      }}else {
        Toasty("error", `Please enter a valid email`);
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
                    <Link to="/Labortaries">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />{" "}
                        {is_edit ? " Laborotory Edit" : " Laborotory detail"}
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Lab.Id: {match?.params?.id}</h3>
                  </div>
                </div>
                <form >
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Full Name*
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Full Name"
                          value={fullname}
                          onChange={(e) => {
                            setfullname(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{fullname}</p>
                      )}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Lab Specialization**
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Lab Specialization"
                          value={labspecialization}
                          onChange={(e) => {
                            setlabspecialization(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{labspecialization}</p>
                      )}{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Email*
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
                      )}{" "}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Password*
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
                        Phone*
                      </label>
                      {is_edit ? (
                         <InputPhone
                         value={phone}
                         onChange={setphone}
                       />
                      ) : (
                        <p>{phone}</p>
                      )}{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Address*
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Home Address"
                          value={address}
                          onChange={(e) => {
                            setaddress(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{address}</p>
                      )}
                    </div>
                  </div>
                  {labortarystatus == "Active" && (
                    <div className="row">
                      <div className="col-12">
                        <Link
                          to="#"
                          className="general-btn mt-3 px-3"
                          onClick={() => {
                            if (!is_edit) {
                              setIsEdit(true);
                            } else {
                              updateLabortaryData();
                            }
                          }}
                        >
                          {" "}
                          {is_edit ? "Update" : "Edit"}
                        </Link>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditLabortary;
