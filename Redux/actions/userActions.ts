import { Dispatch } from "redux";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/userConstants";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      // Simulate async API
      await new Promise((res) => setTimeout(res, 1000));

      const dummyUser = { id: 1, name: "John Doe", email };
      dispatch({ type: LOGIN_SUCCESS, payload: dummyUser });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: "Login failed" });
    }
  };
};

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};
