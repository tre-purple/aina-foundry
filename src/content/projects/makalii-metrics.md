---
title: "Makaliʻi Metrics"
tagline: "Hawaiʻi's first local soil lab — and the dashboard and locally hosted infrastructure Purple Maiʻa builds to put their results in farmers' hands."
description: "Makaliʻi Metrics gives Hawaiʻi farmers and land stewards soil analysis that reflects their land. Purple Maiʻa builds their results dashboard and is moving their website, data, and backups onto locally hosted infrastructure."
status: "testing"
category: "place-based"
stack: "data"
tags: ["soil testing", "lepo", "agriculture", "dashboard", "visualization", "self-hosted AI", "local hosting", "data sovereignty"]
year: 2025
featured: true
order: 8
team: ["Tre Zamora", "Jaden Kapali", "Hoku (Intern)"]
partners: ["Makaliʻi Metrics"]
links:
  - label: "Live Site"
    url: "https://www.makaliimetrics.com/"
    highlight: true
  - label: "Dashboard Repo"
    url: "https://github.com/PurpleMaia/mm-dashboard"
  - label: "Monitoring"
    url: "https://github.com/PurpleMaia/monitor"
  - label: "Headscale Network"
    url: "https://github.com/PurpleMaia/headscale"
  - label: "Local Infrastructure"
    url: "https://github.com/PurpleMaia/mm-local-infra"
---

## Overview

Makaliʻi Metrics is a Honolulu-based soil testing company and Hawaiʻi's first local soil lab. Grounded in aloha ʻāina, they give farmers, ranchers, researchers, and conservation programs across the islands soil analysis that actually reflects their land.

Purple Maiʻa builds the software that carries those results to their clients: a dashboard where growers can see their soil reports, understand what the numbers mean, and act on them. The dashboard is served by PMF's self-hosted LLM endpoints and connects to the Kilo LLM/RAG work on AI-assisted analysis of mixed quantitative and qualitative data.

Purple Maiʻa is also working toward hosting Makaliʻi Metrics' website, data, and backups locally, on infrastructure in Hawaiʻi rather than in commercial clouds. That work includes service monitoring, a self-hosted Headscale network for secure access between machines, and the local infrastructure that ties it together.

## Features

- **Soil results dashboard** — clients view their soil reports with actionable guidance
- **Self-hosted AI backend** — served by PMF LLM endpoints
- **Local hosting** — website, data, and backups moving onto locally run infrastructure
- **Monitoring** — uptime and health monitoring for the locally hosted services
- **Private networking** — self-hosted Headscale (Tailscale-compatible) network connecting the infrastructure

## Phase

Dashboard in use with Makaliʻi Metrics clients. Migrating their website, data, and backups to local hosting.
