import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className=" flex flex-row justify-center items-center h-screen w-screen bg-neutral-100">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] w-1/2 relative bg-white mt-20 mb-20 rounded-lg ml-[10px]">
          <h1 className="self-start pl-[120px] font-medium text-[30px] text-black">
            Login
          </h1>
          <p className="self-start pl-[120px] font-light text-[20px] text-black">
            If you don’t have an account register <br></br> You can
            <Link
              href=""
              className="self-start pl-[10px] mb-[100px] font-light text-[20px] text-black text-primary-blue font-semibold "
            >
              Register here !
            </Link>
          </p>

          <form className="self-start pl-[120px]">
            <p className="text-grey-custom text-[13px]">Email</p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/email_icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type="email"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] border-b border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your email address"
              />
            </div>

            <p className="text-grey-custom text-[13px]">Email</p>
            <div className="relative ">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/lock_icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)] border-b border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your password"
              />
              <button type="button" onClick={togglePassword}>
                <span className="absolute inset-y-0 right-0 flex items-center ">
                  <Image
                    src={
                      showPassword ? "/eye_visible.png" : "/eye_invisible.png"
                    }
                    alt="email"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] w-1/2 relative bg-dark-blue rounded-lg mr-[10px] ml-[10px] ">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
            unoptimized
            className="absolute top-3 right-5" // just an example
          />

          <Image
            src="/auth_image.png"
            alt="Picture of the author"
            width={600}
            height={600}
            unoptimized
            className="mb-20" // just an example
          />
          <h1 className="self-start pl-[120px] font-semibold text-[40px]">
            Sign in to TICKET.IN
          </h1>
          <p className="self-start pl-[120px] mb-[100px] font-light text-[20px]">
            Welcome back! Please enter your credentials to access your Ticket.in
            account.
          </p>
        </div>
      </div>
    </main>
  );
}
