import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { authReducer } from "./reducers/auth";
import { errorReducer } from "./reducers/error";

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  auth: authReducer,
});
