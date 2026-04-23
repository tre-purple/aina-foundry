---
title: "Our Tools, Our Hardware"
tagline: "Exploring what Purple Maiʻa can get done with AI tools running on its own hardware — benchmarking open-source models, self-hosting inference, and building toward compute sovereignty."
description: "Systematic benchmarking of open-source language models on locally owned hardware, building toward a tiered architecture of edge devices and self-hosted AI endpoints that serve other ʻĀina Foundry projects."
status: "initial-build"
category: "sustainable-ai"
tags: ["open models", "local compute", "LLM", "benchmarking", "compute sovereignty", "hardware", "self-hosted inference"]
year: 2025
featured: true
order: 3
team: ["David Pickett", "Jaden Kapali", "Makana"]
links:
  - label: "Notes & Diagrams"
    url: "https://github.com/PurpleMaia/q1-2026-our-tools-our-hardware-notes"
  - label: "Benchmark Notes"
    url: "https://github.com/PurpleMaia/terminal-bench-notes"
---

## Overview

Every commercial AI tool Purple Maiʻa uses comes with a subscription, a terms-of-service change risk, and a dependency on infrastructure controlled by someone else. Our Tools, Our Hardware asks: what can we run ourselves?

The project benchmarks open-source language models on hardware the team owns or can access — from Mac Studios and repurposed Dell OptiPlexes to Raspberry Pis and NVIDIA Jetson devices. The goal is to find models that are good enough for real project work (coding, classification, summarization) while keeping data and compute local.

Purple Maiʻa is already self-hosting models that serve other AF projects — the Food+ Bill Tracker and Makaliʻi Metrics both use PMF-hosted endpoints. Cloud-side, the team pulls from NSF servers and the Synthetic.new service for concurrency when local hardware isn't enough.

The longer-term vision is a tiered architecture: edge devices at farm or field sites, local compute hubs, and regional datacenters — with routing rules that respect environmental and cultural preferences (e.g., "never cloud" vs. speed priority). The concept of "junkyard computing" — repurposed hardware clusters powered by solar — is part of that roadmap.

## Features

- **Model benchmarking** — systematic testing using Terminal Bench, SWE Bench Pro, Artificial Analysis, LiveBench, and custom Claude Code test suites on local hardware
- **Self-hosted inference** — PMF LLM endpoints serving open models to other AF projects; cloud fallback via NSF servers and Synthetic.new
- **Hardware evaluation** — testing across Mac Studios, Raspberry Pi 5 (with and without AI-hat), NVIDIA Jetson, and Earth Frame's Ember system (RTX Pro 6000, 96GB VRAM, solar compatible, ~$10–12K)
- **Open model tracking** — evaluating new releases as they drop (MiniMax M2.7, Gemma 4, GLM 5.1) for fit with AF workloads
- **Claude Code with open models** — the Claude Code harness can run with open-source models, a key capability being explored for compute sovereignty

## Phase

Benchmarking open models on local hardware. Already self-hosting endpoints that serve other AF projects.
