import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/Review.jpg"

const reviews = [
  { id: 1, name: "Amit Sharma", rating: 5, feedback: "Amazing experience, very professional service!" },
  { id: 2, name: "Priya Mehta", rating: 4, feedback: "Great properties and hassle-free buying process." },
  { id: 3, name: "Rahul Verma", rating: 5, feedback: "Highly recommended! Smooth and reliable service." },
];

const Reviews = () => {
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
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={12} className="text-center">
          <h2 className="fw-bold mb-4" style={{ color: "white", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)" }}>
  Customer Reviews
</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {reviews.map((review) => (
            <Col key={review.id} md={4} sm={6} xs={12}>
              <Card className="review-card text-center p-4 shadow-lg border-0">
                <Card.Body>
                  <Card.Title className="customer-name">{review.name}</Card.Title>
                  <Card.Text className="customer-feedback">"{review.feedback}"</Card.Text>
                  <div className="customer-rating">
                    {"⭐".repeat(review.rating)}
                  </div>
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

export default Reviews;
