import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import NoiceButton from './NoiceButton';
import {
  FaDiscord,
  FaTwitch,
} from 'react-icons/fa';
import { PiButterflyBold } from "react-icons/pi";

// Adding URLs to navItems
const socialItems = [
  { name: "Bluesky", icon: PiButterflyBold, url: "https://bsky.app/profile/kitartstop.bsky.social" },
  { name: "Discord", icon: FaDiscord, url: "https://discord.gg/c4NkWnKzc3" },
  { name: "Twitch", icon: FaTwitch, url: "https://www.twitch.tv/kiartstop" },
];

const mainNavItems = [
  { name: "Artwork", url: "/artwork" },
  { name: "Hire Me", url: "/hire" },
  { name: "Rules", url: "/rules" }
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
      style={{
        clipPath: "polygon(0% 45%, 10% 0%, 90% 0%, 100% 0%, 100% 100%, 90% 100%, 10% 100%, 0% 55%)",
      }}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Left section with Logo, Button, and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              
              <NoiceButton />
            </div>

            {/* Main Navigation Items */}
            <div className="hidden md:flex items-center gap-8">
              {mainNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="relative font-lucky text-black text-2xl hover:text-purple-500 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-500 after:left-0 after:bottom-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex h-full items-center rounded-lg">
            <div className="hidden md:flex gap-6">
              {socialItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : "_self"}
                    className="relative flex items-center justify-center w-10 h-10 text-black font-semibold group rounded-full overflow-hidden"
                  >
                    <Icon className="w-6 h-6 relative z-10 transition-transform duration-300 ease-in-out " />
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
