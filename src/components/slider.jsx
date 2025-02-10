import React, { useState, useEffect } from 'react';
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { BsFillPencilFill } from "react-icons/bs";
import { FaPaintBrush, FaEdit, FaCheckCircle } from 'react-icons/fa';

const RotatingInspiration = () => {
  const [translateZ, setTranslateZ] = useState(200);
  const [iconSize, setIconSize] = useState(16);

  const skills = [
    { icon: SiAdobephotoshop },  
    { icon: BsFillPencilFill },  
    { icon: FaPaintBrush },  
    { icon: SiAdobeillustrator },  
    { icon: FaEdit },  
  ];

  const artRules = [
    {
      title: "Form Fundamentals",
      content: "Always start with basic shapes. Break down complex objects into simple geometric forms - spheres, cubes, cylinders. This foundation ensures proper structure and volume in your artwork."
    },
    {
      title: "Value Control",
      content: "Master light and shadow by maintaining clear value hierarchy. Use no more than 5 distinct values in your piece. The greatest contrast should be at your focal point."
    },
    {
      title: "Color Theory",
      content: "Limit your palette to 3 main colors plus black and white. Choose one dominant color, one supporting, and one accent. This creates harmony while maintaining visual interest."
    },
    {
      title: "Composition",
      content: "Follow the rule of thirds but know when to break it. Lead the viewer's eye through your piece using lines, value contrast, and color. Keep important elements out of the dead center."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
          setTranslateZ(120);
          setIconSize(12);
      } else if (window.innerWidth < 1024) {
          setTranslateZ(160);
          setIconSize(14);
      } else {
          setTranslateZ(200);
          setIconSize(16);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="banner w-full min-h-screen text-center relative flex flex-col items-center justify-center py-8">
      <div 
        className="slider-container w-full h-48 mb-4 md:mb-8 md:h-64"
        style={{ perspective: '1000px' }}
      >
        <div 
          className="slider relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="item"
                style={{
                  position: "absolute",
                  inset: "0 0 0 0",
                  transform: `rotateY(calc(${index} * (360 / ${skills.length}) * 1deg)) translateZ(${translateZ}px)`,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="rounded-2xl font-serif italic bg-transparent p-4 w-full h-full flex flex-col items-center justify-center">
                  <Icon className={`text-white mb-2 md:mb-4 w-${iconSize} h-${iconSize}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-10 gap-4 md:gap-6 px-4 mt-10 max-w-6xl">
        {artRules.map((rule, index) => (
          <article 
            key={index} 
            className="font-mono w-full sm:w-80 md:w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
            style={{
              background: 'repeating-linear-gradient(45deg, #374151, #374151 10px, #404a5e 10px, #404a5e 11px)'
            }}>
            <FaCheckCircle className="w-8 h-8 md:w-10 md:h-10 text-gray-300 bg-gray-600 rounded-full p-1" />
            <h3 className="text-gray-200 font-medium text-sm md:text-base">{rule.title}</h3>
            <p className="text-xs md:text-sm w-full text-gray-400">
              {rule.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RotatingInspiration;