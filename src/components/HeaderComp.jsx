import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { logout } from "@/redux/authSlice";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import Sidebar from "./SidebarComp";

export const SidebarContext = createContext();
export default function HeaderComp() {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleEventRegistered = () => {
    if (Cookies.get("Auth") === undefined) {
      toast.error("Gagal Melihat Event! Anda harus Login terlebih dahulu!", {
        zIndex: 9999,
      });
    } else {
      router.push("/event/registered");
    }
  };

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
    <nav className="w-creen h-screen fixed left-0 z-10">
      <div className="flex w-full bg-[#242565] flex-row items-center justify-between fixed top-0 px-2 sm:px-14 z-10 py-3 sm:py-[22px] min-[700px]:py-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Picture of the author"
            unoptimized
            className="hidden sm:block w-[180px] mr-5"
          />
        </Link>

        {/* <div className="flex flex-growth w-full xl:w-1/2 h-[60px] bg-white max-w-[800px] rounded-full min-w-[350px] relative justify-center items-center">
          <input
            type="text"
            className="m-5 w-full text-black py-2 px-10 bg-transparent text-left outline-none border-none"
          ></input>
          <BsSearch
            className="text-black absolute text-[32px] right-[20px]"
            onClick={() => alert("search kang")}
          />
        </div> */}

        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          className="block xl:hidden ml-10 items-center justify-center flex h-[30px] min-[700px]:h-[0]"
        >
          <FiMenu className="text-black absolute text-[32px] right-[20px] text-white " />
        </button>

        <div className="flex flex-shrink-0 gap-5 items-center justify-center hidden xl:block">
          <Link href="" className="text-white py-10 px-5">
            Ticket
          </Link>
          <button
            href=""
            className="text-white py-10 px-5"
            onClick={handleEventRegistered}
          >
            Event Registered
          </button>
          {/* <Link href="/about" className="text-white py-10 px-5 ">
            About
          </Link> */}
          <Link href="" className="text-white py-10 px-5">
            Contact
          </Link>
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
              className="border text-white border-white py-2 px-9 rounded-full mr-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <SidebarContext.Provider
        value={{ showSidebar: showSidebar, setShowSidebar }}
      >
        <Sidebar />
      </SidebarContext.Provider>
    </nav>
  );
}
