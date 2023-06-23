import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
import NavDrawer from "./NavDrawer";

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
            href="/"
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
          <NavDrawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            pages={pages}
            handleCloseNavMenu={handleCloseNavMenu}
          />
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
              color={
                window.location.href === "http://localhost:3000/" ||
                window.location.href === "http://www.bslps.com/" ||
                window.location.href === "https://bslps.vercel.app/"
                  ? "primary"
                  : "inherit"
              }
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
