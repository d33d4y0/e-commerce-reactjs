import { useEffect } from "react";
import { getProducts } from "@/apiRequests";
import Layout from "@/component/Layout";
import Carousel from "@/component/Carousel";
import SloganLogo from "@/component/SloganLogo";
import { FiArrowRight } from "react-icons/fi";
import NewArrivalList from "@/component/NewArrivalList";

const HomePage = () => {
  const fetchProducts = async () => {
    const response = await getProducts();
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Carousel />
      <SloganLogo />
      <div className="flex justify-between">
        <div className="my-12 text-4xl font-semibold">
          New
          <br />
          Arrivals
        </div>
        <button className="my-12 flex items-end justify-center border-b-[1.5px] border-solid border-black pb-[1px] font-medium">
          <span>More Products</span>
          <FiArrowRight className="mb-0.5 ml-0.5" />
        </button>
      </div>
      <NewArrivalList />
    </Layout>
  );
};

export default HomePage;
