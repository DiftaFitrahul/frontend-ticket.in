import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import MakeEvent from "@/components/event/MakeEvent";
import EventsRegisteredComp from "@/components/event/Registered";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function EventsRegistered() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/events", {
        headers: {
          Authorization: "Bearer " + Cookies.get("Auth"),
        },
      })
      .then((res) => {
        setData(res.data.userEvents);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]">
        <h1 className="text-black text-center font-bold text-[36px]">
          Event Registered
        </h1>
      </div>

      {data.map((dataEventRegistered, index) => {
        return (
          <EventsRegisteredComp
            key={index}
            title={dataEventRegistered.eventId.eventName}
            description={dataEventRegistered.eventId.eventDescription}
            code={dataEventRegistered.code}
            name={dataEventRegistered.userId.name}
            email={dataEventRegistered.userId.email}
            imagePath={dataEventRegistered.paymentFile}
          />
        );
      })}
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
