import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material";
import { theme } from "@common/theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./index.css";

import { Navbar } from "@static/components/navbar";
import { Footer } from "@static/components/footer";

import Home from "@static/routes/home";
import RefundsPolicy from "@static/routes/policy/Refunds";
import PrivacyPolicy from "@static/routes/policy/Privacy";

const App: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes>
        {/* Policy */}
        <Route path="/policy/refunds-policy" element={<RefundsPolicy />} />
        <Route path="/policy/privacy-policy" element={<PrivacyPolicy />} />

        {/* Home */}
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

const Index: FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Index />);
