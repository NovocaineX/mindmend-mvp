import React from "react";

export default function Demo() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "60px 20px",
        background: "linear-gradient(180deg, #0d0d0d, #121212)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.05)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "38px", fontWeight: "800", marginBottom: "10px" }}>
          Demo Page Working
        </h1>
        <p style={{ opacity: 0.8 }}>
          Your page is now loading correctly. We will now upgrade step by step.
        </p>
      </div>
    </div>
  );
}
