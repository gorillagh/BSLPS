import React from "react";
import { Avatar, Box, Grid, Icon, Link, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";

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
              <Box display="flex" flexDirection="column" rowGap={2}>
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
            <Box width="100%">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                // height={300}
                width="100%"
                alt="about"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
