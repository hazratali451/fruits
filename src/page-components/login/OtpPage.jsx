import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../../components/Input";

const OtpPage = () => {
	const [code, setCode] = useState("");
	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/dashboard`);
	};
	return (
		<Layout>
			<div className="py-5">
				<div className="container py-md-5">
					<form onSubmit={handleSubmit} className="auth-form">
						<div className="auth-inner">
							<div className="text-center">
								<h4 className="title">Submit Your OTP</h4>
								<p>Please Enter you 6 digit Code below</p>
							</div>
							<div className="row g-4">
								<div className="col-12">
									<Input
										value={code}
										onChange={(e) => setCode(e.target.value)}
										label="OTP Code"
										placeholder="Enter Code"
									/>
								</div>
								<div className="col-12">
									<button type="submit" className="btn btn-base w-100">
										Sign In
									</button>
									<div className="text-end mt-3">
										<button
											className="text-base no-gutter"
											type="button"
										>
											Resend Code
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

export default OtpPage;
