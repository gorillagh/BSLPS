import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import ActionButton from "../../components/Buttons/ActionButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    comment:
      "entered BSLPS to study French, I didn't just learn French, I now a makeup artist. Thanks to BSLPS.",
    name: "Dorcas",
    bio: "Makeup Artist",
    src: "https://images.unsplash.com/photo-1533146692536-e70f31e14b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    comment: "Great school! I really love their tuition strategies",
    name: "Thomas",
    bio: "Photographer",
    src: "https://images.unsplash.com/photo-1542727313-4f3e99aa2568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    comment: "BSLPS helped me sharpen my fluency in English.",
    name: "Nana",
    bio: "CEO- Elbee Transcription",
    src: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80",
  },
  {
    comment: "Great school! I really love their tuition strategies",
    name: "Sampson",
    bio: "Sound technician - TV3",
    src: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const CallToAction = () => {
  const Carousel = ({ children }) => {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Box my={2}>
        <Slider {...settings}>{children}</Slider>
      </Box>
    );
  };

  return (
    <div>
      <Box width="100%">
        <Carousel>
          {testimonials.map((testimonial, index) => {
            return (
              <div>
                <Box
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  rowGap={1}
                >
                  <Avatar
                    sx={{
                      bgcolor: "info.light",
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                    }}
                    alt="testimonial"
                    src={testimonial.src}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant={{ xs: "body2", md: "p1" }}
                      textAlign="center"
                      fontWeight={500}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant={{ xs: "body2", md: "p1" }}
                      textAlign="center"
                      fontWeight={500}
                      sx={{ fontSize: { xs: "0.7rem", md: "" } }}
                    >
                      ({testimonial.bio})
                    </Typography>
                  </Box>
                  <Typography
                    variant={{ xs: "body2", md: "p1" }}
                    textAlign="center"
                    sx={{
                      fontSize: { xs: "0.7rem", md: "" },
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>
                </Box>
              </div>
            );
          })}
        </Carousel>
      </Box>
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
