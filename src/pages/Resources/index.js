import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Resources = (props) => {
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
            Our Resources
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Resources;
