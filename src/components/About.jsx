import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedTitle from "./AnimatedTitle";
import Slider from "./slider";
import { Paintbrush, Code, Figma, PenTool } from 'lucide-react';

const BubbleIcon = ({ children, size = "h-16 w-16" }) => (
  <div className={`rounded-full bg-white/10 backdrop-blur-sm p-5 shadow-lg ${size} flex items-center justify-center`}>
    {children}
  </div>
);

const About = () => {
  const bubblesRef = useRef([]);

  useEffect(() => {
    bubblesRef.current.forEach((bubble) => {
      // Floating animation
      gsap.to(bubble, {
        y: `-=${20}`,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Slight rotation for animation
      gsap.to(bubble, {
        rotate: 15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      bubblesRef.current.forEach((bubble) => {
        gsap.killTweensOf(bubble);
      });
    };
  }, []);

  const addBubbleRef = (el) => {
    if (el && !bubblesRef.current.includes(el)) {
      bubblesRef.current.push(el);
    }
  };

  return (
    <div id="about" className="min-h-screen w-screen overflow-hidden relative">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Bubble near slider */}
        <div
          ref={addBubbleRef}
          className="absolute top-1/4 left-40 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block"
        >
          <BubbleIcon size="h-20 w-20 z-20">
            <Paintbrush className="text-blue-500" />
          </BubbleIcon>
        </div>

        {/* Top Right Bubble */}
        <div
          ref={addBubbleRef}
          className="absolute top-1/4 z-20 right-40 transform translate-x-1/2 translate-y-1/3 hidden sm:block"
        >
          <BubbleIcon size="h-20 w-20 ">
            <Figma className="text-purple-500" />
          </BubbleIcon>
        </div>

        {/* Bottom Left Bubble */}
        <div
          ref={addBubbleRef}
          className="absolute z-20 bottom-2 left-1/3 transform -translate-x-1/2 -translate-y-1/3 hidden sm:block"
        >
          <BubbleIcon size="h-20 w-20 ">
            <PenTool className="text-yellow-500" />
          </BubbleIcon>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase text-white md:text-[10px]">
          Welcome To My Art Gallery
        </p>
        <AnimatedTitle
          title="Free<b>la</b>ncer Th<b>a</b>t Does<br /> E<b>v</b>er<b>y</b>thing U <b>Ever </b>im<b>a</b>gine"
          containerClass="mt-5 text-center elative z-10"
          
        />
        <div className="about-subtext">
          <p className="text-gray-500">
            My Skills💕
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default About;
