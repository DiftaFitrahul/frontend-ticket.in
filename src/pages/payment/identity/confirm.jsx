import { useEffect, useState } from "react";
import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import { useRouter } from "next/router";

export default function ConfirmIdentity() {
  const [isChecked, setChecked] = useState(false);
  const [userData, setUserData] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const router = useRouter();
  const eventSelected = JSON.parse(localStorage.getItem("selectedEventData"));
  const eventId = eventSelected._id;

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const fetchUserData = () => {
    setIsLoading(true);

    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/user", {
        headers: {
          Authorization: `Bearer ${Cookies.get("Auth")}`,
        },
      })
      .then((res) => {
        setUserData(res.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Gagal Mengambil Data!"), {
          zIndex: 9999,
        };
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if(!isChecked) {
      toast.error("Anda belum menyetujui syarat dan ketentuan!"), {
        zIndex: 9999,
      };
      return;
    }

    setIsLoading(true)
    axios
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register-event?eventId=${eventId}`, {    
      }, {
          headers: {
            Authorization: `Bearer ${Cookies.get("Auth")}`,
          },
      })
      .then((res) => {
        setIsLoading(false);
        toast.success("Berhasil Mendaftar Event!"), {
          zIndex: 9999,
        };
        console.log(res.data);
        localStorage.setItem("eventData", JSON.stringify(res.data.userEvent));
        setTimeout(() => {
          router.push("../upload");
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Gagal Mendaftar Event!"), {
          zIndex: 9999,
        };
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col items-start p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[40px]">
          Attende Information
        </h1>
        <p className="text-[#242565]  text-[20px]">
          Make sure all the information provided is correct. You cannot change
          it later
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-5 ">
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            {userData.name}
          </p>
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            {userData.email}
          </p>
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            {userData.phoneNumber}
          </p>

          <label className="flex items-start w-3/4 mt-20 bg-red">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox min-h-[20px] min-w-[20px] text-blue-500"
            />
            <span className="ml-8 text-black ">
              I agree to the Goers Terms and Conditions and the Goers Privacy
              Policy. Approve and press the continue button to process your
              order.
            </span>
          </label>

          <button
            type="submit"
            className="mt-[40px] self-center bg-[#F5167E] py-4 w-[300px] rounded-full shadow-xl font-medium"
          >
            Continue
          </button>
        </form>
      </div>
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
