---
title: "Agent Kukulu Hui"
tagline: "A test bed for building and managing agentic tooling — spec-driven autonomous development using AI coding agents that build, review, and deploy software with minimal human intervention."
description: "Purple Maiʻa's experiment in autonomous software development: AI agents build, review, and deploy production software from functional specs, with humans reviewing rather than writing code."
status: "initial-build"
category: "agentic-governance"
stack: "intelligence"
tags: ["agentic", "autonomous dev", "Claude Code", "Codex", "spec-driven", "AI coding", "GitHub SpecKit"]
year: 2025
featured: true
order: 2
team: ["David Pickett", "Joe Baranowski"]
partners: ["Liliuokalani Trust (potential)"]
links:
  - label: "Preview App"
    url: "https://preview-lt-app-dev.sandbox.purplemaia.org"
    highlight: true
  - label: "App Template Repo"
    url: "https://github.com/PurpleMaia/lt-example-app-template"
  - label: "Permaship Test"
    url: "https://github.com/pickettd/test-permaship-1"
  - label: "Nexus"
    url: "https://github.com/pickettd/nexus"
---

## Overview

Agent Kukulu Hui is not a single product — it's Purple Maiʻa's experiment in autonomous software development. The core question: can AI agents reliably build production software from a functional spec, with humans reviewing rather than writing code?

The approach uses GitHub SpecKit to define functional specifications, then hands implementation to AI coding agents (Claude Code and OpenAI Codex) working in a loop — Claude writes the code, Codex performs deep code review at every check-in, and the cycle repeats roughly every 30 minutes, including overnight. The result is sprint-level output happening in hours rather than weeks.

Two sub-projects have been built this way so far. The first was a community platform with messaging, moderation, and gamification features, built autonomously in approximately one week across 7–8 sprints. The second was INAbox — a rebuild of last year's intern web app as an iOS/Android hybrid mobile app, completed in roughly two weeks with three different front-ends tested.

The current Q2 focus is learning from commercial autonomous coding systems and giving AI its own server for deployment testing. David is actively testing Permaship versus Nexus to determine which framework works best when powered by Purple Maiʻa's own LLM endpoints rather than commercial APIs.

## Features

- **Spec-driven development loop** — GitHub SpecKit defines functional specs; Claude Code implements, Codex reviews every ~30 minutes, repeating overnight without human intervention
- **Autonomous sprint execution** — community platform built in ~1 week across 7–8 sprints; INAbox mobile app rebuilt in ~2 weeks with 3 front-ends tested
- **Playwright confidence testing** — pilot confidence test suites validate end-to-end flows automatically after each sprint
- **Self-hosted LLM integration** — Nexus being patched to run on PMF LLM endpoints instead of commercial APIs, tying into the Our Tools, Our Hardware project

## Phase

Building an autonomous dev pipeline. First real deployment targeting a community engagement platform for Liliʻuokalani Trust.
