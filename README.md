<div align="center">

# 🏥 Hospital Management System

### Enterprise-Grade Hospital Information Management System (HIMS)

_A modern, scalable, event-driven microservices platform built to digitize and streamline every aspect of hospital operations._

---

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-Event_Driven-FF6600?style=for-the-badge&logo=rabbitmq)
![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?style=for-the-badge&logo=redis)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Production-326CE5?style=for-the-badge&logo=kubernetes)

</div>

---

# 📖 Overview

The **Hospital Management System (HMS)** is an enterprise-scale healthcare platform designed to digitize and automate hospital operations from patient registration to discharge.

Unlike small CRUD-based hospital projects, this system is designed using **Domain Driven Design (DDD)** and **Microservices Architecture**, enabling independent deployment, scalability, fault tolerance, and maintainability.

The goal of this project is to simulate how modern hospitals such as Apollo, Fortis, Manipal, or other large healthcare organizations manage their day-to-day operations using distributed software systems.

---

# 🎯 Vision

The vision of this project is to build a production-ready healthcare platform that demonstrates enterprise software engineering practices including:

- Microservices Architecture
- Event-Driven Communication
- Domain Driven Design
- Secure Authentication & Authorization
- High Availability
- Horizontal Scalability
- Independent Deployments
- Production Monitoring
- Centralized Logging
- Distributed Tracing
- Cloud Native Infrastructure

This repository is intended as both a real-world engineering project and a learning resource for developers interested in enterprise backend systems.

---

# ✨ Key Features

## 👨‍⚕️ Patient Management

- Patient Registration
- Patient Profile
- Medical History
- Allergies
- Emergency Contacts
- Insurance Information
- Visit History
- Digital Records
- Patient Search

---

## 📅 Appointment Management

- Doctor Availability
- Online Appointment Booking
- Walk-in Registration
- Queue Management
- Appointment Cancellation
- Rescheduling
- Waiting List
- Appointment Notifications

---

## 🩺 Doctor Management

- Doctor Profiles
- Department Assignment
- Shift Scheduling
- Consultation History
- Availability Calendar
- Leave Management
- Specializations
- Performance Reports

---

## 🛏 IPD Management

- Admission
- Bed Allocation
- Ward Allocation
- Room Transfer
- Daily Monitoring
- Nursing Notes
- Discharge Summary

---

## 🚑 Emergency Department

- Emergency Registration
- Triage
- Emergency Bed Allocation
- Critical Care
- Emergency Billing

---

## 🧪 Laboratory

- Test Orders
- Sample Collection
- Sample Tracking
- Result Validation
- Report Generation
- Report History

---

## 🩻 Radiology

- X-Ray
- CT Scan
- MRI
- Ultrasound
- Digital Reports
- PACS Integration Ready

---

## 💊 Pharmacy

- Prescription Management
- Barcode Billing
- Medicine Inventory
- Stock Alerts
- Supplier Management
- Purchase Orders
- Sales Reports

---

## 💳 Billing

- Consultation Charges
- Laboratory Billing
- Pharmacy Billing
- Room Charges
- Insurance Claims
- Payment History
- Refund Management

---

## 🧾 Insurance

- Insurance Providers
- Policy Verification
- Claims Processing
- Approval Tracking
- Claim Settlement

---

## 👨‍💼 HR Management

- Employee Management
- Attendance
- Payroll
- Leave Management
- Shift Scheduling
- Performance Reports

---

## 📦 Inventory

- Asset Management
- Medical Equipment
- Medicine Inventory
- Purchase Orders
- Vendors
- Stock Transfers
- Low Stock Alerts

---

## 📊 Analytics

- Hospital Dashboard
- Revenue Reports
- Department Reports
- Patient Statistics
- Doctor Performance
- Pharmacy Reports
- Inventory Reports

---

# 🏗 System Architecture

This project follows a distributed microservices architecture.

```
                         Internet
                              │
                     ┌────────────────┐
                     │  API Gateway   │
                     └────────────────┘
                              │
        ───────────────────────────────────────────────

        Authentication Service

        Patient Service

        Doctor Service

        Appointment Service

        OPD Service

        IPD Service

        Laboratory Service

        Radiology Service

        Pharmacy Service

        Billing Service

        Inventory Service

        Insurance Service

        HR Service

        Notification Service

        Reporting Service

        Audit Service

        File Service

        Configuration Service

        ───────────────────────────────────────────────

                  RabbitMQ Event Bus

        ───────────────────────────────────────────────

       PostgreSQL   Redis   MinIO   Elasticsearch
```

---

# 🏛 Architecture Principles

The entire system follows enterprise software engineering principles.

- Domain Driven Design
- Event Driven Architecture
- Database Per Service
- RESTful APIs
- Asynchronous Messaging
- Stateless Services
- JWT Authentication
- Role Based Access Control
- Clean Architecture
- SOLID Principles
- Hexagonal Architecture
- CQRS Ready
- Cloud Native Design

---

# 📂 Repository Structure

```
hospital-management-system/

├── server/
│
│   ├── gateway/
│   ├── auth-service/
│   ├── patient-service/
│   ├── doctor-service/
│   ├── appointment-service/
│   ├── opd-service/
│   ├── ipd-service/
│   ├── laboratory-service/
│   ├── radiology-service/
│   ├── pharmacy-service/
│   ├── inventory-service/
│   ├── billing-service/
│   ├── insurance-service/
│   ├── notification-service/
│   ├── reporting-service/
│   ├── audit-service/
│   ├── shared-libraries/
│   ├── pom.xml
│   └── mvnw
│
├── client/
│
│   ├── apps/
│   │
│   ├── hospital-web/
│   ├── patient-portal/
│   │
│   ├── packages/
│   │
│   ├── ui/
│   ├── api/
│   ├── types/
│   ├── config/
│   ├── utils/
│   │
│   ├── turbo.json
│   ├── package.json
│   └── pnpm-workspace.yaml
│
├── infrastructure/
│
├── docs/
│
├── .github/
│
└── README.md
```

---

# 🚀 Technology Stack

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Cloud Gateway
- Spring Data JPA
- Spring Validation
- Spring Actuator
- Maven

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- TanStack Query
- React Hook Form
- Zod

## Database

- PostgreSQL
- Redis

## Messaging

- RabbitMQ

## Storage

- MinIO

## Search

- Elasticsearch

## Monitoring

- Prometheus
- Grafana
- Loki
- Tempo

## Infrastructure

- Docker
- Docker Compose
- Kubernetes
- NGINX
