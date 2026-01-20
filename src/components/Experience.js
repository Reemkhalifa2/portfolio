import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Compliance Verification Analyst Trainee',
    company: 'Vodafone',
    year: '2025',
    description: 'Performed data validation, compliance checks, and report analysis.'
  },
  {
    role: 'Intern / Rihal Project',
    company: 'University Project',
    year: '2024',
    description: 'Worked on software development and data analysis using Python and React.'
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
