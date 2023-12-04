'use client'
import { useState } from "react";
import Image from "next/image";
import listCountry from '@/constant/country.json';
export default function ProfilePage(){
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [countryCode, setCountryCode] = useState("");
   return (
      <main className="relative bg-white min-w-full min-h-screen p-5 overflow-hidden">
         <div className="block md:flex justify-between w-full h-screen">
            <div className="w-full md:w-2/4 md:px-[40px]">
               <Image
                  src="@/../logo-ticketin.svg"
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
                           <p>Username@gmail.com</p>
                        </div>
                     </div>
                     <div>
                        <img className="w-auto mx-auto rounded-full object-cover object-center mb-5" src="@/../avatar.png" alt="Avatar Upload" width={100} height={100}/>
                        <button type="button" className="btn-primary">Upload Photo</button>
                     </div>

                  </div>
                  <form className="pt-[20px]">
                     <div className="grid md:grid-cols-2 md:gap-6 py-3">
                        <div className="relative z-0 w-full mb-5 group">
                           <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                           <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                           <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                           <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 md:gap-6 py-3">
                        <div>
                           <select id="countries" className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-400 text-sm focus:border-t-0 focus:border-x-0 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           >
                              {
                                 listCountry.map(item =>
                                 <option>{'+'+item.code}</option>
                                 )
                              }
                           </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                           <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                           <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                              Phone Number
                           </label>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-3 md:gap-6 py-3">
                        <div>
                           <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Day</label>
                           <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Day" required />
                        </div>
                        <div>
                           <select id="countries" className="border-2 border-x-0 border-t-0  border-gray-300 rounded-none text-gray-400 text-sm focus:border-t-0 focus:border-x-0 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           >
                              <option>January</option>
                              <option>Februari</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>August</option>
                              <option>September</option>
                              <option>Oktober</option>
                              <option>November</option>
                              <option>Desember</option>
                           </select>   
                        </div>
                        <div>
                           <label htmlFor="floating_year" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year</label>
                           <input type="text" name="floating_year" id="floating_year" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Year" required />
                        </div>
                     </div>
                     <div className="grid md:grid-cols-1 md:gap-6 py-3">
                        <div class="flex w-full gap-6 my-3">
                           <input class="hidden radio-label" type="radio" name="accept-offers" id="yes-button" checked="checked"/>
                           <label class="btn-primary w-full text-center">
                             Male
                           </label>
                           <input class="hidden radio-label" type="radio" name="accept-offers" id="no-button"/>
                           <label class="btn-primary w-full text-center">
                              Female
                           </label>
                        </div>
                     </div>
                     <div className="grid">
                        <button className="btn-primary !py-3 mt-5">Save Changes</button>
                     </div>
                  </form>
               </div>
            </div>
            <div className="hidden md:flex w-full md:w-2/4 px-5 bg-[#000842] rounded-[15px] items-center justify-center aspect-square">
               <Image
                  src="@/../illustrator-1.svg"
                  width={500}
                  height={500}
                  className="bg-auto"
                  alt="illustrator-profile"
               />  
            </div>
         </div>
      </main>
   )
}
