import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/globalStyles";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Home } from "./pages/home";
import { Work } from "./pages/work";
import { Contact } from "./pages/contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* add global styles */}
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="service" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
