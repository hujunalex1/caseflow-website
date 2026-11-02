---
name: CaseFlow
description: The official site for a mind-map-native, self-hostable test case platform.
colors:
  brand: "#4f46e5"
  brand-strong: "#4338ca"
  brand-soft: "#eef2ff"
  brand-ink: "#312e81"
  violet: "#6366f1"
  ink: "#0b0b0f"
  ink-2: "#27272a"
  ink-3: "#52525b"
  ink-4: "#71717a"
  line: "#e4e4e7"
  line-soft: "#f1f1f3"
  paper: "#ffffff"
  ground: "#f7f7f8"
  soft: "#fafafa"
  pass: "#15803d"
  pass-soft: "#dcfce7"
  fail: "#b91c1c"
  fail-soft: "#fee2e2"
  block: "#b45309"
  block-soft: "#fef3c7"
  ignore: "#6b21a8"
  ignore-soft: "#f3e8ff"
  idle: "#475569"
  idle-soft: "#e2e8f0"
  line-strong: "#c9c9d2"
  light-hover: "#e9e9ee"
  dot-separator: "#c7c7cf"
  avatar-blue-soft: "#dbeafe"
  avatar-blue-ink: "#1e40af"
  avatar-pink-soft: "#fce7f3"
  avatar-pink-ink: "#9d174d"
  idle-dot: "#94a3b8"
  idle-bar: "#cbd5e1"
  icon-muted: "#b6b6c1"
  night-body: "#b4b4bd"
  night-fact: "#c9c9d1"
  terminal-line: "#2e2e36"
  terminal-chip: "#1f1f26"
