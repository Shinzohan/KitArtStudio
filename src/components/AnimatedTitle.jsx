import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({
  title,
  containerClass,
  animationConfig = {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Use simplified animation for all users
    animationConfig = {
      ...animationConfig,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 0.6,
      transform: "translate3d(0, 0, 0)",
      blur: 0,
      ease: "power2.out",
    };

    const ctx = gsap.context(() => {
      const defaultConfig = {
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power3.out",
        stagger: 0.04,
        duration: 1,
        from: "start",
        scale: 1,
        rotation: 0,
        blur: 0,
      };

      const config = { ...defaultConfig, ...animationConfig };

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: config.start,
          end: config.end,
          toggleActions: config.toggleActions,
        },
      });

      const words = gsap.utils.toArray('.animated-word');

      titleAnimation.fromTo(
        words,
        {
          opacity: 0,
          scale: 0.7,
          y: 50,
          rotationX: 90,
          rotationY: 45,
          filter: "blur(15px)",
        },
        {
          opacity: config.opacity,
          scale: config.scale,
          transform: config.transform,
          ease: config.ease,
          stagger: {
            each: config.stagger,
            from: config.from,
          },
          duration: config.duration,
          rotationX: 0,
          rotationY: 0,
          filter: `blur(${config.blur}px)`,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, [title, animationConfig]);

  // Render method allows HTML in words (like for icons or styling)
  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word inline-block origin-center"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
