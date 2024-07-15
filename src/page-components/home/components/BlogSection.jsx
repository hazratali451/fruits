import { LikeIcon, MessageIcon, ShareIcon } from "@/src/components/Icon";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
	return (
		<section className="blog-section">
			<div className="container">
				<h2 className="text-center mb-4 mb-md-5">Recipes & more</h2>
				<div className="row g-4 jusitfy-content-center">
					{["", "", ""].map((item, index) => (
						<div className="col-lg-4 col-sm-6" key={index}>
							<div href="" className="blog-item">
								<Link href="" className="link" />
								<div className="blog-img">
									<Image
										src="/images/blog/1.png"
										width={418}
										height={300}
										alt="blog"
									/>
								</div>
								<div className="blog-content">
									<span className="date">20 Jan 2021</span>
									<h5 className="title">
										Mishti Doi / Caramel flavored Sweet Yogurt - Spicy
										World
									</h5>
									<p className="desc">
										During summer this yogurt is very good for your
										stomach also. Making Dhoi....
									</p>
									<div className="blog-footer">
										<button
											className="btn p-0 outline-0 border-0"
											type="button"
										>
											<LikeIcon />
										</button>
										<button
											className="btn p-0 outline-0 border-0"
											type="button"
										>
											<MessageIcon />
										</button>
										<button
											className="btn p-0 outline-0 border-0"
											type="button"
										>
											<ShareIcon />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
