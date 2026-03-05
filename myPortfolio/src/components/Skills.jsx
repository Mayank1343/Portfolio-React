import { skills } from "../data/skillsData";
import SkillBar from "./SkillBar";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section reveal" id="skills">

      <h2 className="section-title">My Skills</h2>

      {skills.map((group, index) => (
        <div key={index} className="skill-group">

          <h3 className="category-title">{group.category}</h3>

          <div className="skills-container">
            {group.items.map((skill, i) => (
              <SkillBar
                key={i}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>

        </div>
      ))}

    </section>
  );
}