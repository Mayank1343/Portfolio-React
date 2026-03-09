import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../Data/projectsData";
import "./Projects.css";
import ProjectModal from "./ProjectModal";

export default function Projects() {

  const [selected, setSelected] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Frontend", "Backend", "AI"];

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter(p => p.category === selected);

  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  return (
    <section className="projects reveal" id="projects">

      <h2 className="section-title">Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={selected === cat ? "active" : ""}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <div
          className="featured-project"
          onClick={() => setSelectedProject(featuredProject)}
        >
          <img src={featuredProject.image} alt={featuredProject.title} />

          <div className="featured-content">
            <h2>{featuredProject.title}</h2>

            <p>{featuredProject.description}</p>

            <div className="tech-stack">
              {featuredProject.tech?.map((t, i) => (
                <span key={i} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="featured-buttons">
              <a href={featuredProject.github} target="_blank">GitHub</a>
              <a href={featuredProject.demo} target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="projects-grid">
        {otherProjects.map(project => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        close={() => setSelectedProject(null)}
      />

    </section>
  );
}