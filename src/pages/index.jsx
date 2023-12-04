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
import Sidebar from "@/components/SidebarComp";
import AboutUs from "@/components/home/AboutUs";
import Image from "next/image";
import Carousel from "@/components/home/Carousel";

export default function Home() {
  const [eventsArray, setEventsArray] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [showAbout, setShowAbout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("selectedEventData");

    fetchEventData();
  }, []);

  function fetchEventData() {
    setIsLoading(true);

    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/user/events")
      .then((res) => {
        setEventsArray(res.data.events);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  const handleCardEventClick = (index) => {
    setIsLoading(true);
    const selectedEventData = eventsArray[index];
    localStorage.setItem(
      "selectedEventData",
      JSON.stringify(selectedEventData)
    );
    console.log(selectedEventData);
    router.push("/event/detail");
    setIsLoading(false);
  };
  const sildes = [eventsArray[1], eventsArray[2], eventsArray[3]];
  console.log(sildes);

  return (
    <>
      <Head>
        <title>Home | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        {showAbout && <AboutUs setShowAbout={setShowAbout} />}
        <div className="flex flex-col justify-center items-center bg-neutral-100">
          <HeaderComp />
          <div className="min-w-full xl:mt-[100px]">
            {/* <Carousel>
              {sildes.map((event, index) => (
                <div className="min-w-full ">
                  <div className="absolute w-full h-full z-[10]">
                    <div className="text-black   flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center  items-center mx-[5%] sm:ml-10 py-20 ">
                      <img
                        src={event?.eventPhoto ?? "/home/event_image.png"}
                        alt="coba"
                        className=" w-[280px] h-[280px] min-[400px]:w-[350px] min-[400px]:h-[350px] sm:w-3/4 sm:w-[450px] sm:h-[450px] mr-0 sm:mr-10 rounded-2xl mt-20 shadow-2xl"
                      />
                      <div className="w-fit sm:w-[550px]  xl:mr-10 mt-5 xl:mt-20">
                        <p className="text-[18px] font-bold text-white">
                          {" "}
                          Movie Party
                        </p>
                        <h1 className="text-[35px] sm:text-[50px] font-bold text-white leading-[50px] mb-3 w-full">
                          {event?.eventName}
                        </h1>
                        <p className="text-[18px] font-light text-white">
                          SHERINA (Sherina Munaf) dan SADAM (Derby Romero), dua
                          teman kecil yang lama terpisah, bertemu kembali di
                          Kalimantan untuk pelepasliaran orang utan.
                        </p>
                        <div className="flex flex-col sm:flex-row mt-3 gap-3 z-[999]">
                          <button
                            key={event?._id}
                            onClick={() => handleCardEventClick(index)}
                            className="bg-[#DF1875] h-[50px] px-5 text-white font-medium rounded-full text-[18px] z-[999]"
                          >
                            Get Ticket
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-[0.9]"></div>
                  <img
                    src={event?.eventPhoto ?? "/home/event_image.png"}
                    className="min-w-full h-[1000px] xl:h-[900px]"
                  />
                </div>
              ))}
            </Carousel> */}
          </div>
          {/* <div className="flex flex-col min-[1350px]:flex-row  justify-between w-4/6 mt-[100px] mb-[100px] justify-center items-center">
            <div className="text-[#242565] text-[40px]">Upcoming Events</div>
            <div className="flex flex-wrap mt-5 xl:mt-0  justify-center items-center h-[150px]">
              <FilterButton title="Weekdays" />
              <FilterButton title="Event Type" className="my-5 sm:my-0" />
              <FilterButton title="Any Category" />
            </div>
          </div> */}
          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 xl:grid-cols-3 gap-7 mt-[100px]">
            {eventsArray.map((event, index) => (
              <button
                key={event._id}
                onClick={() => handleCardEventClick(index)}
              >
                <CardEvent
                  key={event._id}
                  price={event.eventPrice}
                  quota={event.eventQuota}
                  title={event.eventName}
                  subtitle={event.eventDescription}
                  imagePath={event.eventPhoto}
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

function pickRandomItems(array, count) {
  // Make a copy of the original array to avoid modifying it
  const shuffledArray = array.slice();

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Return the first 'count' elements from the shuffled array
  return shuffledArray.slice(0, count);
}
