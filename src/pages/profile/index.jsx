"use client";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { AiOutlineEdit } from "react-icons/ai";
import HeaderComp from "@/components/HeaderComp";
import Modal from "@/components/profile/Modal";

export default function ProfilePage() {
  const avatarField = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [data, setData] = useState(undefined);

  let name = "difta";

  useEffect(() => {
    let isMounted = true;

    const getDataUser = () => {
      setIsLoading(true);
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/user", {
          headers: {
            Authorization: "Bearer " + Cookies.get("Auth"),
          },
        })
        .then((res) => {
          if (isMounted) {
            setData(res.data.user);
            console.log(res.data.user);
            toast.success("Sukses Mendapatkan Data User!", {
              zIndex: 9999,
            });
            console.log(res.data);
          }
        })
        .catch((err) => {
          toast.error("Gagal Mendapatkan Data!", {
            zIndex: 9999,
          });
          console.log(err);
        })
        .finally(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        });
    };

    getDataUser();

    return () => {
      // Clean up to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <HeaderComp />
      <div className="relative mt-[70px] bg-white min-w-full min-h-screen h-full p-5">
        <div className="block md:flex justify-between w-full h-full">
          <div className="w-full md:w-2/4 md:px-[40px]">
            <div className="py-5">
              <h1 className="text-4xl font-semibold">Profile</h1>
              <div className="mt-5 text-center">
                <div className="w-[200px] mx-auto text-center">
                  <img
                    className="rounded-full object-cover w-[200px] h-[200px] object-center shadow-md mb-5"
                    src={data?.profilePhoto ?? "../../../avatar.png"}
                    alt="Avatar Image"
                    width={200}
                    height={200}
                  />
                  <Link
                    href="/profile/edit-profile"
                    className="flex items-center justify-center text-center text-blue-500"
                  >
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span className="ps-2">Edit Profile</span>
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-2 md:gap-6 mt-[60px]">
                <div>
                  <p className="text-gray-500">Name</p>
                  <p className="font-medium text-gray-500">
                    {data?.name ?? "-"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium text-gray-500">
                    {data?.email ?? "-"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Role</p>
                  <p className="font-medium text-gray-500">
                    {data?.role ?? "-"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Phone Number</p>
                  <p className="font-medium text-gray-500">
                    {data?.phoneNumber ?? "-"}
                  </p>
                </div>
                <div>
                  <button
                    onClick={openModal}
                    className="text-white bg-[#F5167E] py-4 mt-[10px] lg:mt-[0px] min-[770px]:ml-[-10px] px-5 text-[13px] rounded-full text-center shadow-lg font-medium"
                  >
                    Request Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <div className="hidden md:flex w-full md:w-2/4 pl-[50px] bg-[#000842] rounded-[15px] items-center justify-center aspect-square overflow-hidden">
            <Image
              src="@/../illustrator-1.svg"
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
  );
}
