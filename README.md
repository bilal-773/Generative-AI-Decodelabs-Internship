# DecodeLabs Generative AI Internship - Task Suite

This repository contains the completed projects for Tasks 1, 2, and 3 of the Generative AI Industrial Training.

## Project Structure
- `task1_system_prompt.html`: Aria - The System Prompt Architect (Interactive Chat UI)
- `task2_creative_visionary.html`: The Creative Visionary (Cyberpunk-Corporate Rebrand Showcase)
- `task3_rag_dashboard.html`: RAG Document Intelligence Dashboard (Citations, Risks, Dates, Stakeholders)
- `assets/`: Folder containing high-fidelity generated images for Task 2 (Logo, Hero, Icons)
- `server.js`: Node.js Express server to serve static pages and proxy AI completions to bypass CORS errors.
- `package.json`: Node dependencies.

---

## Setup & Running Locally

1. **Install Node.js:** Ensure Node.js is installed on your system.
2. **Install Dependencies:** Open a terminal in this directory and run:
   ```bash
   npm install
   ```
3. **Configure API Keys (Optional):**
   Copy the API keys into the `.env` file (or provide them directly in the browser dashboards):
   ```env
   GEMINI_API_KEY=your_gemini_key_here
   CLAUDE_API_KEY=your_claude_key_here
   ```
4. **Start the Server:** Run:
   ```bash
   npm start
   ```
5. **Open in Browser:**
   Open [http://localhost:3000](http://localhost:3000) or navigate directly to:
   - Task 1: [http://localhost:3000/task1_system_prompt.html](http://localhost:3000/task1_system_prompt.html)
   - Task 2: [http://localhost:3000/task2_creative_visionary.html](http://localhost:3000/task2_creative_visionary.html)
   - Task 3: [http://localhost:3000/task3_rag_dashboard.html](http://localhost:3000/task3_rag_dashboard.html)

---

## What was implemented:
- **Task 1:** An interactive Aria Chat Simulator. Test Aria offline (using standard rule validations in JS) or online (with Gemini or Claude).
- **Task 2:** A visual portfolio featuring 5 high-fidelity generated Cyberpunk-Corporate assets, including a side-by-side comparison of the Hero image and its img2img translation.
- **Task 3:** A document analyzer that extracts Risks, Dates, and Stakeholders. Supports client-side PDF text extraction using PDF.js via CDN, and a live Q&A chat enforcing exact source citations.
