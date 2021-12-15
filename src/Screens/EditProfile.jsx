import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import { updateAdminInfoAction } from "../actions/adminActions";

const EditProfile = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [image, setimage] = useState('');
  const [is_edit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      setfirstName(adminInfo?.firstName);
      setlastName(adminInfo?.lastName);
      setimage(adminInfo?.userImage);
    }
  }, [adminInfo]);

  // useEffect(() => {
  //  console.log(image?.includes('upload') ? 'true' : 'false');
  // }, [image]);

  const updateProfileData = async (e) => {
    const formData = new FormData();
    formData.append("user_image", image);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    const body = formData;
    await dispatch(updateAdminInfoAction(body));
    setIsEdit(false);
  };

  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper content-wrapper-2">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="row">
              <div className="col-12 white-div px-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Link to="/dashboard">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-chevron-left mr-1" />
                        {is_edit ? " Edit Profile" : " My Profile"}
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="main-over-box">
                      {/* <span className="position-relative">
                            <img src="images/profile.png" alt="" className="user-proffile" />
                            <label htmlFor="picture" className="d-block">
                              <img src="images/uplod-profile-img.png" alt="" className="pro-upload" />
                            </label>
                          </span> */}
                      <ImageSelector
                        setImage={setimage}
                        image={image}
                        is_edit={is_edit}
                      />
                    </div>

                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-4">
                            <label htmlFor className="my-label">
                              First Name
                            </label>
                            {is_edit ? (
                              <input
                                type="text"
                                className="form-control cutum-input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => {
                                  setfirstName(e.target.value);
                                }}
                              />
                            ) : (
                              <p>{firstName}</p>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 mt-2">
                            <label htmlFor className="my-label">
                              Last Name
                            </label>
                            {is_edit ? (
                              <input
                                type="text"
                                className="form-control cutum-input"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => {
                                  setlastName(e.target.value);
                                }}
                              />
                            ) : (
                              <p>{lastName}</p>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 mt-2">
                            <label htmlFor className="my-label">
                              Email
                            </label>
                            <p> {adminInfo?.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-4">
                        <Link
                          to="#"
                          className="general-btn d-inline-block px-3"
                          onClick={() => {
                            if (!is_edit) {
                              setIsEdit(true);
                            } else {
                              updateProfileData();
                            }
                          }}
                        >
                          {is_edit ? "Update" : "Edit"}
                        </Link>
                      </div>
                    </div>
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

export default EditProfile;
