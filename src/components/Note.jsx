import { useEffect, useRef } from "react";
import { FaTwitter, FaInstagram, FaDribbble, FaYoutube} from "react-icons/fa";

const ArtistProfileCard = ({
  className = "",
  avatar = "/img/rem.png",
  name = "Kitart",
  tagline = "Digital Artist & Illustrator",
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "scale(0.8)";
      requestAnimationFrame(() => {
        card.style.transition = "opacity 1s ease, transform 1s ease";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      });
    }
  }, []);

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="artistic-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0.1 
                     C0.2,0 0.8,0 0.9,0.1 
                     C1,0.2 1,0.8 0.9,0.9 
                     C0.8,1 0.2,1 0.1,0.9 
                     C0,0.8 0,0.2 0.1,0.1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        ref={cardRef}
        style={{ clipPath: "url(#artistic-clip)" }}
        className={`fixed bottom-4 right-4 font-lucky p-6 w-80 bg-gradient-to-br z-40 from-gray-700 via-black to-gray-900 ${className}`}
      >
        {/* Geometric Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-2 left-2 right-2 h-px bg-black opacity-50"></div>
          <div className="absolute bottom-2 left-2 right-2 h-px bg-black opacity-50"></div>
          <div className="absolute left-2 top-2 bottom-2 w-px bg-black opacity-50"></div>
          <div className="absolute right-2 top-2 bottom-2 w-px bg-black opacity-50"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* User Avatar with Geometric Frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full transform scale-110 opacity-50 animate-pulse"></div>
            <img
              src={avatar}
              alt={`${name} Avatar`}
              className="relative w-24 h-24 select-none rounded-full border-2 border-white shadow-lg"
            />
          </div>

          {/* Artist Name with Cyber Effect */}
          <h1 className="mt-4 text-2xl font-bold text-transparent select-none bg-clip-text bg-white">
            {name}
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-white select-none text-sm">
            {tagline}
          </p>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://x.com/KitArtStop"
              className="text-white hover:text-purple-400 transform transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/kitartstop/"
              className="text-white hover:text-purple-400 transform transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@Kichan-sugoi"
              className="text-white hover:text-purple-400 transform transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistProfileCard;
