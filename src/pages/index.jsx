import { IoIosArrowForward } from "react-icons/io";
import FilterButton from "@/components/home/FilterButton";
import CardEvent from "@/components/home/CardEvent";
import { useState, useEffect } from "react";
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import MakeEvent from "@/components/event/MakeEvent";
import axios from "axios";
import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const [eventsArray, setEventsArray] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('selectedEventData');

    fetchEventData();
  }, []);

  function fetchEventData() {
    setIsLoading(true);

    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/user/events")
      .then((res) => {
        setEventsArray(res.data.events);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  const handleCardEventClick = (index) => {
    setIsLoading(true);
    const selectedEventData = eventsArray[index];
    localStorage.setItem('selectedEventData', JSON.stringify(selectedEventData));
    console.log(selectedEventData);
    router.push('/event/detail');
    setIsLoading(false);
  };

  return (
    <>
    <Head>
			<title>Home | ticket.in</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

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
        <div className="flex flex-col min-[1350px]:flex-row  justify-between w-4/6 mt-[100px] mb-[100px] justify-center items-center">
          <div className="text-[#242565] text-[40px]">Upcoming Events</div>
          <div className="flex flex-wrap mt-5 xl:mt-0  justify-center items-center h-[150px]">
            <FilterButton title="Weekdays" />
            <FilterButton title="Event Type" className="my-5 sm:my-0" />
            <FilterButton title="Any Category" />
          </div>
        </div>
        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 xl:grid-cols-3 gap-7">
            {eventsArray.map((event, index) => (
              <button onClick={() => handleCardEventClick(index)}>
                <CardEvent key={index}
                  price= {event.eventPrice}
                  quota= {event.eventQuota}
                  title= {event.eventName}
                  subtitle= {event.eventDescription}
                  imagePath="/home/event_image.png"
                />
              </button>
              ))}
        </div>
        <MakeEvent />
        <FooterComp />
      </div>
    </main>
    </>
  );
}
