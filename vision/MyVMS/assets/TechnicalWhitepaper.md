# My-VMS — Video Management System
### Technical Whitepaper


---


## Overview


**My-VMS** is an enterprise-grade Video Management System designed for real-time IP camera monitoring, recording, and archive retrieval at scale. Built for organizations that operate large camera networks, it provides a unified web interface for live viewing, historical playback, PTZ control, and fleet health monitoring — with no proprietary client software required.


The system is fully self-hosted, and engineered to handle up to hundreds of concurrent camera streams through a distributed media server architecture. My-VMS enables a large number of users to concurrently access high-definition live feeds and archives without overwhelming the source camera hardware or saturating network bandwidth.


---


## Problem Statement


Managing a large deployment of IP cameras from multiple manufacturers is operationally complex. Organizations face fragmented tooling per vendor, poor archive search UX, high-latency live feeds, and no unified health dashboard. My-VMS solves this with a single, cohesive platform that abstracts vendor differences and delivers a consistent operational experience. My-VMS eliminates the need for every user to connect directly to the source RTSP stream. Instead, all users connect to the My-VMS ecosystem, which handles stream ingestion, transcoding, and distribution, ensuring optimized performance and centralized control across the entire network.


---


## Architecture


My-VMS follows a three-tier architecture:


```
[IP Cameras] ──RTSP──▶ [ Media Servers ] ──HLS/FLV──▶ [Browser / Operator]
                                 │
                           [Go Backend API]
                                 │
                         [PostgreSQL Database]
```


| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript, Vite, HLS.js, FLV.js |
| Backend | Go 1.21, Gin HTTP framework |
| Media Server  |
| Database | PostgreSQL 12+ |
| Stream Ingest | FFmpeg (RTSP → RTMP codec copy) |
| Protocols | RTMP, HLS, HTTP-FLV, WebRTC/WHEP, RTSP |


### Multi-Instance Media Distribution


To avoid single-point bottlenecks, Each camera is pinned to an instance via `camera_id % num_instances`, distributing load evenly across ports. This design scales horizontally — adding more instances requires only a configuration change.


---


## Core Features


### 1. Live Multi-Camera Dashboard
- Configurable grid layout supporting 1 to N (configurable) cameras simultaneously
- Drag-and-drop camera tile rearrangement
- Per-camera fullscreen mode with quick archive access
- Visual online/offline status badges
- Low-latency HTTP-FLV and HLS playback (sub-2-second glass-to-glass)


### 2. DVR Recording & Archive Search
- Continuous DVR recording in MP4 format, auto-segmented into 10-minute chunks
- Date-organized storage: `/YYYY/MM/DD/HH/stream-timestamp.mp4`
- Instant archive lookup by exact timestamp
- Seamless playback across segment boundaries via dual-buffer video player
- Support for in-progress recordings (`.mp4.tmp` growing files)
- Multi-speed playback: 0.5×, 1×, 2×, 4×


### 3. PTZ (Pan-Tilt-Zoom) Control
- Auto-detects camera manufacturer on first use — no manual driver selection
- Supported vendors: **Hikvision** (ISAPI), **Dahua** (CGI), **Axis** (VAPIX), **Hanwha/Samsung** (SunAPI)
- Preset management: list, save, and recall presets
- Adjustable pan/tilt/zoom speed. (Real-time Adjustments: Smoothly control physical camera movements—up, down, left, right rotation, and zooming—directly from your screen with zero delay.Custom Movement Speed: Change how fast or slow the camera shifts focus. Turn it down for precise tracking, or turn it up to sweep an area quickly.)


### 4. ONVIF Discovery & Integration
- Auto-discover cameras on the local network
- Pull camera metadata (manufacturer, model, RTSP stream URL) via ONVIF
- Bulk ONVIF configuration for fleet-wide credential management


### 5. Camera Fleet Management
- Full CRUD for cameras with organizational hierarchy: **Region → District → Group → Camera**
- Per-camera detail view with tabs for live feed, archive records, and configuration
- Start/stop stream ingestion per camera on demand


### 6. Stream Health Monitoring
- 30-second polling cycle fetches live telemetry from Cameras
- Per-camera metrics: bitrate, resolution, codec, DVR write status
- Fleet-wide health dashboard with online/offline counts


### 7. WebRTC Playback
- WHEP (WebRTC-HTTP Egress Protocol) proxy for ultra-low-latency browser playback




### 8. Disk Synchronization
- Background scanner reconciles filesystem MP4 files with database records
- Recovers orphaned recordings after server restarts or crashes




---


## Data Model


```
regions
 └── districts
       └── camera_groups
             └── cameras
                   ├── camera_onvif_config   (PTZ credentials, manufacturer)
                   └── camera_records        (file_path, start_time, end_time, duration)
```


Recordings are indexed by `(camera_id, start_time)` for O(log n) archive lookups.


---


## Deployment Requirements


| Component | Requirement |
|---|---|
| OS | Linux (Ubuntu 20.04+ recommended) |
| Go | 1.21+ |
| PostgreSQL | 12+ |
| FFmpeg | Any recent version at `/usr/bin/ffmpeg` |
| Storage | Network-mounted filesystem (e.g., `/mnt/face-det/vms/`) |
| Network | Layer-2 access to IP camera subnet |
| Browser | Any modern browser (Chrome, Firefox, Edge) |








## Summary


My-VMS delivers production-ready video management for enterprise camera deployments. Its distributed Media Server architecture handles high stream counts without degradation, its vendor-agnostic PTZ layer eliminates per-camera tooling, and its advanced archive player provides frame-accurate historical review. All of this is accessible through a single browser-based interface with no client installation required.


---


*My-VMS — Built for operators who need reliability, not complexity.*