import React from 'react';
import { HandHeart } from 'lucide-react';

const NoiceButton = () => {
  return (
    <div className="relative overflow-hidden h-12 px-8 rounded-full bg-transparent text-black border-none cursor-pointer group flex justify-center items-center transition-colors ease-in-out">
      <button className="relative z-10 focus:outline-none ">
        <span className="relative z-10 font-semibold"><HandHeart/></span>
      </button>
      <span className="absolute top-0 left-0 w-full h-full scale-x-0 origin-left rounded-full bg-gradient-to-r from-purple-500 to-purple-500 transition-transform duration-[475ms] group-hover:scale-x-100"></span>
    </div>
  );
};

export default NoiceButton;
