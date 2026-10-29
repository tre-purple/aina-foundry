---
title: "Food+ Bill Tracker"
tagline: "Hawaiʻi legislative bill tracker that simplifies dense legal language, shows where food-related bills stand, and helps advocates make testimony."
description: "Automatically tracks food-related bills through the Hawaiʻi State Legislature using nightly scraping and AI classification, displayed on a kanban board that mirrors the real legislative process."
status: "testing"
category: "place-based"
stack: "intelligence"
tags: ["food systems", "Hawaiʻi legislature", "AI", "civic tech", "kanban", "advocacy", "Open States", "bill tracking"]
year: 2025
featured: true
order: 1
team: ["Jaden Kapali", "Pohaikealoha"]
partners: ["Food+ (Janine Mariano)"]
links:
  - label: "Live Tracker"
    url: "https://bill-tracker.sandbox.purplemaia.org"
    highlight: true
  - label: "Frontend Repo"
    url: "https://github.com/PurpleMaia/janine-foodplus-frontend"
  - label: "Backend Scraper"
    url: "https://github.com/PurpleMaia/foodplus-track-2025"
  - label: "Public Version Repo"
    url: "https://github.com/PMF-pohai/leg-tracker"
---

## Overview

Every year the Hawaiʻi State Legislature introduces hundreds of bills that affect food systems — from land use and water rights to pesticide regulation, farmer support, and food sovereignty. Tracking those bills through committees, hearings, and crossover deadlines is dense, time-consuming work that currently falls on a handful of advocates working off spreadsheets and manual capitol.hawaii.gov searches.

The Food+ Bill Tracker changes that. Built in partnership with Food+, it automatically scrapes the legislature's website nightly, uses AI to identify food-related bills from the full session docket, and presents them on a kanban board where users can watch bills move through legislative stages in real time — from introduction through committee hearings, crossover, and on to the governor's desk.

The kanban format is unique among 80+ existing legislative trackers. Instead of static lists or keyword alerts, users see their bills as cards flowing through columns that mirror the actual legislative process. Bills can also be manually added or removed if the AI classification misses one.

## Features

- **AI bill classification** — automatically identifies food-related bills from the full session docket and categorizes them into legislative stages: Introduce → Committee → Deferred → Crossover → Past Legislature → Governor's Desk
- **Kanban board interface** — visual board where bill cards move through columns matching real legislative stages, unique among 80+ competing trackers
- **Nightly scraper** — automated scraping from capitol.hawaii.gov keeps bill statuses current without manual checking
- **Open States API integration** — extends data coverage via the Reynolds Journalism Institute's Open States project, adding voting records, bill versions, and legislator information across all 50 states
- **Manual override** — users can add or remove bills from the board if the AI classification misses or misidentifies a bill

## Phase

Testing with Food+ stakeholders. A general-purpose version is in early development.
