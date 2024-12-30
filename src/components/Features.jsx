import { useEffect, useRef } from 'react';
import { TfiPaintBucket } from "react-icons/tfi";
import gsap from "gsap";
import AnimatedTitle from './AnimatedTitle';

// Artistic overlay with paint-like effect
const ArtisticOverlay = () => (
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 mix-blend-overlay" />
);

// Image component with GSAP hover effect
const PortfolioImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    gsap.to(image, {
      scale: 1,
      duration: 0.1,
      ease: "power2.out"
    });

    const handleHover = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleHoverOut = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    image.addEventListener('mouseenter', handleHover);
    image.addEventListener('mouseleave', handleHoverOut);

    return () => {
      image.removeEventListener('mouseenter', handleHover);
      image.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <ArtisticOverlay />
    </div>
  );
};

// Artistic card component
const ArtCard = ({
  src,
  title,
  description,
  className = "",
  size = "medium"
}) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    gsap.set(content, { opacity: 0 });

    const handleHover = () => {
      gsap.to(content, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleHoverOut = () => {
      gsap.to(content, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleHover);
    card.addEventListener('mouseleave', handleHoverOut);

    return () => {
      card.removeEventListener('mouseenter', handleHover);
      card.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  const sizes = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    tall: "col-span-1 row-span-2"
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg ${sizes[size]} ${className}`}
    >
      <PortfolioImage src={src} alt={title} />
      <div
        ref={contentRef}
        className="absolute inset-0 p-6 flex flex-col justify-between bg-black/60"
      >
        <div className="space-y-2">
          <h2 className="font-serif text-2xl text-white tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="text-sm font-inter text-white/80 max-w-xs leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="h-1 w-16 bg-white/40" />
      </div>
    </div>
  );
};

// Creative header with GSAP animation
const CreativeHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="relative py-24 text-center space-y-8">
      <AnimatedTitle
        title={"<b>This</b> is my collection"} />
      <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
        A collection of moments captured through various mediums,
        each telling its own story through color, form, and emotion.
      </p>
      <div className="h-px w-32 bg-white/20 mx-auto" />
    </div>
  );
};

// Main portfolio grid with GSAP animations
const PortfolioGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom",
          end: "bottom bottom",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
    >
      <ArtCard
        size="tall"
        src="img/KitArtStop.webp"
        title="Pencil cat🐈"
        description="Traditional medium meets modern interpretation, exploring the timeless elegance of our feline companions."
      />

      <ArtCard
        src="img/idk.webp"
        title="Chrollo Lucilfer"
        description="Character study exploring the complex nature of Hunter × Hunter's enigmatic antagonist."
      />

      <ArtCard
        src="img/hero-2.webp"
        title="Rem: Dreams in Blue"
        description="A tribute to Re:Zero's beloved character, capturing both strength and gentleness."
      />

      <ArtCard
        size="large"
        src="img/banner.webp"
        title="Stream of Consciousness"
        description="A Twitch banner that blends digital art with streaming culture, creating an immersive viewer experience."
      />



      <ArtCard
        src="img/about.webp"
        title="Avengers!!"
        description="This is very old traditional that i did when i was in college for my cousin."
      />
      <div className="relative overflow-hidden rounded-lg bg-zinc-900 p-6 flex flex-col justify-between">
        <h2 className="font-serif text-2xl text-white italic">
          More Creations Coming Soon
        </h2>
        <TfiPaintBucket className="text-4xl text-white/60 self-end" />
      </div>
    </div>
  );
};

// Main component
const ArtisticPortfolio = () => (
  <section className="min-h-screen bg-transparent py-20">
    <CreativeHeader />
    <PortfolioGrid />
  </section>
);

export default ArtisticPortfolio;