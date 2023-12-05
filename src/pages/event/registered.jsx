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

  // useEffect(() => {
  //   let isMounted = true;

  //   const getDataEventRegistered = () => {
  //     setIsLoading(true);
  //     axios
  //       .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/events", {
  //         headers: {
  //           Authorization: "Bearer " + Cookies.get("Auth"),
  //         },
  //       })
  //       .then((res) => {
  //         if (isMounted) {
  //           setData(res.data.userEvents);
  //           toast.success("Sukses Mendapatkan Data!", {
  //             zIndex: 9999,
  //           });
  //           console.log(res.data);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.response.data.message === "No user events found!") {
  //           if (isMounted) {
  //             setData(undefined);
  //             toast.error("Tidak Ada Data!", {
  //               zIndex: 9999,
  //             });
  //           }
  //         } else {
  //           toast.error("Gagal Mendapatkan Data!", {
  //             zIndex: 9999,
  //           });
  //           console.log(err);
  //         }
  //       })
  //       .finally(() => {
  //         if (isMounted) {
  //           setIsLoading(false);
  //         }
  //       });
  //   };

  //   getDataEventRegistered();

  //   return () => {
  //     // Clean up to set isMounted to false when the component is unmounted
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]">
        <h1 className="text-black text-center font-bold text-[36px]">
          Event Registered
        </h1>
      </div>

      {data === undefined ? (
        <div className="min-w-full ">
          <Carousel>
            {sildes.map((data) => (
              <div className="min-w-full ">
                <div className="absolute w-full h-full z-[10]">
                  <div className="text-black   flex flex-col mt-10 xl:mt-0 xl:flex-row justify-center  items-center mx-[5%] sm:ml-10 py-20 ">
                    <img
                      src={data}
                      alt="coba"
                      className=" w-[280px] h-[280px] min-[400px]:w-[350px] min-[400px]:h-[350px] sm:w-3/4 sm:w-[450px] sm:h-[450px] mr-0 sm:mr-10 rounded-2xl mt-20"
                    />
                    <div className="w-fit sm:w-[550px]  xl:mr-10 mt-5 xl:mt-20">
                      <p className="text-[18px] font-bold text-white">
                        {" "}
                        Movie Party
                      </p>
                      <h1 className="text-[35px] sm:text-[50px] font-bold text-white leading-[50px] mb-3 w-full">
                        Petualangan Sherina 2
                      </h1>
                      <p className="text-[18px] font-light text-white">
                        SHERINA (Sherina Munaf) dan SADAM (Derby Romero), dua
                        teman kecil yang lama terpisah, bertemu kembali di
                        Kalimantan untuk pelepasliaran orang utan.
                      </p>
                      <div className="flex flex-col sm:flex-row mt-3 gap-3">
                        <button className="bg-[#DF1875] h-[50px] px-5 text-white font-medium rounded-full text-[18px]">
                          Get Ticket
                        </button>
                        {/* <button className="border border-white h-[50px] px-5 text-white font-medium rounded-full text-[18px]">
                          Learn More
                        </button> */}
                        {/* <button
                          className="border border-white h-[50px] px-5 text-white font-medium rounded-full text-[18px]"
                          onClick={() => {
                            setShowAbout(true);
                          }}
                        >
                          About Us
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full bg-gradient-to-br from-[#922455] to-[#C6B13F] opacity-90"></div>
                <img src={data} className="min-w-full h-[800px]" />
              </div>
            ))}
          </Carousel>
        </div>
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
  );
}
