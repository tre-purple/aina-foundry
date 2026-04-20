---
title: "AlohaNet Mesh"
tagline: "Resilient off-grid mesh communications for rural and disaster-affected communities."
description: "AlohaNet Mesh is a low-cost, self-healing mesh radio network designed for communities with unreliable or no internet connectivity. Built on open-source mesh protocols and ruggedized for Hawaiian weather, it enables voice, text, and data communication without cellular or broadband infrastructure."
status: "prototype"
category: "communications"
tags: ["mesh networking", "LoRa", "disaster resilience", "off-grid", "rural connectivity", "Meshtastic"]
year: 2023
featured: true
order: 2
team: ["Kekoa Lindsey", "Trever Yamanaka"]
partners: ["Hawaiʻi Emergency Management Agency", "Molokai Community Service Center"]
links:
  - label: "Project Brief"
    url: "https://purplemaia.org"
---

## Overview

When disaster strikes in Hawaiʻi — hurricanes, volcanic events, tsunamis — cellular infrastructure is among the first things to fail. Rural communities on Molokaʻi, East Maui, and remote areas of Hawaiʻi Island are already underserved in normal conditions.

AlohaNet Mesh is a prototype mesh radio network that enables communities to communicate locally without any external infrastructure — and to relay messages out when partial connectivity is restored.

## Technical Approach

We built on Meshtastic firmware running on affordable ESP32 + LoRa modules, extended with:

- **Community-tuned frequency plans** compliant with Hawaiʻi amateur and GMRS allocations
- **Solar-powered relay nodes** ruggedized for outdoor, unattended deployment
- **Peer-to-peer voice** capability via Codec2 compression
- **Offline maps** with shelter locations, medical facilities, and community resources

## Why Mesh

Unlike point-to-point radio, mesh networks self-heal — if one node fails, traffic automatically reroutes. Nodes are cheap enough ($45–$80 each) for communities to stockpile as emergency reserves.

## Status

Currently in field trials with two community groups on Molokaʻi. Working toward a public-facing deployment guide and a grant to manufacture 200 pre-configured nodes for community distribution across the state.
