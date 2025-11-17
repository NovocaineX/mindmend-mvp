# MindMend – AI Voice Companion (MVP)

MindMend is a voice-first AI companion designed to support emotional wellness through natural, conversational interaction.  
It listens to your voice, detects mood, responds with warmth, and stores encrypted memory locally — creating a private and personal companion experience.

This is the MVP build created for academic demonstration.

---

## 🚀 Features (MVP)

### 🎤 Voice Input
- Uses browser SpeechRecognition API  
- Captures natural speech  
- Converts voice → text instantly  

### 🧠 Encrypted Local Memory
- Stores last interactions  
- Saved using AES encryption  
- 100% offline & private  

### 😊 Mood Detection
Detects emotional states:
- happy  
- sad  
- angry  
- neutral  

Responses change based on emotion.

### 🗣 Voice Output
- Uses browser Speech Synthesis  
- Gives warm, friendly, conversational replies  

### 🎨 Premium UI
- Gradient hero section  
- Glass/blur card layout  
- Modern typography  
- Fully centered and responsive pages  

---

## 📂 Project Structure
mindmend/
├── src/
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Demo.jsx
│ ├── components/
│ │ ├── VoiceChat.jsx
│ │ ├── MoodBadge.jsx
│ │ └── MemoryPanel.jsx
│ ├── services/
│ │ ├── storage.js
│ │ └── (api files for future upgrades)
│ ├── App.jsx
│ └── main.jsx
└── package.json


---

## 🛠 Tech Stack

- Vite + React  
- JavaScript (ES6+)  
- SpeechRecognition API  
- SpeechSynthesis API  
- CryptoJS (AES Encryption)  
- React Router  

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/NovocaineX/mindmend-mvp.git

### 2️⃣ Install dependencies
npm install


### 3️⃣ Run development server

npm run dev


### 4️⃣ Open in browser
http://localhost:5173/

---

## 🧩 How It Works (MVP Logic)

### VoiceChat Flow:
1. User clicks **Start Talking**  
2. SpeechRecognition listens → converts to text  
3. Mood is detected from emotional words  
4. MindMend generates a supportive emotional response  
5. Response is spoken aloud  
6. Interaction is saved (encrypted)  

### Local Memory:
- Encrypted with AES  
- Stored in browser localStorage  
- Stays entirely on user’s device  

---

## 🔒 Privacy

MindMend MVP is **100% offline** and stores all data locally with encryption.  
No external servers.  
No cloud dependencies.  
User data stays private.

---

## 🎯 Future Scope

- AI conversational engine (Gemini/OpenAI)  
- Custom character personalities  
- More realistic TTS  
- Mood timeline analytics  
- Journaling mode  
- Mobile app version  
- Premium versions (MindMend Plus / MindMend Ascend)  

---

## 👥 Team

**Aadarsh** – Core Developer & Architect  

**Shaurya** - Project Manager

**Ankur** - Fund Raiser

**Subodh** - Designer

---

## 📄 License

This project is for academic use and demonstration purposes.

---

## 💜 MindMend – Always Here With You.








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
