import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor Digree in Software Engineering',
    institution: 'University of Technology and Applied Sciences',
    year: '2020 - 2025',
    
  }
];

const EducationSection = () => (
  <section id="education" className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-4">Education</h2>
      <Row xs={1} className="g-4">
        {education.map((edu, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <BookOpen size={36} className="mb-3 text-primary" />
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.institution} | {edu.year}</Card.Subtitle>
                <Card.Text>{edu.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default EducationSection;
