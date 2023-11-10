"use client"
import { useState } from "react";
import { MdClear } from 'react-icons/md'

const PromoNavBar = () => {
    const [isShown, setIsShown] = useState(true);

    const closePromoNavBar = () => {
        setIsShown(false);
    }

    return (
        isShown &&
        <div className="w-full h-10 pl-[524px] pr-4 py-2 bg-emerald-400 justify-end items-center gap-[508px] inline-flex">
            <div className="justify-center items-start gap-3 inline-flex">
                <div className="justify-center items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-center text-black text-sm font-semibold font-['Inter'] leading-snug">30% off storewide — Limited time! </div>
                </div>
                <div className="border-b border-black justify-center items-center gap-0.5 flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-black text-sm font-medium font-['Inter'] leading-normal">Shop Now</div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                </div>
            </div>
            <button className="w-5 h-5 relative flex-col justify-start items-start flex" onClick={closePromoNavBar}>
                <MdClear />
            </button>
        </div>
    )
}

export default PromoNavBar