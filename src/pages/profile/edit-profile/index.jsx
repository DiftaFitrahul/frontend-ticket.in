"use client";
import { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import axios, { Axios } from "axios";
import Link from "next/link";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { listPhoneCode, listMonth } from "@/constant/constant.js";
import HeaderComp from "@/components/HeaderComp";
import { IoIosArrowRoundBack } from "react-icons/io";
import { data } from "autoprefixer";
import Head from "next/head";

export default function ProfilePage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [avatarImg, setAvatarImg] = useState(null);
  const avatarField = useRef(null);
  const [isSubmitEnable, setIsSubmitEnable] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleOpenFileDialog = (e) => {
    avatarField.current.click();
  };
  const handleChangeAvatar = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let file = await e.target.files[0];
    if (file) {
      setImageFile(file);
      const objectURL = URL.createObjectURL(file);
      setAvatarImg(objectURL);
    }
  };

  useEffect(() => {
    if (
      name === "" ||
      countryCode === "" ||
      phone === "" ||
      imageFile === null
    ) {
      setIsSubmitEnable(false);
    } else {
      setIsSubmitEnable(true);
    }
  }, [name, countryCode, phone, imageFile]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(Cookies.get("Auth"));
    setIsLoading(true);
    const formData = new FormData();
    const phoneNumber = countryCode + phone;
    formData.append("profilePhoto", imageFile);

    axios
      .put(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user",
        {
          name,
          phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("Auth")}`,
          },
        }
      )
      .then((res) => {
        axios
          .post(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/user/profile-photo",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${Cookies.get("Auth")}`,
              },
            }
          )
          .then((res) => {
            setIsLoading(false);
            toast.success("Update Profile Berhasil!"),
              {
                zIndex: 9999,
              };
            setTimeout(() => {
              window.location.href = "/profile";
            }, 1000);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
            toast.error("Update Profile Gagal!"),
              {
                zIndex: 9999,
              };
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("Update Profile Gagal!"),
          {
            zIndex: 9999,
          };
      });
  }

  return (
    <>
    <Head>
        <title>Edit Profile | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <HeaderComp />
      <div className="relative mt-[70px] bg-white min-w-full min-h-screen h-full p-5">
        <div className="block md:flex justify-between w-full h-full">
          <div className="w-full md:w-2/4 md:px-[40px]">
            <div className="py-5">
              <div className="flex justify-between items-start gap-2.5 mb-5">
                <div className="flex justify-between flex-col self-stretch">
                  <Link href="/profile" className="flex items-center text-4xl">
                    <IoIosArrowRoundBack />
                  </Link>
                  <h1 className="text-4xl font-semibold mt-5"> Edit Profile</h1>

                  {/* <div className="text-lg font-light">
                                        <p>Edit Profile for:</p>
                                        <p>username@gmail.com</p>
                                    </div> */}
                </div>
              </div>
              <div className="hover:cursor-pointer text-start">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="rounded-full object-cover w-[200px] h-[200px] object-center mb-5"
                    src={avatarImg ? avatarImg : "../../../../avatar.png"}
                    alt="Avatar Upload"
                    width={200}
                    height={200}
                  />
                  <input
                    id="avatarInput"
                    type="file"
                    ref={avatarField}
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={handleChangeAvatar}
                  />
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleOpenFileDialog}
                  >
                    Upload Photo
                  </button>
                </div>
              </div>
              <form className="pt-[20px] " onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6 py-3">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      value={name}
                      onChange={handleChangeName}
                      type="text"
                      name="Name"
                      id="Name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer"
                      placeholder=" "
                      required
                    />

                    <label
                      htmlFor="Name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First Name
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6 py-3">
                  <div className="mb-5">
                    <select
                      value={countryCode}
                      onChange={handleChangeCountryCode}
                      name="countryCode"
                      className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-500  active:text-gray-900 text-sm focus:border-t-0 focus:border-x-0 active:border-x-0 active:border-t-0 outline-0 focus:border-[#F5167E] focus:text-[#F5167E] block w-full py-2.5"
                    >
                      <option value="" readOnly disabled defaultValue>
                        Country Code
                      </option>
                      {listPhoneCode.map((item, index) => (
                        <option key={index} value={"+" + item.code}>
                          {"+" + item.code + " " + item.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      value={phone}
                      onChange={handleChangePhone}
                      type="tel"
                      pattern="[0-9]{11}"
                      name="phone"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`${
                    isSubmitEnable ? "btn-primary" : "btn-disabled"
                  } !py-3 mt-5 w-full`}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-2/4 pl-[50px] bg-[#000842] rounded-[15px] items-center justify-center aspect-square overflow-hidden">
            <Image
              src="../../../../illustrator-1.svg"
              width={500}
              height={500}
              className="w-[75%] object-contain"
              alt="illustrator-profile"
              priority={true}
            />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
