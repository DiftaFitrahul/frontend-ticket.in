import { useState, useRef, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import { LoadingContext } from "@/context/LoadingContext";
import Cookies from "js-cookie";
import axios from "axios";
import Head from "next/head";

export default function UploadPayment() {
  const [imagePath, setImagePath] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [uploadedFilename, setUploadedFilename] = useState(null);
  const userEventId = JSON.parse(localStorage.getItem("eventData"))._id;
  const orderId = JSON.parse(localStorage.getItem("eventData")).code;
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const fileInputRef = useRef(null);

  const getImage = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];

      setImagePath(selectedImage);

      const filenameWithPrefix = `Bukti_Pembayaran.${selectedImage.name
        .split(".")
        .pop()}`;
      setUploadedFilename(filenameWithPrefix);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("halo banggggggg");
    console.log(imagePath);
    if (!imagePath) {
      toast.error("Anda belum mengupload bukti pembayaran!"),
        {
          zIndex: 9999,
        };
      return;
    }
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("paymentFile", imagePath);

      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/upload-payment?id=${userEventId}`,
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
          toast.success("Berhasil Mendaftar Event!"),
            {
              zIndex: 9999,
            };
          console.log(res.data);
          setInterval(() => {
            window.location.href = "/";
          }, 1000);
        })
        .catch((err) => {
          setIsLoading(false);

          if (err.response.data.message === "File too large") {
            toast.error("Ukuran file terlalu besar!"),
              {
                zIndex: 9999,
              };
          } else {
            toast.error("Gagal Upload Bukti Pembayaran!"),
              {
                zIndex: 9999,
              };
          }
        });

    } catch (error) {
      setIsLoading(false);
      toast.error("Gagal Upload Bukti Pembayaran!"),
        {
          zIndex: 9999,
        };
    }
  };

  useEffect(() => {
    if(Cookies.get("Auth") === undefined) {
      toast.error("Anda belum login!", {
        zIndex: 9999,
      });
      setInterval(() => {
        window.location.href = "/";
      }, 1000);
    }
  }, []);

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
    <>
    <Head>
        <title>Purchase | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col items-start p-10 lg:p-20 bg-white mt-[200px] w-[calc(70vw)]  mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
        <h1 className="text-[#242565] font-extrabold text-[30px] sm:text-[40px]">
          Pay with Bank Transfer
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10 ">
          <div className="flex flex-col w-full ml-0 sm:ml-10 mb-5">
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
              {totalPrice &&
                totalPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
            </p>
            <label className="text-[#242565] text-[20px] sm:text-[25px] mt-6">
              Account Number
            </label>
            <p className="text-black font-medium text-[15px] sm:text-[20px] sm:text-[25px]">
              BRI: 8878803200028943 <br />
              BNI: 8878803200028943 <br />
              BCA: 8878803200028943
            </p>
            <p className="text-[#242565] text-[20px] sm:text-[25px] mt-6 ">
              Upload payment receipt
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="text-black mt-5 text-[12px] sm:text-[20px] hover:underline"
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
          <button type="button" onClick={getImage} className="self-center my-7">
            <img src="\upload_payment_icon.png" alt="payment upload" />
          </button>

          <button
            type="submit"
            className="mt-[40px] self-center bg-[#F5167E] py-4 w-[130px] min-[250px]:w-[160px] min-[400px]:w-[280px] rounded-full shadow-xl font-medium"
          >
            Pay
          </button>
        </form>
      </div>
      <MakeEvent />
      <FooterComp />
    </div>
    </>
  );
}
