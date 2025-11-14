---
title: Speech and Audio AI
id: ZK-0402
tags: [applied-ai, audio]
created: 2025-11-13
updated:
---

**Definition**
- Speech/audio AI models convert acoustic signals into transcripts, speakers, or intent labels and back.

**Key Ideas**
- Includes ASR, TTS, speaker diarization, and audio event detection.
- Requires phoneme coverage and noise augmentation for field robustness.
- Edge deployments rely on streaming architectures (RNN-T, Conformer).



**Real-World Use Cases**
- Hotline triage for disaster response in Sinhala and Tamil.
- Voice biometric kiosks for pension disbursement.

**Technologies & Tooling**
- wav2vec2 / Whisper fine-tuned on local dialect data.
- On-device DSP libraries (Qualcomm, Edge Impulse) for noise handling.

**Related Notes**
- [[ZK-0202 RNN-LSTM-GRU]]
- [[ZK-0304 Multimodality]]
- [[ZK-0802 AI for Healthcare]]

**Further Expansion**
- Catalog Sinhala/Tamil speech datasets for open release
- Experiment with voice biometrics standards in public services
