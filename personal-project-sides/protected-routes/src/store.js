import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import campaignReducer from "./ducks/campaignReducer";
import userReducer from "./ducks/userReducer";

const store = createStore(
  combineReducers({
    userReducer,
    campaignReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
