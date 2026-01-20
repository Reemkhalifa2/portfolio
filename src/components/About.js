import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaBolt, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';

const strengths = [
  { icon: FaBolt, title: 'Fast Learner', description: 'Quick to adapt and master new technologies' },
  { icon: FaLightbulb, title: 'Problem Solver', description: 'Analytical approach to complex challenges' },
  { icon: FaUsers, title: 'Team Collaboration', description: 'Effective communication and teamwork' },
  { icon: FaCode, title: 'Adaptability', description: 'Flexible in dynamic environments' },
];

const AboutSection = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container text-center">
      <h2 className="mb-3">About Me</h2>
      <p className="mb-5">
        I'm a Software Engineering graduate with a deep passion for solving real-world problems through technology.
        I specialize in software development, data analysis, and AI/ML.
      </p>

      <Row xs={1} sm={2} md={4} className="g-4">
        {strengths.map((s) => (
          <Col key={s.title}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <s.icon size={36} className="mb-3 text-primary" />
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default AboutSection;
