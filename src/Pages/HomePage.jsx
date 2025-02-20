import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Statement from "./Statement";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../Images/FlatCard1.png";
import img2 from "../Images/RowHouseCard2.jpeg";
import img3 from "../Images/FurnishedFlatCard4.jpeg";
import img4 from "../Images/LandPlot.jpg";
import servicesImg from "../Images/Services.jpg";
import reviewsImg from "../Images/reviews.jpg";
import achievementsBg from "../Images/achive.jpg";

// Background images for slideshow
const backgroundImages = [
  require("../Images/home.png"),
  require("../Images/home2.png"),
  require("../Images/home3.png"),
  require("../Images/LandPlot.jpg"),
  require("../Images/flat1.jpg"),
];

const properties = [
  { id: 1, title: "Flats", text: "Rates start from ₹35 Lakhs", img: img1, link: "/properties/flats" },
  { id: 2, title: "Row Houses", text: "Rates start from ₹85 Lakhs", img: img2, link: "/properties/rowhouses" },
  { id: 3, title: "Furnished Flats", text: "₹15,000/per month", img: img3, link: "furnishedflats" },
  { id: 4, title: "Plots", text: "Rates start from ₹25 Lakhs", img: img4, link: "/properties/plots" },
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect for background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Slideshow Background Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <Statement />
      </div>
            {/* Blogs Section */}
            <div className="blogs-section mt-5">
              <div className="position-relative">
                <img
                  src={require("../Images/BlogsBack.png")} // Add your Blogs image in the Images folder
                  alt="Blogs"
                  className="img-fluid w-100"
                  style={{ height: "50vh", objectFit: "cover" }}
                />
                <div className="overlay text-center">
                  <Button
                    as={Link}
                    to="/blogs"  // Path to Blogs page
                    className="position-absolute start-50 translate-middle"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid black",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      top: "80%", // Moves button down
                    }}
                  >
                    View Blogs
                  </Button>
                </div>
              </div>
            </div>

      {/* Content Section with Property Cards */}
      <div className="main-content">
        <Navbar />
        <Container className="mt-5">
          <Row className="justify-content-center">
            {properties.map((property) => (
              <Col key={property.id} md={3}>
                <Card className="mb-4 shadow-lg" style={{ height: "100%" }}>
                  <Card.Img variant="top" src={property.img} alt={property.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{property.title}</Card.Title>
                    <Card.Text>{property.text}</Card.Text>
                    <Button
                      variant="dark"
                      as={Link}
                      to={property.link}
                      style={{ color: "white" }}
                    >
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Full-width Image Sections for Our Services and Reviews */}
        <div className="full-width-section mt-5">
          <div className="position-relative">
            <img
              src={servicesImg}
              alt="Our Services"
              className="img-fluid w-100"
              style={{ height: "50vh", objectFit: "cover" }}
            />
            <div className="overlay text-center">
              <Button
                as={Link}
                to="/properties/ourservices"
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid black",
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                View Our Services
              </Button>
            </div>
          </div>

          <div className="position-relative mt-4">
            <img
              src={reviewsImg}
              alt="Reviews"
              className="img-fluid w-100"
              style={{ height: "50vh", objectFit: "cover" }}
            />
            <div className="overlay text-center">
              <Button
                as={Link}
                to="/properties/reviews"
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid black",
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                View Reviews
              </Button>
            </div>
          </div>
        </div>
         {/* Our Achievements Section */}
         <div
          className="achievements-section text-center text-white py-5 mt-5"
          style={{
            backgroundImage: `url(${achievementsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px 0",
          }}
        >
          <h2 className="mb-4">Our Achievements</h2>
          <Container>
            <Row className="justify-content-center">
              <Col md={3} className="mb-3">
                <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                  <h3>500+</h3>
                  <p>Completed Projects</p>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                  <h3>120+</h3>
                  <p>Happy Clients</p>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                  <h3>95+</h3>
                  <p>Luxury Homes Sold</p>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                  <h3>140+</h3>
                  <p>Commercial Properties</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
