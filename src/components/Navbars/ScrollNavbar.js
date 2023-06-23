import React, { useState, useEffect } from "react";

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
import NavDrawer from "./NavDrawer";

const pages = [
  { text: "Languages", icon: "translate", to: "/languages" },
  { text: "Skills", icon: "engineering", to: "/skills" },
  { text: "Admission", icon: "school", to: "/admission" },
  { text: "Faculty & Staff", icon: "", to: "/faculty" },
  { text: "Resources", icon: "", to: "/resources" },
  { text: "News & Events", icon: "event", to: "news-events" },
  { text: "About Us", icon: "info", to: "/about" },

  // { text: "Contact Us", icon: "call", to: "contact" },
];

function ScrollNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
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
              display: "flex",
              justifyContent: "left",
              width: "40%",
              mr: "auto",
            }}
          >
            <ActionButton
              text="Apply Now!"
              fullWidth={false}
              // size="small"
              my={1}
            />
          </Box>

          <NavDrawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            pages={pages}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ScrollNavbar;
