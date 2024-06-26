import api from "../utils/api";
import Toasty from "../utils/toast";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";

import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_FORGOTPASSWORD_REQUEST,
  ADMIN_FORGOTPASSWORD_SUCCESS,
  ADMIN_FORGOTPASSWORD_FAIL,
  NOTIFICATION_FAIL,
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  ADMIN_LOGOUT,
} from "../constants/adminConstants";
export const adminLoginAction =
  (email, password, history) => async (dispatch) => {
    try {
      console.log("adminLoginAction");

      const body = { email, password };

      const res = await api.post("/admin/adminAuth", body);

      console.log("res", res);
      if (res?.status == 200) {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("adminInfo", JSON.stringify(res?.data));
        history?.replace("/dashboard");
      } else if (res?.status == 201) {
        Toasty("error", `Invalid Email or Password`);
        dispatch({
          type: ADMIN_LOGIN_FAIL,
          payload: res?.data?.message,
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload: error,
      });
    }
  };

export const adminverfyadnresetpasword =
  (existingpassword, newpassword, confirm_password, email, history) =>
  async (dispatch, getState) => {
    console.log(
      "existingpassword,newpassword, confirm_password, email",
      existingpassword,
      newpassword,
      confirm_password,
      email
    );
    try {
      console.log("adminverfyadnresetpasword");
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      const {
        adminLogin: { adminInfo },
      } = getState();

      console.log("adminLoginAction");
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
      // const body = { email, password };

      const res = await axios.post(
        `${baseURL}/admin/verifyAndREsetPassword`,
        { existingpassword, newpassword, confirm_password, email },
        config
      );
      history?.replace("/dashboard");

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("adminInfo", JSON.stringify(res?.data));
        Swal.fire({
          icon: "success",
          title: "",
          text: "Password updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("error");
      Toasty("error", error?.response?.data?.message);
      // history?.replace("/dashboard");

      // dispatch({
      //   type: ADMIN_LOGIN_FAIL,
      //   payload: error,
      // });
    }
  };

export const adminResetPasswordAction =
  (password, confirm_password, code, email) => async (dispatch) => {
    try {
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      console.log("adminLoginAction");

      const body = { password, confirm_password, code, email };

      const res = await api.post("/admin/adminresetPassword", body);

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("adminInfo", JSON.stringify(res?.data));
      await Swal.fire({
          icon: "success",
          title: "",
          text: "Password updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.location.href = "/dashboard";
      }
    } catch (error) {
      console.log("reseterror", error?.response?.data?.message);
      Toasty("error", error?.response?.data?.message);

      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload: error,
      });
    }
  };
export const updateAdminInfoAction = (body) => async (dispatch, getState) => {
  try {
    // dispatch({
    //   type: ADMIN_LOGIN_REQUEST,
    // })
    console.log("updateAdminInfoActiondsdsfdsfdf", body);
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const res = await axios.post(`${baseURL}/admin/editProfile`, body, config);

    console.log("res", res);
    if (res?.status == 201) {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: res?.data,
      });

      localStorage.setItem("adminInfo", JSON.stringify(res?.data));
      Swal.fire({
        icon: "success",
        title: "",
        text: "Profile updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });

  window.location.reload();
};
