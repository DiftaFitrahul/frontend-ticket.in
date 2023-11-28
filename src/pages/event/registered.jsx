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
        "Event ini menyajikan konser deny caknan yang sangat bagus dan akdhkah dkahsdhask jdhakduwkdhka sjdhakuwd hakdhuakjsd aushduoashduosaudasoud memuakaias asdasdaljhdiajsdljadjl",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan akdhkah dkahsdhask jdhakduwkdhka sjdhakuwd hakdhuakjsd aushduoashduosaudasoud memuakaias asdasdaljhdiajsdljadjl",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan akdhkah dkahsdhask jdhakduwkdhka sjdhakuwd hakdhuakjsd aushduoashduosaudasoud memuakaias asdasdaljhdiajsdljadjl",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan akdhkah dkahsdhask jdhakduwkdhka sjdhakuwd hakdhuakjsd aushduoashduosaudasoud memuakaias asdasdaljhdiajsdljadjl",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
    {
      imagePath: "/home/event_image.png",
      title: "Denny Caknan",
      description:
        "Event ini menyajikan konser deny caknan yang sangat bagus dan akdhkah dkahsdhask jdhakduwkdhka sjdhakuwd hakdhuakjsd aushduoashduosaudasoud memuakaias asdasdaljhdiajsdljadjl",
      eventDate: "12 Agustus 2021",
      ticketTotal: "10",
      priceTotal: "20000",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]"></div>
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
