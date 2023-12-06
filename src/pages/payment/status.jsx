import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import Head from "next/head";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PaymentStatus() {
  useEffect(() => {
    if(Cookies.get("Auth") === undefined) {
      toast.error("Anda belum login!", {
        zIndex: 9999,
      });
      setInterval(() => {
        window.location.href = "/";
      }, 1000);
    }
  }, []);

  return (
    <>
    <Head>
        <title>Status | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col items-center p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[40px]">
          Payment is still verified
        </h1>
      </div>
      <MakeEvent />
      <FooterComp />
    </div>
    </>
  );
}
