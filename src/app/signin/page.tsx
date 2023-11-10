"use client"
import SignInButton from '@app/signin/_component/SignInButton'
import { RootState } from '@redux/store'
import useAppRouter from '@router/appRouter'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SignInPage = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const router = useAppRouter();
    useEffect(() => {
        if (isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn, router])
    
    return (
        <div className="w-[1440px] h-[1080px] relative bg-white">
            <div className="w-[736px] h-[1080px] left-0 top-0 absolute">
                <div className="w-[736px] h-[1080px] left-0 top-0 absolute flex-col justify-center items-center inline-flex">
                    <Image src="/images/bg_signin.svg" width={736} height={1080} alt="signin background" />
                </div>
                <div className="left-[315px] top-[32px] absolute justify-center items-center inline-flex">
                    <div className="text-center"><span className="text-black text-2xl font-medium font-['Poppins'] leading-normal">3legant</span><span className="text-zinc-500 text-2xl font-medium font-['Poppins'] leading-normal">.
                    </span></div>
                </div>
            </div>
            <div className="h-[376px] left-[824px] top-[220px] absolute bg-white flex-col justify-start items-end gap-8 inline-flex">
                <div className="self-stretch h-[94px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-11 justify-start items-start gap-4 flex">
                            <div className="grow shrink basis-0 text-neutral-900 text-[40px] font-medium font-['Poppins'] leading-[44px]">Sign in</div>
                        </div>
                    </div>
                    <div className="self-stretch"><span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Don’t have an accout yet?</span><span className="text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed"> </span><a href="/signup" className="text-emerald-400 text-base font-semibold font-['Inter'] leading-relaxed">Sign Up</a></div>
                </div>
                <div className="self-stretch h-[170px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[170px] flex-col justify-start items-start gap-8 flex">
                        <div className="w-[456px] h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch pb-2 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                                <div className="h-8 pb-1.5 justify-center items-center flex">
                                    {/* <div className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Your usernam or email address</div> */}
                                    <input className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed" type="text" id="username" name="username" placeholder="Your usernam or email address" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[456px] h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch pb-2 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                                <div className="w-[456px] h-8 relative">
                                    <input className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed" type="password" id="password" name="password" placeholder="Password" />
                                    <div className="w-6 h-6 left-[432px] top-[4px] absolute" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[456px] h-[26px] relative">
                            {/* TODO create popup forget password form */}
                            <button className="left-[317px] top-0 absolute text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">Forgot password?</button>
                            <input className="w-6 h-6 relative bg-gray-50 rounded border border-zinc-500" type="checkbox" id="checkbox" name="remember_me" value="true" ></input>
                            <div className="left-[36px] top-0 absolute text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Remember me</div>
                        </div>
                    </div>
                </div>
                <SignInButton />
            </div>
        </div>
    )
}

export default SignInPage