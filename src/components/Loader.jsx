
import React from "react";


const Loader = () => {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="relative">
          {/* Cute cat loader */}
          <div className="h-16 w-16 animate-bounce rounded-full bg-pink-200">
            <div className="absolute -left-2 -top-1 h-4 w-4 rounded-full bg-pink-200" /> {/* Left ear */}
            <div className="absolute -right-2 -top-1 h-4 w-4 rounded-full bg-pink-200" /> {/* Right ear */}
            <div className="flex h-full items-center justify-center">
              {/* Face */}
              <div className="text-center">
                <div className="flex justify-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-800" /> {/* Left eye */}
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-800" /> {/* Right eye */}
                </div>
                <div className="mt-1 h-1 w-2 mx-auto rounded-full bg-gray-800" /> {/* Mouth */}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-black font-semibold">Loading...</p>
        </div>
      </div>
    );

}

export default Loader;