import HeaderComp from "@/components/HeaderComp";
import Logo from "@/../public/logo.png";
import eventImage2 from "@/../public/home/event_image2.png";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      <HeaderComp />
      {/* Background */}
      {/* <Image src={eventImage2} alt="event image" className="absolute !w-full" /> */}
      
      <section className="bg-[#242565] flex flex-col lg:flex-row rounded-[20px] p-4 md:p-10 w-[90%] max-w-[1050px]">
        <div className="grid place-items-center flex-shrink-0">
          <h1 className="text-[28px] font-bold lg:hidden">About Us</h1>
          <Image
            src={Logo}
            alt="InTask Logo"
            unoptimized
            className="w-[350px] lg:w-[400px] mr-5 flex-shrink-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[28px] font-bold hidden lg:block">About Us</h1>
          <p className="w-full p-5 text-[18px] text-justify">
            Kami adalah platform pemesanan tiket film terkemuka di Indonesia.
            Dengan koleksi film terbaru dan pemesanan yang mudah, kami hadir
            untuk memastikan pengalaman menonton Anda menjadi lebih
            menyenangkan. Dengan beragam pilihan acara dan bioskop top,
            TICKET.IN memudahkan Anda menikmati film favorit tanpa repot. Mari
            kita ciptakan momen tak terlupakan di layar lebar bersama-sama.
          </p>
        </div>
      </section>
    </main>
  );
}
