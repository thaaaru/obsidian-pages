---
title: AI Agents
id: ZK-0404
tags: [applied-ai, agents]
created: 2025-11-13
updated:
---

**Definition**
- AI agents orchestrate planning, tool use, and memory to pursue multi-step objectives autonomously.

**Key Ideas**
- Combine LLM reasoning with structured planners or finite-state controllers.
- Memory design (episodic, semantic) governs context persistence.
- Safety hinges on sandboxing tools and verifying execution traces.



**Real-World Use Cases**
- Document-processing agents that gather data from multiple registries.
- Field-service copilots that schedule technicians and draft reports.

**Technologies & Tooling**
- LangChain or LlamaIndex orchestrating tool use.
- Vector memory layers via Pinecone, Weaviate, or pgvector.

**Related Notes**
- [[ZK-0301 Large Language Models]]
- [[ZK-0902 Autonomous Agents]]
- [[ZK-0604 Secure AI Pipelines]]

**Further Expansion**
- Prototype agent governance checklist for civic workflows
- Explore shared memory graph backed by vector DBs
