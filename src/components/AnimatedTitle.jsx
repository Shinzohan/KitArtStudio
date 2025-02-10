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
    animationConfig = {
      ...animationConfig,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 1.2,
      ease: "power2.out",
      transform: "translate3d(0, 0, 0)",
    };

    const ctx = gsap.context(() => {
      const defaultConfig = {
        start: "top 65%", // Starts when the top of the element reaches 75% of the viewport height
        end: "center bottom",
        toggleActions: "play none none reverse",
        opacity: 1,
        ease: "power3.out",
        stagger: 0.04,
        duration: 1,
        scale: 1,
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
          x: () => gsap.utils.random(-200, 200),  // Random X position from -200 to 200
          y: () => gsap.utils.random(-200, 200),  // Random Y position from -200 to 200
          rotation: () => gsap.utils.random(-45, 45),  // Random rotation
          strokeDasharray: "1000",  // Initial stroke not visible
          strokeDashoffset: "1000",  // Initially hidden stroke
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
          strokeDashoffset: 0,  // Reveal the stroke like a pencil drawing
          x: 0,  // Move to final position (centered)
          y: 0,  // Move to final position (centered)
          rotation: 0,  // Reset rotation to original angle
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, [title, animationConfig]);

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
