import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-start items-start bg-neutral-100">
        <div className="relative flex justify-center items-center w-full min-h-screen ">
          <img
            src="/home/bg_image.png"
            alt="Picture of the author"
            className="absolute w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-[0.9]"></div>

          <nav className="flex w-full flex-row  items-center justify-between fixed top-[23px] min-[700px]:top-0 px-10 z-10">
            <Image
              src={Logo}
              alt="Picture of the author"
              unoptimized
              className="w-[180px] hidden min-[700px]:block mr-5"
              // just an example
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
              <Link href="" className="text-white py-10 px-5">
                About
              </Link>
              <Link href="" className="text-white py-10 px-5">
                Contact
              </Link>
              <button className="border border-white py-2 px-9 rounded-full mr-5">
                Login
              </button>
              <button className="py-2 px-9 bg-[#3032B1] rounded-full">
                Login
              </button>
            </div>
          </nav>

          <div className="text-black relative z-[2] flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center  items-center ml-10">
            <img
              src="/home/poster.png"
              alt="coba"
              className="min-w-[500px] w-3/4 max-w-[800px]"
            />
            <div className="w-[400px] sm:w-[550px]  xl:mr-10 mt-5 xl:mt-0">
              <p className="text-[18px] font-bold text-white"> Movie Party</p>
              <h1 className="text-[50px] font-bold text-white leading-[50px] mb-3">
                Petualangan Sherina 2
              </h1>
              <p className="text-[18px] font-light text-white">
                SHERINA (Sherina Munaf) dan SADAM (Derby Romero), dua teman
                kecil yang lama terpisah, bertemu kembali di Kalimantan untuk
                pelepasliaran orang utan.
              </p>
              <div className="flex mt-3">
                <button className="bg-[#DF1875] h-[50px] w-[160px] text-white font-medium rounded-full text-[18px] mr-5">
                  Get Ticket
                </button>
                <button className="border border-white h-[50px] w-[160px] text-white font-medium rounded-full text-[18px]">
                  Learn More
                </button>
              </div>
            </div>

            <IoIosArrowForward className="text-[#3D37F1] text-[60px] right-[20px] text-white hidden xl:block" />
          </div>
          <div className="text-black relative block xl:hidden">
            <IoIosArrowForward className="text-[#3D37F1] text-[60px] right-[20px] text-white " />
          </div>
        </div>

        <div className=""></div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
        <div className="">makan nasi kecombrang</div>
      </div>
    </main>
  );
}
