import React from 'react';
import { Brush, Eye, Paintbrush, Layers, PenTool, Edit } from 'lucide-react';

const RotatingInspiration = () => {
  const skills = [
    { skill: "Character Design", icon: Brush },
    { skill: "Anatomy Studies", icon: Eye },
    { skill: "Photoshop Mastery", icon: Paintbrush },
    { skill: "Visual Effects", icon: Layers },
    { skill: "Digital Illustration", icon: PenTool },
    { skill: "Creative Editing", icon: Edit },
  ];

  return (
    <div className="banner w-full h-screen text-center overflow-hidden relative">
      <div className="slider-container">
        <div className="slider">
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="item"
                style={{
                  "--position": index + 1,
                  position: "absolute",
                  inset: "0 0 0 0",
                  transform: `rotateY(calc(${index} * (360 / ${skills.length}) * 1deg)) translateZ(300px)`,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="rounded-2xl font-serif italic border-4 border-indigo-400 bg-black p-4 w-full h-full flex flex-col items-center justify-center">
                  <Icon className="text-indigo-400 w-12 h-12 md:w-16 md:h-16 mb-4" />
                  <p className="text-white font-bold text-xl md:text-2xl">
                    {item.skill}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RotatingInspiration;
