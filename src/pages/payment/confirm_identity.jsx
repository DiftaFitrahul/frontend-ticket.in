import { useState } from "react";
import MakeEvent from "@/components/event/make_event";
import FooterComp from "@/components/footer_comp";
import HeaderComp from "@/components/header_comp";

export default function ConfirmIdentity() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Payment Success");
  }
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
            Muhammad Ibnu Ramdhani
          </p>
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            muhibnu2000@gmail.com
          </p>
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            +628123456789
          </p>
          <p className="text-black font-medium text-[20px] mt-3 sm:text-[30px]">
            Male
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
