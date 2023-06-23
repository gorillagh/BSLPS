import React from "react";
import { Box, Grid, Icon, Typography } from "@mui/material";

import Link from "../../components/Links/Link";
import YouTubePlayer from "../../components/YouTubePlayer";
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
                  fontWeight={500}
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

                mx: "auto",
                position: "relative",
                backgroundColor: "#fff",
                mb: 0,
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                <YouTubePlayer />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
