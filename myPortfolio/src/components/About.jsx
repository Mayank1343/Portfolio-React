import "./About.css";

export default function About() {
  return (
    <section id="about" className="about reveal">

      {/* Background Shapes */}
      <div className="about-background-shapes">
        <div className="about-blob blob-1"></div>
        <div className="about-blob blob-2"></div>
        <div className="about-blob blob-3"></div>
      </div>

      <h2 className="section-title">About</h2>

      <div className="about-wrapper">

        <div className="about-left">

          <p>
            I grew up with a curiosity for how things work — whether it was breaking apart a gadget,
            or wondering how softwares are designed & built.
          </p>

          <p>
            I realized I don't just want to use great tech. I want to be the one who builds it.
            For me, software development is not just a career, it's a way to put imagnation into execution.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">Projects</a>
            <a href="#contact" className="btn secondary">Contact</a>
            <a href="https://drive.google.com/file/d/1VQaDBR9yjQXfzHy_gmTPXOZrIpCRZtlK/view?usp=sharing" target="_blank" className="btn resume">
              View Resume
            </a>
          </div>

        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>💻 Development</h3>
            <p>Building modern web applications with a focus on clean design and functionality.</p>
          </div>

          <div className="about-card">
            <h3>🚀 Exploration</h3>
            <p>Currently exploring full-stack development and cloud technologies.</p>
          </div>

          <div className="about-card">
            <h3>🎥 Creativity</h3>
            <p>I also create travel films and digital content as creative expression.</p>
          </div>

          <div className="about-card">
            <h3>📍 Location</h3>
            <p>Based in Dehradun, Uttarakhand, India.</p>
          </div>

        </div>

      </div>

    </section>
  );
}
