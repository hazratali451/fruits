import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
	return (
		<section className="banner-section">
			<div className="container">
				<div className="slider-wrapper">
					<Swiper
						modules={[Pagination]}
						pagination={{
							clickable: true,
						}}
						spaceBetween={30}
						slidesPerView={1}
					>
						{[1, 2, 3, 4, 5].map((item, index) => (
							<SwiperSlide key={index}>
								<Link href={""} className="banner-img">
									<Image
										src={"/image.png"}
										width={1320}
										height={480}
										alt="banner-promo"
										priority
									/>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Banner;
