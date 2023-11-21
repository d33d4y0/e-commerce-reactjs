import {
  MdOutlinePerson,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

const NavBar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClickProfile = () => {
    if (isLoggedIn) {
      // TODO show list of link to account page, logout, etc
      navigate("/account");
    } else {
      navigate("/login");
      //  TODO show list of link to login, register, etc
    }
  };

  const currentPathCondition = (path: string): string => {
    return location.pathname === path
      ? "text-sm font-medium text-neutral-900"
      : "text-sm font-medium text-zinc-500";
  };
  
  return (
    <>
      <div className="container flex  w-full max-w-none items-center justify-between px-40 py-4">
        <div>
          <span className="text-2xl font-medium text-black">3legant.</span>
        </div>
        <div className="flex items-center justify-center gap-20">
          <NavLink to="/" className={currentPathCondition("/")}>
            Home
          </NavLink>
          <NavLink to="/shop" className={currentPathCondition("/shop")}>
            Shop
          </NavLink>
          <NavLink to="/product" className={currentPathCondition("/product")}>
            Product
          </NavLink>
          <NavLink to="/contact" className={currentPathCondition("/contact")}>
            Contact Us
          </NavLink>
        </div>
        <div className="flex gap-4">
          <button className="text-2xl" onClick={handleOnClickProfile}>
            <MdOutlineSearch />
          </button>
          <button className="text-2xl" onClick={handleOnClickProfile}>
            <MdOutlinePerson />
          </button>
          <button className="text-2xl" onClick={handleOnClickProfile}>
            <MdOutlineShoppingBag  />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
