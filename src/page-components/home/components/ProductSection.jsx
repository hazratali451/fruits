import ProductCard from "@/src/components/ProductCard";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="container">
        <div className="row g-4 jusitfy-content-center">
          {data.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    img: "/images/products/1.png",
    title: "Fresh Red Apple",
    price: 150.0,
    review: 4.8,
    reviewCount: 85,
  },
  {
    img: "/images/products/2.webp",
    title: "Organic Banana Bunch",
    price: 120.0,
    review: 4.5,
    reviewCount: 67,
  },
  {
    img: "/images/products/3.jpg",
    title: "Fresh Strawberries",
    price: 200.0,
    review: 4.9,
    reviewCount: 95,
  },
  {
    img: "/images/products/4.webp",
    title: "Juicy Oranges",
    price: 180.0,
    review: 4.7,
    reviewCount: 80,
  },
];

export default ProductSection;
