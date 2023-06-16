import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
                  columnGap={1}
                >
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                    fontWeight={600}
                    color="primary.light"
                    alignItems="center"
                  >
                    Learn More
                  </Link>
                  <Icon fontSize="small" sx={{ color: "primary.light" }}>
                    arrow_circle_right
                  </Icon>
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
                  {/* <Icon fontSize="large" sx={{ color: "red" }}>
                  youtube
                </Icon> */}
                  <IconButton sx={{ color: "#fff" }} size="large">
                    <YouTubeIcon sx={{ fontSize: "4rem" }} />
                  </IconButton>
                </Box>
              </Box>
              {/* <img
                src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                // height={300}
                width="100%"
                alt="about"
                style={{ borderRadius: "10px" }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
