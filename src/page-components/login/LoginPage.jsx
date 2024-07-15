import Input from "@/src/components/Input";
import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
	const [phone, setPhone] = useState("+880");
	const router = useRouter();
	const [btnText, setBtnText] = useState("Continue");

	const handleSubmit = (e) => {
		e.preventDefault();

		const bdPhoneRegex = /^(\+)?(88)?01[0-9]{9}$/;
		let formattedPhone = phone;
		if (!phone.startsWith("+")) {
			formattedPhone = "+88" + phone;
		} else if (!phone.startsWith("+88")) {
			formattedPhone = phone.replace("+", "+88");
		}
		if (bdPhoneRegex.test(formattedPhone)) {
			setPhone(formattedPhone);
			router.push(`/login/otp?phone=${formattedPhone}`);
		} else {
			return toast.error("Invalid Phone Number", { id: "error" });
		}
	};

	return (
		<Layout>
			<div className="py-5">
				<div className="container py-md-5">
					<form onSubmit={handleSubmit} className="auth-form">
						<div className="auth-inner">
							<div className="text-center">
								<h4 className="title">Login</h4>
								<p>
									Welcome back! Please Login with your phone number{" "}
								</p>
							</div>
							<div className="row g-4">
								<div className="col-12">
									<Input
										type={"tel"}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										label="Phone Number"
										placeholder="+880 00000000000"
									/>
								</div>
								<div className="col-12">
									<button
										disabled={btnText === "Sending OTP..."}
										type="submit"
										className="btn btn-base w-100 h-48"
									>
										{btnText}
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
