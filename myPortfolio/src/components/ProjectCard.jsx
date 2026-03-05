import "./ProjectCard.css";

export default function ProjectCard({ title, description, image, github, demo, tech }) {
  return (
    <div className="project-card">

      <div className="project-image">

        <img src={image} alt={title} />

        <div className="project-overlay">

          <div className="overlay-buttons">
            <a href={github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={demo} target="_blank" rel="noreferrer">Live Demo</a>
          </div>

        </div>

      </div>

      <div className="card-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-stack">
          {tech && tech.map((item, index) => (
            <span key={index} className="badge">
              {item}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}