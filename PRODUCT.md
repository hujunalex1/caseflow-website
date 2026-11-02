# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Standalone static marketing site at the project root: hand-authored HTML/CSS/JS with no build step. It lives in its own `caseflow-website` project, separate from the product app (UmiJS 2 / React 16 inside Spring Boot), and deploys to any static host.

## Users

Primary: Chinese-speaking QA engineers, test leads, and developers in teams that self-host their test tooling. They currently organize test cases in XMind or Excel, pass files around, and lose track of which requirement a case belongs to. They evaluate tools by reading docs, spinning up Docker locally, and checking whether the workflow fits how their QA team already writes mind maps.

## Product Purpose

CaseFlow is a mind-map-native, multi-user real-time test case management platform. It turns test design into a shared, living mind map, then carries that same case library into execution tracking, AI-assisted authoring, and a team knowledge base. Success means a QA team can move from requirement to reviewed, executable cases without leaving one platform.

## Positioning

Test cases are authored as a mind map, not a spreadsheet or a list. A Socket.IO collaboration engine keeps every editor in the same room synchronized in real time; AI generation is grounded in the team's own uploaded requirements and historical cases through a Qdrant-backed RAG knowledge base, so suggestions reflect this team's business instead of generic model output.

## Operating Context

- Self-hosted with Docker Compose: case-server, MySQL 8, Qdrant; default entry `http://localhost:3002/case/caseList/1`.
- QA teams already think in XMind; XMind / XMind Zen import and export are part of the daily workflow.
- AI features call an OpenAI-compatible API configured in the admin page; document parsing can use Alibaba Cloud DashScope.
- Teams work in Chinese; product UI, docs, and README are Chinese-first.
- License: Apache 2.0.

## Capabilities and Constraints

Confirmed capabilities:

- Mind-map editor (`react-mindmap-editor`) with real-time multi-user sync, priority and tag marking, room locking, save snapshots, history comparison, and disconnect recovery.
- Case-set management: XMind import/export, requirement association, multi-field search, folder tree.
- Test task management: select cases by priority and tag, mark execution status, live progress, historical comparison.
- AI generation: natural-language requirement to structured cases, screenshot/design recognition via vision model, configurable provider/model/temperature/system prompt, batch tasks, quality evaluation and coverage analysis.
- RAG knowledge base: multi-format upload, semantic/JSON/HTML/Markdown chunking, Qdrant vector search, AI Q&A, index rebuild.
- Role-based access control.

Constraints and undecided facts:

- The site is a static marketing surface; there is no public hosted demo and no signup flow.
- Public GitHub repository: `https://github.com/hujunalex1/caseflow`.
- No pricing, customer names, benchmarks, or deployment-count claims exist. None may be invented.
- Product screenshots can be captured from the running local instance at `localhost:3002`; demo tenants or accounts must not be presented as real customers.

## Brand Commitments

- Product name: CaseFlow. The repository and some internal docs still say AgileTC; the public site uses CaseFlow.
- Logo: `case-server/src/main/resources/web/src/assets/caseflow-logo.png` — a violet-to-pink gradient rounded square containing a white “C”.
- Existing product landing page (`web/src/pages/landing/`) establishes the visual world: indigo `#4f46e5` action color, neutral greys, Bricolage Grotesque display face, product UI itself as the hero visual. The marketing site inherits this world rather than inventing a replacement identity.
- Voice: direct, concrete Chinese; describes what the product does and refuses hype, fabricated social proof, and gamification.

## Evidence on Hand

- Real logo files: `case-server/src/main/resources/web/src/assets/caseflow-logo.png` and `.svg`.
- Real product UI, runnable and screenshot-able at `localhost:3002`.
- Existing landing copy and illustrative SVG diagrams in `web/src/pages/landing/`; these are authored illustrations, not customer evidence.
- README feature list, PRD, and deployment docs describe real capabilities.
- Absent: customer testimonials, usage metrics, press, public demo.

## Product Principles

1. Show the mind map doing the work; the editor is the argument.
2. Real-time collaboration is a product behavior, not a bullet point — demonstrate it, don't claim it.
3. AI earns trust by citing the team's own knowledge, never by promising magic.
4. Self-hosting is a first-class path: concrete commands and honest prerequisites beat a sales funnel.
5. Never fabricate proof; illustrative product content is labeled as such.

## Accessibility & Inclusion

Marketing site targets WCAG 2.1 AA: keyboard-reachable navigation and controls, visible focus, sufficient contrast, reduced-motion support, and Chinese-first typography with system font fallbacks.
