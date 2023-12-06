import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
export default function MakeEvent({}) {
  const router = useRouter();
  const handleCreateEvent = () => {
    if (Cookies.get("Auth") === undefined) {
      toast.error("Gagal! Anda harus Login terlebih dahulu!", {
        zIndex: 9999,
      });
    } else if (JSON.parse(localStorage.getItem("dataUser")) !== "ADMIN") {
      toast.error(
        "Gagal! Anda tidak memiliki akses, Ajukan admin di Profile Page!",
        {
          zIndex: 9999,
        }
      );
    } else {
      router.push("/event/create");
    }
  };
  return (
    <div className="flex flex-col min-[800px]:flex-row items-center relative justify-center bg-[#FFF1E1] w-full mb-[100px] py-12 mt-[150px]">
      <img
        src="/home/person.png"
        alt="coba"
        className="w-fit sm:h-[500px]  min-[800px]:absolute  min-[800px]:left-[-20px] xl:left-[100px] 2xl:left-[200px] bottom-[-120px] "
      />

      <div className="flex flex-col mx-10">
        <h1 className="text-black font-bold text-[34px]">
          Make your own Event
        </h1>
        <p className="text-black text-[18px] my-4 w-fit sm:w-[360px] font-normal">
          Craft memories with a click. Create your event now
        </p>
        <button
          onClick={handleCreateEvent}
          className="text-white bg-[#F5167E] py-4 px-5 rounded-full text-center shadow-lg font-medium"
        >
          Create Events
        </button>
      </div>
    </div>
  );
}
