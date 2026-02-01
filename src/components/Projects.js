import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Graduation Project – Leveraging Data Analysis to Enhance Counseling Strategies',

description: 'A data-driven project that uses student academic data to support and improve counseling strategies through meaningful analysis and insights.',

tech: ['KNIME', 'Data Analysis', 'Python'],
Link : 'file:///C:/course%20project/FinalReport-%20Group4.pdf'
  },
  
  {
    title: 'Tour Compass',
description: 'A travel planning mobile application that helps users discover popular destinations, plan trips, manage itineraries, and convert currencies.',
tech: ['Flutter', 'Mobile App Development', 'CRUD Operations'],
Link: 'https://github.com/Reemkhalifa2/Tour-Compass'
  }, 
  {title: 'Health Companion',
description: 'A wellness app designed with an accessibility-first and user-centered approach.',
tech: ['Figma', 'UX/UI Design', 'Prototyping'],
Link: 'https://www.figma.com/design/NnYKWPheEDjEwZbDRxdK3W/Untitled?node-id=0-1&p=f&t=x8SHxXucJmeZnf73-0'
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
               <Card.Text> <a href={proj.Link} target="_blank" rel="noreferrer">
                View Project</a></Card.Text>

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
