import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import axios, { Axios } from "axios";

export default function Modal({ isOpen, onClose }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/request-admin",
        {
          password,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("Auth"),
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Update Role Berhasil! Silahkan Login Ulang!"),
          {
            zIndex: 9999,
          };
        onClose();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        if (err?.response?.data?.message === "User is already an admin!") {
          toast.error("Role Kamu sudah Admin!"),
            {
              zIndex: 9999,
            };
        } else if (err?.response?.data?.message === "Password is incorrect!") {
          toast.error("Password Salah!"),
            {
              zIndex: 9999,
            };
        } else {
          toast.error("Gagal Update Role!"),
            {
              zIndex: 9999,
            };
        }
      });
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 max-w-md w-full rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-[#000842]">
                Input password
              </h2>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 mb-4 text-black rounded-xl"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  className="bg-gray-400 text-white px-4 py-2 mr-2 rounded-lg"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
