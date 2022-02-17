import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  adminLoginAction,
  adminResetPasswordAction
} from "../actions/adminActions";
import Swal from "sweetalert2";
import api from "../utils/api";
import Toasty from "../utils/toast";

import "react-toastify/dist/ReactToastify.css";
import { handleChange } from "../utils/InputNumberValidation";
import { validateEmail } from "../utils/ValidateEmail";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [code, setcode] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [new_password, setnew_password] = useState();
  const [showicon, setshowicon] = useState(true);

  const [forgotpasswordModal, setforgotpasswordModal] = useState(0);

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;
  const submitHandler = async (e) => {
    console.log("submitHandler");
    e.preventDefault();
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      await dispatch(adminLoginAction(email, password, history));
      setemail("");
      setpassword("");
    } else {
      Toasty("error", `Please enter a valid email`);
    }
  };

  useEffect(() => {
    if (adminInfo) {
      history.replace("/dashboard");
    }
  }, [adminInfo]);
  const forgotpasswordHandler = async (e) => {
    e.preventDefault();
    const body = { email };
    console.log("TEST");
    try {
      const res = await api.post("/admin/adminRecoverPassword", body);
      console.log("res", res);
      if (res?.status == 201) {
        // Swal.fire({
        //   icon: "success",
        //   title: "SUCCESS",
        //   text: "Verification Code Sent to your mail",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        setforgotpasswordModal(1); // history.push({
        //   pathname: "/verificationcode",
        //   state: { email },
        // });
      }
    } catch (error) {
      setforgotpasswordModal(0);

      console.log("IN HERE");
      console.log(error?.response?.data);
      Toasty("error", `🦄 Invalid Email!`);
    }
  };
  const verificationCodeHandler = async (e) => {
    try {
      e.preventDefault();
      console.log("code, email", code, email);
      const body = { code, email };
      console.log("TEST");
      // try {
      const res = await api.post("/admin/adminverifyRecoverCode", body);
      console.log("res", res);
      setforgotpasswordModal(2);
    } catch (error) {
      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }

    //   if(res?.status==201){
    //     Toasty('success',`Verification Code Has Been Emailed To Your Email Address`);
    //     history.push('/verificationcode')

    //   }
    // } catch (error) {
    //   Toasty('error',`🦄 Invalid Email!`);

    // }
  };

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    console.log("resetPasswordHandler");
    dispatch(
      adminResetPasswordAction(
        new_password,
        confirm_password,
        code,
        email,
        (res) => {
          console.log("res", res);
          setforgotpasswordModal(3);

          // setStorageItem('UserAnalytics', res);

          // setLoading(false);
          // console.log('res of SIGNIN -->', res.data.user.userId);

          // // setStorageItem('Authorization', res.Authorization);
          // setStorageItem("UserID",res.data.user.userId)
          // props.toggleAuth(res.data.user);
          // setLoading(false);
        },
        (err) => {
          // props.showAlert('Invaild Email or Password, please try again.');
          console.log("err of SIGNIN -->", err);
          setconfirm_password("");
          setnew_password("");
        }
      )
    );
  };
  return (
    <>
      <section className="login-bg py-5">
        <div className="container">
          <div className="login-card mt-3 px-2">
            <div className="row">
              <div className="col-lg-6 d-lg-block d-none my-auto">
                <img src="images/logo-bg.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <div className="login-form">
                  <div className="text-center mb-lg-3">
                    <img src="images/logo.png" alt="" className="img-fluid" />
                  </div>
                  <form onSubmit={submitHandler}>
                    <div className="form-group position-relative">
                      <label htmlFor>Email</label>
                      <input
                        type="email"
                        className="w-100"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor>Password</label>
                      <input
                        type={showicon ? "password" : "text"}
                        className="w-100 pass-field enter-input"
                        id="exampleInputPassword1"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      />
                      <i
                        onClick={() => setshowicon(!showicon)}
                        className={
                          showicon
                            ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                            : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                        }
                        aria-hidden="true"
                      />
                    </div>
                    <div className="form-group form-check text-right w-90">
                      <a
                        href="#"
                        className="decorated-link-aqua"
                        data-toggle="modal"
                        data-target=".forgot-modal"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center pb-lg-0 pb-2">
                      <button
                        type="submit"
                        className="aqua-btn mt-lg-3 mt-2 w-100"
                      >
                        Login
                      </button>
                      <Link to="#" className="d-block back-to-web mt-3">
                        <i className="fas fa-long-arrow-alt-left mr-2" />
                        Back To Website
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal forgot-modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="forgot-modal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content site-modal">
            <img src="images/modal-top.png" alt="" className="modal-top-img" />
            <img
              src="images/modal-bottom.png"
              alt=""
              className="modal-bottom-img"
            />
            <i
              className="fas fa-times close modal-close"
              data-dismiss="modal"
              aria-label="Close"
            />
            <div className="text-center">
              <h2 className="modal-heading">Forgot Password</h2>
            </div>
            <form action>
              <div className="form-group position-relative">
                <label htmlFor className="all-label">
                  {forgotpasswordModal == 0
                    ? " Email*"
                    : forgotpasswordModal == 1
                    ? "Verification Code*"
                    : null}
                </label>
                {forgotpasswordModal == 0 ? (
                  <input
                    type="email"
                    className="w-100 all-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                ) : forgotpasswordModal == 1 ? (
                  <input
                    type="number"
                    min={0}
                    className="w-100 all-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Verification Code"
                    value={code}
                    onChange={(e) => {
                      handleChange(e, setcode);
                    }}
                  />
                ) : forgotpasswordModal == 2 ? (
                  <>
                    <label htmlFor className="all-label">
                      Password*
                    </label>{" "}
                    <input
                      type="password"
                      className="w-100 all-input pass-field enter-input"
                      id="exampleInputPassword1"
                      placeholder="Enter Password"
                      value={new_password}
                      onChange={(e) => {
                        setnew_password(e.target.value);
                      }}
                    />
                    <div
                      style={{
                        height: 23
                      }}
                    ></div>
                    <label htmlFor className="all-label">
                      Confirm Password*
                    </label>
                    <input
                      type="password"
                      className="w-100 all-input pass-field enter-input-2"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      value={confirm_password}
                      onChange={(e) => {
                        setconfirm_password(e.target.value);
                      }}
                    />
                  </>
                ) : null}
              </div>
              {forgotpasswordModal == 1 && (
                <div className="form-group form-check text-right">
                  <Link
                    to="#"
                    className="decorated-link-aqua d-inline-block"
                    onClick={forgotpasswordHandler}
                  >
                    Resend Code
                  </Link>
                </div>
              )}

              <div className="text-center">
                <Link
                  to="#"
                  onClick={
                    forgotpasswordModal == 0
                      ? forgotpasswordHandler
                      : forgotpasswordModal == 1
                      ? verificationCodeHandler
                      : forgotpasswordModal == 2
                      ? resetPasswordHandler
                      : null
                  }
                  className="general-btn mt-2 mb-5 w-100 d-inline-block"
                >
                  {forgotpasswordModal == 0
                    ? "Continue"
                    : forgotpasswordModal == 1
                    ? "Next"
                    : forgotpasswordModal == 2
                    ? "Update"
                    : null}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
