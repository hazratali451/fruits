import { ArrowLeft, ArrowRight } from "@/src/components/Icon";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ClientSection = () => {
	const ref = React.useRef(null);

	const goNext = () => {
		ref.current.swiper.slideNext();
	};
	const goPrev = () => {
		ref.current.swiper.slidePrev();
	};
	return (
		<section className="client-section">
			<div className="container">
				<h2 className="text-center mb-4 mb-md-5">
					What our customers say about us
				</h2>
				<div className="client-slider">
					<Swiper
						loop={true}
						spaceBetween={20}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							500: {
								slidesPerView: 1.3,
								spaceBetween: 30,
							},
							576: {
								slidesPerView: 2.2,
								spaceBetween: 30,
							},
							768: {
								slidesPerView: 2.6,
								spaceBetween: 30,
							},
							992: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
						ref={ref}
					>
						{["", "", "", ""]?.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="client-item">
									<blockquote>
										“ I think this is the best Misti Dhoi i have ever
										tried and i recommend it to “
									</blockquote>
									<h6 className="name">Hasan Ali</h6>
									<span className="designation">Traveller</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
						<button
							className="btn no-gutter border-0 arrow-btn"
							type="button"
							onClick={() => goPrev()}
						>
							<ArrowLeft />
						</button>
						<button
							className="btn no-gutter border-0 arrow-btn"
							type="button"
							onClick={() => goNext()}
						>
							<ArrowRight />
						</button>
				</div>
			</div>
		</section>
	);
};

export default ClientSection;
