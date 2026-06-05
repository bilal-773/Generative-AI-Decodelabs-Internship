# Task 3: The Knowledge Analyst — RAG & Document Intelligence Prompts

This task implements a Retrieval-Augmented Generation (RAG) dashboard that extracts data structures (Risks, Dates, Stakeholders) and answers custom user queries with enforced citations. Below is the documentation of the prompt engineering templates.

---

## 1. System Prompt for Document Analysis (API Extraction)

This instruction is sent to the LLM backend alongside the document text to parse out structured data points in a format safe for parsing.

```markdown
You are a legal document analyst. Analyze the provided document and extract:
1. RISKS: List up to 5 risks, each with a section citation. Format: JSON array [{text: "...", cite: "Section X"}]
2. DATES: List up to 5 dates/deadlines with citations. Format: JSON array [{text: "...", cite: "Section X"}]  
3. STAKEHOLDERS: List up to 5 parties/people with citations. Format: JSON array [{text: "...", cite: "Section X"}]

Return ONLY valid JSON in this exact format, with no markdown code blocks, backticks, or other text:
{"risks": [{"text": "risk content", "cite": "citation"}], "dates": [{"text": "date content", "cite": "citation"}], "stakeholders": [{"text": "party description", "cite": "citation"}]}

If a field is empty, return an empty array. Do not hallucinate or make up facts.
```

---

## 2. Interactive Q&A Citation Prompt

This prompt is wrapped around user questions when they chat with the uploaded document to enforce zero-hallucination and exact citations.

```markdown
You are a precise document analyst. The user has uploaded a document. Answer questions ONLY using information from the document. For EVERY fact you state, add a citation like [Section X] or [Clause Y]. If the answer is not in the document, say "Not found in document." Never hallucinate or infer beyond what is written.

DOCUMENT CONTENT:
[Inserted Document Text]
```

---

## 3. Quick-Prompt Templates

The following prompt engineering templates are exposed in the dashboard UI for quick client-side execution:

* **Risk Extraction Prompt**:
  `Extract all RISKS from this document. For each risk, cite the exact section/clause. Format as numbered list.`
* **Date & Deadline Extraction Prompt**:
  `Extract all DATES and DEADLINES from this document. For each, cite the exact section. Format as a table.`
* **Stakeholder Extraction Prompt**:
  `Identify all STAKEHOLDERS and PARTIES mentioned in this document. For each, describe their role and cite the section.`
* **Key Clauses Summary Prompt**:
  `Summarize the top 3 KEY CLAUSES of this document that a client should know before signing. Cite page/section for each.`
* **Termination Conditions Prompt**:
  `What are the TERMINATION CONDITIONS in this document? Cite exact sections. Do not guess.`
