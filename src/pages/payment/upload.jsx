import { useState, useRef } from "react";
import MakeEvent from "@/components/event/make_event";
import FooterComp from "@/components/footer_comp";
import HeaderComp from "@/components/header_comp";

export default function UploadPayment() {
  const [imagePath, setImagePath] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFilename, setUploadedFilename] = useState(null);

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

      // Display the filename on top of the icon
      const filenameWithPrefix = `Bukti_Pembayaran.${selectedImage.name
        .split(".")
        .pop()}`;
      setUploadedFilename(filenameWithPrefix); 
    }
  };

  const handleDownload = () => {
    if (imagePath) {
      const imageUrl = URL.createObjectURL(imagePath);

      // Create a temporary link and trigger a click to start the download
      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = uploadedFilename || "image"; // Use uploaded filename if available, or a default name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Revoke the object URL to free up resources
      URL.revokeObjectURL(imageUrl);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col items-start p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[40px]">
          Pay with BRI Virtual Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10 ">
          <div className="flex flex-col w-full ml-10 mb-5">
            <label className="text-[#242565] text-[20px] sm:text-[25px]">
              Order ID
            </label>
            <p className="text-black font-medium text-[20px]  sm:text-[30px]">
              39168-D568A-329
            </p>
            <label className="text-[#242565] text-[20px] sm:text-[25px] mt-6">
              Total
            </label>
            <p className="text-black font-medium text-[20px] sm:text-[30px]">
              muhibnu2000@gmail.com
            </p>
            <label className="text-[#242565] text-[20px] sm:text-[25px] mt-6">
              BRI Virtual Account
            </label>
            <p className="text-black font-medium text-[20px]  sm:text-[30px]">
              8878803200028943
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
