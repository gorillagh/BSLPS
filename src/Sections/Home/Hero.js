import React from "react";
import { Avatar, Box, Grid, Icon, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
// import hero from "../../images/hero.png";

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          textAlign: "center",
          py: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "'Ubuntu', sans-serif",
          }}
          variant="h4"
        >
          Best School of Languages and Professional Studies
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            // fontFamily: "'Ubuntu', sans-serif",
          }}
          // variant="h6"
        >
          Unlock your potential with our Language programs and professional
          courses
        </Typography>

        <ActionButton
          text="Learn More"
          variant="outlined"
          fullWidth={false}
          color="inherit"
        />
      </Box>
    </div>
  );
};

export default Hero;
