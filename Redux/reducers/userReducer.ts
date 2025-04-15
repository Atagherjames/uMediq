import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/userConstants";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
}
