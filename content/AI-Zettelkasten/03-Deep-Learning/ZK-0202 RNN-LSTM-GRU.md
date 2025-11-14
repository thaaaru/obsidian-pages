---
title: RNN, LSTM, and GRU
id: ZK-0202
tags: [deep-learning, sequence]
created: 2025-11-13
updated:
---

**Definition**
- Recurrent architectures process sequential data by propagating hidden states over time.

**Key Ideas**
- Vanilla RNNs suffer vanishing gradients; LSTM/GRU introduce gating to preserve context.
- Still useful for low-latency or streaming scenarios where transformers are heavy.
- Hybrid stacks pair CNN front-ends with RNN temporal decoders (e.g., speech).



**Real-World Use Cases**
- Provide live translation captions for parliamentary sessions.
- Forecast power demand curves for grid operators.

**Technologies & Tooling**
- TensorFlow/Keras sequence APIs with CuDNNLSTM layers.
- Streaming inference via TorchServe or Triton with state caching.

**Related Notes**
- [[ZK-0203 Transformers]]
- [[ZK-0402 Speech-Audio AI]]
- [[ZK-0903 Long Context Models]]

**Further Expansion**
- Document Sinhala speech datasets suited for RNN baselines
- Assess TinyLSTM viability on edge devices
