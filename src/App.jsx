import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Portal from "./Pages/Portal.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/portal" element={<Portal />} />
      {/* Redirect any unknown routes to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}