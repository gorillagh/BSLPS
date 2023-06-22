import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import YouTube from "react-youtube";

import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "../../components/Links/Link";
const AboutUs = () => {
  const YouTubePlayer = ({ videoId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const opts = {
      height: "280",
      width: "100%",
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1, // Hide the YouTube channel information
        rel: 0,
        showinfo: 0,
      },
    };
    const onReady = (event) => {
      setIsLoading(false);
      console.log("YouTube player is ready:", event.target);
    };

    const onStateChange = (event) => {
      console.log(
        "YouTube player state changed:",
        event.target.getPlayerState()
      );
    };

    const onError = (event) => {
      setIsLoading(false);
      console.log("YouTube player encountered an error:", event.data);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading state to false after a certain delay (e.g., 2 seconds)
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="youtube-player" id="youtube-player">
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={5}
          >
            <CircularProgress />
          </Box>
        ) : (
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
            onError={onError}
          />
        )}
      </div>
    );
  };

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
                // height: { xs: 200, md: 300 },
                // width: { xs: 300, md: "100%" },
                mx: "auto",
                position: "relative",
                backgroundColor: "#fff", // Adjust the opacity (0.5) to make it darker
                // color: "#fff",
                mb: 0,
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                {/* <Box display="flex" alignItems="center" justifyContent="center">
                  <IconButton sx={{ color: "#fff" }} size="large">
                    <YouTubeIcon sx={{ fontSize: "4rem" }} />
                  </IconButton>
                </Box> */}
                <YouTubePlayer videoId="iILGiJKLQfg" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
