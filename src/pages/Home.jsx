import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #1f1f1f 0%, #0c0c0c 85%)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #a855f7, #6366f1)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MindMend AI Companion
        </h1>

        <p
          style={{
            fontSize: "22px",
            opacity: 0.85,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          A voice-first emotional support companion that listens, understands,
          and grows with you. Built for real interaction — not just chat.
        </p>

        <Link to="/demo">
          <button
            style={{
              marginTop: "40px",
              padding: "16px 40px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "600",
              background: "linear-gradient(90deg, #6d28d9, #9333ea)",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "0.25s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
          >
            Try the Demo →
          </button>
        </Link>
      </div>
    </div>
  );
}
