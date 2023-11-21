import { useEffect, useState } from "react";
import { getUserDetail } from "@/apiRequests";
import NavBar from "@/component/NavBar";
import "./styles.css";

const AccountDetailPage = () => {
  const [userDetail, setUserDetail] = useState<UserDetail>();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log(`underlineOnClick ${isClicked ? "clicked" : ""}`);

    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    const fetchUserDetail = async () => {
      const resp = await getUserDetail();
      setUserDetail(resp);
    };

    fetchUserDetail();
  }, []);

  const selectedButtonStyle = (path: string): string => {
    return location.pathname === path
      ? "w-full border-b-[1.5px] border-solid border-black pb-1"
      : "";
  };

  return (
    <>
      <NavBar />
      <div className="my-20 text-center text-4xl font-semibold">My Account</div>
      <div className="flex h-[490px] space-x-20 px-40">
        <div className="flex w-[262px] flex-col bg-gray-100 px-6 py-12">
          <div className="mb-8 flex flex-col items-center space-y-2">
            <img
              className="h-24 w-24 overflow-hidden rounded-full object-cover"
              src="/asset/images/profile.jpg"
            ></img>
            <div className="text-xl font-semibold">{userDetail?.name}</div>
          </div>
          <div className="flex flex-col space-y-5">
            <div
              className={`${
                isClicked ? "selectedButton" : "notSelectedButton"
              }`}
            >
              <button onClick={handleClick}>Account</button>
            </div>
            <div className="notSelectedButton">
              <button>Address</button>
            </div>
            <div className="notSelectedButton">
              <button>Orders</button>
            </div>
            <div className="notSelectedButton">
              <button>Wishlist</button>
            </div>
            <div className="notSelectedButton">
              <button>Log Out</button>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-col space-y-6 pr-[150px]">
          <div className="text-xl font-bold">Account Details</div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="firstNameField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              FIRST NAME *
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="firstNameField"
              placeholder="First name"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label
              htmlFor="lastNameField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              LAST NAME *
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="lastNameField"
              placeholder="Last name"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="displayNameField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              DISPLAY NAME *
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="displayNameField"
              placeholder="Display name"
            />
            <p className="text-xs text-zinc-500">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="emailField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              EMAIL *
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="emailField"
              placeholder="Email"
            />
          </div>
          <div className="text-xl font-bold">Password</div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="oldPasswordField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              OLD PASSWORD
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="oldPasswordField"
              placeholder="Old password"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="newPasswordField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              NEW PASSWORD
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="newPasswordField"
              placeholder="New password"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="repeatNewPasswordField"
              className="text-xs font-bold leading-3 text-zinc-500"
            >
              REPEAT NEW PASSWORD
            </label>
            <input
              className="h-10 rounded-md border-[1px] border-zinc-200 px-4"
              type="text"
              id="repeatNewPasswordField"
              placeholder=" Repeat new password"
            />
          </div>
          <div className="flex">
            <button className="h-10 w-36 rounded-md bg-black font-bold text-white">
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetailPage;
