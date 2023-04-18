import React, { FC } from "react";
import ReactDOM from "react-dom";

// theme
import { ThemeProvider } from "@mui/material";
import { theme } from "@common/theme";

// navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Static from "./static";

const Index: FC = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/*" element={<Static />} />
          </Routes>
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

// After
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Index />);
