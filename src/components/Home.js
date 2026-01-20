import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-background to-background/80 py-32"
    >
      {/* Name and Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
        Reem Khalifa Aladawi
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Software Engineering Graduate | Data Analysis & Full-Stack Developer
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition"
        >
          Contact Me
        </a>
      </div>

      
      
    </section>
  );
};

export default HeroSection;
