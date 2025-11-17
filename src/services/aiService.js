import { askGemini } from "./geminiService";
import { loadMemory, saveMemory } from "./storage";

const API_KEY = AIzaSyCaiCTc4C_DR4kb1bA-K5-AGWJ2T_W0nNM; // insert yours

export async function processMessage(text) {
  const memory = loadMemory() || {};

  const reply = await askGemini(API_KEY, text, memory);

  const updated = {
    ...memory,
    lastUserMessage: text,
    lastBotReply: reply,
    interactions: (memory.interactions || 0) + 1
  };

  saveMemory(updated);

  return reply;
}
