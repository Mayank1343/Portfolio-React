import { useRef } from "react";
import "./CertificateCard.css";

export default function CertificateCard({ title, issuer, image, link }) {

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
  const card = cardRef.current;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 15;
  const rotateY = (centerX - x) / 15;

  card.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
};

const resetTilt = () => {
  cardRef.current.style.transform =
    "rotateX(0deg) rotateY(0deg) scale(1)";
};

  return (
    <div
      className="certificate-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
    <div className="card-inner">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{issuer}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View Certificate
      </a>
    </div>
    </div>
  );
}