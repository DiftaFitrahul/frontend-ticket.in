import { useState } from "react";
import HeaderComp from "@/components/header_comp";
import FooterComp from "@/components/footer_comp";
import MakeEvent from "@/components/event/make_event";

export default function FillIdentityPayment() {
  const [selectedGender, setSelectedGender] = useState("Choose");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100 ">
      <HeaderComp />
      <div className="flex flex-col items-start p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[40px]">
          Attende Information
        </h1>
        <p className="text-[#242565]  text-[20px]">
          Make sure all the information provided is correct. You cannot change
          it later
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="text-[#242565]  text-[21px] mt-[40px] mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="pr-4 py-2 w-full border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue"
            placeholder="example: John Doe"
          />
          <label className="text-[#242565]  text-[21px] mt-[40px] mb-1">
            Email Address
          </label>
          <input
            type="email"
            className=" pr-4 py-2 w-full   border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue "
            placeholder="example@mail.com"
          />
          <label className="text-[#242565]  text-[21px] mt-[40px] mb-1">
            Mobile Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            maxlength="12"
            className=" pr-4 py-2 w-full  border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue "
            placeholder="+62 812 3456 7890"
          />
          <label className="text-[#242565]  text-[21px] mt-[40px] mb-[20px]">
            Gender
          </label>
          <select
            className="w-full sm:w-1/2  lg:w-1/2 xl:w-1/3 text-black border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option selected="selected" disabled>
              Choose
            </option>
            <option value="male" className="text-black ">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
          </select>
          <button
            type="submit"
            // onClick={() => alert("Payment Success")}
            className="mt-[80px] self-center bg-[#F5167E] py-4 w-[300px] rounded-full shadow-xl font-medium"
          >
            Create Events
          </button>
        </form>
      </div>
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
