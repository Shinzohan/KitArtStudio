import React, { useRef, useCallback, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins once outside component
gsap.registerPlugin(ScrollTrigger);

// Memoized text component for better performance
const AnimatedText = memo(({ text }) => (
  <>
    {text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block">
        {word}&nbsp;
      </span>
    ))}
  </>
));

const Hero = () => {
  const containerRef = useRef(null);
  const currentImgRef = useRef(null);
  const contentRef = useRef(null);
  const textElements = useRef([]);

  // Optimize refs collection with useCallback
  const addToRefs = useCallback((el) => {
    if (el && !textElements.current.includes(el)) {
      textElements.current.push(el);
    }
  }, []);

  // Function to check if device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Combine GSAP animations into a single useGSAP call
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Initial states
      tl.set("#reveal-overlay", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Top-left to bottom-right
      })
      .set("#image-frame", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Top to bottom-left
      });
      
      // Main animation sequence
      tl.to("#reveal-overlay", {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", // Expand clip-path from top-right to bottom-right
        duration: 1.5,
        ease: "power4.inOut",
      })
      .to("#image-frame", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Expand clip-path from top-left to bottom-right
        duration: 1.8,
        ease: "power4.inOut",
      }, "-=1.2")
      .from("#current-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=1");

      // Batch process words animation
      const words = contentRef.current.querySelectorAll("span.word");
      tl.from(words, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.2,
      }, "-=0.8");

      // Only apply ScrollTrigger and scroll animations for non-mobile devices
      if (!isMobile()) {
        // ScrollTrigger animation
        gsap.set("#image-frame", {
          clipPath: "polygon(0 2%, 80% 0%, 75% 69%, 11% 100%)", // Clip-path for scroll trigger
          borderRadius: "0% 0% 0% 0%",
        });

        ScrollTrigger.create({
          trigger: "#image-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
          animation: gsap.from("#image-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
          }),
        });

        // Optimized scroll handler using requestAnimationFrame
        let ticking = false;
        const handleScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              const scrollY = window.scrollY;
              textElements.current.forEach((el, index) => {
                if (el) {
                  const direction = index % 2 === 0 ? -1 : 1;
                  const speed = 0.1 + (index * 0.05);
                  gsap.set(el, {
                    y: scrollY * speed * direction,
                  });
                }
              });
              ticking = false;
            });
            ticking = true;
          }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-dvh w-screen overflow-x-hidden">
      <div id="reveal-overlay" className="fixed inset-0 z-50 bg-black" />
      <div id="image-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <img
            ref={currentImgRef}
            src="/videos/hero-1.webp"
            alt="Hero image"
            id="current-image"
            className="absolute-center absolute z-10 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </div>
        <h1 ref={addToRefs} className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black">
          KITART
        </h1>
        <div id="content" ref={contentRef} className="absolute left-0 top-0 z-40 w-full h-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="relative font-zentry text-5xl font-black text-black/60 sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem]">
              <span 
                ref={addToRefs}
                className="absolute font-sriracha left-0 top-0 -z-10 text-[5rem] uppercase tracking-wide text-red-500/15 lg:text-[12rem]"
              >
                KitChan
              </span>
              <span 
                ref={addToRefs}
                className="font-mono font-bold opacity-0"
              >
                KITCHAN
              </span>
            </h1>
            <p ref={addToRefs} className="mt-5 w-full text-end font-lucky text-2xl leading-relaxed text-black/80 sm:text-xl md:text-2xl lg:w-1/3 lg:text-5xl">
              <AnimatedText 
                text="Hi! my name is kitchan a 🎨artist, blending creativity, skill, and innovation into every masterpiece."
              />
            </p>
          </div>
        </div>
      </div>
      <h1 ref={addToRefs} className="font-lucky text-5xl sm:right-10 sm:text-7xl md:text-9xl absolute bottom-5 right-5 text-yellow-400">
        KICHAN
      </h1>
    </div>
  );
};

export default memo(Hero);