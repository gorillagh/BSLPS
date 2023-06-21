import React from "react";
import { Box, Container, Typography } from "@mui/material";

const NewsAndEvents = (props) => {
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
            News and Events
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default NewsAndEvents;
