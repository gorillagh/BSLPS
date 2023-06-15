import React from "react";
import { Avatar, Box, Grid, Icon, Link, Typography } from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";

const Facilities = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          py={5}
          alignItems="center"

          // sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <Box width="100%">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                // height={300}
                width="100%"
                alt="about"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { md: "70%" }, mx: "auto" }}>
              <Box display="flex" flexDirection="column" rowGap={2}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "'Ubuntu', sans-serif",
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
