import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Helmet } from "react-helmet";

import { Routes, Route } from "react-router-dom";
import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import schoolInfo from "./schoolInfo";
import LoadingBackdrop from "./components/Feedbacks/LoadingBackdrop";
import About from "./pages/About";
import Languages from "./pages/Languages";
import Skills from "./pages/Sills";
import Admission from "./pages/Admission";
import Resources from "./pages/Resources";
import Faculty from "./pages/Faculty";
import NewsAndEvents from "./pages/NewsAndEvents";

const Navbar = lazy(() => import("./components/Navbars/Navbar"));
const ShowNavbar = lazy(() => import("./components/Navbars/ShowNavbar"));
const Footer = lazy(() => import("./components/Footers/Footer"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TopInfo = lazy(() => import("./Views/TopInfo"));
const GoogleMap = lazy(() => import("./popups/GoogleMap"));

let theme = createTheme({ ...schoolInfo.theme });
theme = responsiveFontSizes(theme);

const App = () => {
  const [openGoogleMap, setOpenGoogleMap] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>BSLPS - Best School of Languages and Professional Studies</title>
      </Helmet>
      <Suspense fallback={LoadingBackdrop}>
        <ShowNavbar />
        <TopInfo setOpenGoogleMap={setOpenGoogleMap} />
        <Navbar />
      </Suspense>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Home
                openGoogleMap={openGoogleMap}
                loading={loading}
                setLoading={setLoading}
              />
            </Suspense>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <About />
            </Suspense>
          }
        />
        <Route
          exact
          path="/languages"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Languages />
            </Suspense>
          }
        />
        <Route
          exact
          path="/skills"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          exact
          path="/admission"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Admission />
            </Suspense>
          }
        />
        <Route
          exact
          path="/faculty"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Faculty />
            </Suspense>
          }
        />
        <Route
          exact
          path="/resources"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <Resources />
            </Suspense>
          }
        />
        <Route
          exact
          path="/news-events"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <NewsAndEvents />
            </Suspense>
          }
        />
        <Route
          exact
          path="*"
          element={
            <Suspense fallback={LoadingBackdrop}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
      <Suspense fallback={LoadingBackdrop}>
        <Footer />
      </Suspense>
      <GoogleMap open={openGoogleMap} onClose={() => setOpenGoogleMap(false)} />
      <LoadingBackdrop open={loading} />
    </ThemeProvider>
  );
};

export default App;
