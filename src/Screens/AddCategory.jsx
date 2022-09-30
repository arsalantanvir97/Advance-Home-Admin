import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";

const AddTest = ({ history }) => {
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const addCategoryHadndler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`
        }
      };
      setloading(true);
      const res = await axios.post(
        `${baseURL}/category/createcategory`,
        { name },
        config
      );
      setloading(false);

      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Category Created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        history.replace("/CategoryManagement");
      }
    } catch (error) {
      setloading(false);

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
                        Category Details Add
                      </h1>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-right my-auto">
                    {/* <a href="#_" className="my-label d-inline-block">
                      Status: <span className="active-td">Active</span>
                    </a> */}
                    {/* <h2 className="my-label my-1">Test.Id: 1246</h2> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mt-2">
                    <label htmlFor className="site-labell">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      className="all-inputt w-100"
                      placeholder="Enter Category Name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    {!loading ? (
                      <button
                        className="general-btn mt-3 px-3"
                        onClick={() => {
                          name?.length > 0
                            ? addCategoryHadndler()
                            : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              );
                        }}
                      >
                        Add
                      </button>
                    ) : (
                      <i className="fas fa-spinner fa-pulse"></i>
                    )}
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

export default AddTest;
