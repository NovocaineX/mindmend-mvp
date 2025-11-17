import React, { useEffect, useRef, useState } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

export default function VoiceChat({ memory, onRemember }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = "en-IN";

    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      handleUserText(text);
    };

    rec.onend = () => setListening(false);

    recognitionRef.current = rec;
  }, []);

  function speak(text) {
    if (!synth) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-IN";
    synth.cancel();
    synth.speak(utter);
  }

  function startListening() {
    recognitionRef.current?.start();
    setListening(true);
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  function detectMood(text) {
    const t = text.toLowerCase();
    if (t.includes("sad") || t.includes("hurt")) return "sad";
    if (t.includes("angry")) return "angry";
    if (t.includes("happy") || t.includes("good")) return "happy";
    return "neutral";
  }

  function handleUserText(text) {
    const mood = detectMood(text);

    onRemember({
      lastSpoken: text,
      mood,
      time: Date.now(),
    });

    let emotionalReply = "";

    if (mood === "sad")
      emotionalReply = "You sound down… I’m here with you. Want to share what happened?";
    else if (mood === "angry")
      emotionalReply = "I hear the frustration. Tell me what’s making you feel this way.";
    else if (mood === "happy")
      emotionalReply = "That’s great to hear! Tell me more.";
    else
      emotionalReply = "I’m here with you — talk to me.";

    speak(emotionalReply);
    setReply(emotionalReply);
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <button
        onClick={startListening}
        disabled={listening}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          background: "#6d28d9",
          color: "white",
          marginRight: "10px",
        }}
      >
        🎤 Start Talking
      </button>

      <button
        onClick={stopListening}
        disabled={!listening}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          background: "#333",
          color: "white",
        }}
      >
        ⏹ Stop
      </button>

      <div style={{ marginTop: "20px" }}>
        <p><strong>You said:</strong> {transcript || "—"}</p>
        <p><strong>MindMend replied:</strong> {reply || "—"}</p>
      </div>
    </div>
  );
}
