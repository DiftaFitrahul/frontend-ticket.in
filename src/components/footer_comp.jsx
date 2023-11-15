import Image from "next/image";
import Logo from "@/../public/logo.png";

export default function FooterComp() {
  return (
    <footer className="bg-[#242565] h-[830px] md:h-[550px] xl:h-[500px] w-full flex flex-col justify-between items-start px-14">
      <div className="flex flex-col xl:flex-row w-full justify-between">
        <div className="flex flex-col w-full xl:w-1/3 ">
          <Image
            src={Logo}
            alt="Picture of the author"
            unoptimized
            className="w-[180px] mr-5 "
            // just an example
          />
          <p>
            Ticket.in is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
          <div className="flex items-center h-[40px] mt-5">
            <img src="/Facebook.png" alt="facebook" className="w-10" />
            <img src="/home/twitter-icon.png" alt="twitter" className="w-10" />
            <img
              src="/home/linkedin-icon.png"
              alt="linkedin"
              className="w-10"
            />
          </div>
        </div>
        <div className=" w-1/4 "></div>
        <div className="flex flex-col md:flex-row justify-between w-[calc(100vh-250px)] my-2 xl:mt-0 ">
          <div className="flex flex-col items-start mt-8">
            <p className="text-[18px] font-bold mb-4">Ticket.In</p>

            <button className="font-light font-[14px] mt-1">About Us</button>
            <button className="font-light font-[14px] mt-1">Contact Us</button>
            <button className="font-light font-[14px] mt-1">Help Center</button>
            <button className="font-light font-[14px] mt-1">
              How it Works
            </button>
            <button className="font-light font-[14px] mt-1">Privacy</button>
            <button className="font-light font-[14px] mt-1">Terms</button>
          </div>

          <div className="flex flex-col w-[400px] sm:w-[430px]  items-start mt-8">
            <p className="text-[18px] font-bold mb-4">Stay In The Loop</p>

            <p className="font-light font-[14px] mt-1">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </p>
            <div className="flex w-[380px]  h-[60px] bg-white  rounded-full  relative justify-center items-center my-7 ">
              <input
                type="text"
                className="m-5 w-full text-black py-2 px-2 bg-transparent text-left outline-none border-none"
              ></input>
              <button className="text-[13px] font-medium rounded-full bg-[#F5167E] w-[350px] py-[15px] mr-[5px]">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center w-full mb-5 ">
        <div className="bg-[#4C4D8B] h-[2px] w-full"></div>
        <p className="text-[14px] mt-5 opacity-70">
          Copyright © 2023 Difta Fitrahul
        </p>
      </div>
    </footer>
  );
}