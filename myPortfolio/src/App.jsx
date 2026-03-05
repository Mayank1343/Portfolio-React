import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="divider wave"></div> 

      <Hero />
      <div className="divider wave"></div> 

      <About />
      <div className="divider wave"></div> 

      <Projects />
      <div className="divider wave"></div> 

      <Certificates />
      <div className="divider wave"></div> 

      <Skills />
      <div className="divider wave"></div>

      <Contact />
      <div className="divider wave"></div> 

      <Footer />
    </>
  );
}

export default App;