import AuthImageSection from '@/component/AuthImageSection';
import SubmitButton from '@/component/SubmitButton';
import { useState } from 'react';

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex h-screen w-screen">
        <AuthImageSection />
        <div className="flex w-1/2 flex-col items-start space-y-1 px-32 py-48">
          <div className="my-2 text-4xl font-semibold leading-loose text-neutral-900">
            {/* <div className="w-[456px] text-neutral-900 text-[40px] font-medium font-['Poppins'] leading-[44px]">Sign In</div> */}
            Sign Up
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
          <SubmitButton content="Sign Up" />
        </div>
      </div>
    </>
  )
}

export default SignUpPage