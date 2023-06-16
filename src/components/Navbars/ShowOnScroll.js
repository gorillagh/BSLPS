import React, { useState } from "react";
import { Box, Slide, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

const ShowOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Slide appear={false} direction="down" in={trigger}>
        {children}
      </Slide>
    </Box>
  );
};

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default ShowOnScroll;
