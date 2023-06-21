import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = (props) => {
  return (
    <div>
      <Box>
        <Container>
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "'Ubuntu', sans-serif",
            }}
            variant="h4"
          >
            About Us
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default About;
