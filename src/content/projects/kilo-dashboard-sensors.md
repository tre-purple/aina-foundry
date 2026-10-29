---
title: "Kilo Dashboard — Sensors/Hardware"
tagline: "Sensor deployments, weather station maintenance, and the Raspberry Pi data pipeline that feeds environmental observations from the field into the Kilo Dashboard."
description: "The physical infrastructure layer of the Kilo ecosystem: Raspberry Pi weather stations at partner farm sites, Adafruit sensor arrays, and a local-first data pipeline designed for total data sovereignty."
status: "initial-build"
category: "environmental-intelligence"
stack: "data"
tags: ["Raspberry Pi", "sensors", "Adafruit", "weather station", "local-first", "data sovereignty", "Tailscale", "Dokku"]
year: 2025
featured: true
order: 6
team: ["Keoni DeFranco", "Jaden Kapali", "Ikaika", "Raul"]
partners: ["Polipoli Farms", "Nation of Hawaiʻi"]
links:
  - label: "Field Pi Init"
    url: "https://github.com/PurpleMaia/kilo-field-pi-init"
  - label: "Kilo Dashboard"
    url: "https://github.com/PurpleMaia/kilo-dashboard"
  - label: "Adafruit Feed"
    url: "https://io.adafruit.com/keoni_defranco/feeds/kilo-weather-station.polipoli-farms-weather-station-waiehu-maui"
---

## Overview

The Kilo Dashboard Sensors/Hardware project is the physical infrastructure layer of the Kilo ecosystem. Where the Kilo Dashboard software displays data and the Kilo Tracker app captures human observations, this project handles the machines in the field — Raspberry Pis running weather stations, sensor arrays collecting environmental data, and the pipeline that moves readings from Adafruit sensors into a local database.

The team has deployed weather stations at Polipoli Farms (Waiehu, Maui) and with the Nation of Hawaiʻi, using Raspberry Pis connected to Adafruit sensors feeding data to Adafruit IO. Jaden demonstrated running the full Kilo Dashboard application locally on a Pi 5 using Dokku — meaning the data collection, database, and dashboard can all live on a single field device with no cloud dependency.

A key architectural shift is underway: instead of pushing sensor data to Adafruit's cloud, the goal is to push directly to a containerized Postgres database linked to the local Kilo app. This "field" branch represents a refactored version designed for total data sovereignty and local-only access. Tailscale provides remote access to field devices without exposing them to the public internet.

The project also connects to the broader Our Tools, Our Hardware vision — these field Pis are part of the envisioned tiered architecture of edge devices → farm hubs → regional datacenters, all renewable-power compatible.

## Features

- **Raspberry Pi weather stations** — deployed at Polipoli Farms and Nation of Hawaiʻi sites
- **Adafruit sensor integration** — light, temperature, and environmental sensors feeding Adafruit IO
- **Local-first architecture** — Dokku + containerized Postgres on Pi 5, no cloud dependency required
- **Data sovereignty refactor** — "field" branch of Kilo Dashboard designed for local-only access
- **Tailscale remote access** — secure access to field devices without public internet exposure
- **Startup scripts** — kilo-field-pi-init repo for bootstrapping new field Raspberry Pis

## Phase

Weather stations deployed at Polipoli and Nation of Hawaiʻi. Migrating from cloud to local-first data pipeline.
