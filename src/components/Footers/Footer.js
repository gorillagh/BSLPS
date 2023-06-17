import React from "react";
import Typography from "@mui/material/Typography";
import Link from "../Links/Link";
import { Box, Container, Divider, Grid, Icon, IconButton } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";

const footers = [
  {
    title: "Professional Skills",
    links: [
      { name: "Graphic Design", to: "/skills/graphic-design" },
      { name: "App Development", to: "/skills/app-development" },
      { name: "Photography", to: "/skills/photography" },
      { name: "Makeup", to: "/skills/makeup" },
      { name: "Fashion Design", to: "/skills/fashion-design" },
      { name: "Hair Dressing", to: "/skills/hair-dressing" },
    ],
  },
  {
    title: "Languages",
    links: [
      { name: "English", to: "/languages/english" },
      { name: "French", to: "/languages/french" },
    ],
  },
  {
    title: "Facilities",
    links: [
      { name: "Accommodation", to: "/facilities/accommodation" },
      { name: "Classrooms", to: "/facilities/classrooms" },
      { name: "Labs", to: "/facilities/labs" },
      { name: "Faculty & Staff", to: "/facilities/faculty" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { name: "How to apply", to: "/admissions/how-to-apply" },
      { name: "Requirements", to: "/admissions/requirements" },
      { name: "Prerequisites", to: "/admissions/prerequisites" },
    ],
  },
];

const Footer = (props) => {
  const openSocialMedia = (platform) => {
    let url,
      webUrl = "";
    switch (platform) {
      case "facebook":
        url = "";
        webUrl = "";
        break;
      case "instagram":
        url = "";
        webUrl = "";
        break;
      case "twitter":
        url = "";
        webUrl = "";
        break;
      case "snapchat":
        url = "";
        webUrl = "";
        break;
      case "whatsapp":
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          const isWhatsAppInstalled = /WhatsApp/i.test(navigator.userAgent);
          if (isWhatsAppInstalled) {
            url = `whatsapp://send?text=Hello%20Wuda%20Lounge!&phone=+233240298910`;
          } else {
            const platform = /(android)/i.test(navigator.userAgent)
              ? "android"
              : "ios";
            url = `https://wa.me/?text=Hello%20BSLPS%20!&phone=+233240298910&app_absent=1${
              platform === "android" ? "&fallback_url=" : ""
            }${
              platform === "android"
                ? "market://details?id=com.whatsapp"
                : "https://apps.apple.com/app/id310633997"
            }`;
          }
        } else {
          url = `https://web.whatsapp.com/send?phone=+233240298910`;
        }
        break;
      default:
        return;
    }

    // Open the URL in the app or web app, depending on the device and app availability
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const appUrl = url;
      // const webUrl = webUrl;
      const appWindow = window.open(appUrl, "_blank");
      setTimeout(() => {
        if (!appWindow || appWindow.closed || appWindow.closed === undefined) {
          window.location.href = webUrl;
        }
      }, 500);
    } else {
      window.open(webUrl, "_blank");
    }
  };
  return (
    <>
      <Divider sx={{ mt: 3 }} />

      {/* </Container> */}
      <Box sx={{ bgcolor: "#000", color: "#fff" }} py={4}>
        <Container>
          {/* <Box display="flex" justifyContent="space-between"> */}
          <Grid container spacing={1}>
            <Grid item xs={12} md={12 - 12 / 5}>
              <Grid container spacing={1}>
                {footers.map((footer, index) => (
                  <Grid item xs={6} md={3}>
                    <Box display="flex" flexDirection="column" key={index}>
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        mb={1}
                        mt={2}
                      >
                        {footer.title}
                      </Typography>
                      <Box display="flex" flexDirection="column" rowGap={1}>
                        {footer.links.map((link, index) => (
                          <Link
                            // color="#fff"
                            text={
                              <Typography variant="body2" fontWeight={500}>
                                {link.name}
                              </Typography>
                            }
                            to={link.to}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>{" "}
            <Grid item xs={12} md={12 / 5}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body2" fontWeight={500} mb={1} mt={2}>
                  GET IN TOUCH
                </Typography>
                <Box display="flex" flexDirection="column" rowGap={1}>
                  <Link
                    // color=""
                    text={
                      <Box display="flex" alignItems="center" columnGap={1}>
                        <Icon sx={{ fontSize: "0.8rem" }}>location_on</Icon>
                        <Typography variant="body2" fontWeight={500}>
                          Mallam, Accra.
                        </Typography>
                      </Box>
                    }
                    to="/"
                  />

                  <Link
                    // color=""
                    text={
                      <Box display="flex" alignItems="center" columnGap={1}>
                        <Icon sx={{ fontSize: "0.8rem" }}>phone</Icon>
                        <Typography variant="body2" fontWeight={500}>
                          +2338933403
                        </Typography>
                      </Box>
                    }
                    to="/"
                  />
                  <Link
                    // color=""
                    text={
                      <Box display="flex" alignItems="center" columnGap={1}>
                        <Icon sx={{ fontSize: "0.8rem" }}>mail_outlined</Icon>
                        <Typography variant="body2" fontWeight={500}>
                          info@bslps.com
                        </Typography>
                      </Box>
                    }
                    to="/"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <IconButton
              onClick={() => openSocialMedia("facebook")}
              size="large"
              color="#3b5998"
            >
              <Facebook sx={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton
              size="large"
              color="#3b5998"
              onClick={() => openSocialMedia("instagram")}
            >
              <Instagram sx={{ color: "#c13584" }} />
            </IconButton>

            <IconButton
              size="large"
              color="#1da1f2"
              onClick={() => openSocialMedia("twitter")}
            >
              <Twitter sx={{ color: "#1da1f2" }} />
            </IconButton>

            <IconButton
              size="large"
              color="#25D366"
              onClick={() => openSocialMedia("whatsapp")}
            >
              <WhatsApp sx={{ color: "#25D366" }} />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            color="#fff"
            fontWeight={500}
            my={2}
            align="center"
          >
            Copyright
            {" © "}
            <Link color="yellow" text="BSLPS" to="/" />{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
