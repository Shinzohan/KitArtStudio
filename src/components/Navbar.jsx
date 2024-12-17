import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import NoiceButton from './NoiceButton';
import { 
  FaDiscord, 
  FaTwitch, 
  FaTwitter,
  FaInstagram,
  FaLeaf
} from 'react-icons/fa';

// Adding URLs to navItems
const navItems = [
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/kichandrawings/profilecard/" },
  { name: "Bluesky", icon: FaLeaf, url: "https://bsky.app/profile/kitartstop.bsky.social" },
  { name: "Discord", icon: FaDiscord, url: "https://discord.gg/c4NkWnKzc3" },
  { name: "Twitch", icon: FaTwitch, url: "https://www.twitch.tv/kiartstop" },
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/KitArtStop" }
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
      ease: "power1.inOut"
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed overflow-hidden inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 rounded-3xl"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <NoiceButton />
          </div>
          
          {/* Navigation Links */}
          <div className="flex h-full items-center rounded-lg">
            <div className="hidden md:flex gap-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : "_self"} // Ensure external links open in a new window
                    className="relative flex items-center justify-center w-10 h-10 text-black font-semibold group rounded-full overflow-hidden"
                  >
                    {/* Icon */}
                    <Icon className="w-6 h-6 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    
                    {/* Background Animation */}
                    <span className="absolute inset-0 bg-purple-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
