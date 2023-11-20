import { useState } from "react";
import MakeEvent from "@/components/event/make_event";
import FooterComp from "@/components/footer_comp";
import HeaderComp from "@/components/header_comp";
import { BsCalendarWeek } from "react-icons/bs";

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
        <div className="flex flex-col items-start w-full px-[200px]">
          <p className="self-start text-blue-text font-extrabold text-[30px] ">
            Akurat Festival
          </p>
          <p className="text-[30px] text-blue-text font-normal">by Akurat</p>
          <div className="flex flex-row ">
            <BsCalendarWeek className="text-[30px] text-blue-text font-normal mt-2" />
            <div className="flex flex-col">
              <p className="text-[30px] text-blue-text font-normal ml-2">
                12 Desember 2021, 13.00 - 22.00 WIB
              </p>
              <p className="text-[30px] text-blue-text font-bold ml-2">
                Secapa AD
              </p>
              <p className="text-[30px] text-blue-text font-normal ml-2">
                Jl. Hegarmanah No. 152, Bandung Kota, Bandung Kota, Jawa Barat,
                Indonesia
              </p>
              <p className="text-[20px] text-blue-text font-semibold ml-2">
                Bandung
              </p>
            </div>
          </div>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-7">
            About Event
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            Akurat Festival is a National scale Music Festival presented by
            Akuratco and promoted by SanBejo. SanBejo, a community of students
            from various universities in Indonesia with different backgrounds
            but with the same vision and mission, namely creating a forum for
            channeling their desires for entertainment and creativity.
            Therefore, Akurat Festival 2023 has a message that young people are
            also allowed and able to speak up and take part in the arts and
            creativity industry.
          </p>
          <div className="flex justify-between rounded-xl px-7 py-2 mt-10 items-center bg-blue-text w-full font-bold shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
            <p className="text-xl">IDR 68k</p>
            <button className="text-white  w-[120px] bg-[#F5167E] py-3 font-medium  rounded-[100px] hover:opacity-90 ">
              Buy Now
            </button>
          </div>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-20">
            Important
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            You will receive E-Ticket after finish your payment
          </p>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-5">
            Something Wrong?
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            if problems continue, please contact us at
          </p>
          <button className="text-white mt-5  w-[120px] bg-[#F5167E] py-3 font-light  rounded-[100px] hover:opacity-90 ">
            Contact Us
          </button>
        </div>
      </div>

      <MakeEvent />
      <FooterComp />
    </div>
  );
}
