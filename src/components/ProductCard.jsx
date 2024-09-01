import { setAddToCart, setRemoveAllFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Star } from "./Icon";

const ProductCard = (props) => {
	const { img, title, price, review, reviewCount } = props;
	const dispatch = useDispatch();
	const router = useRouter();
	const handleClick = () => {
		dispatch(setRemoveAllFromCart());
		dispatch(setAddToCart(props));
		router.push("/checkout");
	};

	return (
		<>
			<div className="product-card">
				<div className="img">
					<Image width={312} height={266} src={img} alt="" />
				</div>
				<div className="content">
					<h4 className="title">{title}</h4>
					<h5 className="price">TK. {price}</h5>
					<div className="review">
						<Star />
						<span>{review}</span>
						<span>({reviewCount})</span>
					</div>
					<div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
						<button className="btn btn-base w-100" onClick={handleClick}>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
