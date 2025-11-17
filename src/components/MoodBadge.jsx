export default function MoodBadge({ mood }) {
  const colors = {
    happy: "#4ade80",
    sad: "#60a5fa",
    angry: "#f87171",
    neutral: "#a3a3a3",
  };

  return (
    <div
      style={{
        padding: "8px 18px",
        background: "#222",
        borderRadius: "30px",
        border: `2px solid ${colors[mood] || "#666"}`,
        display: "inline-block",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    >
      Mood: {mood.toUpperCase()}
    </div>
  );
}
