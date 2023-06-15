import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Hero from "../Sections/Home/Hero";
import ActionButton from "../components/Buttons/ActionButton";
import AboutUs from "../Sections/Home/AboutUs";
import Services from "../Sections/Home/Services";
import Facilities from "../Sections/Home/Facilities";
import CallToAction from "../Sections/Home/CallToAction";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        id="hero-section"
        // bgcolor="#f8f8ff"
        py={5}
        sx={{
          display: "flex",
          alignItems: "center",
          height: { xs: "50vh", md: "40vh" },
          position: "relative",
          backgroundColor: "#000", // Adjust the opacity (0.5) to make it darker
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (0.5) to make it darker
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Hero />
        </Container>
      </Box>
      <Box id="about-us" bgcolor="">
        <Container>
          <AboutUs />
        </Container>
      </Box>
      <Box id="services-section" bgcolor="#f8f8ff" py={5}>
        <Container>
          <Services />
        </Container>
      </Box>
      <Box id="facilities-section" py={5}>
        <Container>
          <Facilities />
        </Container>
      </Box>
      <Box id="call-to-action-section" bgcolor="#f8f8ff" py={5}>
        <Container>
          <CallToAction />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
