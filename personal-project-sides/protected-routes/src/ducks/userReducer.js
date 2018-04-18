import axios from "axios";

const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me")
  };
}

const initialState = {
  user: {},
  error: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        error: "ERROR"
      };
    default:
      return state;
  }
}
