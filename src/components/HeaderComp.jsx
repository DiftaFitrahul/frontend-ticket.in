import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSelector } from 'react-redux';

export default function HeaderComp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <nav className="flex w-full bg-[#242565] flex-row items-center justify-between fixed top-0 px-14 z-10 py-[22px] min-[700px]:py-0">
      <Image
        src={Logo}
        alt="Picture of the author"
        unoptimized
        className="w-[180px] hidden min-[700px]:block mr-5"
      />

      <div className="flex flex-growth w-full xl:w-1/2 h-[60px] bg-white max-w-[800px] rounded-full min-w-[350px] relative justify-center items-center">
        <input
          type="text"
          className="m-5 w-full text-black py-2 px-10 bg-transparent text-left outline-none border-none"
        ></input>
        <BsSearch
          className="text-black absolute text-[32px] right-[20px]"
          onClick={() => alert("search kang")}
        />
      </div>
      <div className="block xl:hidden ml-10 items-center justify-center flex">
        <FiMenu
          className="text-black absolute text-[32px] right-[20px] text-white"
          onClick={() => alert("search kang")}
        />
      </div>

      <div className="flex flex-shrink-0 gap-5 items-center justify-center hidden xl:block">
        <Link href="" className=" text-white py-10 px-5">
          Schedule
        </Link>
        <Link href="" className="text-white py-10 px-5">
          Ticket
        </Link>
        <Link href="/about" className="text-white py-10 px-5">
          About
        </Link>
        <Link href="" className="text-white py-10 px-5">
          Contact
        </Link>
        {isLoggedIn ? (
           <Link
           href="/"
           className="border text-white border-white py-2 px-9 rounded-full mr-5"
         >
         Dashboard
         </Link>
        ) : (
        <Link
          href="/auth/login"
          className="border text-white border-white py-2 px-9 rounded-full mr-5"
        >
        Login
        </Link>
        )}
        <Link
          href="/auth/register"
          className="py-2 px-9 text-white bg-[#3032B1] rounded-full"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
