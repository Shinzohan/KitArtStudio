import React from 'react';
import AnimatedTitle from "./AnimatedTitle";
import Slider from "./slider";

const processSteps = [
  {
    title: "Concept & Sketching",
    description: "Starting with rough sketches to visualize the composition and structure of the artwork.",
  },
  {
    title: "Line Art",
    description: "Refining the sketch with clean and defined lines to shape the final structure.",
  },
  {
    title: "Coloring & Shading",
    description: "Applying base colors, shading, and lighting to bring depth and realism.",
  },
  {
    title: "Final Touches",
    description: "Adding details, highlights, and final adjustments to complete the artwork.",
  },
];

const ProcessCard = ({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white text-center max-w-xs">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen overflow-hidden relative flex flex-col items-center">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-inter text-sm uppercase text-white md:text-[10px]">
          Welcome To My Art Gallery
        </p>
        <AnimatedTitle
          title="Free<b>la</b>ncer Th<b>a</b>t Does<br /> E<b>v</b>er<b>y</b>thing U <b>Ever </b>im<b>a</b>gine"
          containerClass="mt-5 text-center relative z-10"
        />
      
      </div>
      
      {/* Process Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
        {processSteps.map((step, index) => (
          <ProcessCard key={index} {...step} />
        ))}
      </div>
      
      <Slider />
    </div>
  );
};

export default About;
