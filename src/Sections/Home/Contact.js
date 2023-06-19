import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import schoolInfo from "../../schoolInfo";

var render = function (status) {
  if (status === Status.LOADING)
    return (
      <Box display="flex" justifyContent="center">
        <Typography>{/* <CircularProgress thickness={4} /> */}</Typography>
      </Box>
    );
  if (status === Status.FAILURE)
    return (
      <Box display="flex" justifyContent="center">
        <Typography>Unable to load map...</Typography>
      </Box>
    );

  return null;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);

  function MyMapComponent() {
    const ref = useRef();

    useEffect(() => {
      const map = new window.google.maps.Map(ref.current, {
        center: {
          lat: schoolInfo.address.googleAddress.lat,
          lng: schoolInfo.address.googleAddress.lng,
        },
        zoom: 17,
        // disableDefaultUI: true,
        clickableIcons: false,
      });
      const marker = new window.google.maps.Marker({
        position: map.getCenter(),
        map,
      });
    });

    return (
      <Box
        ref={ref}
        id="map"
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "12px",
        }}
      />
    );
  }

  return (
    <div>
      <Box>
        {/* ///////////////////////Setups/////////////////////////////// */}
        <Grid
          container
          spacing={2}
          py={3}
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <Box width={{ md: "70%" }}>
              <Box display="flex" flexDirection="column" rowGap={1}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                  variant="h5"
                >
                  Have questions or need more information?
                </Typography>
                <Box display="flex" columnGap={2}>
                  <Box display="flex" columnGap={2} justifyContent="center">
                    <Box display="flex" columnGap={1}>
                      <IconButton size="small" color="primary">
                        <Icon fontSize="small">phone</Icon>
                        <Typography ml={1} variant="body2" fontWeight={500}>
                          (0)302-214723
                        </Typography>
                      </IconButton>
                    </Box>
                    <Box display="flex" columnGap={1}>
                      <IconButton size="small" color="primary" sx={{ px: 0 }}>
                        <Icon fontSize="small">mail</Icon>
                        <Typography ml={1} variant="body2" fontWeight={500}>
                          info@bslps.com
                        </Typography>
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <Box
                  component="form"
                  //   onSubmit={handleSubmit}
                  noValidate
                  display="flex"
                  flexDirection="column"
                  //   rowGap={1}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="outlined-multiline-static"
                    label="Question/Message"
                    multiline
                    minRows={4}
                    placeholder="Enter your message or question"
                    fullWidth
                  />
                  <Box display="flex" justifyContent="flex-end">
                    <ActionButton
                      text="send"
                      fullWidth={false}
                      variant="outlined"
                      my={1}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mb={4}>
            <Box display="flex" columnGap={2} rowGap={1} flexDirection="column">
              <Box display="flex" columnGap={1} alignItems="center">
                <Icon fontSize="small">location_on</Icon>
                <Typography variant="body2" fontWeight="bold">
                  Mallam, Accra
                </Typography>
              </Box>
              <Wrapper
                render={render}
                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              >
                <MyMapComponent />
                {/* <LoadingBackdrop open={loading} /> */}
              </Wrapper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
