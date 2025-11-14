---
title: Convolutional Neural Networks
id: ZK-0201
tags: [deep-learning, cnn]
created: 2025-11-13
updated:
---

**Definition**
- CNNs exploit spatial locality using convolutional kernels to process grid-like data such as images.

**Key Ideas**
- Weight sharing reduces parameters and improves translational invariance.
- Architectures: LeNet, ResNet, EfficientNet tailored for accuracy-latency tradeoffs.
- Modern vision transformers borrow convolutional inductive biases via patch embeddings.



**Real-World Use Cases**
- Detect road damage from drone imagery to prioritize repairs.
- Count tea buds for yield estimation in plantations.

**Technologies & Tooling**
- ONNX Runtime for deploying quantized CNNs to edge devices.
- Vision datasets managed in FiftyOne or Roboflow.

**Related Notes**
- [[ZK-0400 Computer Vision]]
- [[ZK-0204 Attention Mechanisms]]
- [[ZK-0303 Diffusion Models]]

**Further Expansion**
- Benchmark CNN baselines for Sri Lankan agriculture imagery
- Compare convolution vs attention blocks for small datasets
