---
title: Caching and Optimization
id: ZK-0504
tags: [infrastructure, optimization]
created: 2025-11-13
updated:
---

**Definition**
- Caching and optimization tactics reduce latency and cost by reusing computations and tuning runtimes.

**Key Ideas**
- Token caches for LLMs avoid re-encoding shared prefixes.
- Quantization and sparsity lower memory footprint while maintaining accuracy.
- Edge caches need invalidation rules tied to data governance.



**Real-World Use Cases**
- Slash LLM latency for citizen helplines during peak load.
- Reduce inference bills for nightly ESG report generation.

**Technologies & Tooling**
- vLLM or Text-Generation-Inference with paged attention caches.
- Quantization toolkits (BitsAndBytes, AWQ, GPTQ).

**Related Notes**
- [[ZK-0500 GPU & Compute]]
- [[ZK-0104 Feature Engineering]]
- [[ZK-0501 Model Deployment]]

**Further Expansion**
- Document cache hit-rate targets for ministries
- Test AWQ vs GPTQ quantization on local hardware
