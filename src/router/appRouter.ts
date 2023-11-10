import { useRouter } from "next/navigation";

const useAppRouter = () => {
    const router = useRouter();
    return router;
}

export default useAppRouter