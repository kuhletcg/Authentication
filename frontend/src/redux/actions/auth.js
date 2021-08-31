import axois from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actionTypes/user";
import { getErrors } from "./error";

export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axois
      .get("http://localhost:4500/api/user", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(getErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};

export const login = (obj) => {
  return (dispatch) => {
    const config = {
      Headers: {
        "Content-type": "application/json",
      },
    };

    axois
      .post("http://localhost:4500/login", obj, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(
          getErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };
};
export const registerUser = (obj) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify(obj);
    axois
      .post("http://localhost:4500/register", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(
          getErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };
};
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
};
