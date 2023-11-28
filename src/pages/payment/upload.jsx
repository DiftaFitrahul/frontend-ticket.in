import { useState, useRef } from "react";
import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import axios from "axios";

// TODO: SEND PAYMENT DATA TO BACKEND
export default function UploadPayment() {
  const [imagePath, setImagePath] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFilename, setUploadedFilename] = useState(null);
  const orderId = JSON.parse(localStorage.getItem("eventData")).code;
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const fileInputRef = useRef(null);

  const getImage = () => {
    fileInputRef.current.click();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Payment Success");
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImagePath(selectedImage);

      const filenameWithPrefix = `Bukti_Pembayaran.${selectedImage.name
        .split(".")
        .pop()}`;
      setUploadedFilename(filenameWithPrefix); 
    }
  };

  const handleDownload = () => {
    if (imagePath) {
      const imageUrl = URL.createObjectURL(imagePath);

      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = uploadedFilename || "image";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(imageUrl);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col items-start p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[40px]">
          Pay with Bank Transfer
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10 ">
          <div className="flex flex-col w-full ml-10 mb-5">
            <label className="text-[#242565] text-[20px] sm:text-[25px]">
              Order ID
            </label>
            <p className="text-black font-medium text-[20px]  sm:text-[30px]">
              {orderId}
            </p>
            <label className="text-[#242565] text-[20px] sm:text-[25px] mt-6">
              Total
            </label>
            <p className="text-black font-medium text-[20px] sm:text-[30px]">
              {totalPrice && totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
              }
            </p>
            <label className="text-[#242565] text-[20px] sm:text-[25px] mt-6">
              Account Number
            </label>
            <p className="text-black font-medium text-[20px] sm:text-[25px]">
              BRI: 8878803200028943 <br />
              BNI: 8878803200028943 <br />
              BCA: 8878803200028943

            </p>
            <p className="text-[#242565] text-[20px] sm:text-[25px] mt-6 ">
              Upload payment receipt
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="text-black mt-5 text-[20px] hover:underline"
          >
            {uploadedFilename && <p>{uploadedFilename}</p>}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleChange}
            accept="image/*"
          />
          <button onClick={getImage} className="self-center my-7">
            <img src="\upload_payment_icon.png" alt="payment upload" />
          </button>

          <button
            type="submit"
            className="mt-[40px] self-center bg-[#F5167E] py-4 w-[300px] rounded-full shadow-xl font-medium"
          >
            Pay
          </button>
        </form>
      </div>
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
