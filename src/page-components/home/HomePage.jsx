import Layout from "@/src/components/Layout";
import Banner from "./components/Banner";

import ProductSection from "./components/ProductSection";
const HomePage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <ProductSection />
      </Layout>
    </>
  );
};

export default HomePage;
