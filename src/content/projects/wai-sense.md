---
title: "WaiSense"
tagline: "Low-cost water quality monitoring for Hawaiian streams and fishponds."
description: "WaiSense is a community-deployable sensor network that monitors water quality across Hawaiian streams, wetlands, and loko iʻa (fishponds). Using off-the-shelf hardware and open-source firmware, WaiSense gives land stewards real-time data on pH, turbidity, temperature, and dissolved oxygen — restoring the visibility that traditional land management once provided."
status: "active"
category: "sensors"
tags: ["water quality", "IoT", "LoRa", "open hardware", "loko iʻa", "environmental monitoring"]
year: 2022
featured: true
order: 1
team: ["Kainoa Holt", "Malia Fonoti", "Trever Yamanaka"]
partners: ["He'eia NERR", "Paepae o Heʻeia", "University of Hawaiʻi WRRC"]
links:
  - label: "GitHub Repository"
    url: "https://github.com/purplemaia/waisense"
---

## Overview

WaiSense emerged from conversations with fishpond practitioners who had lost visibility into their water systems — visibility that traditional stewards once had through direct daily relationship with the ʻāina.

The system provides affordable, solar-powered sensors that transmit data over LoRa radio to a local gateway, which pushes readings to a community dashboard accessible on any device — including offline via a local hotspot.

## Problem Statement

Loko iʻa (Hawaiian fishponds) are living ecosystems that require constant stewardship. Water quality fluctuations — whether from runoff, invasive species, or climate shifts — can devastate fish populations within hours. Traditional practitioners developed sophisticated observational knowledge to manage these dynamics, but that knowledge is no longer paired with the monitoring bandwidth modern conditions demand.

Commercial water monitoring systems cost $5,000–$50,000 per node. WaiSense nodes cost under $120.

## What We Built

- **Field nodes** — waterproof enclosures with multi-parameter sensors, solar + battery power, and LoRa radio
- **Community gateway** — Raspberry Pi base station that logs data locally and syncs to cloud when online
- **Dashboard** — mobile-friendly web app showing historical trends, alerts, and downloadable data in formats communities can use
- **Open documentation** — full assembly guides, calibration procedures, and firmware source code

## Impact

WaiSense is currently deployed at three sites on Oʻahu and Kauaʻi. Stewards now receive SMS alerts when water parameters shift outside established baselines — a capability previously unavailable at this price point.
