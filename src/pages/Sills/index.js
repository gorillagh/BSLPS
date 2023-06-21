import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Skills = (props) => {
  return (
    <div>
      <Box
        // bgcolor="#f8f8ff"
        py={3}
        sx={{
          display: "flex",
          alignItems: "center",
          //   height: { xs: "50vh", md: "40vh" },
          position: "relative",
          backgroundColor: "#000", // Adjust the opacity (0.5) to make it darker
          color: "#fff",
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
            backgroundColor: "rgba(0, 0, 153, 0.6)", // Adjust the opacity (0.5) to make it darker
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            textAlign="center"
            sx={{
              fontWeight: 600,
              fontFamily: "'Ubuntu', sans-serif",
            }}
            variant="h4"
          >
            Professional Skills
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Skills;
