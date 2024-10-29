/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DashboardLayout from "./components/DashboardLayout";

const DashboardPage = () => {
	return (
		<DashboardLayout>
			<div className="container py-xl-5">
				{/* Order List */}
				<h5 className="mb-4">Order List</h5>

				<div id="dashboard_order_list" className="my-5">
					{Array.from([1, 2, 3])?.map((dt, i) => (
						<div
							key={i}
							className="dashboard_order_wrapper  my-md-5 my-4"
						>
							<div className="  order_item">
								<div>
									<h5>Order ID</h5>
									<Link href={``} className="text-base">
										#XS3456789328
									</Link>
								</div>

								<div>
									<h5>Customer Name</h5>

									<p>Hazrat Ali</p>
								</div>

								<div>
									<h5>Total Price</h5>
									<p>Tk.5000.00</p>
								</div>
								<div>
									<h5>Date</h5>
									<p>12-10-24</p>
								</div>

								<div>
									<h5>Status</h5>
									<span
										className="badge"
										style={{
											background: `${
												dt?.status === "unpaid"
													? "#FF8A08"
													: dt?.status === "cancelled"
													? "red"
													: "var(--base)"
											} `,
										}}
									>
										Paid
									</span>
								</div>

								<div>
									<h5>Action</h5>
									{dt?.status === "unpaid" ? (
										<Link
											href={`/checkout/payment?order=${dt?.order_number}`}
											className="badge border-0  "
											style={{ background: "#844226" }}
										>
											পেমেন্ট করুন
										</Link>
									) : (
										<Link
											href={""}
											className="badge border-0  "
											style={{ background: "var(--base)" }}
										>
											Download Invoice
										</Link>
									)}
								</div>
							</div>

							<div className="mt-3 ">
								<table className="table pt-4 mb-0 products_table">
									<thead>
										<tr>
											<th>Product Name</th>

											<th>Price</th>
											<th>Quantity</th>
											<th>Total Price</th>
										</tr>
									</thead>
									<tbody>
										{Array.from([1, 2])?.map((item, index) => (
											<tr key={index}>
												<td>
													<Link
														href="#"
														className="text-body d-flex align-items-center gap-2"
													>
														<img
															// src={item?.img}
															src={"/images/products/2.webp"}
															alt=""
															className="img-fluid"
															width="60"
														/>
														<span className="ms-2">
															{/* {item?.title} */}
															Fresh Banana (Kola) - 1kg
														</span>
													</Link>
												</td>

												<td>TK. 300.00</td>
												<td>2</td>
												<td>TK. 600.00</td>
											</tr>
										))}
									</tbody>
								</table>
								{/* mobile-device-grid-system */}
								<div className="sm-device-card-wrapper">
									{Array.from([1, 2])?.map((item, index) => (
										<div key={index} className="card-item">
											<div className="mb-2">
												<Link
													href="#"
													className="text-body d-flex align-items-center gap-2"
												>
													<img
														// src={item?.img}
														src={"/images/products/2.webp"}
														alt=""
														className="img-fluid"
														width="60"
													/>
													<span className="ms-2">
														{/* {item.title} */}
														Fresh Banana (Kola) - 1kg
													</span>
												</Link>
											</div>

											<div className="d-flex justify-content-between items-center">
												<h5>Price</h5>
												<div>TK.300.00</div>
											</div>
											<div className="d-flex justify-content-between items-center">
												<h5>Quantity</h5>
												<div>2</div>
											</div>
											<div className="d-flex justify-content-between items-center">
												<h5>Total Price</h5>
												<div>TK.600.00</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;

const statusTranslations = {
	paid: { en: "Paid", bn: "পরিশোধিত" },
	unpaid: { en: "Unpaid", bn: "অপরিশোধিত" },
	ongoing: { en: "Ongoing", bn: "চলমান" },
	pending: { en: "Pending", bn: "পেন্ডিং" },
	processing: { en: "Processing", bn: "প্রক্রিয়াধীন" },
	shipped: { en: "Shipped", bn: "শিপড" },
	delivered: { en: "Delivered", bn: "ডেলিভার্ড" },
	cancelled: { en: "Cancelled", bn: "বাতিল" },
	refunded: { en: "Refunded", bn: "ফেরত" },
};
const getStatusTranslation = (status) => {
	const translatedStatus = statusTranslations[status.toLowerCase()];
	return translatedStatus ? translatedStatus : { en: status, bn: status };
};
