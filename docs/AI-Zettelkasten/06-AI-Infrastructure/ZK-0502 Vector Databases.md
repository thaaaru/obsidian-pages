---
title: Vector Databases
id: ZK-0502
tags: [infrastructure, data]
created: 2025-11-13
updated:
---

**Definition**
- Vector databases store high-dimensional embeddings and support similarity search for retrieval-augmented systems.

**Key Ideas**
- Approximate nearest neighbor indexes (HNSW, IVF) trade accuracy for speed.
- Metadata filters and hybrid search combine structured queries with embeddings.
- Operational concerns: indexing latency, memory footprint, sharding.



**Real-World Use Cases**
- Power legal search copilots across court archives.
- Drive customer-support retrieval for telecom providers.

**Technologies & Tooling**
- Milvus, Weaviate, or Pinecone managed clusters.
- Approximate NN libraries like FAISS or ScaNN.

**Related Notes**
- [[ZK-0005 Knowledge Representation]]
- [[ZK-0503 RAG]]
- [[ZK-0404 Agents]]

**Further Expansion**
- Benchmark Milvus vs Weaviate for bilingual corpora
- Define retention policy for citizen data embeddings
