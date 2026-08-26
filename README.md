# GigTask

A lightweight and responsive task management mobile application built with **React Native, Expo, TypeScript, and Supabase**.

GigTask allows users to securely manage their tasks, set priorities and due dates, track completion, and filter tasks through a clean mobile interface.

---

## ✨ Features

- 🔐 **Authentication**
  - User registration
  - User login
  - Persistent authentication sessions
  - Logout

- 📝 **Task Management**
  - Create tasks
  - View task details
  - Edit tasks
  - Delete tasks
  - Mark tasks as completed or pending

- 🎯 **Task Priorities**
  - Low
  - Medium
  - High

- 📅 **Due Dates**
  - Select task due dates
  - Overdue task detection

- 🔎 **Task Filters**
  - All tasks
  - Pending tasks
  - Completed tasks
  - Filter by priority

- 📊 **Dashboard**
  - Total task count
  - Pending task count
  - Completed task count

- 🎨 **Modern UI**
  - Gradient-based design
  - Responsive layouts
  - Consistent theme and typography
  - Priority-based visual indicators
  - Loading skeletons
  - Toast notifications
  - Pull-to-refresh

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native | Mobile application |
| Expo | Development and build platform |
| TypeScript | Type-safe development |
| Expo Router | File-based navigation |
| Supabase | Authentication and database |
| PostgreSQL | Task data storage |
| React Native Toast Message | Toast notifications |
| React Native DateTimePicker | Date selection |
| Expo Linear Gradient | Gradient UI |
| React Native Safe Area Context | Safe area handling |

---

## 🏗️ Project Architecture

GigTask follows a **Separation of Concerns (SoC)** architecture.

```text
GigTask/
│
├── app/                    # Expo Router pages
│   ├── auth/               # Login and registration
│   └── tasks/              # Task-related screens
│
├── components/             # Reusable UI components
│
├── constants/              # Theme and application constants
│
├── context/                # Global application state
│
├── hooks/                  # Screen and business logic
│
├── lib/                    # Supabase configuration
│
├── services/               # Database and API operations
│
├── styles/                 # Component and page styles
│
├── types/                  # TypeScript interfaces and types
│
├── utils/                  # Validation, formatting and utilities
│
└── assets/                 # Application assets
