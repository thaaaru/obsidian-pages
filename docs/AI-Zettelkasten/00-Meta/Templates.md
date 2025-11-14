# Note Templates

## Atomic Note Template
```markdown
---
title: {{title}}
id: ZK-{{id}}
tags: [atomic, {{topic}}]
created: {{date}}
updated:
link-type: atomic
---

**Definition**
- {{one-sentence explanation}}

**Key Points**
- {{idea 1}}
- {{idea 2}}

**Related**
- [[ZK-xxxx Related Note]]

**Further Expansion**
- {{prompt for deeper research}}
```

## Concept Note Template
```markdown
---
title: {{concept name}}
id: ZK-{{id}}
tags: [concept, {{domain}}]
created: {{date}}
updated:
link-type: concept
status: draft
---

**Concept Summary**
- {{short narrative}}

**Signals & Examples**
- {{example}}

**Adjacent Concepts**
- [[ZK-xxxx]]

**Expansion Paths**
- {{question}}
```

## Lecture Note Template
```markdown
---
title: {{lecture title}}
id: ZK-{{id}}
tags: [lecture, {{course}}]
created: {{date}}
updated:
link-type: lecture
source: {{speaker or event}}
---

**Context**
- {{session overview}}

**Key Takeaways**
1. {{insight}}
2. {{insight}}

**Referenced Notes**
- [[ZK-xxxx]]

**Action Items**
- {{follow-up}}
```

## TekLab Note Template
```markdown
---
title: {{experiment title}}
id: ZK-{{id}}
tags: [teklab, experiment, {{stack}}]
created: {{date}}
updated:
link-type: lab
objective: {{hypothesis}}
---

**Setup**
- Repo: `{{repo}}`
- Stack: {{frameworks}}

**Steps**
1. {{step}}
2. {{step}}

**Observations**
- {{result}}

**Next Iterations**
- {{improvement}}
```
