import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
    user: string | null,
    accessToken: string | null,
    refreshToken: string | null,
    isLoggedIn: boolean,
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Login>) => {
            state.isLoggedIn = true
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.user = action.payload.user
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.accessToken = null
            state.refreshToken = null
            state.user = null
        },
        refresh: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        }
    },
})

export const { login, logout, refresh } = authSlice.actions;
export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn;
export default authSlice;