import "./ProjectModal.css";

export default function ProjectModal({ project, close }) {

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={close}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <img src={project.image} alt={project.title} />

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="modal-links">
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.demo} target="_blank">Live Demo</a>
        </div>

        <button className="close-btn" onClick={close}>
          Close
        </button>

      </div>

    </div>
  );
}