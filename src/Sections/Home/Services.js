import React from "react";
import { Avatar, Box, Grid, Icon, Link, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";

const content = [
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subtitle: "Language Programs",
    text: "Master English and French with our immersive language programs.",
    link: "",
  },
  {
    image: "",
    subtitle: "Professional Skills",
    text: "Develop in-demand skills in graphic design, web development, makeup, and more.",
    link: "",
  },
  {
    image: "",
    subtitle: "Accommodation",
    text: "Have a look at all the accommodation options on offer when selecting a course in our school.",
    link: "",
  },
];

const Services = () => {
  return (
    <div>
      <Box>
        {content.map((content, index) => {
          return (
            <Grid
              py={2}
              container
              spacing={2}
              alignItems="center"
              //   sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
            >
              <Grid item xs={12} md={4}>
                <Box display="flex" flexDirection="column" rowGap={1}>
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
            </Grid>
          );
        })}
      </Box>
    </div>
  );
};

export default Services;
