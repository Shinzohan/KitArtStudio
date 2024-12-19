import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const loadContent = () => {
      setIsLoading(false); 
    };

    loadContent();
  }, []); 

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
