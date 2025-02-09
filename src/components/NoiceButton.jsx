import React, { useState } from 'react';
import { BsBagHeart, BsCartX } from "react-icons/bs";
import { createPortal } from 'react-dom';

const Toast = ({ message, isVisible, onClose }) => {
  return createPortal(
    <div className={`fixed bottom-4 left-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <span>{message}</span>
      <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded-full">
        <BsCartX size={16} />
      </button>
    </div>,
    document.body
  );
};

const NoiceButton = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <div 
        className="relative overflow-hidden h-24 px-20  bg-transparent text-black border-none cursor-pointer group flex justify-center items-center transition-colors ease-in-out" 
        onClick={handleClick}
      >
        <button className="relative z-10 focus:outline-none">
          <span className="relative z-10 font-semibold">
            <BsBagHeart size={20} />
          </span>
        </button>
        <span className="absolute top-0 left-0 w-full h-full scale-x-0 origin-left  bg-gradient-to-r from-amber-900 to-amber-800 transition-transform duration-[475ms] group-hover:scale-x-100"></span>
      </div>
      
      <Toast 
        message="Work in progress..." 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </>
  );
};

export default NoiceButton;