typography:
  display:
    fontFamily: "Bricolage Grotesque, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "clamp(2.65rem, 5.6vw, 4.7rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Bricolage Grotesque, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Arial, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    lineHeight: 1
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.95
  scale:
    product-8: "8px"
    product-8-5: "8.5px"
    product-9: "9px"
    product-9-5: "9.5px"
    product-10: "10px"
    product-10-5: "10.5px"
    product-11: "11px"
    product-12: "12px"
    product-12-5: "12.5px"
    product-13: "13px"
    product-13-5: "13.5px"
    product-14: "14px"
    product-14-5: "14.5px"
    editorial-15: "15px"
    editorial-15-5: "15.5px"
    editorial-16: "16px"
    editorial-17-5: "17.5px"
    numeric-22: "22px"
    numeric-46: "46px"
    numeric-54: "54px"
    display-24: "1.5rem"
    display-24-8: "1.55rem"
    display-28-8: "1.8rem"
    display-32-3: "2.02rem"
    display-35-2: "2.2rem"
    display-37-6: "2.35rem"
    display-38-4: "2.4rem"
    display-49-6: "3.1rem"
    display-53-6: "3.35rem"
    display-60-8: "3.8rem"
rounded:
  hairline: "2px"
  micro: "3px"
  xs: "4px"
  tag: "5px"
  sm: "6px"
  notice: "7px"
  node: "8px"
  control: "9px"
  md: "10px"
  lg: "14px"
  xl: "16px"
  pill: "999px"
spacing:
  "2xs": "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
    typography: "{typography.button}"
  button-primary-hover:
    backgroundColor: "{colors.brand-strong}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
    typography: "{typography.button}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "48px"
    typography: "{typography.button}"
  status-pill-pass:
    backgroundColor: "{colors.pass-soft}"
    textColor: "{colors.pass}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "21px"
    typography: "{typography.label}"
  status-pill-fail:
    backgroundColor: "{colors.fail-soft}"
    textColor: "{colors.fail}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "21px"
    typography: "{typography.label}"
  status-pill-block:
    backgroundColor: "{colors.block-soft}"
    textColor: "{colors.block}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "21px"
    typography: "{typography.label}"
  status-pill-ignore:
    backgroundColor: "{colors.ignore-soft}"
    textColor: "{colors.ignore}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "21px"
    typography: "{typography.label}"
  runboard:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  terminal:
    backgroundColor: "#15151a"
    textColor: "#e4e4e7"
    rounded: "{rounded.lg}"
    typography: "{typography.mono}"
---

# Design System: CaseFlow

## Overview

**Creative North Star: "The Living Run Ledger"**

CaseFlow's site is not a brochure wrapped around screenshots. It is a test run already in progress: one mind-map tree on the left, the execution ledger in the middle, the pass rate and the deploy command on the right. Design and execution are two views of the same record, and the page is organized to make that identity visible before it makes any claim.

The world is drawn from the product's own chrome: hairline rows, status pills, monospace commands, a real editor capture. Typography is deliberately split between a compressed, confident display voice for statements and a plain system sans for explanation. Indigo is the only accent that carries action; pass, fail, block, and ignore hues are reserved for data. Surfaces are paper-flat at rest, lifted only when they represent a working panel.

**Key Characteristics:**
- One tree carrying both design and execution, never two product stories.
- Product chrome as the hero visual, not an illustration of it.
- Indigo for action, semantic hues only for run status.
- Hairline structure; soft, offset shadows only under working surfaces.
- Chinese-first type with a self-hosted Latin display face.

## Colors

A cool neutral ledger with one indigo action voice and four reserved status families.

### Primary
- **Run Indigo** (`{colors.brand}`): Primary buttons, links, the active tree root, the score's accent segment, and the one emphasized phrase in a headline. The only color allowed to ask for a click.
- **Deep Indigo** (`{colors.brand-strong}`): Hover state for primary actions and link underlines. Never used at rest.
- **Wash Indigo** (`{colors.brand-soft}`): Selected or suggested rows inside generated output; a tint, never a surface for primary content.
- **Midnight Indigo** (`{colors.brand-ink}`): Deep accent text and the shadow tint under primary buttons.
- **Signal Violet** (`{colors.violet}`): The logo gradient's lighter stop and the ignore status; never a second action color.

### Neutral
- **Ink** (`{colors.ink}`): Headlines, primary text, the terminal's outer ground.
- **Graphite** (`{colors.ink-2}`): Chrome labels and dense product text.
- **Slate** (`{colors.ink-3}`): Body copy, secondary labels, table values.
- **Muted Zinc** (`{colors.ink-4}`): Metadata, captions, and tertiary labels at 10–12.5px.
- **Hairline** (`{colors.line}`): 1px borders around panels, rows, and the header.
- **Whisper Line** (`{colors.line-soft}`): Internal row separators where a full hairline would over-structure.
- **Paper** (`{colors.paper}`): Working panels, cards, and the run board.
- **Ledger Ground** (`{colors.ground}`): The page field.
- **Soft** (`{colors.soft}`): Panel footers and quiet strips inside paper.
- **Line Strong** (`{colors.line-strong}`): Hover state for ghost and replay borders; never a resting border.
- **Light Hover** (`{colors.light-hover}`): Hover fill for white buttons on dark or paper.
- **Dot Separator** (`{colors.dot-separator}`): The 3px dot between hero fact items.
- **Icon Muted** (`{colors.icon-muted}`): Low-emphasis drawn arrows and connectors inside product diagrams.

### Presence and Night Chrome
- **Presence Blue** (`{colors.avatar-blue-soft}` / `{colors.avatar-blue-ink}`) and **Presence Pink** (`{colors.avatar-pink-soft}` / `{colors.avatar-pink-ink}`): Collaborator avatar pairs. Only for human presence, never for status.
- **Idle Dot** (`{colors.idle-dot}`) and **Idle Bar** (`{colors.idle-bar}`): The neutral end of the status family, used for untested dots and the idle segment.
- **Night Body** (`{colors.night-body}`), **Night Fact** (`{colors.night-fact}`), **Terminal Line** (`{colors.terminal-line}`), **Terminal Chip** (`{colors.terminal-chip}`): The deploy band's inverted chrome. Night Body is body copy, Night Fact is the check-list text, Terminal Line is every 1px border inside the terminal, Terminal Chip is the copy control's fill.

### Status
- **Pass Green** (`{colors.pass}` on `{colors.pass-soft}`), **Fail Red** (`{colors.fail}` on `{colors.fail-soft}`), **Block Amber** (`{colors.block}` on `{colors.block-soft}`), **Ignore Purple** (`{colors.ignore}` on `{colors.ignore-soft}`), **Idle Slate** (`{colors.idle}` on `{colors.idle-soft}`).

### Named Rules

**The Status Is Data Rule.** Pass, fail, block, ignore, and idle hues appear only on status pills, status dots, and the distribution bar. They never tint a marketing section, a button, or a decorative shape.

**The One Action Rule.** Indigo is the only interactive accent. If a second element on the same screen wants indigo, it becomes ink or a hairline instead.

## Typography

**Display Font:** Bricolage Grotesque, falling through to PingFang SC for Chinese
**Body Font:** The platform system sans (SF Pro / PingFang SC / Segoe UI)
**Label/Mono Font:** The system monospace stack, reserved for commands, IDs, and terminal output

**Character:** The display face is wide, heavy, and tightly set, so a Chinese headline reads as a statement rather than a label. The body face stays quiet and highly legible; the contrast between the two carries the hierarchy, not color or decoration.

### Hierarchy
- **Display** (800, `clamp(2.65rem, 5.6vw, 4.7rem)`, 1.02): Hero statements only. Tight tracking, balanced wrapping, one indigo line at most.
- **Headline** (800, `clamp(2rem, 3.5vw, 3.2rem)`, 1.08): Section theses. No kicker, eyebrow, or numbered label above them.
- **Title** (600, 12.5–17.5px, 1.4–1.75): Product chrome titles, pane heads, and card titles.
- **Body** (400, 15.5–17.5px, 1.75–1.8): Explanatory copy, held to 55–62 characters per line.
- **Label** (600, 10–12.5px, 1): Status pills, metadata, table headers, and captions.
- **Mono** (400, 10–12px, 1.95): Docker commands, terminal output, IDs, and numeric evidence.

### Scale

The system runs two ramps on purpose. The editorial ramp is small and deliberate: 15–17.5px body, 22px numeric callout, 46px and 54px score numerals, and fluid display steps from 24px to 75px. The product-chrome ramp is dense and literal: 8–14.5px in half-pixel steps, because it is simulating real software at real density, where a table header, a status pill, and a tree label legitimately need different sizes. The frontmatter `typography.scale` map is the complete allowlist for both ramps; new work picks an existing step rather than inventing 9.8px.

### Named Rules

**The No Kicker Rule.** A section heading carries its own weight. No small uppercase label, eyebrow, or index sits above it.

**The Two Ramps Rule.** Editorial type makes statements; product-chrome type reports data. Do not use 8–10px sizes for marketing copy, and do not inflate product chrome to editorial sizes.

**The Mono Is Evidence Rule.** Monospace appears only where the content is a real command, identifier, or measurement. It is never a costume for "technical".

## Layout

A 1240px maximum shell with 24px side gutters. Sections breathe at 104px vertical padding; hero content starts at 54px under the sticky header. The signature split is asymmetric: a 0.78fr copy column against a 1.35fr working surface, with 64–80px between them, so the product panel always has more visual weight than the prose.

The hero is a three-pane ledger: mind-map tree, execution rows, and a summary rail carrying the pass rate and deploy command. Below it, sections alternate between split layouts, a four-stage horizontal pipeline, a full-width raster product capture, and a dark deploy band.

Responsive behavior is composition, not scaling:
- **1120px:** split product panels go single-column so diagrams keep usable branch widths.
- **980px:** desktop navigation collapses into the menu; FAQ and deploy splits stack.
- **820px:** the product capture switches to a detail crop; the mobile caption replaces the desktop one.
- **760px:** the run board stacks tree → rows → summary; the mind-map stage becomes one branch per row.
- **560px:** header action hides, CTAs go full-width, the summary rail becomes a single column.
- **380px:** display sizes step down again and fact separators disappear.

### Named Rules

**The Working Surface Rule.** Product demonstrations get the larger column and the softer shadow. Copy never competes with the artifact for focal weight.

## Elevation & Depth

The system is flat with two lifted classes. Hairlines define structure; shadows only separate a working surface from the page. There are no inner shadows, bevels, embossing, or fake materials.

### Shadow Vocabulary
- **Floating panel** (`0 28px 70px -34px rgba(16, 24, 40, 0.3)`): The hero run board and full-width product capture.
- **Working panel** (`0 16px 40px -20px rgba(16, 24, 40, 0.22)`): Mechanism stage, collaboration room, and similar embedded product surfaces.
- **Action** (`0 1px 2px rgba(49, 46, 129, 0.18), 0 8px 24px -12px rgba(79, 70, 229, 0.55)`): Primary buttons only.
- **Control** (`0 1px 2px rgba(0, 0, 0, 0.14)`): The selected segment of the design/exec switch.
- **Terminal** (`0 30px 70px -34px rgba(0, 0, 0, 0.8)`): The deploy terminal on its dark band.

### Named Rules

**The Lift Only Work Rule.** A shadow means "this is an interactive or inspectable surface". Inline text, tags, and rows never float.

## Shapes

Corners are precise, not friendly. The rounded scale is intentionally graduated because it tracks a real interface: 2px distribution segments and connectors, 3px cursor labels and micro chips, 4–5px tags and copy controls, 6–7px small controls, 8px tree roots, 9px compact buttons, 10px primary controls, 14–16px working panels, and 999px status pills. Full-width bands square off their outer edges; only the inner surfaces round. Borders are always 1px and always a neutral hairline; no colored side stripes.

## Components

### Buttons
- **Shape:** 10px radius, 48px tall, 24px horizontal padding; the compact header variant is 38px tall with a 9px radius.
- **Primary:** Run Indigo fill, white text, 600 weight, 9px gap to a drawn 18px arrow. Hover deepens to Deep Indigo; active translates down 1px.
- **Ghost:** Transparent with a Hairline border and Ink text. Hover raises to Paper with a slightly darker border.
- **Focus:** A 3px indigo ring at 38% opacity with a 6px radius; visible on every interactive element.

### Text Links
- **Shape:** Inline-flex, 14px/600, 2px bottom padding, a 1px indigo underline at 28% opacity.
- **Arrow:** A drawn 14px SVG arrow in the same stroke as button icons; it translates 3px on hover. Never a Unicode glyph.

### Status Pills
- **Style:** 21px tall, 999px radius, 10.5px/600 label, 5px dot in the current status color, tinted background from the matching soft token.
- **State:** Pass, fail, block, ignore, and idle are the complete set. Never invent a sixth status hue for decoration.

### Run Board
- **Corner Style:** 16px outer radius, 1px Hairline border, Paper fill, floating shadow.
- **Composition:** A 48px chrome bar, then a three-pane body. Panes are divided by 1px vertical hairlines, not gaps or nested cards.
- **Density:** 10–11.5px labels, 8–12px row padding. The board reads as software, not as a marketing card.

### Tree Nodes and Branch
- **Style:** Root nodes use a solid indigo (design) or ink (exec) fill with 8px radius. Case nodes are text rows with a 5px status dot and a hairline separator; no boxes around every node.
- **Connectors:** 1px neutral lines. They may disappear at narrow widths, where the branch order itself carries the structure.

### Terminal
- **Style:** 14px radius, `#15151a` ground, 1px `#2e2e36` border, mono 12px/1.95. Prompts and success lines use indigo/green tints; muted comments use zinc.
- **Behavior:** The copy control is a small dark chip; the command wraps rather than overflows.

### Navigation
- **Style:** 13.5px/500 Slate links with 6px vertical padding. The active hover shifts to Ink; there is no underline or pill at rest.
- **Mobile:** A two-line menu toggle swaps to a full-width stacked nav with hairline-separated 15px links.

### FAQ Rows
- **Style:** Native `<details>` on a 1px Hairline top border. Summary is 16px/600 Ink with a drawn plus/minus mark; the answer is 14.5px Slate at 1.8 line-height.
- **Behavior:** The first row opens by default; only one reading path is needed at a time.

## Do's and Don'ts

### Do:
- **Do** put a real product surface in the first viewport and let it carry the argument.
- **Do** keep the same tree, same case IDs, and same status arithmetic across every demonstration. If the summary says 7 pass / 1 fail / 1 block / 1 ignore, every panel agrees.
- **Do** label demonstration data as demonstration data near the artifact.
- **Do** use authored SVG icons in one stroke weight; text-link arrows are drawn, not typed.
- **Do** reserve indigo for action and status hues for data.
- **Do** use 1px hairlines for structure and reserve shadows for working surfaces.
- **Do** run real Chinese copy at every breakpoint and fix truncation or orphans in the composition.

### Don't:
- **Don't** add kickers, eyebrows, or section numbers above headings.
- **Don't** replace the run board with a centered hero plus three feature cards.
- **Don't** use gradient text; emphasis comes from weight, size, and the one indigo line.
- **Don't** use status colors as decoration outside pills, dots, and the distribution bar.
- **Don't** fake materials with bevels, embossing, glass, or textured gradients.
- **Don't** invent customers, benchmarks, pricing, or deployment counts.
- **Don't** let a marketing claim drift from the product truth: AI is optional, self-hosting is first-class, and every repository link points to `https://github.com/hujunalex1/caseflow`.
