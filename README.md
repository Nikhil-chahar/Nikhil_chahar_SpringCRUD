# 📚 Student Management System

A **full-stack web application** for managing students, built with a **Spring Boot REST API backend** and a **React frontend** featuring responsive design.

---

## 🎯 Overview

This project demonstrates a complete full-stack application with:

- **Backend**: Spring Boot 4.0.6, JDBC, PostgreSQL  
- **Frontend**: React 18, Tailwind CSS  
- **Architecture**: Layered (Controller → Service → Repository)  
- **API**: RESTful with CORS enabled  
- **Responsive UI**: Mobile-first design adaptable to all devices  

---

## 📋 Prerequisites

- Java 21+  
- Node.js 16+ and npm  
- PostgreSQL 12+  
- Git  

---

## 🚀 Quick Start

### 1. Database Setup
```bash
# Create database
psql -U postgres -c "CREATE DATABASE midterm_db;"

# Run schema (optional, backend can auto-create)
psql -U postgres -d midterm_db -f src/main/resources/schema.sql


