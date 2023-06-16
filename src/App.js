import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Helmet } from "react-helmet";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Footer from "./components/Footers/Footer";
import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import TopInfo from "./Views/TopInfo";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#0000d4",

      dark: "#000088",
      main: "#000099",
      contrastText: "#fff",
    },
    secondary: {
      light: "#d4d400",
      main: "#aaaa00",
      dark: "#888800",
      contrastText: "#000",
    },
    error: {
      main: "#ce0018",
      light: "#ff0220",
      dark: "#a50013",
      contrastText: "#fff",
    },
    info: {
      main: "#726f55",
      light: "#8f8b6a",
      dark: "#5b5944",
      contrastText: "#fff",
    },
    highlight: "#fee5b9",

    divider: "rgba(0, 0, 0, 0.08)",
  },

  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: [
      // "Ubuntu",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h5: {
      fontFamily: "Ubuntu",
    },
    h4: {
      fontFamily: "Ubuntu",
    },
    // body1: { fontSize: "0.9rem" },
    body2: {
      fontSize: "0.8rem",
      color: "text.secondary",
      fontWeight: "300",
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>BSLPS - Best School of Languages and Professional Studies</title>
      </Helmet>
      <TopInfo />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
