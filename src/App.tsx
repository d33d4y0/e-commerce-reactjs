import "@/styles/global.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "@/screens/SignInPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLoggedIn, logout } from "@/redux/slice/authSlice";
import HomePage from "@/screens/HomePage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AccountDetailPage from "@/screens/AccountDetailPage";
import ShopPage from "./screens/ShopPage";
import ContactPage from "./screens/ContactPage";
import NotFoundPage from "./screens/NotFoundPage";
import SignUpPage from "./screens/SignUpPage";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoggedIn());
    // dispatch(logout());
  }, []);

  return <Routes>
        <Route path="/" element={<HomePage />} />
        {/* TODO not working as expected */}
        {/* <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <SignInPage />} />
    <Route path="account" element={isLoggedIn ? <AccountDetailPage /> : <Navigate to="/login" />} /> */}
        <Route path="login" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="account" element={<AccountDetailPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    }

export default App;
