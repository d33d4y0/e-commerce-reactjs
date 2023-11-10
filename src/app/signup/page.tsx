import Image from 'next/image'
import SignInButton from '@app/signup/_component/SignUpButton';

const SignUpPage = () => {

  return (
    <>
      <div className="w-[1440px] h-[1080px] relative bg-white">
        <div className="w-[736px] h-[1080px] left-0 top-0 absolute">
          <div className="w-[736px] h-[1080px] left-0 top-0 absolute flex-col justify-center items-center inline-flex">
            <Image src="/images/bg_signin.svg" width={736} height={1080} alt="signin background" priority={true}/>
          </div>
          <div className="left-[315px] top-[32px] absolute justify-center items-center inline-flex">
            <div className="text-center"><span className="text-black text-2xl font-medium font-['Poppins'] leading-normal">3legant</span><span className="text-zinc-500 text-2xl font-medium font-['Poppins'] leading-normal">.
            </span></div>
          </div>
        </div>
        <div className="h-[520px] left-[824px] top-[220px] absolute bg-white flex-col justify-start items-end gap-8 inline-flex">
          <div className="self-stretch h-[94px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-11 justify-start items-start gap-4 flex">
                <div className="grow shrink basis-0 text-neutral-900 text-[40px] font-medium font-['Poppins'] leading-[44px]">Sign up</div>
              </div>
            </div>
            <div className="self-stretch"><span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Already have an account?</span><span className="text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed"> </span><a href="/signin" className="text-emerald-400 text-base font-semibold font-['Inter'] leading-relaxed">Sign in</a></div>
          </div>
          <div className="self-stretch h-[314px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-[314px] flex-col justify-start items-start gap-8 flex">
              <div className="w-[456px] h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch pb-2 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                  <div className="h-8 pb-1.5 justify-center items-center flex">
                    <input className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed" type="text" id="name" name="name" placeholder="Your name" />
                  </div>
                </div>
              </div>
              <div className="w-[456px] h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch pb-2 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                  <div className="h-8 pb-1.5 justify-center items-center flex">
                    <input className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed" type="text" id="username" name="username" placeholder="Username" />
                  </div>
                </div>
              </div>
              <div className="w-[456px] h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch pb-2 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                  <div className="h-8 pb-1.5 justify-center items-center flex">
                    <input className="w-[456px] text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed" type="text" id="email" name="email" placeholder="Email address" />
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
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <input className="w-6 h-6 relative bg-gray-50 rounded border border-zinc-500" type="checkbox" id="checkbox" name="terms" value="true" ></input>
                <div className="grow shrink basis-0"><span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">I agree with </span><button className="text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">Privacy Policy</button><span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"> and </span><button className="text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">Terms of Use</button></div>
              </div>
            </div>
          </div>
          <SignInButton />
        </div>
      </div>
    </>
  )
}

export default SignUpPage