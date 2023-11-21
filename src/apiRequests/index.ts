// import { isLoggedIn } from '../redux/slice/authSlice';
import customAxios from '@/axios';
import axios from 'axios';

export const loginApi = async (username: string, password: string) => {
    try {
        const response = await customAxios.post("/api/v1/auth/login", {
            email: "john@mail.com",
            password: "changeme"
        });
        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}

export const refreshTokenApi = async (refreshToken: string) => {
    try {
        const response = await customAxios.post("/api/v1/auth/refresh-token", {
            refreshToken: refreshToken
        });
        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}

export const getUserDetail = async (): Promise<UserDetail> => {
    try {
        const response = await customAxios.get("/api/v1/auth/profile");
        return response.data as Promise<UserDetail>;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await customAxios.get("/api/v1/products");
        return response.data as Promise<Product[]>;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}

export const getProductDetail = async (id: string): Promise<Product> => {
    try {
        const response = await customAxios.get(`/api/v1/products/${id}`);
        return response.data as Promise<Product>;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}