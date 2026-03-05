import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_5ju0n7f",
      "template_t1mzdy6",
      formData,
      "Ba7C_nKKLaUb-61Wz"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name:"", email:"", message:"" });
    })
    .catch(() => {
      setStatus("Failed to send message.");
    });
  };

  return (
  <section className="contact reveal" id="contact">

    <h1>Have a project idea or job opportunity?</h1>
    <h2 className="connect">Let's Connect.</h2>

    <div className="contact-container">

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

      {status && <p className="status">{status}</p>}

    </div>

  </section>
);
}