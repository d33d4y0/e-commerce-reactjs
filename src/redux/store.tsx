import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export default store