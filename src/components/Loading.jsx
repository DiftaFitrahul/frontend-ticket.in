import React from 'react';
import { FiCommand } from 'react-icons/fi';

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed flex flex-col justify-center items-center top-0 bg-primary-500/80 backdrop-blur-[5px] z-[999]">
      <FiCommand className="text-[#242565] text-2xl animate-spin" size={60}/>
    </div>
  );
}