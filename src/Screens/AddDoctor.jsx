import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";

const AddDoctor = ({ history }) => {
  const [fullname, setfullname] = useState();
  const [qualification, setqualification] = useState();
  const [specialization, setspecialization] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [experience, setexperience] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setpassword] = useState();

  const [image, setimage] = useState();
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const addDoctorHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("user_image", image);
      formData.append("fullname", fullname);
      formData.append("qualification", qualification);
      formData.append("specialization", specialization);
      formData.append("address", address);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("experience", experience);
      formData.append("phoneNumber", phoneNumber);
      formData.append("type", "Admin");

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
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
          timer: 1500,
        });
        history.replace("/Doctor");
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
                    <Link to="/Doctor">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Doctor Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Doc-Id: 1246</h3>
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
                        Experience*
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Experience"
                        value={experience}
                        onChange={(e) => setexperience(e.target.value)}
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
                        className="all-inputt w-100"
                        placeholder="Enter Home Address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
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
                    <div className="col-12">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#useractivated"
                        className="general-btn mt-3 px-3"
                        onClick={addDoctorHandler}
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
