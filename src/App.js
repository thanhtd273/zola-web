import React from "react";

import { PrimeReactProvider } from "primereact/api";

import Login from "./pages/auth/Login";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PREFIX } from "./constants/Global";

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PREFIX} element={<Home />} />
          <Route extract index path={PREFIX + "/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
