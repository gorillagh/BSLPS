import React from "react";
import Typography from "@mui/material/Typography";
import Link from "../Links/Link";
import { Container, Divider, Grid } from "@mui/material";

const Footer = (props) => {
  return (
    <>
      <Divider sx={{ mt: 10, mb: 3 }} />

      {/* </Container> */}
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ my: 4 }}
      >
        {"© "}
        <Link text="BSLPS" to="/" /> {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
};

export default Footer;
