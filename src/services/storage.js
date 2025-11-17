import CryptoJS from "crypto-js";

const KEY = "mindmend_local_key_123";

export function saveMemory(obj) {
  const str = JSON.stringify(obj);
  const encrypted = CryptoJS.AES.encrypt(str, KEY).toString();
  localStorage.setItem("mindmend_memory", encrypted);
}

export function loadMemory() {
  const enc = localStorage.getItem("mindmend_memory");
  if (!enc) return null;

  try {
    const bytes = CryptoJS.AES.decrypt(enc, KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch {
    return null;
  }
}
