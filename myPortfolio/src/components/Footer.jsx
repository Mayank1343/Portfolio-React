import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2>Mayank Sharma</h2>
          <p>Portfolio Website</p>
          <span>Built with React, JavaScript & CSS</span>
        </div>

        {/* Pages */}
        <div className="footer-links">
          <h3>Pages</h3>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Dehradun, India</p>
          <p>mayanksharma1343@gmail.com</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Social Profiles</h3>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mayanksharmaa13/">
            <img src="/linkedin.svg" alt="linkedin" />
            </a>

            <a href="https://github.com/Mayank1343">
            <img src="/github.png" alt="github" />
            </a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mayank Sharma. All rights reserved.
      </div>

    </footer>
  );
}