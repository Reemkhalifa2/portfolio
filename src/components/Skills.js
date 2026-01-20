import React from 'react';
import { Badge, Row, Col, Card } from 'react-bootstrap';

const skills = {
  Programming: ['Java', 'Python', 'JavaScript', 'PHP'],
  Frameworks: ['React.js', 'Node.js'],
  Data: ['Data Analysis', 'Machine Learning', 'SQL'],
  Concepts: ['OOP', 'MVC Architecture', 'CRUD Operations']
};

const SkillsSection = () => (
  <section id="skills" className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-4">Skills</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Object.entries(skills).map(([category, items]) => (
          <Col key={category}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">{category}</Card.Title>
                {items.map((skill) => (
                  <Badge key={skill} bg="primary" className="me-2 mb-2">{skill}</Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default SkillsSection;
