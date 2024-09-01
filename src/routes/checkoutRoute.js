"use client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CheckOutRoute = ({ children }) => {
	const cart = useSelector((state) => state.cart);
	const router = useRouter();

	if (cart?.cartList?.length) {
		{
			return children;
		}
	} else {
		if (typeof window !== "undefined") {
			router.push(`/`);
		}
	}
};

export default CheckOutRoute;
