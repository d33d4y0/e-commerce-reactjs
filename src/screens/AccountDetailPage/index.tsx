import { useEffect, useState } from "react";
import { getUserDetail } from "../../apiRequests";
import NavBar from "../../component/NavBar"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const AccountDetailPage = () => {
  const userId = useSelector((state: RootState) => state.auth.id);
  const [userDetail, setUserDetail] = useState<UserDetail>();
  
  useEffect(() => {
    const fetchUserDetail = async () => {
      if (userId != null) {
        const resp = await getUserDetail(userId);
        setUserDetail(resp);
      }
    }
    
    fetchUserDetail();
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-[1440px] h-[1126px] px-40 pb-20 bg-white flex-col justify-start items-center inline-flex">
        <div className="py-20 flex-col justify-start items-center gap-10 flex">
          <div className="text-black text-[54px] font-medium font-['Poppins'] leading-[58px]">My Account</div>
        </div>
        <div className="justify-start items-start gap-[7px] inline-flex">
          <div className="px-4 py-10 bg-gray-100 rounded-lg flex-col justify-start items-center gap-10 inline-flex">
            <div className="flex-col justify-start items-center gap-1.5 flex">
              <div className="w-[82px] h-[82px] relative">
                <div className="w-20 h-20 left-0 top-0 absolute rounded-[58px]">
                  <div className="w-20 h-20 left-0 top-0 absolute">
                    <div className="w-20 h-20 left-0 top-0 absolute bg-neutral-900 rounded-[93px]" />
                  </div>
                  <img className="w-20 h-20 left-0 top-0 absolute rounded-[82px]" src="https://via.placeholder.com/80x80" />
                </div>
                <div className="p-[7px] left-[50px] top-[52px] absolute bg-neutral-900 rounded-[125px] border border-white justify-start items-start gap-2.5 inline-flex">
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
              <div className="text-black text-xl font-semibold font-['Inter'] leading-loose">{`${userDetail?.name.firstname} ${userDetail?.name.lastname}`}</div>
              {/* <div className="text-black text-xl font-semibold font-['Inter'] leading-loose">{`${userDetail} ${userDetail}`}</div> */}
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-[42px] py-2 border-b border-neutral-900 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">Account</div>
              </div>
              <div className="h-[42px] py-2 border-b border-white border-opacity-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">Address</div>
              </div>
              <div className="h-[42px] py-2 border-b border-white border-opacity-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">Orders</div>
              </div>
              <div className="h-[42px] py-2 border-b border-white border-opacity-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">Wishlist</div>
              </div>
              <div className="h-[42px] py-2 border-b border-white border-opacity-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">Log Out</div>
              </div>
            </div>
          </div>
          <div className="px-[72px] flex-col justify-start items-start gap-10 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-black text-xl font-semibold font-['Inter'] leading-loose">Account Details</div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">First name *</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">First name</div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">last name *</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Last name</div>
                  </div>
                </div>
              </div>
              <div className="h-24 flex-col justify-start items-start gap-3 flex">
                <div className="w-[134.89px] text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">Display name *</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Display name</div>
                  </div>
                </div>
                <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">This will be how your name will be displayed in the account section and in reviews</div>
              </div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">Email *</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Email</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-black text-xl font-semibold font-['Inter'] leading-loose">Password</div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">Old password</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Old password</div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">new password</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">New password</div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex-col justify-start items-start gap-3 flex">
                <div className="w-[156.75px] text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">rEPEAT NEW PASSWORD</div>
                <div className="self-stretch h-10 px-4 bg-white rounded-md border border-stone-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">Repeat new password</div>
                  </div>
                </div>
              </div>
              <div className="px-10 py-3 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-7">Save changes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountDetailPage