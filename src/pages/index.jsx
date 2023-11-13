"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";

import { IoIosArrowForward } from "react-icons/io";
import FilterButton from "@/components/home/filter_button";
import CardEvent from "@/components/home/card_event";
import { useState, useEffect } from "react";
import HeaderComp from "@/components/header_comp";
import FooterComp from "@/components/footer_comp";
import MakeEvent from "@/components/event/make_event";

export default function Home() {
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);
  const [showMorePersonalized, setShowMorePersonalized] = useState(false);

  const toggleShowMoreUpcoming = () => {
    setShowMoreUpcoming(!showMoreUpcoming);
  };
  const toggleShowMorePersonalized = () => {
    setShowMorePersonalized(!showMorePersonalized);
  };

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getUpcomingEventCardHide() {
    if (windowSize.width <= 800) {
      return 2;
    } else if (windowSize.width <= 1280) {
      return 4;
    } else {
      return 6;
    }
  }

  function getUpcomingEventCardShow() {
    if (windowSize.width <= 800) {
      return 4;
    } else if (windowSize.width <= 1280) {
      return 6;
    } else {
      return 9;
    }
  }

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
          <HeaderComp />
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
        <div className="flex flex-col min-[1350px]:flex-row  justify-between w-4/6   mt-[100px] mb-[100px] justify-center items-center">
          <div className="text-[#242565] text-[40px]">Upcoming Events</div>
          <div className="flex flex-wrap mt-5 xl:mt-0  justify-center items-center h-[150px]">
            <FilterButton title="Weekdays" />
            <FilterButton title="Event Type" className="my-5 sm:my-0" />
            <FilterButton title="Any Category" />
          </div>
        </div>
        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 xl:grid-cols-3 gap-7">
          {Array.from(
            {
              length: showMoreUpcoming
                ? getUpcomingEventCardShow()
                : getUpcomingEventCardHide(),
            },
            (_, index) => (
              <CardEvent
                month="JUN"
                date="20"
                title="Akurat Festival"
                subtitle="We’ll get you directly seated and inside for you to enjoy the show. Lest join with us"
                imagePath="/home/event_image.png"
              />
            )
          )}
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
        </div>
        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 xl:grid-cols-3 gap-7">
          {Array.from(
            {
              length: showMoreUpcoming
                ? getUpcomingEventCardShow()
                : getUpcomingEventCardHide(),
            },
            (_, index) => (
              <CardEvent
                month="APR"
                date="14"
                title="Wonder Girls 2010 Wonder Girls World Tour San Francisco"
                subtitle="We’ll get you directly seated and inside for you to enjoy the show."
                imagePath="/home/event_image2.png"
              />
            )
          )}
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <button
            onClick={toggleShowMorePersonalized}
            className=" h-[50px] w-[160px] text-[#3D37F1] border border-2 border-[#3D37F1] font-medium rounded-full text-[18px] mr-5"
          >
            {showMorePersonalized ? "Show Less" : "Show More"}
          </button>
        </div>
        <MakeEvent />
        <FooterComp />
      </div>
    </main>
  );
}
