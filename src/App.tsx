import "@/styles/global.css"
import { Routes, Route, Navigate } from "react-router-dom"
import SignInPage from "@/screens/SignInPage"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLoggedIn, logout } from "@/redux/slice/authSlice";
import HomePage from "@/screens/HomePage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AccountDetailPage from "@/screens/AccountDetailPage";


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
    <Route path="account" element={<AccountDetailPage />} />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
}

export default App
