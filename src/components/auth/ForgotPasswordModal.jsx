import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import axios, { Axios } from "axios";

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/forgot-password",
        {
          email,
          password,
        },
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Password Anda telah diubah, Silakan aktivasi melalui email!"),
          {
            zIndex: 9999,
          };
        onClose();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("Gagal Update Password!"),
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
              <h2 className="text-2xl font-bold mb-4 text-[#000842]">
                Input email dan password baru
              </h2>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 mb-4 text-black rounded-xl"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full p-2 border border-gray-300 mb-4 text-black rounded-xl"
                placeholder="Enter your new password"
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
