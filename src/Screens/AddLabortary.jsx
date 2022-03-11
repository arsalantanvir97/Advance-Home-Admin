import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";
import { handleChange } from "../utils/InputNumberValidation";
import { validateEmail } from "../utils/ValidateEmail";
import InputPhone from "../components/InputPhone";
import InputNumber from "../components/InputNumber";

const AddLabortary = ({ history }) => {
  const [fullname, setfullname] = useState("");
  const [labspecialization, setlabspecialization] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [fax, setfax] = useState("");
  const [labmanagercontact, setlabmanagercontact] = useState("");

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const addLabortaryHandler = async () => {
    try {
      const emailvalidation = validateEmail(email);
      console.log("emmmm", emailvalidation);
      console.log("addEmployeeHandler");
      if (emailvalidation == true) {
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        console.log("beforehit");
        const res = await axios.post(
          `${baseURL}/labortary/createLabortary`,
          {
            fullname,
            labspecialization,
            address,
            phone,
            password,
            fax,
            email,
            labmanagercontact,
            type: "Admin"
          },
          config
        );
        console.log("res", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Labortary added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/Labortaries");
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
                    <Link to="/Labortaries">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Laborotory Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Lab.Id: 1246</h3>
                  </div>
                </div>
                <form>
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
                        Lab Specialization**
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="XYZ"
                        value={labspecialization}
                        onChange={(e) => setlabspecialization(e.target.value)}
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
                        Phone*
                      </label>
                      <InputPhone value={phone} onChange={setphone} />
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Lab Manager Contact*
                      </label>
                      <InputPhone
                        value={labmanagercontact}
                        onChange={setlabmanagercontact}
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
                        Fax No*
                      </label>
                      <InputNumber
                        value={fax}
                        onChange={setfax}
                        max={5}
                        className="all-inputt w-100"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        onClick={() => {
                          fullname?.length > 0 &&
                          labspecialization?.length > 0 &&
                          address?.length > 0 &&
                          phone?.length > 0 &&
                          password?.length > 0 &&
                          password?.length > 0 &&
                          email?.length > 0 &&
                          fax?.length > 0 &&
                          labmanagercontact?.length > 0
                            ? addLabortaryHandler()
                            : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              );
                        }}
                        data-toggle="modal"
                        data-target="#useractivated"
                        className="general-btn mt-3 px-3"
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

export default AddLabortary;
