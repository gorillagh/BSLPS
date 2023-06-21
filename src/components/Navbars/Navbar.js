import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ActionButton from "../Buttons/ActionButton";
import Link from "../Links/Link";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LoadingBackdrop from "../Feedbacks/LoadingBackdrop";

const pages = [
  { text: "Languages", icon: "translate", to: "/languages" },
  { text: "Skills", icon: "engineering", to: "/skills" },
  { text: "Admission", icon: "school", to: "/admission" },
  { text: "Faculty & Staff", icon: "", to: "/faculty" },
  { text: "Resources", icon: "", to: "/resources" },

  { text: "News & Events", icon: "event", to: "/news-events" },
  { text: "About Us", icon: "info", to: "/about" },
  // { text: "Contact Us", icon: "call", to: "contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (to) => {
    setAnchorElNav(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, 1000);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  ////////////drawer///////////////////
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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

  const drawer = (
    <Box
      sx={{
        textAlign: "left",
        pt: "4px",
      }}
      onClick={handleDrawerToggle}
    >
      <Box my={1} px={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Typography component="a" href="/" sx={{ mr: 1 }}>
            <img
                src={}
                alt="logo"
                width={}
                height={}
                style={{
                  
                }}
              />
          </Typography> */}
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h4"
              // noWrap
              sx={{
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              <Link
                text="BSLPS"
                variant="h4"
                fontWeight="bold"
                to="/"
                color="#000"
              />
            </Typography>
            {/* <Typography variant="body2">
              Best School of Languages and Professional Studies
            </Typography> */}
          </Box>
        </Box>
      </Box>

      <List sx={{ height: "100%" }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Divider sx={{ mb: 2 }} />
          {pages.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ my: 1 }}>
              <ListItemButton
                onClick={() => handleCloseNavMenu(item.to)}
                key={index}
                sx={{ textAlign: "left" }}
              >
                <ListItemIcon>
                  <Icon
                    fontSize="small"
                    sx={{
                      color: window.location.href.includes(item.to)
                        ? "primary.light"
                        : "",
                    }}
                  >
                    {item.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  key={index}
                  primary={
                    <Typography
                      fontWeight={500}
                      variant="body2"
                      sx={{
                        color: window.location.href.includes(item.to)
                          ? "primary.light"
                          : "",
                      }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box position="absolute" sx={{ top: "auto", bottom: 0 }}>
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
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Ubuntu",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BSLPS
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Ubuntu",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BSLPS
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              width: "40%",
              mr: "auto",
            }}
          >
            <ActionButton
              text="Apply Now!"
              fullWidth={false}
              backgroundColor="secondary.main"
              // size="small"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              width: "40%",
              mr: "auto",
            }}
          >
            <ActionButton
              text="Apply Now!"
              fullWidth={false}
              backgroundColor="secondary.main"
              my={0}
            />
          </Box>
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
              ml: 1,
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Box
            // component="nav"
            >
              <Drawer
                anchor="left"
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                slots={{
                  backdrop: () => (
                    <Box
                      sx={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(5.8px)",
                        WebkitBackdropFilter: "blur(5.8px)",
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={handleDrawerToggle}
                    />
                  ),
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  // display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(8.8px)",
                    WebkitBackdropFilter: "blur(8.8px)",

                    boxSizing: "border-box",
                    width: 240,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
        <Toolbar
          disableGutters
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  navigate("/");
                }, 1000);
              }}
            >
              <Icon>home</Icon>
            </IconButton>
            {pages.map((page, index) => (
              <Box display="flex" alignItems="center">
                <Button
                  key={index}
                  onClick={() => handleCloseNavMenu(page.to)}
                  sx={{ display: "block" }}
                  color={
                    window.location.href.includes(page.to)
                      ? "primary"
                      : "inherit"
                  }
                >
                  <Box display="flex" alignItems="center">
                    <Typography variant="body2" fontWeight={500}>
                      {page.text}
                    </Typography>

                    <Icon fontSize="small" color="primary">
                      keyboard_arrow_down
                    </Icon>
                  </Box>
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
        <LoadingBackdrop open={loading} />
      </Container>
    </AppBar>
  );
}
export default Navbar;
