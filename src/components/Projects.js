import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Tesla Stock Prediction',
    description: 'Predicting TSLA stock prices using machine learning.',
    tech: ['Python', 'ML', 'Data Analysis']
  },
  {
    title: 'Graduation Project',
    description: 'Early warning system for students at risk.',
    tech: ['React', 'Python', 'Data Analytics']
  },
  {
    title: 'Sticker Arrangement App',
    description: 'Mobile app for virtually arranging and buying stickers.',
    tech: ['React Native', 'UI/UX Design']
  },
  {
    title: 'Full-Stack Web Project',
    description: 'CRUD application with React & Node.js backend.',
    tech: ['React', 'Node.js', 'MongoDB']
  }
];

const ProjectsSection = () => (
  <section id="projects" className="py-5">
    <div className="container text-center">
      <h2 className="mb-4">Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((proj) => (
          <Col key={proj.title}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Code size={36} className="mb-3 text-primary" />
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                {proj.tech.map((t) => <Badge bg="primary" key={t} className="me-1">{t}</Badge>)}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default ProjectsSection;
