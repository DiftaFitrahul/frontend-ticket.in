import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import FilterButton from "@/components/home/filter_button";
import CardEvent from "@/components/home/card_event";
import { useState } from "react";

export default function Home() {
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);

  const [showMorePersonalized, setShowMorePersonalized] = useState(false);

  const toggleShowMoreUpcoming = () => {
    setShowMoreUpcoming(!showMoreUpcoming);
  };
  const toggleShowMorePersonalized = () => {
    setShowMorePersonalized(!showMorePersonalized);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center bg-neutral-100">
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
              <Link href="/about" className="text-white py-10 px-5">
                About
              </Link>
              <Link href="" className="text-white py-10 px-5">
                Contact
              </Link>
              <Link
                href="/auth/login"
                className="border border-white py-2 px-9 rounded-full mr-5"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="py-2 px-9 bg-[#3032B1] rounded-full"
              >
                Register
              </Link>
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
        <div className="flex justify-between w-4/6   mt-[100px] mb-[100px] justify-center items-center">
          <div className="text-[#242565] text-[40px]">Upcoming Events</div>
          <div className="flex">
            <FilterButton title="Weekdays" />
            <FilterButton title="Event Type" />
            <FilterButton title="Any Category" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {Array.from({ length: showMoreUpcoming ? 9 : 6 }, (_, index) => (
            <CardEvent
              month="JUN"
              date="20"
              title="Akurat Festival"
              subtitle="We’ll get you directly seated and inside for you to enjoy the show. Lest join with us"
              imagePath="/home/event_image.png"
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <button
            onClick={toggleShowMoreUpcoming}
            className=" h-[50px] w-[160px] text-[#3D37F1] border border-2 border-[#3D37F1] font-medium rounded-full text-[18px] mr-5"
          >
            {showMoreUpcoming ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="flex justify-between w-4/6   mt-[100px] mb-[100px] justify-center items-center">
          <div className="text-[#242565] text-[40px]">Personalized For You</div>
          <div className="flex">
            <FilterButton title="Weekdays" />
            <FilterButton title="Event Type" />
            <FilterButton title="Any Category" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {Array.from({ length: showMorePersonalized ? 9 : 6 }, (_, index) => (
            <CardEvent
              month="APR"
              date="14"
              title="Wonder Girls 2010 Wonder Girls World Tour San Francisco"
              subtitle="We’ll get you directly seated and inside for you to enjoy the show."
              imagePath="/home/event_image2.png"
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <button
            onClick={toggleShowMorePersonalized}
            className=" h-[50px] w-[160px] text-[#3D37F1] border border-2 border-[#3D37F1] font-medium rounded-full text-[18px] mr-5"
          >
            {showMorePersonalized ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="flex relative justify-center bg-[#FFF1E1] w-full mb-[100px] py-12 mt-[150px]">
          <img
            src="/home/person.png"
            alt="coba"
            className="w-[400px] h-[500px] object-fill absolute left-[200px] bottom-[-120px] "
          />

          <div className="flex flex-col ">
            <h1 className="text-black font-bold text-[34px]">
              Make your own Event
            </h1>
            <p className="text-black text-[18px] my-4 w-[360px] font-normal">
              Craft memories with a click. Create your event now
            </p>
            <button className="bg-[#F5167E] py-4 w-[300px] rounded-full shadow-lg font-medium">
              Create Events
            </button>
          </div>
        </div>
        <footer className="bg-[#242565] h-[500px] w-full flex justify-between items-start">
          <div className="flex flex-col bg-red-300">
            <Image
              src={Logo}
              alt="Picture of the author"
              unoptimized
              className="w-[180px] hidden min-[700px]:block mr-5"
              // just an example
            />
            <p>
              Ticket.in is a global self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
            <div className="flex w-[40px] h-[40px] bg-green-300">
              <img src="/Facebook.png" alt="facebook" />
              <img src="/home/twitter-icon.png" alt="twitter" />
              <img src="/home/linkedin-icon.png" alt="linkedin" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
