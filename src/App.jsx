import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { SiteHeader } from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <SiteHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
