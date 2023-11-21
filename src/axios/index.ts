import axios from "axios";
import { getAccessToken } from "@/utils/cookieUtils";

const PLATZI_FAKE_STORE_BASE_URL = "https://api.escuelajs.co";

const customAxios = axios.create({
    baseURL: PLATZI_FAKE_STORE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getAccessToken()}`,
    },
    // withCredentials: true,
});

export default customAxios;