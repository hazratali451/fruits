/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useCreateOrderMutation } from "@/redux/slices/apiSlices/OrderApiSlice";
import {
	setCartSidebarOpen,
	setDecrementQty,
	setIncrementQty,
	setRemoveAllFromCart,
	setRemoveFromCart,
} from "@/redux/slices/cartSlice";
import Input from "@/src/components/Input";
import Layout from "@/src/components/Layout";
import { errorToast, successToast } from "@/utls/toasts/toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { TrashIcon } from "../../components/Icon";
import { Stepper } from "./AccountPage";
const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
const CityOptionEnglish = [
	{ value: "Dhaka Metropolitan", label: "Dhaka Metropolitan" },
];

const CheckoutPage = () => {
	const [addressData, setJsonData] = useState([]);

	const [checkoutInfo, setCheckoutInfo] = useState({
		name: "",
		phone_number: "",
		district: "Dhaka",
		city: CityOptionEnglish[0].label,
		area_postal: "",
		detailed_address: "",
		google_map: "",
		payment_type: "full",
	});
	const [createOrderFunc, { isError, isLoading, isSuccess, reset, data }] =
		useCreateOrderMutation();

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user).user;
	const router = useRouter();
	useEffect(() => {
		dispatch(setCartSidebarOpen(false));
	}, []);

	useEffect(() => {
		if (user?.delivery_info) {
			if (user.delivery_info.phone_number) {
				setCheckoutInfo({
					...checkoutInfo,
					name: user.delivery_info.name,
					phone_number: user.delivery_info.phone_number
						.toString()
						.slice(2, 13),
					district: user.delivery_info.district,
					city: user.delivery_info.city,
					area_postal: user.delivery_info.area_postal,
					detailed_address: user.delivery_info.detailed_address,
					google_map: user.delivery_info.google_map,
				});
			}
		}
	}, [user]);

	const handleSubmit = (e) => {
		e.preventDefault();
		//error handling for phone number with regx
		if (checkoutInfo.phone_number.length !== 11) {
			errorToast("Enter you 11 digit phone number");
			return;
		}
		if (!checkoutInfo.area_postal) {
			errorToast("Select your area/postal code");
			return;
		}

		//check if payment type selected
		if (checkoutInfo.payment_type === "") {
			errorToast("Select a payment type");
			return;
		}
		try {
			createOrderFunc({
				products: cart.cartList.map((item) => ({
					product_id: item._id,
					quantity: item.qty,
				})),
				address: {
					destrict: checkoutInfo.district,
					city: checkoutInfo.city,
					area_postal: checkoutInfo.area_postal,
					detailed_address: checkoutInfo.detailed_address,
					google_map: checkoutInfo.google_map,
				},
				customer_details: {
					name: checkoutInfo.name,
					phone_number: checkoutInfo.phone_number,
					_id: user?._id,
				},
				payment_type: checkoutInfo.payment_type,
				payment_method: checkoutInfo.payment_method,
				delivery_type: "home_delivery",
				price_details: {
					total: cart.cartTotalAmount,
				},
			});
		} catch {
			errorToast("Something went wrong");
		}
	};

	//loading, success, error toast
	if (isSuccess) {
		//clear cart
		successToast("Order Placed Successfully");

		//remove all cart items
		if (data?.data?.order_number) {
			router.push(`/checkout/payment?order=${data.data.order_number}`);
		}
		reset();

		setTimeout(() => {
			dispatch(setRemoveAllFromCart());
		}, 2000);
	}
	if (isError) {
		errorToast("Something went wrong");
		reset();
	}

	//load json data from "public/EngAddr.json" file

	useEffect(() => {
		fetch("/addr.json")
			.then((res) => res.json())
			.then((data) => {
				//transform all the text to capitalize like from "new market" to "New Market"
				data.english = data.english.map((item) => ({
					value: item.value,
					label: item.label
						.split(" ")
						.map((word) => word[0].toUpperCase() + word.slice(1))
						.join(" "),
				}));
				setJsonData(data);
			});
	}, []);

	return (
		<Layout>
			<div className="py-5">
				<div className="container">
					<Stepper step={"checkout"} />
					<form onSubmit={handleSubmit} className="checkout-form">
						<div className="row g-4">
							<div className="col-lg-7 col-xl-8">
								<div className="row g-4">
									<div className="col-sm-6">
										<Input
											required={true}
											type={"text"}
											value={checkoutInfo.name}
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													name: e.target.value,
												})
											}
											label="Your Name:"
											placeholder="Ex : Md. Hazrat Ali"
										/>
									</div>
									<div className="col-sm-6">
										<Input
											required={true}
											type={"number"}
											value={checkoutInfo.phone_number}
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													phone_number: e.target.value,
												})
											}
											label="Phone Number:"
											placeholder="Ex : 01703123456"
										/>
									</div>
									<div className="col-sm-6">
										<Input
											required={true}
											type={"text"}
											value={"Dhaka"}
											disabled
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													district: e.target.value,
												})
											}
											label="District:"
											placeholder="Ex : Dhaka"
										/>
									</div>

									<div className="col-sm-6">
										<label className="form-label form--label">
											City:
											<span style={{ color: "red" }}>*</span>
										</label>
										<>
											<ReactSelect
												classNamePrefix="select"
												defaultValue={CityOptionEnglish[0]}
												isClearable={false}
												isSearchable={false}
												name="city"
												options={CityOptionEnglish}
												onChange={(e) =>
													setCheckoutInfo({
														...checkoutInfo,
														city: e.value,
													})
												}
												placeholder="City:"
											/>
										</>
									</div>

									<div className="col-sm-6">
										<label className="form-label form--label">
											Area / Postal Code:
											<span style={{ color: "red" }}>*</span>
										</label>
										<ReactSelect
											classNamePrefix="select"
											defaultValue={checkoutInfo.area_postal}
											isClearable={false}
											isSearchable={true}
											name="area_postal"
											options={addressData.english}
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													area_postal: e.value,
												})
											}
											placeholder="Select Area / Postal Code"
										/>
									</div>
									<div className="col-sm-12">
										<Input
											required={true}
											type={"text"}
											value={checkoutInfo.detailed_address}
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													detailed_address: e.target.value,
												})
											}
											label="Detailed Address:"
											placeholder={
												"Ex : House # 12, Road # 12, Mirpur 12"
											}
											textarea
										/>
									</div>
									<div className="col-sm-12">
										<Input
											type={"text"}
											value={checkoutInfo.google_map}
											onChange={(e) =>
												setCheckoutInfo({
													...checkoutInfo,
													google_map: e.target.value,
												})
											}
											label="Google Map Link:(optional)"
											required={false}
											placeholder="https://maps.app.goo.gl/VjJYKzc3fBQYbJB8A"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-xl-4">
								<label className="form--label">Order Summary</label>
								<div
									style={{
										maxHeight: "360px",
										overflowY: "auto",
										borderRadius: "10px",
										border: "1px solid var(--border)",
									}}
								>
									<ul className="cart-list cart--list">
										{cart?.cartList?.map((item, index) => (
											<li key={index}>
												<div className="cart-item">
													<Image
														width={60}
														height={60}
														src={item.img}
														alt="product"
														className="img"
													/>
													<div className="cart-item-content">
														<div className="name-area">
															<h6>{item?.en?.title}</h6>
															<button
																type="button"
																className="trash no-gutter"
																onClick={() =>
																	dispatch(
																		setRemoveFromCart(item)
																	)
																}
															>
																<TrashIcon />
															</button>
														</div>
														<div className="d-flex align-items-center justify-content-between">
															{/* Quantity Buttons */}
															<div className="quantity-btn">
																<button
																	type="button"
																	className="btn btn-outline-base"
																	onClick={() =>
																		dispatch(
																			item.qty > 1
																				? setDecrementQty(
																						item
																				  )
																				: setRemoveFromCart(
																						item
																				  )
																		)
																	}
																>
																	-
																</button>
																<span className="quantity">
																	{item.qty}
																</span>
																<button
																	type="button"
																	className="btn btn-outline-base"
																	onClick={() =>
																		dispatch(
																			setIncrementQty(item)
																		)
																	}
																>
																	+
																</button>
															</div>
															<div className="price">
																Tk.
																{item.price}
															</div>
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
								<br />
								<div className="product-amount-info">
									<div className="d-flex justify-content-between border-bottom py-3">
										<div className="text">Product Total:</div>
										<div className="price">
											Tk.{" "}
											{cart?.cartTotalAmount - cart.deliveryCharge}
										</div>
									</div>
									<div className="d-flex justify-content-between border-bottom py-3">
										<div className="text">Delivery Charge:</div>
										<div className="price">
											TK. {cart?.deliveryCharge}
										</div>
									</div>
									<div
										className={`d-flex justify-content-between pt-3 ${
											checkoutInfo.payment_type === "full"
												? "text-base"
												: ""
										}`}
									>
										<div className="text">Total:</div>
										<div className="price">
											<strong>Tk. {cart?.cartTotalAmount}</strong>
										</div>
									</div>
									{
										//partial payment info
										checkoutInfo.payment_type === "partial" && (
											<div className="d-flex justify-content-between pt-3 text-base">
												<div className="text">Payable Now:</div>
												<div className="price">
													<strong>
														Tk.{" "}
														{Math.ceil(
															(cart?.cartTotalAmount -
																cart.deliveryCharge) *
																0.25 +
																cart.deliveryCharge
														)}
													</strong>
												</div>
											</div>
										)
									}
									{
										//Due payment info
										checkoutInfo.payment_type === "partial" && (
											<div className="d-flex justify-content-between pt-3">
												<div className="text">Due on Delivery:</div>
												<div className="price">
													<strong>
														Tk.{" "}
														{Math.floor(
															(cart?.cartTotalAmount -
																cart.deliveryCharge) *
																0.75
														)}
													</strong>
												</div>
											</div>
										)
									}
								</div>
								<br />
								<div className="row g-3">
									<div className="col-12">
										<button
											disabled={isLoading}
											type="submit"
											className="btn btn-base w-100 h-48"
										>
											{isLoading ? (
												<span>Placing Order...</span>
											) : (
												<span>Place Order</span>
											)}
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

const payment_methods = [
	{
		id: 1,
		name: "bkash",
		image: "/images/payment-methods/bkash.png",
	},

	{
		id: 3,
		name: "Others",
		image: "/images/payment-methods/others.png",
	},
];

export default CheckoutPage;
