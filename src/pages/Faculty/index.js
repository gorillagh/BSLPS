import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Faculty = (props) => {
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
            Faculty and Staff
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Faculty;
