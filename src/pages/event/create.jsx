"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import Cookies from "js-cookie";
import "react-datepicker/dist/react-datepicker.css";
import { MdEventAvailable, MdMyLocation } from "react-icons/md";
import { PiTextTBold, PiMoneyFill } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import { format } from "date-fns";
import { LoadingContext } from "@/context/LoadingContext";
import Head from "next/head";
import { IoIosArrowUp, IoIosArrowDown, IoIosContact } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [startDate, setStartDate] = useState(null);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [lastPageEvent, setLastPageEvent] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [category, setCategory] = useState("Choose category");

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventQuota, setEventQuota] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const fileName = e.target.files[0]?.name;
    setImageFile(e.target.files[0]);
    setSelectedFileName(fileName);
  };

  const toggleCategory = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    const formattedDate = format(new Date(date), "dd MMMM yyyy HH:mm");
    setEventDate(formattedDate.toString());
  };

  const handleCategory = (value) => {
    setCategory(value);
    toggleCategory();
  };

  const handleLastPageEvent = () => {
    setLastPageEvent(!lastPageEvent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Anda belum mengupload Gambar Event!"),
        {
          zIndex: 9999,
        };
      return;
    }
    console.log(eventName);
    console.log(eventDescription);
    console.log(eventDate);
    console.log(eventPrice);
    console.log(eventQuota);

    if (
      eventName === "" ||
      eventDescription === "" ||
      eventDate === "" ||
      eventPrice === "" ||
      eventQuota === ""
    ) {
      toast.error("Anda belum mengisi semua field!"),
        {
          zIndex: 9999,
        };
      return;
    }

    try {
      setIsLoading(true);

      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/event`,
          {
            eventName,
            eventDescription,
            eventDate,
            eventPrice,
            eventQuota,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("Auth")}`,
            },
          }
        )
        .then((res) => {
          const formData = new FormData();
          formData.append("eventImage", imageFile);

          axios
            .post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/event/image?eventId=${res.data.event._id}`,
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
              toast.success("Berhasil Create Event!"),
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
              toast.error("Gagal Create Event!"),
                {
                  zIndex: 9999,
                };
            });
        })
        .catch((err) => {
          setIsLoading(false);

          toast.error("Gagal Create Event!"),
            {
              zIndex: 9999,
            };
        });
        
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Gagal Create Event!"),
        {
          zIndex: 9999,
        };
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    handleSubmit(e);
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

  return (
    <>
    <Head>
        <title>Create Event | ticket.in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <main>
      <div className=" flex flex-row justify-center items-center h-[970px]  w-screen bg-neutral-100 p-5">
        <div className="flex flex-col justify-center items-center  h-full  w-full sm:w-1/2 relative bg-white mt-20 mb-20 rounded-lg ml-[10px] ">
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
          <h1 className="sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] font-medium text-[22px] sm:text-[30px] text-black">
            Create Event
          </h1>
          <p className="self-start sm:self-start  xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mr-5 mb-1 font-normal text-[13px] sm:text-[16px] text-black ml-[70px] min-[350px]:ml-[80px] min-[450px]:ml-[90px] min-[550px]:ml-[100px] sm:ml-0">
            Make your own event right now.<br></br> Reach out to millions of
            people and make your event come true
          </p>

          <form
            onSubmit={lastPageEvent ? submitForm : () => {}}
            className="self-start sm:self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] ml-[30px] min-[350px]:ml-[45px] min-[450px]:ml-[90px] min-[550px]:ml-[100px] sm:ml-0"
          >
            {lastPageEvent ? (
              <div>
                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Event fee (in IDR)
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <PiMoneyFill className="text-black " size={22} />
                  </span>
                  <input
                    type="number"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Fill with 0 if the event is free"
                    value={eventPrice}
                    onChange={(e) => setEventPrice(e.target.value)}
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Enter the max amount of ticket
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <IoTicketOutline className="text-black " size={22} />
                  </span>
                  <input
                    type="number"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter max amount ticket"
                    value={eventQuota}
                    onChange={(e) => setEventQuota(e.target.value)}
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Upload Event photo
                </p>
                <div className="relative w-[200px]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    className=" pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event location"
                  />
                </div>

                {/* <p className="text-grey-custom text-[13px] mt-[40px]">
                  Contact Person
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <IoIosContact className="text-black " size={22} />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    maxlength="12"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event location"
                  />
                </div> */}
              </div>
            ) : (
              <div className="">
                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Event Name
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <MdEventAvailable className="text-black " size={22} />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>

                <p className="text-grey-custom text-[13px] mt-[40px]">
                  Description
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <PiTextTBold className="text-black " size={22} />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event description"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center w-full ">
                  <p className="text-grey-custom text-[13px] mt-[40px] mb-3">
                    Event Date
                  </p>
                  {/* <p className="text-grey-custom text-[13px] mt-[40px] mb-3 mr-5 xl:mr-0 hidden min-[550px]:block">
                    Event Type
                  </p> */}
                </div>
                <div className="w-full xl:w-[calc(25vw-50px)] flex flex-col min-[550px]:flex-row justify-between  ">
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    showIcon={true}
                    showTimeInput={true}
                    onKeyDown={(e) => {
                      e.preventDefault();
                      setEventDate(e.target.value);
                    }}
                    dateFormat="yyyy-MM-dd HH:mm"
                    placeholderText="Choose a date"
                    className="text-center border-l-4 border-r-4  border-red-500 w-[160px] 2xl:w-full p-3 rounded text-sm    focus:ring-0  text-black"
                  />
                  {/* <div className="relative flex flex-col sm:w-5/12 w-7/12">
                    <p className="text-grey-custom text-[13px] mt-[20px] mb-3 mr-5 xl:mr-0 block min-[550px]:hidden">
                      Event Type
                    </p>
                    <button
                      onClick={toggleCategory}
                      className="flex border  justify-between pr-2 pl-4 items-center border-[#B8BBC2] rounded-lg w-full h-[30px] "
                    >
                      <p className="text-black text-sm leading-3">{category}</p>
                      {isOpenCategory ? (
                        <IoIosArrowUp className="text-black " size={15} />
                      ) : (
                        <IoIosArrowDown className="text-black " size={15} />
                      )}
                    </button>
                    {isOpenCategory ? (
                      <div className="absolute bg-white z-[2] w-full mt-[35px] flex flex-col border text-black border-[#B8BBC2] rounded-lg">
                        {listCategory.map((item, i) => (
                          <button
                            onClick={() => handleCategory(item.name)}
                            key={i}
                            className="w-full flex"
                          >
                            <p className="text-[13px] py-2 hover:bg-primary-blue text-start hover:text-white w-full pl-4">
                              {item.name}
                            </p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div> */}
                </div>

                {/* <p className="text-grey-custom text-[13px] mt-[40px]">
                  Event Location
                </p>
                <div className="relative w-[200px]">
                  <span className="absolute inset-y-0 left-0 flex items-center ">
                    <MdMyLocation className="text-black " size={22} />
                  </span>
                  <input
                    type="text"
                    className="pl-7 pr-4 py-2 w-[calc(60vw)] sm:w-[calc(25vw-50px)]  sm:min-w-[250px] border-grey-custom border-b-2 focus:border-placeholder-blue  focus:outline-none   text-placeholder-blue focus:placeholder-placeholder-blue"
                    placeholder="Enter your event location"
                  />
                </div> */}
              </div>
            )}
            <div className="flex justify-start items-center sm:w-[calc(29vw-50px)] lg:w-[270px]  w-[180px] min-[300px]:w-[200px] min-[400px]:w-[270px]  ">
              <button
                type="button"
                onClick={handleLastPageEvent}
                className="text-white w-[120px]  mt-[50px] bg-[#F5167E] py-3  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
              >
                {lastPageEvent ? "Previous" : "Next"}
              </button>
              {lastPageEvent ? (
                <button
                  type="submit"
                  className="text-white w-[120px] ml-2 mt-[50px] bg-[#F5167E] py-3  rounded-[100px] hover:opacity-90 shadow-auth-button-shadow"
                >
                  Submit
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </form>
        </div>
        <div className="flex-col justify-center items-center h-full  w-1/2 relative bg-light-blue rounded-lg mr-[10px] ml-[10px] hidden min-[640px]:block bg-opacity-25">
          <Image
            src="/black_logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
            unoptimized
            className="absolute top-3 right-5"
          />

          <Image
            src="/auth_image.png"
            alt="Picture of the author"
            width={550}
            height={550}
            layout="responsive"
            objectFit="cover"
            className="self-start xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mt-32  lg:mt-[70px] xl:mt-[-20px] 2xl:mt-[-50px] mb-10  xl:mb-20 2xl:mb-0"
          />

          <h1 className="self-start text-primary-blue xl:pl-[120px] md:pl-[70px] sm:pl-[40px]  font-semibold xl:text-[40px]  md:text-[30px]">
            Your Event, Your Way!
          </h1>
          <p className="self-start text-primary-blue xl:pl-[120px] md:pl-[70px] sm:pl-[40px] mb-[100px] pr-[20px]  xl:text-[20px] md:text-[15px] ">
            It's time to turn your vision into reality. Create your dream event
            from scratch and watch it come to life. Let's get started.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
