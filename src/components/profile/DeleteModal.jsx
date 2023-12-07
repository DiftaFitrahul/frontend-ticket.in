import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import axios, { Axios } from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

export default function DeleteModal({ isOpen, onClose }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const dispatch = useDispatch();

  async function handleDelete(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .delete(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user",

        {
          headers: {
            Authorization: "Bearer " + Cookies.get("Auth"),
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        console.log("===================================");
        console.log(res);
        console.log("===================================");
        onClose();
        dispatch(logout());
        Cookies.remove("Auth");
        localStorage.removeItem("dataUser");
        toast.success("Delete Akun Berhasil"),
          {
            zIndex: 9999,
          };
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);

        toast.error("Gagal Delete Akun!"),
          {
            zIndex: 9999,
          };
      });
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 max-w-md w-full rounded-xl shadow-2xl">
              <h2 className="text-2xl text-center font-bold mb-10 text-[#000842] ">
                Yakin ingin menghapus akun?
              </h2>

              <div className="flex justify-evenly">
                <button
                  className="bg-gray-400 w-[90px] text-white  py-2 mr-2 rounded-lg"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-700 w-[90px] text-white  py-2 rounded-lg"
                  onClick={handleDelete}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
