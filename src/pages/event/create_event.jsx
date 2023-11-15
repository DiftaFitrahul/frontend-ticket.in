"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEventAvailable, MdMyLocation } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";

export default function Login() {
  const [startDate, setStartDate] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, onChange] = useState(new Date());

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <main>
      <div className=" flex flex-row justify-center items-center h-screen w-screen bg-neutral-100">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] w-screen sm:w-1/2 relative bg-white mt-20 mb-20 rounded-lg ml-[10px]">
          <div className="block min-[640px]:hidden absolute top-5 left-5">
            <Image
              src="/black_logo.png"
              alt="Picture of the author"
              width={100}
              height={100}
              unoptimized
              className="p-0"
            />
          </div>
          <h1 className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] font-medium text-[30px] text-black">
            Create Event
          </h1>
          <p className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[25px] mb-1 font-normal text-[16px] text-black">
            Make your own event right now.<br></br> Reach out to millions of
            people and make your event come true
          </p>

          <form className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px]">
            <p className="text-grey-custom text-[13px] mt-[40px]">Event Name</p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <MdEventAvailable className="text-black " size={22} />
              </span>
              <input
                type="text"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your event name"
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">
              Description
            </p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <PiTextTBold className="text-black " size={22} />
              </span>
              <input
                type="text"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your event description"
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px] mb-3">
              Event Location
            </p>
            <div className="w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                showIcon={true}
                showTimeInput={true}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText="Choose a date"
                className="text-center border-l-4 border-r-4  border-red-500  w-full p-3 rounded text-sm    focus:ring-0  text-black"
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">
              Event Location
            </p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <MdMyLocation className="text-black " size={22} />
              </span>
              <input
                type="text"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your event location"
              />
            </div>

            <div className="flex justify-center items-center w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px]">
              <button
                type="submit"
                className="text-white w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] mt-[50px] bg-primary-blue py-2  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Login
              </button>
            </div>
          </form>

          <div className="sm:self-start xl:ml-[120px] md:ml-[70px] sm:ml-[40px] w-[calc(25vw-50px)] min-w-[270px]">
            <p className="flex justify-center  text-black text-[16px] my-[30px]">
              or continue with
            </p>
            <div className="flex flex-row justify-center">
              <button>
                <Image
                  src="/facebook.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  unoptimized
                />
              </button>
              <div className="mx-[7px]"></div>
              <button>
                <Image
                  src="/google.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  unoptimized
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center h-[calc(100vh-20px)] w-1/2 relative bg-light-blue rounded-lg mr-[10px] ml-[10px] hidden min-[640px]:block bg-opacity-25">
          <Image
            src="/black_logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
            unoptimized
            className="absolute top-3 right-5"
          />

          <img
            src="/auth_image.png"
            alt="Picture of the author"
            className="self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[150px]  lg:mt-[70px] xl:mt-[0px]  items-center mb-20 xl:w-[850px] lg:w-[650px]  xl:h-[650px] lg:h-[500px]"
          />
          <h1 className="self-start text-primary-blue xl:pl-[120px] md:pl-[70px] sm:pl-[40px]  font-semibold xl:text-[40px]  md:text-[30px]">
            Your Event, Your Way!
          </h1>
          <p className="self-start text-primary-blue xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mb-[100px] pr-[20px]  xl:text-[20px] md:text-[15px]">
            It's time to turn your vision into reality. Create your dream event
            from scratch and watch it come to life. Let's get started.
          </p>
        </div>
      </div>
    </main>
  );
}
