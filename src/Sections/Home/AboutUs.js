import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "../../components/Links/Link";
const AboutUs = () => {
  return (
    <div>
      <Box>
        {/* ///////////////////////Setups/////////////////////////////// */}
        <Grid
          container
          spacing={2}
          py={5}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { md: "70%" } }}>
              <Box display="flex" flexDirection="column" rowGap={1}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "'Ubuntu', sans-serif",
                    display: { xs: "none", md: "block" },
                  }}
                  variant="h5"
                >
                  Discover our mission to provide quality education in languages
                  and professional skills.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                  variant="body2"
                >
                  We strive to provide the best when it comes to languages and
                  professional skills.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-end", md: "flex-start" },
                    my: 2,
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to="/about"
                    textDecoration="underline"
                    fontWeight={600}
                    color="primary.light"
                    text="Learn More"
                  >
                    <Icon fontSize="small" sx={{ color: "primary.light" }}>
                      east
                    </Icon>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display={{ xs: "block", md: "none" }} mb={2}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: "'Ubuntu', sans-serif",
                }}
                variant="h5"
              >
                Discover our mission to provide quality education in languages
                and professional skills.
              </Typography>
            </Box>
            <Box
              width="100%"
              sx={{
                borderRadius: "10px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                height: { xs: 200, md: 300 },
                width: { xs: 300, md: "100%" },
                mx: "auto",
                position: "relative",
                backgroundColor: "transparent", // Adjust the opacity (0.5) to make it darker
                color: "#fff",
                mb: 0,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(https://images.unsplash.com/photo-1632454005805-7bee57f76ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80)`,
                "::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the opacity (0.5) to make it darker
                  zIndex: 1,
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <IconButton sx={{ color: "#fff" }} size="large">
                    <YouTubeIcon sx={{ fontSize: "4rem" }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
