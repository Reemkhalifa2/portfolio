import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { MdEmail, MdPhone } from 'react-icons/md'; // استخدام أيقونات من react-icons

const ContactSection = () => (
  <section id="contact" className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-4">Contact Me</h2>

      <Row
        xs={1}
        md={2}
        className="mb-4 justify-content-center g-4"
      >
        <Col md={4}>
          <Card className="shadow-sm h-100 text-center">
            <Card.Body>
              <MdEmail size={36} className="mb-2 text-primary" />
              <Card.Title>Email</Card.Title>
              <Card.Text>aladawi12reem6@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100 text-center">
            <Card.Body>
              <MdPhone size={36} className="mb-2 text-primary" />
              <Card.Title>Phone</Card.Title>
              <Card.Text>+968 95417778</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </section>
);

export default ContactSection;
