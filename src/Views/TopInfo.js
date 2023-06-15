import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import React from "react";

const infoBox = {};

const TopInfo = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <Container>
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              ml: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <Grid
              container
              spacing={1}
              color="#fff"
              alignItems="center"
              py={0.5}
            >
              <Grid item xs={4}>
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  columnGap={0.5}
                >
                  <Icon sx={{ fontSize: "1rem" }}>location_on</Icon>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                      fontWeight: 500,
                    }}
                  >
                    Mallam Accra
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  columnGap={0.5}
                >
                  <Icon sx={{ fontSize: "1rem" }}>phone</Icon>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                      fontWeight: 500,
                    }}
                  >
                    (0)302-214723
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  columnGap={0.5}
                >
                  <Icon sx={{ fontSize: "1rem" }}>mail_outlined</Icon>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                      fontWeight: 500,
                    }}
                  >
                    info@bslps.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TopInfo;
