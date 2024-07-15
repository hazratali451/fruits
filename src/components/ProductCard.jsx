import Image from "next/image";
import { Star } from "./Icon";

const ProductCard = ({ img, title, price, review, reviewCount }) => {
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
            <button className="btn btn-base w-100">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
