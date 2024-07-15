import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

//register all reducers here
export const rootReducer = combineReducers({
	user: userReducer,
});
