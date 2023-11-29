import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import MakeEvent from "@/components/event/MakeEvent";
import EventsRegisteredComp from "@/components/event/Registered";

export default function EventsRegistered() {
  const listDataEventRegistered = [
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan event ini akan menampilkan guest star terbaru bersama dengan hal-hal yang sangat menarik lainnya tunggu apalagi ayo daftar",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan event ini akan menampilkan guest star terbaru bersama dengan hal-hal yang sangat menarik lainnya tunggu apalagi ayo daftar",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan event ini akan menampilkan guest star terbaru bersama dengan hal-hal yang sangat menarik lainnya tunggu apalagi ayo daftar",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan event ini akan menampilkan guest star terbaru bersama dengan hal-hal yang sangat menarik lainnya tunggu apalagi ayo daftar",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan event ini akan menampilkan guest star terbaru bersama dengan hal-hal yang sangat menarik lainnya tunggu apalagi ayo daftar",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]">
        <h1 className="text-black text-center font-bold text-[36px]">
          Event Registered
        </h1>
      </div>

      {listDataEventRegistered.map((dataEventRegistered, index) => {
        return (
          <EventsRegisteredComp
            key={index}
            title={dataEventRegistered.title}
            description={dataEventRegistered.description}
            eventDate={dataEventRegistered.eventDate}
            ticketTotal={dataEventRegistered.ticketTotal}
            priceTotal={dataEventRegistered.priceTotal}
            imagePath={dataEventRegistered.imagePath}
          />
        );
      })}
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
