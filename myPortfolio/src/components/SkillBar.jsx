import { useEffect, useRef, useState } from "react";
import "./SkillBar.css";

export default function SkillBar({ name, level, icon }) {

  const [visible, setVisible] = useState(false);
  const skillRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(skillRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill" ref={skillRef}>

      <div className="skill-info">
        <span>{icon} {name}</span>
        <span>{level}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: visible ? level + "%" : "0%" }}
        ></div>
      </div>

    </div>
  );
}