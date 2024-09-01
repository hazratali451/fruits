import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";

import { UserAuthApi } from "../slices/apiSlices/AuthApiSlice";
import { OrderApi } from "../slices/apiSlices/OrderApiSlice";
import { PaymentApi } from "../slices/apiSlices/PaymentSlice";
//register all reducers here
export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	[UserAuthApi.reducerPath]: UserAuthApi.reducer,
	[OrderApi.reducerPath]: OrderApi.reducer,
	[PaymentApi.reducerPath]: PaymentApi.reducer,
});
