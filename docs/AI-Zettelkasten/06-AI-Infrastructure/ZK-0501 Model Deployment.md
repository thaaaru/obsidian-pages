---
title: Model Deployment
id: ZK-0501
tags: [infrastructure, deployment]
created: 2025-11-13
updated:
---

**Definition**
- Model deployment operationalizes trained models via APIs, batch jobs, or edge runtimes with monitoring.

**Key Ideas**
- CI/CD automates packaging, versioning, and rollout strategies (blue/green, canary).
- Observability layers track latency, drift, and cost.
- Security requires secret management, rate limiting, and audit logs.



**Real-World Use Cases**
- Serve LLM endpoints behind API gateways for GovCloud APIs.
- Ship offline inference containers to provincial data centers.

**Technologies & Tooling**
- Seldon Core, BentoML, or FastAPI microservices.
- Observability stacks (Prometheus, Grafana, OpenTelemetry).

**Related Notes**
- [[ZK-0500 GPU & Compute]]
- [[ZK-0503 RAG]]
- [[ZK-0604 Secure AI Pipelines]]

**Further Expansion**
- Draft deployment checklist for Sri Lanka GovCloud
- Compare inference frameworks (Triton, OpenVINO, ONNX Runtime)
