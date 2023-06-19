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
import ShowNavbar from "./components/Navbars/ShowNavbar";
import schoolInfo from "./schoolInfo";
import GoogleMap from "./popups/GoogleMap";

let theme = createTheme({ ...schoolInfo.theme });
theme = responsiveFontSizes(theme);

const App = () => {
  const [openGoogleMap, setOpenGoogleMap] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>BSLPS - Best School of Languages and Professional Studies</title>
      </Helmet>
      <ShowNavbar />
      <TopInfo setOpenGoogleMap={setOpenGoogleMap} />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home openGoogleMap={openGoogleMap} />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GoogleMap open={openGoogleMap} onClose={() => setOpenGoogleMap(false)} />
    </ThemeProvider>
  );
};

export default App;
