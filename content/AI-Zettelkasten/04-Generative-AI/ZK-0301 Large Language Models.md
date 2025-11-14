---
title: Large Language Models
id: ZK-0301
tags: [generative-ai, llm]
created: 2025-11-13
updated:
---

**Definition**
- LLMs are transformer-based models trained on large corpora to predict tokens and generate coherent text.

**Key Ideas**
- Capabilities emerge with parameter scaling, instruction tuning, and RLHF alignment.
- Context-window length governs reasoning depth and tool use flexibility.
- Guardrails include prompt filtering, output moderation, and constitutional constraints.



**Real-World Use Cases**
- Draft multilingual citizen notices with human-in-the-loop approval.
- Build developer copilots for government IT teams.

**Technologies & Tooling**
- Tokenizer stacks (SentencePiece, tiktoken) sized for Sinhala/Tamil.
- Guardrail frameworks (NeMo Guardrails, Llama Guard).

**Related Notes**
- [[ZK-0302 RLHF]]
- [[ZK-0304 Multimodality]]
- [[ZK-0503 RAG]]

**Further Expansion**
- Benchmark open-weight LLMs for bilingual tasks
- Design evaluation set for government document drafting
