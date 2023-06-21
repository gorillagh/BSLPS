import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Skills = (props) => {
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
            Professional Skills
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Skills;
