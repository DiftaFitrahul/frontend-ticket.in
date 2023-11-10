import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { AiOutlinePhone } from "react-icons/ai";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toogleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  // TODO: BEAUTIFY ERR AND SUCCESS LOG
  async function handleSubmit(e) {
    e.preventDefault();

    axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/user/register", {
      email: email,
      name: username,
      password: password,
      phoneNumber: phoneNumber,
    })
    .then((res) => {
      alert("Register Success");
      window.location.href = "/auth/login";
    })
    .catch((err) => {
      alert(err.response.data.message);
    })
  }

  return (
    <main>
      <div className=" flex flex-row justify-center items-center h-screen w-screen bg-neutral-100">
        <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] w-screen sm:w-1/2 relative bg-white mt-20 mb-20 rounded-lg ml-[10px]">
          <div className="block min-[640px]:hidden absolute top-5 left-5">
            <Image
              src="/black_logo.png"
              alt="Picture of the author"
              width={100}
              height={100}
              unoptimized
              className="p-0"
            />
          </div>
          <h1 className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] font-medium text-[30px] text-black">
            Register
          </h1>
          <p className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[25px] mb-1 font-normal text-[16px] text-black">
            If you already have an account <br></br> You can
            <Link
              href="/auth/login"
              className="self-start pl-[10px] mb-[100px] text-[16px] text-primary-blue font-semibold "
            >
              Login here !
            </Link>
          </p>

          <form
            onSubmit={handleSubmit}
            className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px]"
          >
            <p className="text-grey-custom text-[13px] mt-[40px]">Email</p>
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
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">Username</p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/person_icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type="text"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">Phone Number</p>
            <div className="relative w-[200px]">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <AiOutlinePhone />
              </span>
              <input
                type="text"
                className="pl-7 pr-4 py-2 w-[calc(25vw-50px)]  sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your username"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">Password</p>
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
                className="pl-7 pr-4 py-2  w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue "
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <p className="text-grey-custom text-[13px] mt-[40px]">
              Confirm Password
            </p>
            <div className="relative ">
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <Image
                  src="/lock_icon.png"
                  alt="password"
                  width={20}
                  height={20}
                />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="pl-7 pr-4 py-2  w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue "
                placeholder="Enter your password"
              />
              <button type="button" onClick={toogleConfirmPassword}>
                <span className="absolute inset-y-0 right-0 flex items-center ">
                  <Image
                    src={
                      showConfirmPassword
                        ? "/eye_visible.png"
                        : "/eye_invisible.png"
                    }
                    alt="password"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>

            <div className="relative mt-[10px]">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <span className="absolute inset-y-0 left-5 mt-[2.5px] flex text-black text-[12px]">
                  Remember me
                </span>
              </label>
              <div>
                <Link
                  href=""
                  className="absolute inset-y-0 right-0 flex items-center "
                >
                  <p className="text-black text-[12px]">Forgot password ?</p>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px]">
              <button
                type="submit"
                className="text-white w-[calc(25vw-50px)] sm:min-w-[270px] min-w-[340px] mt-[50px] bg-primary-blue py-2  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Register
              </button>
            </div>
          </form>

          <div className="sm:self-start xl:ml-[120px] md:ml-[70px] sm:ml-[40px] w-[calc(25vw-50px)] min-w-[270px]">
            <p className="flex justify-center  text-black text-[16px] my-[30px]">
              or continue with
            </p>
            <div className="flex flex-row justify-center">
              <button>
                <Image
                  src="/facebook.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  unoptimized
                />
              </button>
              <div className="mx-[7px]"></div>
              <button>
                <Image
                  src="/google.png"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  unoptimized
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center h-[calc(100vh-20px)] w-1/2 relative bg-dark-blue rounded-lg mr-[10px] ml-[10px] hidden min-[640px]:block ">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
            unoptimized
            className="absolute top-3 right-5" // just an example
          />

          <img
            src="/auth_image.png"
            alt="Picture of the author"
            className="self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[150px]  lg:mt-[70px] xl:mt-[0px]  items-center mb-20 xl:w-[850px] lg:w-[650px]  xl:h-[650px] lg:h-[500px]" // just an example
          />
          <h1 className="self-start text-white xl:pl-[120px] md:pl-[70px] sm:pl-[40px]  font-semibold xl:text-[40px]  md:text-[30px]">
            Sign up to TICKET.IN
          </h1>
          <p className="self-start text-white xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mb-[100px] pr-[20px] font-light xl:text-[20px] md:text-[15px]">
            Please fill all the field to register your account in Ticket.in
          </p>
        </div>
      </div>
    </main>
  );
}
