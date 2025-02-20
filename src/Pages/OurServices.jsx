import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/Ourservices.jpg";

// List of Locations
const locations = [
  { id: 1, name: "Karad" },
  { id: 2, name: "Satara" },
  { id: 3, name: "Viddyanagar" },
  { id: 4, name: "Saidapur" },
  { id: 5, name: "Banawadi" },
  { id: 6, name: "Malkapura" },
  { id: 7, name: "Varunji" },
  { id: 8, name: "Vimantal" },
  { id: 9, name: "Ogalewadi" },
  { id: 10, name: "Mundhe" },
];

const OurServices = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <Navbar />
      
      {/* Our Services Heading */}
      <h1 className="text-center fw-bold mt-4" style={{ color: "black" }}>
        Our Services
      </h1>

      <Container className="mt-4 pt-3 text-center">
        <h2 className="fw-bold text-white mb-4">Our Locations</h2>
        <Row className="justify-content-center">
          {locations.map((location) => (
            <Col key={location.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="location-card text-center p-4 shadow-lg border-0">
                <Card.Body>
                  <Card.Title className="location-title">{location.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default OurServices;
