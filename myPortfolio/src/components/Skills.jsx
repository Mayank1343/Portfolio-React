import { skills } from "../Data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>
            <i className={`skill-icon ${skill.icon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;