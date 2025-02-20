import React from "react";
import { Container, Card } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css"; // Import global App.css

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-bg">
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="shadow-lg contact-card">
            <Card.Body>
              <Card.Title className="mb-3 text-center">📞 Contact Us</Card.Title>
              <ul className="list-unstyled text-start">
                <li>
                  <strong>📍 Address:</strong> Be Real Building, Near Bus Stand, Karad
                </li>
                <li>
                  <strong>📞 Telephone:</strong> +91 22 1234 5678
                </li>
                <li>
                  <strong>📱 Mobile:</strong> +91 9075371671
                </li>
                <li>
                  <strong>✉️ Email:</strong>{" "}
                  <a href="mailto:berealestate@gmail.com">berealestate@gmail.com</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
