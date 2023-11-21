import MakeEvent from "@/components/event/make_event";
import FooterComp from "@/components/footer_comp";
import HeaderComp from "@/components/header_comp";

export default function PaymentStatus() {
  return (
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
  );
}
