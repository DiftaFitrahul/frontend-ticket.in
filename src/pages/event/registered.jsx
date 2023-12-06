import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import MakeEvent from "@/components/event/MakeEvent";
import EventsRegisteredComp from "@/components/event/Registered";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import NoDataFound from "@/components/event/NoDataFound";
import Carousel from "@/components/home/Carousel";
import Head from "next/head";

export default function EventsRegistered() {
  const [data, setData] = useState(undefined);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const sildes = [
    "/home/event_image.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "/home/event_image.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "/home/event_image.png",
  ];

  useEffect(() => {
    if(Cookies.get("Auth") === undefined) {
      toast.error("Anda belum login!", {
        zIndex: 9999,
      });
      setInterval(() => {
        window.location.href = "/";
      }, 1000);
    }
  
    let isMounted = true;

    const getDataEventRegistered = () => {
      setIsLoading(true);
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/events", {
          headers: {
            Authorization: "Bearer " + Cookies.get("Auth"),
          },
        })
        .then((res) => {
          if (isMounted) {
            setData(res.data.userEvents);
            toast.success("Sukses Mendapatkan Data!", {
              zIndex: 9999,
            });
            console.log(res.data);
          }
        })
        .catch((err) => {
          if (err.response?.data?.message === "No user events found!") {
            if (isMounted) {
              setData(undefined);
              toast.error("Tidak Ada Data!", {
                zIndex: 9999,
              });
            }
          } else {
            toast.error("Gagal Mendapatkan Data!", {
              zIndex: 9999,
            });
            console.log(err);
          }
        })
        .finally(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        });
    };

    getDataEventRegistered();

    return () => {
      // Clean up to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  return (
    <>
    <Head>
        <title>Event Registered | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]">
        <h1 className="text-black text-center font-bold text-[36px]">
          Event Registered
        </h1>
      </div>

      {data === undefined ? (
        <NoDataFound />
      ) : (
        data.map((dataEventRegistered, index) => {
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
        })
      )}
      <MakeEvent />
      <FooterComp />
    </div>
    </>
  );
}
