import React from "react";
import { Avatar, Box, Grid, Icon, Link, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    alt: "photo-studio",
  },
  {
    src: "https://images.unsplash.com/photo-1579370318443-8da816457e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "library",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   alt: "language-lab",
  // },
  {
    src: "https://images.unsplash.com/photo-1594182878770-c05ece34b1f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "computer-lab",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    alt: "classroom",
  },

  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "music-studio",
  },
  {
    src: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "design-studio",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "cafeteria",
  },
  {
    src: "https://images.unsplash.com/photo-1464295440335-ee082a75ccca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "sports-field",
  },
];

const Facilities = () => {
  const Carousel = ({ children }) => {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
    };

    return (
      <Box my={2}>
        <Slider {...settings}>{children}</Slider>
      </Box>
    );
  };
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          // py={5}
          alignItems="center"

          // sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "'Ubuntu', sans-serif",
                display: { xs: "block", md: "none" },
                mb: 2,
              }}
              variant="h5"
            >
              Experience our modern facilities and access a wealth of learning
              resources..
            </Typography>
            <Box width="100%">
              <Carousel>
                {images.map((image, index) => {
                  return (
                    <div>
                      <img
                        src={image.src}
                        alt={image.alt}
                        // height={300}
                        width="100%"
                        height="100%"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { md: "70%" }, mx: "auto" }}>
              <Box display="flex" flexDirection="column" rowGap={2}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "'Ubuntu', sans-serif",
                    display: { xs: "none", md: "block" },
                  }}
                  variant="h5"
                >
                  Experience our modern facilities and access a wealth of
                  learning resources..
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-end", md: "flex-start" },
                    cursor: "pointer",
                  }}
                  columnGap={1}
                >
                  <ActionButton
                    text="Discover Our Facilities"
                    variant="outlined"
                    my={0}
                    fullWidth={false}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Facilities;
