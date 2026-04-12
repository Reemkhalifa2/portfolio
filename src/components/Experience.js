import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Java Devloper Intern',
    company: 'Softeware Engineer - Rihal',
    year: 'Feb,2026 - Present',
    description: 'Java'
  },
  {
    role: 'Data Validation Analyst Intern',
    company :'PMO(Security Complaince) - Vodafone',
    year: 'NOv,25 - Jan,2026',
    description: 'Data validation, compliance checks, report and Documintation.'
  },
  {
    role: 'Software Engineering Intern',
    company: 'Softeware Engineer - Rihal',
    year: 'Jul,2025 - Aug,2025',
    description: 'Java, Databases(SQL), API'
  }
  
];

const ExperienceSection = () => (
  <section id="experience" className="py-5">
    <div className="container text-center">
      <h2 className="mb-4">Experience</h2>
      <Row xs={1} md={2} className="g-4">
        {experiences.map((exp, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Briefcase size={36} className="mb-3 text-primary" />
                <Card.Title>{exp.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{exp.company} | {exp.year}</Card.Subtitle>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default ExperienceSection;
