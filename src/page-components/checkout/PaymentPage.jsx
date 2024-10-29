import { useGetOrderQuery } from "@/redux/slices/apiSlices/OrderApiSlice";
import {
	useBkashPaymentMutation,
	useOtherPaymentMutation,
} from "@/redux/slices/apiSlices/PaymentSlice";
import { InfoIcon } from "@/src/components/Icon";
import Input from "@/src/components/Input";
import Layout from "@/src/components/Layout";
import Loader from "@/utls/Loader/Loader";
import { errorToast, successToast } from "@/utls/toasts/toast";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Stepper } from "./AccountPage";

const PaymentPage = () => {
	const router = useRouter();
	const { query } = router;
	const order_number = query.order;

	const [active, setActive] = React.useState(null);
	const [activePaymentType, setActivePaymentType] = React.useState(null);
	const [payment_method, setPaymentMethod] = React.useState({
		method: "",
		transection_id_number: "",
	});
	const [payment_type, setPaymentType] = React.useState("");
	const [paymentTypeList, setPaymentTypeList] =
		React.useState(all_payment_type);

	const convertLang = (data) => {
		data.bn;
	};
	const { isError, isSuccess, isLoading, data, error } =
		useGetOrderQuery(order_number);

	//Load the bkash payment mutation
	const [
		bkashPayment,
		{
			isSuccess: isBkashSuccess,
			isError: isBkashError,
			data: bkashData,
			isLoading: isBkashLoading,
			error: bkashError,
		},
	] = useBkashPaymentMutation();
	//Load other payment mutation
	const [
		otherPayment,
		{
			isSuccess: isOtherPaymentSuccess,
			isError: isOtherPaymentError,
			isLoading: isOtherPaymentLoading,
			error: otherPaymentError,
		},
	] = useOtherPaymentMutation();

	if (isLoading) {
		return <Loader />;
	}

	if (order_number && !isLoading && isError) {
		errorToast(error?.data?.message);
		router.push("/");
	}
	if (isBkashError) {
		errorToast(bkashError?.data?.message);
	}

	const handlePayment = () => {
		if (payment_method.method === "bkash") {
			bkashPayment(order_number);
		} else if (!payment_method.transection_id_number) {
			errorToast("Please enter the number transaction ID/Number");
		} else {
			otherPayment({
				order_number: order_number,
				body: {
					method: payment_method.method,
					transection_id_number: payment_method.transection_id_number,
				},
			});
		}
	};

	if (isOtherPaymentSuccess) {
		router.push("/success?order=" + order_number);
	}

	if (isBkashSuccess) {
		router.push(bkashData?.redirectURL);
	}

	if (isOtherPaymentError) {
		errorToast(otherPaymentError?.data?.message);
	}

	if (router.isReady && !order_number) {
		router.push("/");
	} else if (router.isReady && isSuccess && data?.data) {
		return (
			<>
				<Layout>
					<div className="py-5">
						<div className="container">
							<h4
								className="text-center pb-3 pb-lg-4 mb-4 mx-auto"
								style={{ maxWidth: "820px" }}
							>
								Your order has been created, Please select a payment
								method and pay to confirm your order
							</h4>
							<Stepper step={"thank-you"} />
							<div className="row g-4">
								<div className="col-lg-7 col-xl-8">
									<label className="form--label w-100 mt-4">
										Select Payment Method:
									</label>
									<div className="d-flex flex-wrap methods-container">
										{payment_methods.map((method, index) => (
											<button
												type="button"
												key={method.id}
												className={`__payment-method no-gutter ${
													active === index ? "active" : ""
												}`}
												onClick={() => {
													setActive(index);
													setPaymentMethod({
														...payment_method,
														method: method.lang.en,
													});
												}}
											>
												<div className="d-flex align-items-center">
													<Image
														src={method.img}
														alt=""
														width={40}
														height={40}
													/>
												</div>
												{method.lang}
											</button>
										))}
									</div>
									<div className="mt-3"></div>
									{active && active !== 0 ? (
										<>
											<div
												className="alert alert-light mt-3 align-items-start"
												role="alert"
											>
												<div className="mt-1">
													<InfoIcon />
												</div>
												<div className="w-0 flex-grow-1">
													<div>
														<>
															এই মুহুর্তে{" "}
															<strong className="text-base">
																{
																	payment_methods[active]?.lang
																		?.bn
																}
															</strong>{" "}
															পেমেন্ট অটোমেটিক নেওয়া হচ্ছে না তাই
															দয়া করে এই নাম্বারে{" "}
															<strong>
																<span
																	style={{ cursor: "grab" }}
																	onClick={() => {
																		navigator.clipboard.writeText(
																			"01303451005"
																		);
																		successToast(
																			"Number copied to clipboard!"
																		);
																	}}
																	className="text-base"
																>
																	01303451005
																</span>{" "}
															</strong>
															ম্যানুয়াল পেমেন্ট করুন এবং সেন্ড
															মানি করার পর নিচের বক্স এ যে
															নাম্বার থেকে টাকা পেমেন্ট করেছেন
															সেই নাম্বার অথবা ট্রাঞ্জেকসন আইডি
															দিন
														</>
														{/* )} */}
													</div>
													<div className="row">
														<div className="col-xl-7">
															<div className="input-text-sm mt-3">
																<Input
																	value={
																		payment_method.transection_id_number
																	}
																	onChange={(e) => {
																		setPaymentMethod({
																			...payment_method,
																			transection_id_number:
																				e.target.value,
																		});
																	}}
																	label={convertLang({
																		en: "ফোন নম্বর / ট্রাঞ্জেকশন আইডি",
																		bn: "ফোন নম্বর / ট্রাঞ্জেকশন আইডি",
																	})}
																	placeholder={convertLang({
																		en: "ফোন নম্বর / ট্রাঞ্জেকশন আইডি",
																		bn: "ফোন নম্বর / ট্রাঞ্জেকশন আইডি",
																	})}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</>
									) : (
										""
									)}
									<div className="mt-3"></div>
									<div className="alert alert-light mt-3" role="alert">
										<InfoIcon />
										<span className="w-0 flex-grow-1">
											Please pay within 24 hours after placing order,
											Otherwise it will be cancelled automatically
										</span>
									</div>
								</div>
								<div className="col-lg-5 col-xl-4">
									<div className="p-3 p-sm-4 __shadow rounded">
										<div className="">
											<label className="form--label mb-3 fw-bold">
												Order Summary
											</label>
										</div>
										<div className="">
											<div>
												<ul
													className="cart-list cart--list"
													style={{
														maxHeight: "260px",
														borderRadius: "10px",
														border: "1px solid var(--border)",
													}}
												>
													{/* {cart?.cartList?.map((item, index) => ( */}
													{data.data.products.map(
														(item, index) => (
															<li key={index}>
																<div className="cart-item">
																	<Image
																		width={60}
																		height={60}
																		src={item?.img}
																		alt="product"
																		className="img"
																	/>
																	<div className="cart-item-content">
																		<div className="name-area m-0">
																			<h6 className="m-0 d-block">
																				{item?.en?.title}
																			</h6>
																		</div>
																		<div className="">
																			<div className="price font-regular">
																				{item?.quantity} x
																				Tk.{" "}
																				{
																					item?.product_total
																				}
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														)
													)}
												</ul>
											</div>
											<br />
											<div className="product-amount-info">
												<div className="d-flex justify-content-between border-bottom py-3">
													<div className="text">
														Product Total:
													</div>
													Tk. {data?.data?.price_details?.subtotal}
												</div>
												<div className="d-flex justify-content-between border-bottom py-3">
													<div className="text">
														Delivery Charge:
													</div>
													TK. {data?.data?.price_details?.shipping}
												</div>
												<div
													className={`d-flex justify-content-between pt-3 ${
														!data?.data?.price_details?.due
															? "text-base"
															: ""
													}`}
												>
													<div className="text">Total:</div>
													<div className="price">
														<strong>
															Tk.{" "}
															{data?.data?.price_details?.total}
														</strong>
													</div>
												</div>
												{data?.data?.price_details?.due !== 0 && (
													<div
														className={`d-flex justify-content-between pt-3 text-base`}
													>
														<div className="text">Pay Now:</div>

														<div className="price">
															<strong>
																Tk.{" "}
																{data?.data?.price_details?.due}
															</strong>
														</div>
													</div>
												)}
											</div>
											<br />
											<div className="row">
												<div className="col-12">
													<button
														disabled={
															isBkashLoading || active === null
														}
														onClick={handlePayment}
														type="submit"
														className="btn btn-base w-100 h-48"
													>
														{isBkashLoading ||
														isOtherPaymentLoading
															? "Loading..."
															: payment_method.method === "bkash"
															? "Pay Now"
															: "Confirm Order"}
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</>
		);
	}
};

