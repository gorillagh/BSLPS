import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ActionButton from "../../components/Buttons/ActionButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Contact = () => {
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
            <Box>
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
          <Grid item xs={12} md={6}>
            <Box display="flex" columnGap={2} justifyContent="">
              <Box display="flex" columnGap={1}>
                <Icon fontSize="small">location_on</Icon>
                <Typography variant="body2" fontWeight={500}>
                  Mallam, Accra
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
