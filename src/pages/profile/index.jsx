"use client";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEventAvailable, MdMyLocation } from "react-icons/md";
import { PiTextTBold, PiMoneyFill } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown, IoIosContact } from "react-icons/io";

export default function Login() {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [lastPageEvent, setLastPageEvent] = useState(false);
  const [category, setCategory] = useState("Choose category");
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (e) => {
    const fileName = e.target.files[0]?.name;
    setSelectedFileName(fileName);
  };

  const toggleCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleCategory = (value) => {
    setCategory(value);
    toggleCategory();
  };

  const handleLastPageEvent = () => {
    setLastPageEvent(!lastPageEvent);
  };

  const listCategory = [
    {
      id: 1,
      name: "Music",
    },
    {
      id: 2,
      name: "Sport",
    },
    {
      id: 3,
      name: "Education",
    },
    {
      id: 4,
      name: "Technology",
    },
    {
      id: 5,
      name: "Art",
    },
    {
      id: 6,
      name: "Business",
    },
    {
      id: 7,
      name: "Other",
    },
  ];

  const submitForm = (e) => {
    e.preventDefault();
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
          <br />
          <br />
          <br />

          <h1 className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] font-medium text-[30px] text-black">
            Profile
          </h1>
          <p className="sm:self-start  xl:pl-[120px] md:pl-[70px] sm:pl-[40px] px-20 mt-[25px] mb-1 font-normal text-[16px] text-black">
            Edit Prifole for:<br></br> Username
          </p>
          <div className="">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>

          <div className="image-upload-container">
            <button
              type="file"
              accept="image/*"
              class="mt-[30px] flex w-full justify-center rounded-[100px] bg-[#F5167E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Upload
            </button>
          </div>

          <form
            onSubmit={submitForm}
            className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px]"
          >
            {lastPageEvent ? (
              <div>
                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Event fee (in IDR)
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <PiMoneyFill className="text-black " size={22} />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Fill with 0 if the event is free"
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Enter the max amount of ticket
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <IoTicketOutline className="text-black " size={22} />
                  </span>
                  <input
                    type="number"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter max amount ticket"
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Upload Event photo
                </p>
                <div className="relative w-[200px]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    className=" pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event location"
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Contact Person
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <IoIosContact className="text-black " size={22} />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    maxlength="12"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event location"
                  />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-grey-custom text-[13px] mt-[40px]">
                  First Name
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <Image
                      src="/person_icon.png"
                      alt="email"
                      width={20}
                      height={20}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue focus:outline-none text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your first name"
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Last Name
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <Image
                      src="/person_icon.png"
                      alt="email"
                      width={20}
                      height={20}
                    />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue focus:outline-none text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your last name"
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Phone Number
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <MdEventAvailable className="text-black " size={22} />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue focus:outline-none text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex justify-between items-center w-full ">
                  <p className="text-grey-custom text-[13px] mt-[40px] mb-3">
                    Birth Date
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showIcon={true}
                    showTimeInput={true}
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                    dateFormat="dd-m-yyyy"
                    placeholderText="Choose a date"
                    className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue focus:outline-none text-placeholder-blue focus:placeholder-placeholder-blue"
                  />
                </div>
              </div>
            )}
            <div className="flex justify-between items-center w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px]">
              <button
                onClick={handleLastPageEvent}
                className="text-white w-[220px]  mt-[50px] bg-[#F5167E] py-3  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Male
              </button>
              <button
                onClick={handleLastPageEvent}
                className="text-white w-[220px]  mt-[50px] bg-[#F5167E] py-3  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Female
              </button>
            </div>

            <div className="flex justify-start items-center w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px]">
              <button
                onClick={handleLastPageEvent}
                className="text-white w-[600px]  mt-[50px] bg-[#0C21C1] py-3  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Save Changes
              </button>
            </div>
          </form>
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
