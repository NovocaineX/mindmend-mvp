// src/components/VoiceChat.jsx
import React, { useEffect, useRef, useState } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

export default function VoiceChat({ memory, onRemember }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) return;
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'en-IN';
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
    utter.lang = 'en-IN';
    // adjust voice/pitch based on memory or mood later
    synth.cancel();
    synth.speak(utter);
  }

  function startListening() {
    if (!recognitionRef.current) return alert('Speech API not supported in this browser.');
    recognitionRef.current.start();
    setListening(true);
  }

  function stopListening() {
    if (!recognitionRef.current) return;
    recognitionRef.current.stop();
    setListening(false);
  }

  // Very simple sentiment-like heuristics
  function detectMood(text) {
    const t = text.toLowerCase();
    if (t.includes('sad') || t.includes('depress') || t.includes('lonely')) return 'sad';
    if (t.includes('happy') || t.includes('good') || t.includes('great')) return 'happy';
    if (t.includes('angry') || t.includes('annoyed')) return 'angry';
    return 'neutral';
  }

  function handleUserText(text) {
    const mood = detectMood(text);
    // store short memory
    onRemember({ lastSpoken: text, mood, time: Date.now() });

    // reply templates (replace with GPT later)
    let reply = "I'm here with you. Tell me more.";
    if (mood === 'sad') reply = "I'm sorry you're feeling low. Want to talk about what's weighing on you or try a breathing exercise?";
    if (mood === 'happy') reply = "That's awesome to hear! Tell me what's making your day great.";
    if (mood === 'angry') reply = "I hear your frustration—let it out. What's happening?";

    speak(reply);
  }

  return (
    <div style={{padding:20}}>
      <h3>MindMend — Speak to your companion</h3>
      <div>
        <button onClick={startListening} disabled={listening}>🎤 Talk</button>
        <button onClick={stopListening} disabled={!listening}>⏹ Stop</button>
      </div>
      <div style={{marginTop:12}}>
        <strong>Last you said:</strong> {transcript || '—'}
      </div>
    </div>
  );
}
