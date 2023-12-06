import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Carousel({ listEventTop = [] }) {
  const slides = listEventTop;
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const handleCardEventClick = (index) => {
    const selectedEventData = slides[index];
    localStorage.setItem(
      "selectedEventData",
      JSON.stringify(selectedEventData)
    );
    console.log(selectedEventData);
    router.push("/event/detail");
  };

  return (
    <div className="max-w-full h-[900px] w-full m-auto  relative group mt-[50px]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]?.eventPhoto})` }}
        className="w-full h-full   bg-center bg-cover duration-500 flex justify-center items-center  "
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-[0.85] "></div>
        <div className="text-black   flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center  items-center mx-[5%] sm:ml-10 py-20 ">
          <Image
            src={slides[currentIndex]?.eventPhoto ?? "/home/event_image.png"}
            alt="coba"
            width={450}
            height={450}
            layout="responsive"
            unoptimized={true}
            className=" mr-0 sm:mr-10 rounded-2xl mt-20 shadow-2xl z-[10] max-w-[620px]"
          />
          <div className="w-fit sm:w-[550px]  xl:mr-10 mt-5 xl:mt-20 z-[10]">
            <p className="text-[18px] font-bold text-white"> Movie Party</p>
            <h1 className="text-[35px] sm:text-[50px] font-bold text-white leading-[50px] mb-3 w-full">
              {slides[currentIndex]?.eventName ?? "Event Name"}
            </h1>
            <p className="text-[18px] font-light text-white">
              {slides[currentIndex]?.eventDescription ??
                "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. saso em deluga"}
            </p>
            <div className="flex flex-col sm:flex-row mt-3 gap-3 z-[999]">
              <button
                key={slides[currentIndex]?._id}
                onClick={() => handleCardEventClick(currentIndex)}
                className="bg-[#DF1875] h-[50px] px-5 text-white font-medium rounded-full text-[18px] "
              >
                Get Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-[20]">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-[20]">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-red-500" : "text-gray-500"
            } text-gray-500 rounded-full w-4 h-4 mx-2`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
