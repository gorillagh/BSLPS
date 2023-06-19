import {
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import schoolInfo from "../schoolInfo";

const infoBox = {
  display: "flex",
  justifyContent: { xs: "center", md: "right" },
  alignItems: "center",
  columnGap: 0.5,
};

const TopInfo = (props) => {
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
            <Grid container spacing={1} color="#fff" alignItems="center" py={1}>
              <Grid item xs={4}>
                <Box sx={infoBox}>
                  <IconButton
                    size="small"
                    sx={{ p: 0, color: "#fff", columnGap: 0.5 }}
                    onClick={() => props.setOpenGoogleMap(true)}
                  >
                    <Icon sx={{ fontSize: "1rem" }}>location_on</Icon>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.7rem", md: "0.8rem" },
                        fontWeight: 500,
                      }}
                    >
                      {schoolInfo.address.shortDescription}
                    </Typography>
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={infoBox}
                  onClick={() =>
                    (document.location.href = `tel:${schoolInfo.contact.phoneNumber}`)
                  }
                >
                  <IconButton
                    size="small"
                    sx={{ p: 0, color: "#fff", columnGap: 0.5 }}
                  >
                    <Icon sx={{ fontSize: "1rem" }}>phone</Icon>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.7rem", md: "0.8rem" },
                        fontWeight: 500,
                      }}
                    >
                      {schoolInfo.contact.formattedPhoneNumber}
                    </Typography>
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={infoBox}>
                  <IconButton
                    size="small"
                    sx={{ p: 0, color: "#fff", columnGap: 0.5 }}
                  >
                    <Icon sx={{ fontSize: "1rem" }}>mail_outlined</Icon>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.7rem", md: "0.8rem" },
                        fontWeight: 500,
                      }}
                    >
                      {schoolInfo.contact.email}
                    </Typography>
                  </IconButton>
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
