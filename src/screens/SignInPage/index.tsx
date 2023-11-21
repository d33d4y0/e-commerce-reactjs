import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubmitButton from "@/component/SubmitButton";
import { loginApi } from "@/apiRequests";
import { login } from "@/redux/slice/authSlice";
import { AxiosError } from "axios";
import AuthImageSection from "@/component/AuthImageSection";

type FormErrors = {
  isUsernameEmpty: null | boolean;
  isPasswordEmpty: null | boolean;
};

function SignInPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  // TODO set error to form input
  const [showError, setShowError] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    isUsernameEmpty: null,
    isPasswordEmpty: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      const resp = await loginApi(formData.username, formData.password);
      console.log(resp.status);

      // check 201 because we use platzi fake store api
      if (resp.status === 200 || resp.status === 201) {
        dispatch(
          login({
            accessToken: resp.data["access_token"],
            refreshToken: resp.data["refresh_token"],
          }),
        );
      } else {
        setShowError(true);
      }
    } catch (error) {
      const err = error as AxiosError;
      setShowError(true);
      throw err;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const isUsernameEmpty = formData.username.trim() === "";
      const isPasswordEmpty = formData.password.trim() === "";
      setFormErrors({
        isUsernameEmpty,
        isPasswordEmpty,
      });
      if (isUsernameEmpty || isPasswordEmpty) {
        return;
      }

      await handleLogin();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen">
        <AuthImageSection />
        <div className="flex w-1/2 flex-col items-start space-y-1 px-32 py-48">
          <div className="my-2 text-4xl font-semibold leading-loose text-neutral-900">
            {/* <div className="w-[456px] text-neutral-900 text-[40px] font-medium font-['Poppins'] leading-[44px]">Sign In</div> */}
            Sign In
          </div>
          <div className="text-base leading-relaxed text-zinc-500">
            Don't Have an account yet?
            <a
              className="ml-2 text-base font-semibold leading-relaxed text-emerald-400"
              href="/signup"
            >
              Sign Up
            </a>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div>
              <input
                className="my-3 w-[456px] border-b-[1px] border-solid py-3"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                placeholder="Your username or email address"
              />
              {formErrors.isUsernameEmpty && (
                <p style={{ color: "red" }}>Please enter username</p>
              )}
            </div>
            <div>
              <input
                className="w-[456px] border-b-[1px] border-solid py-3"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                placeholder="Password"
              />
              {formErrors.isUsernameEmpty && (
                <p style={{ color: "red" }}>Please enter password</p>
              )}
            </div>
            {/* TODO create popup forget password form */}
            <div className="my-8 flex justify-between">
              <div className="flex items-center">
                <input className="h-4 w-4" type="checkbox" />
                <span className="ml-3 text-zinc-500">Remember me</span>
              </div>
              <button className="font-semibold">Forgot password?</button>
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading && "Loading..."}
            </button>
            <SubmitButton content="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
