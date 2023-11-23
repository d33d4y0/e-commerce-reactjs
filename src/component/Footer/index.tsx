import { NavLink } from "react-router-dom";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-20 bg-neutral-900 text-gray-300">
      <div className="container max-w-none px-40 pb-8 pt-20 text-center">
        <div className="flex flex-col">
          <div className="mb-12 flex justify-between">
            <div className="flex items-center space-x-8">
              <p className="text-2xl font-medium text-white">3legant.</p>
              <div className="h-6 w-px bg-zinc-500" />
              <p className="text-grey-200 text-sm">Gift & Decoration Store</p>
            </div>
            <div className="flex items-center space-x-8">
              <NavLink to="/" className="text-sm text-white">
                Home
              </NavLink>
              <NavLink to="/shop" className="text-sm text-white">
                Shop
              </NavLink>
              <NavLink to="/product" className="text-sm text-white">
                Product
              </NavLink>
              <NavLink to="/contact" className="text-sm text-white">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="mb-4 h-px w-full bg-zinc-500" />
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <p>Copyright &copy; 2023 3legant. All Rights Reserved.</p>
              <button className="font-bold">Privacy Policy</button>
              <button className="font-bold">Terms of Use</button>
            </div>
            <div className="flex space-x-6">
              <FiInstagram />
              <FiFacebook />
              <FiYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
