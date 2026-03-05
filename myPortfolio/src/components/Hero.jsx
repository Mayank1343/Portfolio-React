import { useState, useEffect } from "react";
import "./Hero.css";

const roles = ["Frontend Developer", "React Developer", "Problem Solver"];

export default function Hero() {

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);

  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {

  const handleScroll = () => {

    const scroll = window.scrollY

    const title = document.querySelector(".hero-title-wrapper")

    if(title){
      title.style.transform = `translateY(${scroll * 0.15}px)`
    }

  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)

}, [])

  return (
    <section className="hero reveal" id="home">

      <div className="hero-text">

        <div className="hero-title-wrapper">

  <h1 className="hero-big-title">
    FULL STACK
    <br />
    ENGINEER
  </h1>

  <h1 className="hero-title-shadow">
    FULL STACK
    <br />
    ENGINEER
  </h1>

</div>
        <div className="hero-intro">

          <p>
            A Computer Science student passionate about building responsive,
            user-focused web applications.
          </p>

          <p>
            Currently exploring full-stack development and cloud technologies
            to deliver scalable digital solutions.
          </p>

          <a href="#contact" className="hero-cta">
            Get in touch →
          </a>

        </div>

        <div className="hero-grid-panel">

          <div className="floating-card card-1">
            I BUILD INTERFACES THAT INSPIRE.
          </div>

          <div className="floating-card card-2">
            CODE WITH CREATIVITY!
          </div>

          <img src="/linkedin.svg" className="floating-icon icon-1" />
          <img src="/github.png" className="floating-icon icon-2" />
          <img src="/youtube.svg" className="floating-icon icon-3" />

        </div>

      </div>

    </section>
  );
}