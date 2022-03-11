import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import Toasty from "../utils/toast";

const AddTest = ({ history }) => {
  const [title, settitle] = useState("");
  const [dateadded, setdateadded] = useState("");
  const [amount, setamount] = useState("");
  const [longDesc, setlongDesc] = useState("");

  const [image, setimage] = useState("");
  const [is_edit, setIsEdit] = useState(true);
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const addTestHadndler = async () => {
    try {
      const formData = new FormData();
      formData.append("user_image", image);
      formData.append("title", title);
      formData.append("dateadded", dateadded);
      formData.append("amount", amount);
      formData.append("longDesc", longDesc);

      formData.append("type", "Admin");

      const body = formData;
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      const res = await axios.post(
        `${baseURL}/testtype/createTestType`,
        body,
        config
      );
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Test Created Successfully",
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
                        Tests Details Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    <a href="#_" className="my-label d-inline-block">
                      Status: <span className="active-td">Active</span>
                    </a>
                    <h2 className="my-label my-1">Test.Id: 1246</h2>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Test Name:
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter Test Name"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Date Added:
                      </label>
                      <DatePicker
                        selected={dateadded}
                        onChange={(dateadded) => setdateadded(dateadded)}
                        className="sort-date customdate form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell d-block">
                        Image:
                      </label>
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
                        Amount:
                      </label>
                      <input
                        type="text"
                        className="all-inputt w-100"
                        placeholder="Enter price Amount"
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 mt-2">
                      <label htmlFor className="site-labell">
                        Description:
                      </label>
                      <textarea
                        name
                        id
                        className="all-inputt w-100 p-2"
                        rows={8}
                        placeholder="Enter Description"
                        defaultValue={""}
                        value={longDesc}
                        onChange={(e) => setlongDesc(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        className="general-btn mt-3 px-3"
                        onClick={() => {
                          title?.length > 0 &&
                          amount > 0 &&
                          longDesc?.length > 0 &&
                          image?.name?.length > 0
                            ? addTestHadndler()
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

export default AddTest;
