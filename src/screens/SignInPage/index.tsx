import { RootState } from "@/redux/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import SignInButton from "@/component/SignInButton";
import { loginApi } from "@/apiRequests";
import { login } from "@/redux/slice/authSlice";
import { AxiosError } from "axios"

type FormErrors = {
  isUsernameEmpty: null | boolean;
  isPasswordEmpty: null | boolean;
}

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
  }, [isLoggedIn])

  const handleLogin = async () => {
    try {
      const resp = await loginApi(formData.username, formData.password);
      console.log(resp.status);
      
      // check 201 because we use platzi fake store api
      if (resp.status === 200 || resp.status === 201) {
        dispatch(login({
          accessToken: resp.data["access_token"],
          refreshToken: resp.data["refresh_token"],
        }));
        
      } else {
        setShowError(true);
      }

    } catch (error) {
      const err = error as AxiosError
      setShowError(true);
      throw err;
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const isUsernameEmpty = formData.username.trim() === "";
      const isPasswordEmpty = formData.password.trim() === "";
      setFormErrors({
        isUsernameEmpty,
        isPasswordEmpty
      });
      if (isUsernameEmpty || isPasswordEmpty) {
        return;
      }

      await handleLogin();
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="username" name="username" value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }} placeholder="Your usernam or email address" />
          {formErrors.isUsernameEmpty && <p style={{ color: 'red' }}>Please enter username</p>}
        </div>
        <div>
          <input type="password" id="password" name="password" value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} placeholder="Password" />
          {formErrors.isUsernameEmpty && <p style={{ color: 'red' }}>Please enter password</p>}
        </div>
        {/* TODO create popup forget password form */}
        <button>Forgot password?</button>
        <button type="submit" disabled={isLoading}>
          {isLoading && "Loading..."}
        </button>
        <SignInButton />
      </form>
    </>
  )
}

export default SignInPage
