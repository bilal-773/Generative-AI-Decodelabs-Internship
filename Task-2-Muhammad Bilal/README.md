# Task 2: The Creative Visionary — Image Generation Prompts

This task covers the creation of high-fidelity visual assets for the "Cyberpunk-Corporate" startup rebranding (**NeuralNexus Corp**). Below are the five prompts, negative prompts, styling properties, and the Image-to-Image (img2img) translation workflow.

---

## 1. Prompts Library

### Prompt 01: Logo Concept (Aspect Ratio 1:1)
* **Positive Prompt**:
  `minimalist corporate logo, abstract neural network node symbol, interconnected hexagonal lattice, glowing cyan neon lines on deep matte black background, circuit board aesthetic, geometric precision, flat vector style, ultra clean edges, cyberpunk corporate identity, single color accent #00F5D4, centered composition, high contrast, professional brand mark, 4K, sharp focus, no text, no words`
* **Negative Prompt**:
  `--no people, humans, faces, organic shapes, gradients, rainbow colors, messy, cluttered, photorealistic, 3D render, drop shadow, lens flare, watermark, blurry, low quality, serif fonts, decorative borders, red, green, orange`
* **Target Output**: Hexagonal glowing cyan network vector logo.

---

### Prompt 02: Hero Image — Website Banner (Aspect Ratio 16:9)
* **Positive Prompt**:
  `cinematic wide-angle shot, futuristic corporate headquarters interior at night, holographic data projections floating in air, neon cyan and magenta light streaks on glass walls, lone silhouette of a business professional in sharp suit facing a massive glowing data wall, volumetric fog, cyberpunk corporate atmosphere, ultra modern architecture, dramatic rim lighting, depth of field, hyperrealistic, 8K, photographic, award winning photography, high contrast dark background, moody, powerful`
* **Negative Prompt**:
  `--no daylight, sunlight, cheerful, colorful flowers, casual clothing, multiple people, text overlay, watermark, cartoonish, anime, illustration, low detail, ugly, oversaturated, washed out, warm tones, orange`
* **Target Output**: Wide website banner showing office room interior with silhouettes, holographic data, and glowing cyan/magenta neon rim light.

---

### Prompt 03: Icon 1 — AI / Data Intelligence (Aspect Ratio 1:1)
* **Positive Prompt**:
  `flat icon design, stylized brain with circuit traces, cyan wireframe lines on black, geometric angular shapes, sharp corners, minimal detail, tech company app icon style, neon glow effect, centered symmetrical composition, crisp vector lines, corporate tech icon, SVG-style flat illustration, clean edges, 512px`
* **Negative Prompt**:
  `--no photorealistic brain, organic texture, pink flesh tones, 3D render, text, labels, gradients, background patterns, complex details, human face, multiple colors, warm tones`
* **Target Output**: Stylized neon cyan electronic brain icon.

---

### Prompt 04: Icon 2 — Cybersecurity / Shield (Aspect Ratio 1:1)
* **Positive Prompt**:
  `minimal geometric shield icon, angular hexagonal shape, magenta pink neon glow on matte black, circuit trace pattern inside shield, digital lock symbol, cyberpunk security emblem, flat 2D vector, symmetric design, sharp precision lines, tech icon, transparent background, clean`
* **Negative Prompt**:
  `--no 3D, metallic sheen, texture, gradients, human figure, text, badge ribbon, realistic lock, complex illustration, blue tones, green tones, warm colors`
* **Target Output**: Stylized neon magenta cybersecurity lock/shield icon.

---

### Prompt 05: Icon 3 — Network / Connectivity (Aspect Ratio 1:1)
* **Positive Prompt**:
  `minimalist network node icon, 5 glowing dots connected by thin lines, constellation pattern, cyan electric glow, dark navy background, dot-and-line tech aesthetic, clean flat design, angular geometry, digital network graph visualization, app icon, vector flat, 512px, ultra sharp`
* **Negative Prompt**:
  `--no globe, earth, map, people, 3D, photorealistic, gradients, text, labels, cluttered, complex, warm colors, organic shapes, bubbles`
* **Target Output**: Constellation network graph connectivity icon.

---

## 2. Image-to-Image (img2img) Translation Workflow

To maintain character and composition consistency across different scenes (for example, placing our silhouette professional in new environments):

1. **Step 1 (Reference)**: Use **Prompt 02** output as the base reference/source image.
2. **Step 2 (Denoising)**: Upload to an img2img capable engine (e.g. Stable Diffusion / Midjourney vary region / Clipdrop). Set the **denoising strength to 0.55 - 0.70**.
3. **Step 3 (Variation Prompt)**: Keep the core subject instructions but modify the background environment prompt:
   `Same composition, same silhouette, but now exterior rooftop at night, rain on glass, neon city reflections below, magenta accent lighting instead of cyan`
4. **Step 4 (Output)**: Generates a brand-consistent variation preserving visual layout structure (composition) while changing the contextual background.
