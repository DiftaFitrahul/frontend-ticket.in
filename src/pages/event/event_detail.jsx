import { useState } from "react";
import MakeEvent from "@/components/event/make_event";
import FooterComp from "@/components/footer_comp";
import HeaderComp from "@/components/header_comp";

export default function EventDetail() {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col items-center  bg-white mt-[200px] w-[450px] sm:w-[630px] lg:w-7/12   mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
          <img
            src="/home/event_image.png"
            alt="Picture of the author"
            className="w-5/6 px-7 py-10"
          />
        </div>
        <p className="self-start text-blue-text font-extrabold text-[30px]">
          Akurat Festival
        </p>
        <p>by Akurat</p>
      </div>

      <MakeEvent />
      <FooterComp />
    </div>
  );
}
