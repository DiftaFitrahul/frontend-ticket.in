import authImage from "@/../public/auth_image.png";
import HeaderComp from "@/components/HeaderComp";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const validateEmail = (email) => {
    if (!email.includes("@") || !email.includes(".")) {
      return false;
    }
    return true;
  };

  const validateName = (name) => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };

  const validateMessage = (message) => {
    if (!message) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isEmailValid || !isNameValid || !isMessageValid || !email || !name || !message) {
      toast.error("Please fill in the form correctly");
      return;
    }
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/contact-message", {
        email,
        name,
        message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        toast.error("404 Endpoint Not Found");
      });
  };
  return (
    <main className="bg-white min-h-screen flex justify-center items-center">
      <HeaderComp />
      <div className="flex sm:px-10 w-full justify-center">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="w-full sm:w-1/2 p-[5%] sm:p-10 text-black flex flex-col gap-8 justify-center sm:min-w-[500px] max-w-[600px]"
        >
          <h1 className="w-full sm:self-start font-medium text-[30px] text-black">
            Contact Us
          </h1>
          <label>
            <span className="font-normal">Email</span>
            <input
              type="email"
              placeholder="Enter your email here"
              className={
                "w-full border-b-2 border-[#242565]/50 focus:border-[#242565] !outline-none bg-transparent py-2 " +
                (isEmailValid ? "" : "!border-red-500")
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(validateEmail(e.target.value));
              }}
            />
          </label>
          <label>
            <span className="font-normal">Name</span>
            <input
              type="text"
              placeholder="Enter your name here"
              className={
                "w-full border-b-2 border-[#242565]/50 focus:border-[#242565] !outline-none bg-transparent py-2 " +
                (isNameValid ? "" : "!border-red-500")
              }
              onChange={(e) => {
                setName(e.target.value);
                setIsNameValid(validateName(e.target.value));
              }}
            />
          </label>
          <label>
            <span className="font-normal">Message</span>
            <textarea
              type="text"
              placeholder="Enter your message here"
              className={
                "w-full min-h-[100px] max-h-[150px] border-b-2 border-[#242565]/50 focus:border-[#242565] !outline-none bg-transparent py-2 " +
                (isMessageValid ? "" : "!border-red-500")
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setIsMessageValid(validateMessage(e.target.value));
              }}
            />
          </label>
          <button className="w-full bg-primary-blue rounded-full py-2 text-white font-semibold hover:shadow-[0_0_5px_#242565] transition">
            Send
          </button>
        </form>
        <section className="w-1/2 bg-[#242565] lg:flex flex-col justify-center items-center gap-8 p-5 lg:p-10 rounded-[20px] hidden max-w-fit">
          <Image
            src={authImage}
            className="w-full lg:w-[80%] min-w-[200px] max-w-[550px]"
            alt="auth_image"
            priority
          />
          <h1 className="font-semibold text-center lg:text-3xl">
            Contact us if you have any questions
          </h1>
        </section>
      </div>
    </main>
  );
}
