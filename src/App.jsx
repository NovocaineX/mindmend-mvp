import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <div
      style={{
        padding: "18px 30px",
        borderBottom: "1px solid #222",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>
        MindMend
      </Link>

      <div style={{ display: "flex", gap: "20px", fontSize: "18px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/demo" style={{ color: "white", textDecoration: "none" }}>Demo</Link>
      </div>
    </div>
  );
}
