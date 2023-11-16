import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

export const setAccessToken = (value: string) => {
    Cookies.set("token", value, { expires: 1, secure: true });
}

export const getAccessToken = () => {
    return Cookies.get("token");
}

export const removeAccessToken = () => {
    Cookies.remove("token");
}

export const decodeAccessToken = (token: string): JwtPayload => {
    return decodeToken(token) as JwtPayload;
}