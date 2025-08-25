import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RaasPage from "./pages/Raas";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RaasPage />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
