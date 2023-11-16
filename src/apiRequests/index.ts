import axios from "axios";
import { setAccessToken } from "../utils/authUtil";
// import { isLoggedIn } from '../redux/slice/authSlice';

const fakestoreBaseUrl = "https://fakestoreapi.com";

export const loginApi = async (username: string, password: string) => {
    try {
        // TODO create default axios instance
        // axios.defaults.withCredentials = true;
        const response = await axios.post(`${fakestoreBaseUrl}/auth/login`, {
            // username,
            // password,
            username: "mor_2314",
            password: "83r5^_"
        });
        setAccessToken(response.data["token"]);
        return response;
    } catch (error: any) {
        return error.response;
    }
}

export const getUserDetail = async (id: number): Promise<UserDetail> => {
    try {
        const response = await axios.get(`${fakestoreBaseUrl}/users/${id}`);
        return response.data as Promise<UserDetail>;
    } catch (error: any) {
        return error.response;
    }
}