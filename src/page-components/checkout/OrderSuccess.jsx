/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useExecuteBkashPaymentMutation } from "@/redux/slices/apiSlices/OrderApiSlice";
import { setRemoveAllFromCart } from "@/redux/slices/cartSlice";
import Layout from "@/src/components/Layout";
import Loader from "@/utls/Loader/Loader";
import { errorToast, loadingToast, successToast } from "@/utls/toasts/toast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Stepper } from "./AccountPage";

const OrderSuccess = () => {
	const router = useRouter();
	const { query } = router;
	const paymentID = query.paymentID;
	const status = query.status;
	const dispatch = useDispatch();

	if (router.isReady && !paymentID && !status) {
		router.push("/");
	}

	const [
		executePayment,
		{ isError, isLoading, isSuccess, reset, status: paymentStatus, data },
	] = useExecuteBkashPaymentMutation();

	useEffect(() => {
		if (status === "success" && paymentID) {
			executePayment({ paymentID });
		}
	}, [status, paymentID]);

	useEffect(() => {
		const completeOrder = async () => {
			try {
				const response = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/send-order?orderNumber=${data?.data?.merchantInvoiceNumber}`
				);
				console.log("Order completion response:", response.data);
			} catch (error) {
				console.error(
					"Error completing order:",
					error.response ? error.response.data : error.message
				);
			}
		};

		completeOrder();
	}, [data?.data?.merchantInvoiceNumber]);

	if (isLoading) {
		loadingToast("Verifying Payment...");
		return <Loader />;
	}

	if (isSuccess && data && data?.data?.trxID) {
		successToast("Payment Verified Successfully.");
		dispatch(setRemoveAllFromCart());
		return (
			<Layout>
				<div className="py-5">
					<div className="container">
						<Stepper step={"thank-you"} />
						<div className="text-center success-card">
							<div className="mb-4">
								<Image
									width={70}
									height={70}
									src="/images/check.png"
									alt="check"
								/>
							</div>
							<h5 className="mb-3">Your Order is Completed</h5>
							<p className="mb-4">
								Thank you for your order! Your order has been confirmed.
								And your order number is : #
								{data?.data?.merchantInvoiceNumber}
							</p>
							<div className="d-flex flex-wrap justify-content-center gap-3">
								<Link href="/" className="btn btn-outline-base">
									Continue Shopping
								</Link>

								<Link href={`/dashboard`} className="btn btn-base">
									Track Order
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}

	if (
		(isSuccess && data && !data?.data?.trxID) ||
		status === "cancel" ||
		status === "failure"
	) {
		errorToast("Payment Verification Failed!");
		return (
			<Layout>
				<div className="py-5">
					<div className="container">
						<Stepper step={"thank-you"} />
						<div className="text-center success-card">
							<div className="mb-4">
								<Image
									width={70}
									height={70}
									src="/images/error.png"
									alt="check"
								/>
							</div>
							<h5 className="mb-3">
								Your Order is{" "}
								<b>
									<span className="text-danger">Incomplete</span>
								</b>
							</h5>
							<p className="mb-4">Your payment has been failed!</p>
							<div className="d-flex flex-wrap justify-content-center gap-3">
								<Link
									onClick={() => toast.remove()}
									href={`/dashboard`}
									className="btn btn-base"
								>
									Try Again
								</Link>

								<Link
									onClick={() => toast.remove()}
									href="/contact-us"
									className="btn btn-outline-base "
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}

	if (isError) {
		errorToast("Payment Execution Failed");
		console.log({ error: isError });
	}
	if (status === "cancel") {
		errorToast("Payment Cancelled!");
	}
};

export default OrderSuccess;
