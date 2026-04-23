---
title: "PurpleBot"
tagline: "An HR-persona Slack bot that carries out organizational tasks through real conversation — daily standups, meeting summaries, onboarding, and project management — all native to where the team already works."
description: "An AI-powered HR persona living inside Slack that runs daily standups, classifies responses, sends tiered reminders, and delivers consolidated management summaries — no separate app required."
status: "initial-build"
category: "agentic-governance"
tags: ["Slack bot", "HR automation", "standup", "AI", "OpenClaw", "NemoClaw", "organizational ops"]
year: 2025
featured: false
order: 5
team: ["Joe Baranowski", "David Pickett", "Kaimi Victor (Intern)"]
links:
  - label: "PurpleBot Repo"
    url: "https://github.com/PurpleMaia/kaimi-purplebot-claw"
---

## Overview

PurpleBot started from a simple observation: the team already lives in Slack, so organizational tools should too. Rather than adding another app for standups, another for project tracking, and another for onboarding, PurpleBot puts an AI-powered HR persona directly in Slack channels and DMs.

The bot (currently running under the name "Poni") conducts daily check-ins with each team member via DM at 8:00 AM HST, using rotating prompts to avoid repetitiveness. It classifies responses as clear, vague, or partial — and follows up with clarifying questions if needed (capped at 2 follow-ups to avoid feeling like an interrogation). Non-responders get gentle reminders at 10 AM and firmer ones at 11 AM. At noon, a consolidated summary goes to management with clear responses, partial responses, and non-responses grouped together.

PurplePal v1 shipped with admin permissions, user profiles, Google Drive integration, and a scheduler. The onboarding DM flow was refactored to remove the OpenClaw dependency. The permission architecture locks admin commands to a single private channel rather than requiring code-level role management.

## Features

- **Daily standup via DM** — rotating prompts at 8 AM HST, adaptive follow-up for vague answers, capped at 2 clarifying questions
- **Response classification** — AI classifies each response as clear (specific task/deliverable), vague ("meetings"), or partial (some detail but no top priority)
- **Tiered reminders** — gentle at 10 AM, firm at 11 AM, only to non-responders
- **Noon management summary** — consolidated report grouped by response quality with extracted priorities and blockers
- **Admin permissions + Google Drive integration** — shipped in PurplePal v1
- **OpenClaw-powered** — built on the OpenClaw framework; NVIDIA's NemoClaw being evaluated for enterprise-grade security/privacy

## Phase

Running daily standups for the internal team. Expanding from pilot to broader use.
