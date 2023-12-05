'use client';
import { useEffect, useState, useRef} from "react";
import Image from "next/image";
import { listPhoneCode,listMonth } from '@/constant/constant.js';
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
      <main className="relative bg-white min-w-full h-full p-5">
         <div className="block md:flex justify-between w-full h-full">
            <div className="w-full md:w-2/4 md:px-[40px]">
               <Image
                  src="{@/../logo-ticketin.svg"
                  width={197}
                  height={98}
                  className="bg-contain"
                  alt="logo"
               />   
               <div className="py-5">
                  <div className="flex justify-between items-start gap-2.5 mb-5">
                     <div className="flex justify-between flex-col self-stretch">
                        <div>
                           <h1 className="text-4xl font-semibold">Profile</h1>
                        </div>
                        <div className="text-lg font-light">
                           <p>Edit Profile for:</p>
                           <p>username@gmail.com</p>
                        </div>
                     </div>
                     <div className="hover:cursor-pointer">
                        <img 
                        className="mx-auto rounded-full object-cover w-[100px] h-[100px] object-center mb-5" 
                        src={avatarImg ? avatarImg :'@/../avatar.png'}
                        alt="Avatar Upload" 
                        width={100} 
                        height={100}/>
                        <input id="avatarInput"
                           type="file"
                           ref={avatarField}
                           className="hidden"
                           accept="image/png, image/jpeg"
                           onChange={handleChangeAvatar}
                        />
                        <button type="button" className="btn-primary" onClick={handleOpenFileDialog}>Upload Photo</button>
                     </div>

                  </div>
                  <form className="pt-[20px]">

                     <div className="grid md:grid-cols-2 md:gap-6 py-3">
                        <div className="relative z-0 w-full mb-5 group">
                           <input 
                              value={firstName}
                              onChange={handleChangeFirstName}
                              type="text" 
                              name="firstName" 
                              id="firstName" 
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer" 
                              placeholder=" " 
                              required 
                           />
                           
                           <label 
                              htmlFor="firstName" 
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              First name
                           </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                           <input
                              value={lastName}
                              onChange={handleChangeLastName}
                              type="text" 
                              name="lastName" 
                              id="lastName" 
                              className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer" placeholder=" " 
                              required 
                           />
                           <label 
                              htmlFor="lastName" 
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Last name
                           </label>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 md:gap-6 py-3">
                        <div className="mb-5">
                           <select 
                              value={countryCode}
                              onChange={handleChangeCountryCode}
                              name="countryCode"
                              className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-500  active:text-gray-900 text-sm focus:border-t-0 focus:border-x-0 active:border-x-0 active:border-t-0 outline-0 focus:border-[#F5167E] focus:text-[#F5167E] block w-full py-2.5"
                           >
                              <option value="" readOnly disabled defaultValue>Country Code</option>
                              {
                                 listPhoneCode.map((item,index) =>
                                 <option key={index} value={'+'+item.code}>{'+'+item.code+' '+item.country}</option>
                                 )
                              }
                           </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                           <input 
                              value={phone}
                              onChange={handleChangePhone}
                              type="tel" 
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                              name="phone" 
                              id="phone" 
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer" placeholder=" " 
                              required 
                           />
                           <label 
                              htmlFor="phone" 
                              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                           >
                              Phone Number
                           </label>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-3 md:gap-6 py-3">
                        <div>
                          <select 
                              value={day}
                              onChange={handleChangeDay}
                              name="day"
                              className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-500 text-sm focus:border-t-0 focus:border-x-0 active:border-x-0 active:border-t-0 outline-0 focus:ring-[#F5167E] focus:border-[#F5167E] block w-full py-2.5 "
                           >
                              <option value="" readOnly disabled defaultValue>Day</option>
                              {
                                Array.from({ length: 31 }, (_, index) =>
                                 <option key={index+1} value={index+1}>{index+1}</option>
                                 )
                              }
                           </select>
                        </div>
                        <div>
                           <select 
                              value={month}
                              name="month"
                              onChange={handleChangeMonth}
                              id="monthInput" 
                              className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-500 text-sm focus:border-t-0 focus:border-x-0 active:border-x-0 active:border-t-0 outline-0  focus:ring-[#F5167E] focus:border-[#F5167E] block w-full py-2.5 "
                           >
                             <option value="" readOnly disabled defaultValue>Month</option>
                              {
                                 listMonth.map((itemName,index) =>
                                 <option key={index} value={itemName}>{itemName}</option>
                                 )
                              }
                           </select>   
                        </div>
                        <div>
                           <label 
                              htmlFor="year" 
                              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#F5167E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                 Year
                           </label>
                           <input 
                           name="year"
                           onChange={handleChangeYear}
                           type="text"
                           value={year}
                           id="year" 
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#F5167E] peer" 
                           placeholder="Year" 
                           required />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-1 md:gap-6 py-3">
                        <div className="flex w-full gap-6 my-3">
                           <input 
                              className="invisible" 
                              type="radio"
                              id="male-checked" 
                              name="gender"
                              defaultValue={'male'}
                              onChange={handleChangeGender}
                              checked={gender === 'male'} />
                           <label 
                              htmlFor="male-checked"
                              className="button-label w-full text-center">
                             Male
                           </label>
                           <input 
                              className="invisible" 
                              type="radio" 
                              name="gender" 
                              onChange={handleChangeGender}
                              checked={gender === 'female'}
                              id="female-checked" 
                              defaultValue={'female'}
                           />
                           <label
                              htmlFor="female-checked"
                              className="button-label w-full text-center"
                           >
                              Female
                           </label>
                        </div>
                     </div>

                  </form>
                  <div className="grid">
                     <button type="submit" 
                     className={`${isSubmitEnable ? 'btn-primary' : 'btn-disabled'} !py-3 mt-5`} disabled={isSubmitEnable}>Save Changes</button>
                  </div>
               </div>
            </div>
            <div className="hidden md:flex w-full md:w-2/4 px-5 bg-[#000842] rounded-[15px] items-center justify-center aspect-square">
               <Image
                  src="@/../illustrator-1.svg"
                  width={500}
                  height={500}
                  className="bg-auto"
                  alt="illustrator-profile"
                  priority={true}
               />  
            </div>
         </div>
      </main>
   )
}