const payment_methods = [
	{
		id: 1,
		img: "/images/payment-methods/bkash1.png",
		lang: {
			en: "bkash",
			bn: "বিকাশ",
		},
	},
	{
		id: 2,
		img: "/images/payment-methods/rocket.png",
		lang: {
			en: "Rocket",
			bn: "রকেট",
		},
	},
	{
		id: 3,
		img: "/images/payment-methods/nagad.png",
		lang: {
			en: "Nagad",
			bn: "নগদ",
		},
	},
	{
		id: 4,
		img: "/images/payment-methods/upay.png",
		lang: {
			en: "Upay",
			bn: "উপায়",
		},
	},
	{
		id: 5,
		img: "/images/payment-methods/cellfin.png",
		lang: {
			en: "Cellfin",
			bn: "সেলফিন",
		},
	},
	/* {
		id: 6,
		img: "/images/payment-methods/bank.png",
		lang: {
			en: "Bank",
			bn: "ব্যাংক",
		},
	}, */
];

const all_payment_type = [
	/* {
    id: 3,
    name: "cash",
    img: "/images/payment-types/cash-on-delivery.png",
    lang: {
      en: "Cash on Delivery",
      bn: "ক্যাশ অন ডেলিভারি",
    },
  }, */
	{
		id: 2,
		name: "partial",
		img: "/images/payment-types/partial-payment.png",
		lang: {
			en: "Partial Payment",
			bn: "আংশিক পেমেন্ট",
		},
	},
	{
		id: 1,
		name: "full",
		img: "/images/payment-types/full-payment.png",
		lang: {
			en: "Full Payment",
			bn: "সম্পূর্ণ পেমেন্ট",
		},
	},
	/*  {
    id: 4,
    name: "online",
    img: "/images/payment-types/online-payment.png",
    lang: {
      en: "Online Payment",
      bn: "অনলাইন পেমেন্ট",
    },
  }, */
];

export default PaymentPage;
