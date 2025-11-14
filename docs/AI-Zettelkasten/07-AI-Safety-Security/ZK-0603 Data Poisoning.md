---
title: Data Poisoning
id: ZK-0603
tags: [safety, data]
created: 2025-11-13
updated:
---

**Definition**
- Data poisoning injects malicious samples into training data to corrupt model behavior.

**Key Ideas**
- Targets can be clean-label, backdoor, or availability attacks.
- Defense-in-depth includes data provenance checks, outlier detection, and robust training.
- Open-data ingestion pipelines need automated trust scoring.



**Real-World Use Cases**
- Secure citizen feedback pipelines from malicious spam.
- Guard open-data portals before ingesting volunteer datasets.

**Technologies & Tooling**
- Cleanlab or anomaly detection notebooks for dataset vetting.
- Signed data ingestion workflows using DVC + attestations.

**Related Notes**
- [[ZK-0600 AI Risk Landscape]]
- [[ZK-0503 RAG]]
- [[ZK-0703 Responsible AI]]

**Further Expansion**
- Design poisoning detection for civic data portals
- Record response playbooks for compromised datasets
