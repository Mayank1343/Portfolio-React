import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [spin, setSpin] = useState(false);

  const sliderRef = useRef(null);
  const linkRefs = useRef([]);

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Certifications", link: "certificates" },
    { name: "Skills", link: "skills" },
  ];

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      navLinks.forEach((section) => {

        const element = document.getElementById(section.link);

        if (element) {

          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section.link);
          }

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  /* =========================
     MOVE NAV SLIDER
  ========================= */

  useEffect(() => {

    const index = navLinks.findIndex(i => i.link === active);
    const activeLink = linkRefs.current[index];

    if (activeLink && sliderRef.current) {

      sliderRef.current.style.width = `${activeLink.offsetWidth}px`;

      sliderRef.current.style.transform =
        `translateX(${activeLink.offsetLeft}px)`;

    }

  }, [active]);


  /* =========================
     SMOOTH SCROLL
  ========================= */

  const handleClick = (id) => {

    const element = document.getElementById(id);

    element.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);

  };


  /* =========================
     THEME TOGGLE
  ========================= */

  const toggleTheme = () => {

    setSpin(true);

    setTimeout(() => {
      setDarkMode(!darkMode);
      setSpin(false);
    }, 300);

  };


  useEffect(() => {

    document.body.className = darkMode ? "dark" : "light";

  }, [darkMode]);


  /* =========================
     COMPONENT
  ========================= */

  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <span className="logo">
        Mayank<br/>Sharma
      </span>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

        {navLinks.map((item, index) => (
          <li key={index}>
            <span
              ref={el => linkRefs.current[index] = el}
              className={active === item.link ? "active" : ""}
              onClick={() => handleClick(item.link)}
            >
              {item.name}
            </span>
          </li>
        ))}

        {/* SLIDER */}
        <div className="nav-slider" ref={sliderRef}></div>

      </ul>

      {/* THEME TOGGLE */}

      <div
        className={`theme-toggle ${spin ? "spin" : ""}`}
        onClick={toggleTheme}
      >
        {darkMode ? "🌙" : "☀️"}
      </div>


      {/* HAMBURGER */}

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>

  );

}