import React from 'react';
import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-3xl bg-black shadow-xl shadow-gray-200/20 py-24 overflow-hidden">
        {/* Subtle pencil texture as background */}
        <div className="absolute inset-0 bg-[url('/images/pencil-texture.png')] opacity-20 bg-repeat" />

        <div className="relative flex flex-col items-center text-center z-10">
          <div className="mb-8 text-sm font-bold tracking-widest text-gray-200">
            手描きアートを依頼しよう
          </div>
          
          <AnimatedTitle
            title="Contact Me"
            className="font-serif !text-6xl md:!text-7xl !font-bold !leading-tight text-gray-800"
          />
          
          <div className="mt-6 max-w-md mx-auto">
            <p className="text-lg text-gray-200">
              From character designs to full illustrations
            </p>
            <p className="text-sm text-gray-200 mt-2">
              ✧ manga ✧ chibi ✧ backgrounds ✧ emotes ✧
            </p>
          </div>

          <a
            href="mailto:kit99shri@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 py-3 relative px-8 font-lucky text-2xl rounded-md bg-white isolation-auto z-10 border-2 border-purple-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-400 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            Commission Me
          </a>
        </div>

        {/* Pencil sketch corner decorations */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white rounded-tr-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white rounded-bl-3xl opacity-40" />
      </div>
    </div>
  );
};

export default Contact;
