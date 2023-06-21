import React from "react";
import { Avatar, Box, Grid, Icon, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
// import hero from "../../images/hero.png";

const Hero = (props) => {
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
          onClick={() => {
            props.setLoading(true);
            setTimeout(() => {
              props.setLoading(false);
              window.scrollTo({ top: 0, behavior: "smooth" });

              props.navigate("/about");
            }, 1000);
          }}
        />
      </Box>
    </div>
  );
};

export default Hero;
