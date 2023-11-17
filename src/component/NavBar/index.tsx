import { MdOutlinePerson } from "react-icons/md";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const handleOnClickProfile = () => {
        if (isLoggedIn) {
            // TODO show list of link to account page, logout, etc
            navigate("/account");
        } else {
            navigate("/login");
            //  TODO show list of link to login, register, etc
        }
    }

    return (
        <div className="w-[1440px] h-[60px] px-40 py-4 bg-white justify-between items-center inline-flex">
            <div className="justify-center items-center flex">
                <div className="text-center"><span className="text-black text-2xl font-medium font-['Poppins'] leading-normal">3legant</span><span className="text-zinc-500 text-2xl font-medium font-['Poppins'] leading-normal">.
                </span></div>
            </div>
            <div className="justify-center items-center gap-10 flex">
                <div className="justify-start items-center gap-0.5 flex">
                    <div className="border-neutral-900 justify-start items-center gap-0.5 flex">
                        <div className="justify-start items-center gap-1 flex">
                            <button className="text-neutral-900 text-sm font-medium font-['Space Grotesk'] leading-normal" onClick={() => navigate("/")}>Home</button>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-center gap-0.5 flex">
                    <div className="border-zinc-500 justify-start items-center gap-0.5 flex">
                        <div className="justify-start items-center gap-1 flex">
                            <button className="text-zinc-500 text-sm font-medium font-['Space Grotesk'] leading-normal">Shop</button>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-center gap-0.5 flex">
                    <div className="border-zinc-500 justify-start items-center gap-0.5 flex">
                        <div className="justify-start items-center gap-1 flex">
                            <button className="text-zinc-500 text-sm font-medium font-['Space Grotesk'] leading-normal">Product</button>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-center gap-0.5 flex">
                    <div className="border-zinc-500 justify-start items-center gap-0.5 flex">
                        <div className="justify-start items-center gap-1 flex">
                            <button className="text-zinc-500 text-sm font-medium font-['Space Grotesk'] leading-normal">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-5 h-5 relative flex-col justify-start items-start flex" onClick={handleOnClickProfile}>
                <MdOutlinePerson />
            </button>
        </div>
    )
}

export default NavBar