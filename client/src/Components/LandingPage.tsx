// LandingPage.jsx
import React, { useState } from "react";
import NavBar from "./LandingPage/NavBar";
import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import "./../assets/styles/LandingPage.css";
import homeImage from "./../assets/images/cars/pexels-andrea-piacquadio-720815.jpg";
import aboutUsImage from "./../assets/images/cars/pexels-pavlo-luchkovski-337909.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    rating: 3,
  },
  {
    id: 4,
    name: "Bob Anderson",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    rating: 5,
  },
  {
    id: 5,
    name: "Eva Martin",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    rating: 4,
  },
];

export default function LandingPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const renderTestimonialCard = () => {
    const testimonial = testimonialsData[currentTestimonialIndex];
    return (
      <Card className="testimonial-card">
        <CardContent>
          <Avatar>{testimonial.name[0]}</Avatar>
          <Typography variant="body1">{testimonial.content}</Typography>
          <Typography variant="body2">
            Rating: {testimonial.rating}/5
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="landing-page">
      <div className="navbar">
        <NavBar />
      </div>

      {/* Home Section */}
      <div className="home-container" id="home">
        <CardContent className="column slogan">
          <Typography variant="h4" gutterBottom style={{ color: "olive" }}>
            Your Destination, Our Inspiration.
          </Typography>
          <Typography variant="body1">
            Our car rental app is not just about getting from point A to B; it's
            about embracing the journey. Personalize your ride with a diverse
            selection of vehicles that suit your style, making every drive
            uniquely yours...
          </Typography>
        </CardContent>
        <CardContent className="column image">
          <img src={homeImage} alt="Image" />
        </CardContent>
      </div>

      {/* Services Section */}

      <Typography
        variant="h4"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Our Services
      </Typography>
      <div className="services-section">
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 1</Typography>
            <Typography variant="body2">Description for Service 1.</Typography>
          </CardContent>
        </Card>
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 2</Typography>
            <Typography variant="body2">Description for Service 2.</Typography>
          </CardContent>
        </Card>
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 3</Typography>
            <Typography variant="body2">Description for Service 3.</Typography>
          </CardContent>
        </Card>
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 4</Typography>
            <Typography variant="body2">Description for Service 4.</Typography>
          </CardContent>
        </Card>
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 5</Typography>
            <Typography variant="body2">Description for Service 4.</Typography>
          </CardContent>
        </Card>
        <Card className="service-card">
          <CardContent>
            <Typography variant="h5">Service 6</Typography>
            <Typography variant="body2">Description for Service 6.</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="about-us-section">
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <div className="column about-us">
          <Card className="about-us-text">
            <Typography variant="body1">
              Welcome to CarOnDemand, where your journey becomes our commitment.
              We are passionate about providing you with the best car rental
              experience tailored to your needs.
            </Typography>
            <Typography variant="body1">
              Our mission is to make your travels memorable and stress-free.
              Here's what sets us apart:
            </Typography>

            <ul>
              <li>Wide Selection of Vehicles</li>
              <li>Flexible Rental Options</li>
              <li>Exceptional Customer Service</li>
              <li>Competitive Pricing</li>
            </ul>
          </Card>
          <Card className="column about-us-image">
            <img src={aboutUsImage} />
          </Card>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Learn More
        </Button>
      </div>
      {/* <div className="section">Testimonials</div> */}
      <div className="testimonial-section">
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        {renderTestimonialCard()}
        <div className="testimonial-buttons">
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrevTestimonial}
          >
            Prev
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleNextTestimonial}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="section">Contact Us</div>
    </div>
  );
}
