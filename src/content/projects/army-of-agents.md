---
title: "Army of Agents"
tagline: "Using AI agents to automate backroom organizational processes — status reporting, project monitoring, knowledge management — so humans focus on decisions, not data gathering."
description: "An umbrella for Purple Maiʻa's internal automation work: AI agents that read Slack, GitHub, Google Drive, and Granola to generate weekly status reports, flag project drift, and surface blockers automatically."
status: "initial-build"
category: "agentic-governance"
stack: "intelligence"
tags: ["AI agents", "automation", "status reporting", "Slack", "GitHub", "Granola", "knowledge management"]
year: 2025
featured: true
order: 7
team: ["David Pickett", "Joe Baranowski"]
links:
  - label: "GitHub Status Weekly"
    url: "https://github.com/PurpleMaia/get-github-status-weekly"
---

## Overview

Army of Agents is the umbrella for Purple Maiʻa's internal automation work — using AI agents to handle the repetitive organizational tasks that eat into build time. The core idea: if an agent can read Slack, GitHub, Google Drive, and Granola meeting notes, it can write the weekly status report, flag when a project is drifting off-spec, and surface blockers before the Monday meeting.

The first concrete output is the automated weekly status report system, which gathers information across GitHub commits, Slack channel activity, Google Drive documents, and Granola meeting notes over 7-day periods. AF project status reports now include AI-generated headlines and summaries pulled from these sources.

The project is also a space for individual agent experimentation. Jaden is building a 3-agent personal workflow system: a scheduler (Guru/Iro persona), a knowledge manager (Jarvis), and a task manager (Dwight Schrute) — all in one folder, communicating with each other. Donavan has been evaluating persistent memory tools like Adaptive and MuleRun. David has noted an emerging "OpenClaw-ification" pattern across the team's agent development work.

A future vision includes agents that monitor GitHub project status against original specs and flag things that may need human or leadership review — catching rabbit holes and scope drift before they become problems.

## Features

- **Automated status reporting** — gathers info across GitHub, Slack, Google Drive, and Granola to generate weekly project summaries
- **AI-generated headlines** — project status reports include AI-written headlines based on cross-source activity
- **Multi-agent personal workflows** — individual team members building agent systems for scheduling, knowledge management, and task tracking
- **Spec compliance monitoring** — planned agent to check project progress against original specifications

## Phase

Automated status reporting operational. Expanding to spec-compliance monitoring and personal agent workflows.
