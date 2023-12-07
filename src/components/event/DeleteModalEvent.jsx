import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import axios, { Axios } from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

export default function DeleteModalEvent({ isOpen, onClose, eventId }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const dispatch = useDispatch();

  async function handleDelete(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/event/${eventId}`,

        {
          headers: {
            Authorization: "Bearer " + Cookies.get("Auth"),
          },
        }
      )
      .then((res) => {
        setIsLoading(false);

        onClose();

        toast.success("Delete Event Berhasil"),
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

        toast.error("Gagal Delete Event!"),
          {
            zIndex: 9999,
          };
      });
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-[900]">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 max-w-md w-full rounded-xl shadow-2xl">
              <h2 className="text-2xl text-center font-bold mb-10 text-[#000842] ">
                Yakin ingin menghapus Event?
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
