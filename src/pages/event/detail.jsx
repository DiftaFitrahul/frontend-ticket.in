import { useEffect, useState } from "react";
import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import { BsCalendarWeek } from "react-icons/bs";
import { useRouter } from "next/router";

export default function EventDetail() {
  const eventSelected = localStorage.getItem("selectedEventData");
  const parsedEvent = JSON.parse(eventSelected);
  const ticketPrice = parsedEvent.eventPrice;
  const [buyNow, setBuyNow] = useState(false);
  const [count, setCount] = useState(1);
  const [totalTicketPrice, setTotalTicketPrice] = useState(ticketPrice);
  const router = useRouter();
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const handleBuy = () => {
    localStorage.setItem("totalPrice", totalTicketPrice);
    router.push("/payment/identity/confirm");
  };

  const handleBuyNow = () => {
    setBuyNow(true);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalTicketPrice(ticketPrice * (count - 1));
    }
  };
  const increment = () => {
    setCount(count + 1);
    setTotalTicketPrice(ticketPrice * (count + 1));
  };

  useEffect(() => {
    localStorage.removeItem("totalPrice");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col items-center  bg-white mt-[200px] w-[180px] min-[240px]:w-[240px] min-[310px]:w-[300px] min-[380px]:w-[350px] min-[550px]:w-[450px] sm:w-[630px] lg:w-7/12   mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
          <img
            src="/home/event_image.png"
            alt="Picture of the author"
            className="w-5/6 min-[380px]:px-2 min-[550px]:px-7 py-10"
          />
        </div>
        <div className="flex flex-col items-start w-full px-[40px] sm:px-[100px] lg:px-[200px]">
          <p className="self-start text-blue-text font-extrabold text-[30px] ">
            {parsedEvent.eventName}
          </p>
          <div className="flex flex-row ">
            <BsCalendarWeek className="text-[30px] text-blue-text font-normal mt-2 min-w-[27px] w-[27px] lg:w-[50px]" />
            <div className="flex flex-col">
              <p className="text-[17px] sm:text-[23px] lg:text-[30px] text-blue-text font-normal ml-2">
                {parsedEvent.eventDate}
              </p>
            </div>
          </div>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-7">
            About Event
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            {parsedEvent.eventDescription}
          </p>

          {buyNow ? (
            <div className="text-white self-center flex flex-col w-[180px] min-[240px]:w-[240px] min-[310px]:w-[300px] min-[380px]:w-[350px] min-[550px]:w-[450px] sm:w-[630px] sm:w-[600px] bg-blue-text px-10 py-5 mt-10 rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
              <h1 className="text-[#F5167E] text-[30px] font-bold">
                Your Order
              </h1>
              <p className="text-[15px] sm:text-[20px]">
                {IDR.format(parsedEvent.eventPrice)}
              </p>
              <div className="flex justify-end items-center w-full mb-5 mt-10">
                <button
                  onClick={decrement}
                  className="bg-[#F5167E] w-7 h-7 sm:w-10 sm:h-10 rounded-full text-[15px] sm:text-[23px]"
                >
                  -
                </button>
                <p className="text-[15px] sm:text-[20px] mx-5">{count}</p>
                <button
                  onClick={increment}
                  className="bg-[#F5167E] w-7 h-7 sm:w-10 sm:h-10 rounded-full text-[15px] sm:text-[23px]"
                >
                  +
                </button>
              </div>
              <div className="w-full h-[1px] bg-white mb-6 opacity-70"></div>
              <div className="flex justify-between">
                <p className="text-[15px] sm:text-[20px]">Total</p>
                <p className="text-[15px] sm:text-[20px]">
                  {IDR.format(totalTicketPrice)}
                </p>
              </div>
              <button
                className="bg-[#F5167E] w-1/2 min-w-[150px] font-semibold self-center py-2 mt-5 rounded-full text-[17px] sm:text-[23px]"
                onClick={handleBuy}
              >
                BUY TICKET
              </button>
            </div>
          ) : (
            <div className="text-white flex justify-between rounded-xl px-3 min-[400px]:px-7 py-2 mt-10 items-center bg-blue-text w-full font-bold shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
              <p className="text-[9px] min-[250px]:text-sm min-[400px]:text-xl">
                {IDR.format(parsedEvent.eventPrice)}
              </p>
              <button
                onClick={handleBuyNow}
                className="text-white text-[10px] min-[400px]:text-[15px] w-[90px] min-[400px]:w-[120px] bg-[#F5167E] py-3 font-medium  rounded-[100px] hover:opacity-90 "
              >
                Buy Now
              </button>
            </div>
          )}
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
