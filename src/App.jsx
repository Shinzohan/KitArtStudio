import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLenisGsap } from "./components/useLenis";



function App() {
    useLenisGsap();

  return (
    <div
     
      className="relative min-h-screen bg-black w-screen overflow-hidden"
    >
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
