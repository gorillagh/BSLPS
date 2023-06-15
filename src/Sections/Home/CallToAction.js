import { Box, Typography } from "@mui/material";
import React from "react";
import ActionButton from "../../components/Buttons/ActionButton";

const CallToAction = () => {
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
          Begin your learning journey with us. Apply now for admission.{" "}
        </Typography>
        {/* <Box sx={{ width: { xs: "80%", md: "70" }, mx: "auto" }}> */}
        <ActionButton text="Apply Now" fullWidth={false} />
        {/* </Box> */}
      </Box>
    </div>
  );
};

export default CallToAction;
