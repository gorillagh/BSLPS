import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Icon,
  Link,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";

const content = [
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    subtitle: "Language Programs",
    text: "Master English and French with our immersive language programs.",
    link: "",
    icon: "translate",
  },
  {
    image:
      "https://images.unsplash.com/photo-1457551859869-d4b7ab27184c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    subtitle: "Professional Skills",
    text: "Develop in-demand skills in graphic design, web development, makeup, and more.",
    link: "",
    icon: "engineering",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    subtitle: "Accommodation",
    text: "Have a look at all the accommodation options on offer when selecting a course in our school.",
    link: "",
    icon: "apartment",
  },
];

const Services = () => {
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: "'Ubuntu', sans-serif",
            my: { xs: 0, md: 2 },
          }}
          variant="h4"
          textAlign="center"
        >
          What We Offer
        </Typography>
        <Grid
          py={2}
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          display={{ xs: "none", md: "flex" }}
        >
          {content.map((content, index) => {
            return (
              <Grid item xs={12} md={4} p={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  rowGap={1}
                  sx={{ cursor: "pointer" }}
                >
                  <Box width="100%">
                    <img
                      src={content.image}
                      // height={300}
                      width="100%"
                      alt="about"
                      style={{ borderRadius: "10px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontFamily: "'Ubuntu', sans-serif",
                    }}
                    variant="h5"
                  >
                    {content.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Ubuntu', sans-serif",
                    }}
                    variant="body2"
                  >
                    {content.text}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "flex-end", md: "flex-start" },
                      my: 1,
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
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {content.map((content, index) => {
            return (
              <Card
                sx={{
                  height: "",
                  cursor: "pointer",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                  webkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  my: 3,
                  py: 2,
                  "&:hover": {
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <Grid container spacing={1} alignItems="center">
                  <Grid item xs={4}>
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon sx={{ fontSize: "3rem" }}>{content.icon}</Icon>
                    </Box>
                  </Grid>
                  <Grid item xs={8} columnGap={1}>
                    <Box display="flex" flexDirection="column" rowGap={1}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontFamily: "'Ubuntu', sans-serif",
                          color: "primary.light",
                        }}
                        variant="h6"
                      >
                        {content.subtitle}
                      </Typography>

                      <Typography variant="body2">{content.text}</Typography>
                      <Icon color="primary">east</Icon>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Services;
