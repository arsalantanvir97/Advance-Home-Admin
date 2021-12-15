import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ImageSelector from "../components/ImageSelector";
import { baseURL } from "../utils/api";

const EditDoctor = ({ match, history }) => {
  const [fullname, setfullname] = useState('');
  const [qualification, setqualification] = useState('');
  const [specialization, setspecialization] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [experience, setexperience] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setpassword] = useState('');

  const [image, setimage] = useState('');
  const [is_edit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    getDoctorData();
  }, []);

  const getDoctorData = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/doctor/getProfile/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      });
      console.log("res", res);
      setfullname(res?.data?.doctor?.fullname);
      setqualification(res?.data?.doctor?.qualification);
      setspecialization(res?.data?.doctor?.specialization);
      setemail(res?.data?.doctor?.email);

      setaddress(res?.data?.doctor?.address);
      setexperience(res?.data?.doctor?.experience);
      setphoneNumber(res?.data?.doctor?.phoneNumber);
      setimage(res?.data?.doctor?.userImage);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //  console.log(image?.includes('upload') ? 'true' : 'false');
  // }, [image]);

  const updateProfileData = async (e) => {
    try {
      const formData = new FormData();

      formData.append("user_image", image);
      formData.append("fullname", fullname);
      formData.append("qualification", qualification);
      formData.append("id", match?.params?.id);
      formData.append("specialization", specialization);
      formData.append("address", address);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("phoneNumber", phoneNumber);

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      const res = await axios.post(
        `${baseURL}/doctor/editProfile`,
        body,
        config
      );
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Doctor Updated Successfully",
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
                    <Link to="/Doctor">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Doctor Edit
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right mt-lg-0 mt-2">
                    <h3 className="mr-no">Doc-Id: {match?.params?.id}</h3>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <ImageSelector
                      setImage={setimage}
                      image={image}
                      is_edit={is_edit}
                    />
                    {/* <div className="col-lg-12">
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
                      </div> */}
                  </div>
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
                        Qualification*
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Qualification"
                          value={qualification}
                          onChange={(e) => {
                            setqualification(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{qualification}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Email*
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
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
                        Specialization*
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
                        Phone*
                      </label>
                      {is_edit ? (
                        <input
                          type="tel"
                          maxlength="11"
                          className="all-inputt w-100"
                          placeholder="Enter Phone"
                          value={phoneNumber}
                          onChange={(e) => {
                            setphoneNumber(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{phoneNumber}</p>
                      )}{" "}
                    </div>
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Experience*
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Experience"
                          value={experience}
                          onChange={(e) => {
                            setexperience(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{experience}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Home Address*
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
                    <div className="col-12">
                      <div style={{ height: 25 }}></div>
                      <Link
                        to="#"
                        className="general-btn mt-5 px-3"
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

export default EditDoctor;
