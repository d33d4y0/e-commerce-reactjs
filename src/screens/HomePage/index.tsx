import { useEffect } from "react";
import { getProducts } from "@/apiRequests"
import NavBar from '@/component/NavBar'

const HomePage = () => {

    const fetchProducts = async () => {
        const response = await getProducts();
        console.log(response);
    }

    useEffect(() => {
        fetchProducts()
    },[]);

    return (
        <>
            <NavBar />
            <div className="text-center">HomePage</div>
        </>
    )
}

export default HomePage