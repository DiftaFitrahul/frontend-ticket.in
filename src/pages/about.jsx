import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { BsSearch } from "react-icons/bs";

export default function About() {
  return (
    <main>
      <div className="flex flex-col justify-start items-start bg-neutral-100">
        <div className="relative flex justify-center items-center w-full min-h-screen">
          <img
            src="/home/bg_image.png"
            alt="Picture of the author"
            className="absolute w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-[0.9]"></div>

          <nav className="flex w-full flex-row  items-center justify-between fixed top-0 px-10">
            <Image
              src={Logo}
              alt="Picture of the author"
              unoptimized
              className="w-[180px]"
              // just an example
            />
            <div className="flex flex-growth w-1/2 h-[60px] bg-white max-w-[800px] rounded-full min-w-[400px] relative flex justify-center items-center">
              <input
                type="text"
                className="m-5 w-full text-black py-2 px-10 bg-transparent text-left outline-none border-none"
              ></input>
              <BsSearch
                className="text-black absolute text-[32px] right-[20px]"
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

          <div className="text-black relative z-[2] flex flex-col justify-center items-center">
          <h2 className="text-[35px] mb-20 text-white">About TICKET.IN</h2>
            <div className="w-[700px] bg-red-500/20">
            
            <h4 className="text-[25px] text-white">
 Kami adalah platform pemesanan tiket film terkemuka di Indonesia.
 Dengan koleksi film terbaru dan pemesanan yang mudah, kami hadir untuk memastikan pengalaman menonton Anda menjadi lebih menyenangkan.
 Dengan beragam pilihan acara dan bioskop top, TICKET.IN memudahkan Anda menikmati film favorit tanpa repot.
 Mari kita ciptakan momen tak terlupakan di layar lebar bersama-sama.
 </h4>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}


