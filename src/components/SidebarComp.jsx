import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import Cookies from "js-cookie";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { SidebarContext } from "@/components/HeaderComp";

import { toast } from "react-toastify";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("Auth");
    toast.success("Logout Berhasil!"),
      {
        zIndex: 9999,
      };
  };

  return (
    <div
      className={`bg-[#242565] text-white   h-screen   pb-5 pt-4 z-[10] fixed right-0 top-0 transition-all ${
        showSidebar ? "w-[200px] sm:w-64" : "w-0 "
      }`}
    >
      <div className="flex justify-between items-center px-3 mb-4 w-full ">
        <Image
          src={Logo}
          alt="Picture of the author"
          unoptimized
          className="w-[100px] sm:w-[130px]  mr-5"
        />
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white hover:text-[#242565] hover:bg-white font-bold w-[30px] sm:w-[40px] h-[40px] mr-2 border border-white rounded-xl"
        >
          X
        </button>
      </div>
      <div className="flex flex-col w-full h-[170px] px-3">
        <Link
          href="/event/registered"
          className="text-white  hover:text-[#242565] pl-3 pt-4   h-full px-full w-full hover:bg-white rounded-xl font-semibold"
        >
          Event Registered
        </Link>
        <Link
          href=""
          className="text-white hover:text-[#242565] pl-3 pt-4   h-full px-full w-full hover:bg-white rounded-xl font-semibold"
        >
          Ticket
        </Link>

        {/* <Link
          href="/about"
          className="text-white hover:text-[#242565] pl-3 pt-3 h-full px-full w-full font-semibold hover:bg-white rounded-xl font-semibold"
        >
          About
        </Link> */}

        <Link
          href=""
          className="text-white hover:text-[#242565] h-full pl-3 pt-4 px-full w-full font-semibold hover:bg-white rounded-xl font-semibold"
        >
          Contact
        </Link>
      </div>
      <div className="h-4/6 xl:h-3/4  flex flex-col">
        <div className="mt-auto mb-20 ml-4">
          {isLoggedIn ? (
            <Link
              href="/"
              onClick={handleLogout}
              className="border text-white border-white py-2 px-9 rounded-full mr-5"
            >
              Logout
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="border font-semibold text-white hover:text-[#242565] hover:bg-white border-white py-2 px-9 rounded-full mr-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
