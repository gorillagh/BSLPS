import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Languages = (props) => {
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
            Language Programs
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Languages;
