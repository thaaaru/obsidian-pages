---
title: Feature Engineering
id: ZK-0104
tags: [ml, data]
created: 2025-11-13
updated:
---

**Definition**
- Feature engineering crafts informative inputs that expose task-relevant patterns to learning algorithms.

**Key Ideas**
- Includes transformations, aggregations, embeddings, and domain-driven encodings.
- Automated feature stores improve reproducibility and governance.
- Bias mitigation begins with representation choices at feature level.



**Real-World Use Cases**
- Derive creditworthiness features from telecom usage histories.
- Transform rainfall plus soil readings into drought risk indicators.

**Technologies & Tooling**
- dbt or Spark SQL pipelines feeding shared feature stores.
- Great Expectations tests ensuring feature data quality.

**Related Notes**
- [[ZK-0101 Supervised Learning]]
- [[ZK-0102 Unsupervised Learning]]
- [[ZK-0504 Caching & Optimization]]

**Further Expansion**
- Define reusable feature library for Sri Lankan credit inclusion datasets
- Document lineage tagging standards for derived features
