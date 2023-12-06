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
  const sildes = [
    eventsArray[1],
    eventsArray[0],
    eventsArray[3],
    eventsArray[5],
    eventsArray[7],
    eventsArray[9],
  ];
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
          <Carousel listEventTop={sildes} />

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
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, count);
}
