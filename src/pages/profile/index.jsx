'use client';
import { useEffect, useState, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import HeaderComp from "@/components/HeaderComp";

export default function ProfilePage(){
  

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [countryCode, setCountryCode] = useState("");
   const [phone, setPhone] = useState("");
   const [day, setDay] = useState("");
   const [month, setMonth] = useState("");
   const [year, setYear] = useState("");
   const [gender, setGender] = useState("");
   const [avatarImg,setAvatarImg] = useState(null);
   const avatarField = useRef(null)
   const [isSubmitEnable,setIsSubmitEnable] = useState(false);
   
   const handleChangeFirstName= (e) => {
      setFirstName(e.target.value);
   };
   const handleChangeLastName= (e) => {
      setLastName(e.target.value);
   };
   const handleChangeCountryCode= (e) => {
      setCountryCode(e.target.value);
   };
   
   const handleChangePhone = (e) => {
      setPhone(e.target.value);
   };
   
   const handleChangeDay = (e) => {
      setDay(e.target.value);
   };
   const handleChangeMonth = (e) => {
      setMonth(e.target.value);
   };
   const handleChangeYear = (e) => {
      setYear(e.target.value);
   };
   const handleChangeGender = (e) => {
      setGender(e.target.value);
   };
   const handleOpenFileDialog = (e) => {
      avatarField.current.click()
   }
   const handleChangeAvatar = async(e) =>{
      e.stopPropagation();
      e.preventDefault();
      let file = await e.target.files[0];
      if(file){
         const objectURL = URL.createObjectURL(file);
         setAvatarImg(objectURL)         
      }
   }

   useEffect(() => {
      if(
         firstName && 
         lastName &&
         countryCode && 
         phone &&
         day &&
         month &&
         year &&
         gender
         ){
        setIsSubmitEnable(true)
      }
      else{
         setIsSubmitEnable(false)
      }   
   },
   [
     firstName,
     lastName,
     countryCode,
     phone,
     day,
     month,
     year,
     gender
   ])
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
                                        src={avatarImg ? avatarImg : '../../../avatar.png'}
                                        alt="Avatar Image"
                                        width={200}
                                        height={200} 
                                    />
                                        <Link href="/profile/edit-profile" className="flex items-center justify-center text-center text-blue-500">
                                            <span><AiOutlineEdit /></span> 
                                            <span className="ps-2">Edit Profile</span>
                                        </Link>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6 mt-[60px]">
                                <div>
                                    <p className="text-gray-500">First Name</p> 
                                    <p className="font-medium">Anisa Bintang</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">Last Name</p> 
                                    <p className="font-medium">Maharani</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">Gender</p> 
                                    <p className="font-medium">Female</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">Phone Number</p> 
                                    <p className="font-medium">+62 881 222 222</p> 
                                </div>
                                <div>
                                    <p className="text-gray-500">Date of Birth</p> 
                                    <p className="font-medium">28 Desember 2000</p> 
                                </div>
                            </div>
                        </div>
                    </div>
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
      
   )
}
