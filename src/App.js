import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RaasPage from "./pages/Raas";
import TermsAndConditions from "./components/terms";
import PrivacyPolicy from "./components/privacypolicy";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RaasPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
