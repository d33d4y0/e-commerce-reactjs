import { useEffect } from "react";
import { getProducts } from "@/apiRequests"
import NavBar from '@/component/NavBar'
import Footer from "@/component/Footer";
import Layout from "@/component/Layout";

const HomePage = () => {

    const fetchProducts = async () => {
        const response = await getProducts();
        console.log(response);
    }

    useEffect(() => {
        fetchProducts()
    },[]);

    return (
        <Layout>
            <div className="text-center">HomePage</div>
        </Layout>
    )
}

export default HomePage