// server/index.js (very minimal)
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  // load OPENAI_KEY from env
  const key = process.env.OPENAI_KEY;
  if (!key) return res.status(500).json({error: 'No key'});
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':`Bearer ${key}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // or gpt-4o if available
      messages: [{role:'system', content:'You are MindMend, a compassionate friend.'}, {role:'user', content: prompt}],
      max_tokens: 250
    })
  });
  const data = await response.json();
  res.json(data);
});

app.listen(process.env.PORT || 5000, () => console.log('Server up'));
