---
title: GPU and Compute Strategy
id: ZK-0500
tags: [infrastructure, compute]
created: 2025-11-13
updated:
---

**Definition**
- GPU and compute strategy covers hardware selection, scheduling, and cost control for AI workloads.

**Key Ideas**
- Balance on-prem clusters with cloud bursts to handle training spikes.
- Scheduler choices (Slurm, Kubernetes) dictate utilization and quota policy.
- Energy and cooling constraints must be tracked as first-class metrics.



**Real-World Use Cases**
- Size national AI compute clusters for education + health demand curves.
- Negotiate regional compute-sharing MoUs between universities.

**Technologies & Tooling**
- NVIDIA DGX SuperPOD or AMD MI300-based racks.
- Cluster schedulers (Slurm, Kubernetes with Kueue).

**Related Notes**
- [[ZK-0501 Model Deployment]]
- [[ZK-0504 Caching & Optimization]]
- [[ZK-0600 AI Risk Landscape]]

**Further Expansion**
- Model TCO for national AI compute facility
- Document GPU sharing agreements across universities
