import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ImageSelector from "../components/ImageSelector";
import DatePicker from "react-datepicker";

import { baseURL } from "../utils/api";
import moment from "moment";
import Toasty from "../utils/toast";
import InputNumber from "../components/InputNumber";

const EditTest = ({ match, history }) => {
  const [title, settitle] = useState("");
  const [testdetails, settestdetails] = useState([]);

  const [dateadded, setdateadded] = useState("");

  const [amount, setamount] = useState("");
  const [longDesc, setlongDesc] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    getTestType();
  }, []);
  useEffect(() => {
    console.log('dateadded',dateadded);
  }, [dateadded]);
  const getTestType = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/testtype/testTypeById/${match?.params?.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      });
      console.log("res", res);
      settitle(res?.data?.testtype?.title);
      setdateadded(new Date(res?.data?.testtype?.dateadded));
      setamount(res?.data?.testtype?.amount);
      setlongDesc(res?.data?.testtype?.longDesc);
      settestdetails(res?.data?.testtype);
      setimage(res?.data?.testtype?.images[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfileData = async (e) => {
    console.log("updateProfileData",title?.length);
    if (title?.length > 0 && amount > 0 && longDesc?.length > 0)
     {
      try {
        const formData = new FormData();

        formData.append("user_image", image);
        formData.append("title", title);
        formData.append("dateadded", dateadded);
        formData.append("id", match?.params?.id);
        formData.append("amount", amount);
        formData.append("longDesc", longDesc);

        const body = formData;
        const config = {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`
          }
        };
        console.log("block1");
        const res = await axios.post(
          `${baseURL}/testtype/editProfile`,
          body,
          config
        );
        console.log("editres", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Test Updated Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/TestManagement");
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

    } else {
      Toasty("error", `Please fill out all the required fields`);
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
                    <Link to="/TestManagement">
                      <h1 className="ml-1 main-heading">
                        <i className="fas fa-angle-left mr-1" />
                        Tests Details Edit
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    <a href="#_" className="my-label d-inline-block">
                      Status:{" "}
                      <span className="active-td">{testdetails?.status}</span>
                    </a>
                    <h2 className="my-label my-1">
                      Test.Id: {match?.params?.id}
                    </h2>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Test Name:
                      </label>
                      {is_edit ? (
                        <input
                          type="text"
                          className="all-inputt w-100"
                          placeholder="Enter Test Title"
                          value={title}
                          onChange={(e) => {
                            settitle(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{title}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Date Added:
                      </label>
                      <p className="label-value">
                        {" "}
                        {is_edit ? (
                          <div
                            role="wrapper"
                            className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                          >
                            <DatePicker
                              selected={dateadded}
                              minDate={new Date()}
                              onChange={(dateadded) =>
                                setdateadded(dateadded)
                              }
                              className="sort-date customdate form-control"
                            />
                          </div>
                        ) : (
                          <p>
                            {" "}
                            {moment.utc(testdetails?.dateadded).format("LL")}
                          </p>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell d-block">
                        Image:
                      </label>
                      <div className="row">
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
                        Amount:
                      </label>
                      {is_edit ? (
                        // <input
                        //   type="text"
                        //   className="all-inputt w-100"
                        //   placeholder="Enter Amount"
                        //   value={amount}
                        //   onChange={(e) => {
                        //     setamount(e.target.value);
                        //   }}
                        // />
                        <InputNumber
                          value={amount}
                          onChange={setamount}
                          max={5}
                          className="all-inputt w-100"
                        />
                      ) : (
                        <p>{amount}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Description:
                      </label>
                      {is_edit ? (
                        <textarea
                          name
                          id
                          className="all-inputt w-100 p-2"
                          rows={8}
                          value={longDesc}
                          onChange={(e) => {
                            setlongDesc(e.target.value);
                          }}
                        />
                      ) : (
                        <p>{longDesc}</p>
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

export default EditTest;
