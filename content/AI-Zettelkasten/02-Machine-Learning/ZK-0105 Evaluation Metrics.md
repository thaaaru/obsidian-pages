---
title: Evaluation Metrics
id: ZK-0105
tags: [ml, evaluation]
created: 2025-11-13
updated:
---

**Definition**
- Evaluation metrics quantify how well a model meets task objectives and stakeholder constraints.

**Key Ideas**
- Classification metrics include accuracy, precision/recall, F1, ROC-AUC.
- Regression uses MAE, RMSE, R^2 while rankers rely on NDCG or MAP.
- Operational metrics (latency, fairness, cost) complement statistical scores.



**Real-World Use Cases**
- Set operational thresholds for emergency-response call triage models.
- Compare vendor models during government RFP scoring.

**Technologies & Tooling**
- EvidentlyAI or WhyLabs dashboards tracking drift and fairness metrics.
- Custom metric registries embedded in MLflow or Weights & Biases.

**Related Notes**
- [[ZK-0101 Supervised Learning]]
- [[ZK-0501 Model Deployment]]
- [[ZK-0600 AI Risk Landscape]]

**Further Expansion**
- Align national AI KPIs with citizen outcomes
- Create shared metric catalog for inter-ministry projects
