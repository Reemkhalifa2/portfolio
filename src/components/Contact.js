import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Mail, Phone,  } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="py-5 bg-light" >
    <div className="container text-center">
      <h2 className="mb-4">Contact Me</h2>

      <Row xs={1} md={3} className="mb-4">
        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Mail size={28} className="mb-2 text-primary" />
              <Card.Title>Email</Card.Title>
              <Card.Text>aladawi12reem6@gmail.com
</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Phone size={28} className="mb-2 text-primary" />
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
