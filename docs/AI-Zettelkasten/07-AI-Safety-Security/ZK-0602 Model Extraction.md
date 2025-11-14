---
title: Model Extraction Attacks
id: ZK-0602
tags: [safety, attack]
created: 2025-11-13
updated:
---

**Definition**
- Model extraction attacks recreate proprietary models by querying them and training clones.

**Key Ideas**
- Query access reveals decision boundaries which attackers approximate.
- Rate limiting, watermarking, and output perturbation help deter theft.
- Sensitive deployments require monitoring for atypical query patterns.



**Real-World Use Cases**
- Protect proprietary Sinhala ASR models offered via paid APIs.
- Monitor B2B analytics products for scraping behavior.

**Technologies & Tooling**
- API gateways (Kong, Apigee) with adaptive rate limits.
- Watermarking / fingerprinting libraries such as SynthID or Glaze.

**Related Notes**
- [[ZK-0600 AI Risk Landscape]]
- [[ZK-0501 Model Deployment]]
- [[ZK-0604 Secure AI Pipelines]]

**Further Expansion**
- Evaluate watermark robustness for Sinhala NLP APIs
- Document contractual controls against bulk querying
