import { useState } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdvertiseBar = () => {
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate();

  const closeAdvertiseBar = () => {
    setIsShow(false);
  };

  return (
    isShow && (
      <div className="flex h-10 w-full max-w-none items-center justify-center bg-gray-100">
        <div className="flex w-full justify-center">
          <img src="/asset/images/ticket-percent.svg" />
          <span className="ml-3 font-semibold">
            30% off storewide — Limited time!
          </span>
          <button className="flex items-center" onClick={() => navigate("/shop")}>
            <span className="ml-3 font-semibold text-blue-500">Shop Now</span>
            <FiArrowRight className="ml-1 text-blue-500" />
          </button>
        </div>
        <button
          className="relative right-4 h-5 w-5"
          onClick={closeAdvertiseBar}
        >
          <FiX />
        </button>
      </div>
    )
  );
};
export default AdvertiseBar;
