import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getAccessToken, decodeAccessToken, removeAccessToken } from "../../utils/authUtil";

interface AuthState {
    id: number | null,
    user: string | null,
    accessToken: string | null,
    refreshToken: string | null,
    isLoggedIn: boolean,
}

const initialState: AuthState = {
    id: null,
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const payload: JwtPayload = decodeAccessToken(action.payload);
            state.isLoggedIn = true
            state.accessToken = action.payload
            state.refreshToken = "xxxxxxx"
            state.user = payload.user
            state.id = payload.sub
        },
        logout: (state) => {
            removeAccessToken();
            state.isLoggedIn = false
            state.accessToken = null
            state.refreshToken = null
            state.user = null
            state.id = null
        },
        refresh: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        checkLoggedIn: (state) => {
            const token = getAccessToken();
            console.log(token);

            if (token) {
                const payload: JwtPayload = decodeAccessToken(token);
                state.isLoggedIn = true
                state.accessToken = token
                state.refreshToken = "xxxxxxx"
                state.user = payload.user
                state.id = payload.sub
            }
        }
    },
})

export const { login, logout, refresh, checkLoggedIn } = authSlice.actions;
// export const isLoggedIn = (state: AuthState) => state.isLoggedIn;
export default authSlice;