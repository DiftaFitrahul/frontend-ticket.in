import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  console.log("------------------------------------");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("------------------------------------");
        console.log(res);
        console.log("------------------------------------");
        Cookies.set("Auth", res.data.token, { expires: 1 });
        dispatch(login());
        setIsLoading(false);
        toast.success("Login Berhasil!"),
          {
            zIndex: 9999,
          };
        // setTimeout(() => {
        //   window.location.href = "/";
        // }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Login Gagal!"),
          {
            zIndex: 9999,
          };
      });
  }

  return (
    <main>
      <div className=" flex flex-row justify-center items-center h-[970px]  w-screen bg-neutral-100 p-5">
        <div className="flex flex-col justify-center items-center h-full  w-screen sm:w-1/2 relative bg-white    rounded-lg ml-[10px]">
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
          <h1 className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mx-10 font-medium text-[30px] text-black">
            Login
          </h1>
          <p className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[25px] mx-10 mb-1 font-normal text-[16px] text-black">
            If you don’t have an account <br></br> You can
            <Link
              href="/auth/register"
              className="self-start pl-[10px] mb-[100px] text-[16px] text-primary-blue font-semibold "
            >
              Register here !
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
                className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[270px]  border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="text-grey-custom text-[13px] mt-[40px]">Password</p>
            <div className="relative w-[calc(60vw)] sm:w-full">
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
                className="pl-7 pr-4 py-2   w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px]  border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue "
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

            <div className="relative mt-[10px] w-[calc(60vw)] sm:w-full">
              <Link
                href=""
                className="absolute inset-y-0 right-0 flex items-center "
              >
                <p className="text-black text-[12px]">Forgot password ?</p>
              </Link>
            </div>
            <div className="flex justify-center items-center w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px] ">
              <button
                type="submit"
                className="text-white w-[calc(60vw)] sm:w-[calc(25vw-50px)] sm:min-w-[270px]  mt-[50px] bg-primary-blue py-2  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                Login
              </button>
            </div>
          </form>

          {/* <div className="sm:self-start xl:ml-[120px] md:ml-[70px] sm:ml-[40px] w-[calc(25vw-50px)] min-w-[270px]">
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
          </div> */}
        </div>
        <div className="flex-col justify-center items-center h-full w-1/2 relative bg-dark-blue rounded-lg mr-[10px] ml-[10px] hidden min-[640px]:block ">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
            unoptimized
            className="absolute top-3 right-5"
          />

          <div className="self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-[150px] lg:mt-[70px] xl:mt-[0px] items-center mb-20  xl:mb-0 2xl:mb-20  2xl:w-[800px] xl:w-[650px] lg:w-[520px]  xl:h-[650px] lg:h-[500px] relative">
            <Image
              src="/auth_image.png"
              alt="Picture of the author"
              width={850}
              height={650}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h1 className="self-start text-white xl:pl-[120px] md:pl-[70px] sm:pl-[40px]  font-semibold xl:text-[40px]  md:text-[30px]">
            Sign in to TICKET.IN
          </h1>
          <p className="self-start text-white xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mb-[100px] pr-[20px] font-light xl:text-[20px] md:text-[15px]">
            Welcome back! Please enter your credentials to access your Ticket.in
            account.
          </p>
        </div>
      </div>
    </main>
  );
}
