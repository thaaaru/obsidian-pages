---
title: Reinforcement Learning from Human Feedback
id: ZK-0302
tags: [generative-ai, alignment]
created: 2025-11-13
updated:
---

**Definition**
- RLHF aligns model outputs with human preferences by training reward models and fine-tuning policies.

**Key Ideas**
- Collect pairwise preference data to train reward predictors.
- PPO or DPO-style optimization balances reward maximization with base-model behaviors.
- Quality hinges on rater diversity, instructions, and auditing toxic incentives.



**Real-World Use Cases**
- Align public-service chatbots with civil-service etiquette.
- Tune legal drafting assistants to follow constitutional tone.

**Technologies & Tooling**
- Preference collection platforms (Surge, Scale) with multilingual guidelines.
- TRL / DeepSpeed-RLHF pipelines for PPO or DPO training.

**Related Notes**
- [[ZK-0103 Reinforcement Learning]]
- [[ZK-0301 Large Language Models]]
- [[ZK-0600 AI Risk Landscape]]

**Further Expansion**
- Capture rubric for recruiting Sri Lankan raters
- Experiment with synthetic preference data to reduce cost
