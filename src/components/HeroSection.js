import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // تأكد من تثبيت react-icons

const HeroSection = () => (
  <section
    id="hero"
    className="d-flex flex-column align-items-center justify-content-center text-center py-5 bg-light"
  >
    <h1 className="display-4 fw-bold">Reem Khalifa Aladawi</h1>
    <p className="lead mb-4">
      Software Engineering Graduate | Data Analysis & Full-Stack Developer
    </p>

    <div className="mb-4">
      <Button href="#projects" variant="primary" className="me-2">
        View Projects
      </Button>
      <Button href="#contact" variant="outline-primary">
        Contact Me
      </Button>
    </div>

    {/* Social Icons */}
    <div className="d-flex gap-3 justify-content-center">
      <a
        href="https://github.com/Reemkhalifa2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark fs-4"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/reem-aladawi-263509290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary fs-4"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  </section>
);

export default HeroSection;
