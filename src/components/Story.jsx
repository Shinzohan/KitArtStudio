import AnimatedTitle from "./AnimatedTitle";
import StyleButton from "./styleButton";

const FloatingImage = () => {
  return (
    <div id="story" className="min-h-dvh w-screen bg-transparent text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general font-inter text-sm uppercase md:text-[10px]">
          WILL YOU LOOK AT THIS
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="<b>A</b> Li<b>t</b>tle sneak <br /> Peek of how I D<b>RA</b>W"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <video
                  src="/videos/Story.mp4"
                  alt="entrance.webp"
                  className="object-contain"
                  loop
                  muted
                  autoPlay
                />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="max-w-sm text-center font-inter text-violet-50 md:text-start">
              Just another gamer who loves to draw 🎮✏️ Lets create something cool together ✨
            </p>
            <StyleButton
              title="Bluesky"
              className="mt-5 shadow-[0_8px_0_#A19AD3] p-2"
              href="https://bsky.app/profile/kitartstop.bsky.social"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;