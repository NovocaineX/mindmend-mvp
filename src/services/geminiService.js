export async function askGemini(apiKey, text, memory = {}) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
    apiKey;

  const prompt = `
You are MindMend, a supportive AI companion.
You speak warmly, casually, and like a real friend.
You NEVER give generic robotic replies.

Conversation memory:
${JSON.stringify(memory)}

User said: "${text}"
Respond emotionally, human-like, friendly, short, and natural.
  `;

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return reply || "I’m here with you, tell me more.";
  } catch (err) {
    console.error("Gemini error:", err);
    return "I’m here with you, tell me more.";
  }
}
