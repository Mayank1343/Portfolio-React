import { certificates } from "../Data/certificatesData";
import CertificateCard from "./CertificateCard";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section className="certificates reveal" id="certificates">

      <h2 className="section-title">Certifications</h2>

      <div className="cert-grid">
        {certificates.map(cert => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
      </div>

    </section>
  );
}