import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ShowOnScroll from "./ShowOnScroll";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import ScrollNavbar from "./ScrollNavbar";

const ShowNavbar = (props) => {
  return (
    <ShowOnScroll {...props}>
      <Box
        sx={{
          position: "fixed",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8.8px)",
          WebkitBackdropFilter: "blur(8.8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
          zIndex: 5,
          width: "100%",
        }}
      >
        <ScrollNavbar />
      </Box>
    </ShowOnScroll>
  );
};

export default ShowNavbar;
