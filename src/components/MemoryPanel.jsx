export default function MemoryPanel({ memory }) {
  if (!memory || !memory.lastSpoken)
    return (
      <div style={{ marginTop: "40px", opacity: 0.6 }}>
        No memory saved yet.
      </div>
    );

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        background: "#181818",
        borderRadius: "10px",
        width: "350px",
      }}
    >
      <h3>Last Interaction</h3>
      <p><strong>You said:</strong> {memory.lastSpoken}</p>
      <p><strong>Mood:</strong> {memory.mood}</p>
    </div>
  );
}
