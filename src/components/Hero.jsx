import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import StyleButton from "./styleButton";

gsap.registerPlugin();

const Hero = () => {
  const currentImgRef = useRef(null);

  // Clip path animation for image frame
  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(0 2%, 80% 0%, 75% 69%, 11% 100%)",
      borderRadius: "0% 0% 0% 0%",
    });
    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <img
            ref={currentImgRef}
            src="/videos/hero-1.webp"
            alt={`Hero image`}
            id="current-image"
            className="absolute-center absolute z-10 size-full object-cover object-center"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black">
          KIC<b>H</b>AN
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-black">
              KIT<b>A</b>RT
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-black font-semibold">
              Check out my drawings <br /> see if you like them
            </p>
            <StyleButton
              id="watch-trailer"
              title={"My Art!"}
              className="p-2"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-white">
        K<b>I</b>CHAN
      </h1>
    </div>
  );
};

export default Hero;