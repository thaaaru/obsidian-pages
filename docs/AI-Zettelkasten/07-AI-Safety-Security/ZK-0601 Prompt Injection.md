---
title: Prompt Injection
id: ZK-0601
tags: [safety, attack]
created: 2025-11-13
updated:
---

**Definition**
- Prompt injection manipulates LLM instructions to override intended behavior or exfiltrate data.

**Key Ideas**
- Attackers craft malicious inputs that hijack system prompts or tool calls.
- Mitigations: layered instruction hierarchies, content filtering, allowlists.
- Red-team exercises should include multilingual prompts and code blocks.



**Real-World Use Cases**
- Red-team LLM-based email assistants before civil-service rollout.
- Secure procurement chatbots that read confidential tenders.

**Technologies & Tooling**
- LLM firewalls (Gandalf, PromptDefend) that sanitize inputs.
- Deterministic function-calling schemas enforced via JSON schema validators.

**Related Notes**
- [[ZK-0604 Secure AI Pipelines]]
- [[ZK-0301 Large Language Models]]
- [[ZK-0800 AI for Govt]]

**Further Expansion**
- Assemble Sri Lankan threat library of domain-specific prompt attacks
- Test policy sandbox enforcing deterministic tool call schemas
