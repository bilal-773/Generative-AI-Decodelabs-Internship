const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Anthropic = require('@anthropic-ai/sdk');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests (including local file double-click origins)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key', 'x-provider']
}));

app.use(express.json({ limit: '10mb' }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route to check server status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasClaudeKey: !!process.env.CLAUDE_API_KEY
  });
});

// Generic chat endpoint supporting both Gemini and Claude
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemInstruction, provider } = req.body;
    
    // Determine provider and API key
    const requestedProvider = provider || req.headers['x-provider'] || 'gemini';
    const clientApiKey = req.headers['x-api-key'];
    
    if (requestedProvider === 'claude') {
      const apiKey = clientApiKey || process.env.CLAUDE_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: 'Claude API key is missing. Set it in .env or provide it in the UI.' });
      }
      
      const anthropic = new Anthropic({ apiKey });
      
      // Format messages for Anthropic (Claude requires alternating user/assistant roles)
      const formattedMessages = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      
      const response = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 1500,
        system: systemInstruction,
        messages: formattedMessages
      });
      
      return res.json({ text: response.content[0].text });
      
    } else {
      // Default to Gemini
      const apiKey = clientApiKey || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: 'Gemini API key is missing. Set it in .env or provide it in the UI.' });
      }
      
      // Initialize Gemini SDK
      const googleGenAI = new GoogleGenerativeAI(apiKey);
      const model = googleGenAI.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        systemInstruction: systemInstruction 
      });
      
      // Format history for Gemini chat
      const chat = model.startChat({
        history: messages.slice(0, -1).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      });
      
      const lastMessage = messages[messages.length - 1].content;
      const result = await chat.sendMessage(lastMessage);
      const response = await result.response;
      
      return res.json({ text: response.text() });
    }
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: error.message || 'An error occurred during completion.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`🚀 Node.js Backend Server is running!`);
  console.log(`🌍 Access your projects at: http://localhost:${PORT}`);
  console.log(`   - Task 1: http://localhost:${PORT}/Task-1-Muhammad%20Bilal/task1_system_prompt.html`);
  console.log(`   - Task 2: http://localhost:${PORT}/Task-2-Muhammad%20Bilal/task2_creative_visionary.html`);
  console.log(`   - Task 3: http://localhost:${PORT}/Task-3-Muhammad%20Bilal/task3_rag_dashboard.html`);
  console.log(`========================================================`);
});
