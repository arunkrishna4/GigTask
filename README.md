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

### Separation of Concerns

The project keeps different responsibilities separated:

- **Pages** → UI and screen composition
- **Components** → Reusable UI elements
- **Hooks** → Screen-level state and business logic
- **Services** → Supabase/database operations
- **Utils** → Validation, formatting and reusable logic
- **Styles** → UI styling
- **Types** → TypeScript type definitions
- **Context** → Global application state
```

## 🗄️ Database

GigTask uses **Supabase PostgreSQL** for storing tasks.

Each task contains:

| Field | Description |
|-------|-------------|
| `id` | Unique task identifier |
| `user_id` | ID of the authenticated user |
| `title` | Task title |
| `description` | Optional task description |
| `due_date` | Task due date |
| `priority` | Task priority |
| `completed` | Task completion status |
| `created_at` | Creation timestamp |
| `updated_at` | Last update timestamp |

Tasks are associated with the authenticated user using `user_id`.

---

## 🔐 Authentication & Security

Authentication is handled using **Supabase Auth**.

The application:

- Maintains authenticated user sessions
- Associates every task with its user
- Retrieves only tasks belonging to the authenticated user
- Uses Supabase Row Level Security (RLS) to protect task data
- Keeps Supabase configuration outside the source code

> Never expose Supabase service-role keys or other private credentials in the repository.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Expo
- EAS CLI
- A Supabase project

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd GigTask

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

Create an environment configuration file such as `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Do not commit your `.env` file to GitHub.

### 4. Start the Application

```bash
npx expo start
```

You can then run the application using Expo Go or a development build.

---

## 📦 Building the Application

### Development Build

```bash
eas build --profile development --platform android
```

### Production Build

```bash
eas build --profile production --platform android
```

For Play Store distribution, an Android App Bundle (`.aab`) can be generated using the production profile.

---

## 📱 Responsive Design

GigTask uses a reusable normalization utility to scale dimensions based on the device's screen size.

This allows UI elements such as:

- Padding
- Margins
- Font sizes
- Icons
- Buttons
- Cards

to adapt more consistently across different mobile devices.

---

## 🎨 UI & UX

The application follows a consistent design system throughout the app.

It includes:

- Shared color palette
- Consistent typography
- Reusable spacing and border radius values
- Gradient backgrounds and cards
- Priority-specific colors
- Responsive sizing
- Loading skeletons
- Toast feedback
- Safe-area-aware layouts

---

## 🗂️ Project Architecture

GigTask follows a modular architecture with clear separation of responsibilities.

### Separation of Concerns

The project keeps different responsibilities separated:

- **Pages** → UI and screen composition
- **Components** → Reusable UI elements
- **Hooks** → Screen-level state and business logic
- **Services** → Supabase/database operations
- **Utils** → Validation, formatting, and reusable logic
- **Styles** → UI styling
- **Types** → TypeScript type definitions
- **Context** → Global application state

---

## 🗄️ Database

GigTask uses **Supabase PostgreSQL** for storing tasks.

Each task contains:

| Field | Description |
|---|---|
| `id` | Unique task identifier |
| `user_id` | ID of the authenticated user |
| `title` | Task title |
| `description` | Optional task description |
| `due_date` | Task due date |
| `priority` | Task priority |
| `completed` | Task completion status |
| `created_at` | Creation timestamp |
| `updated_at` | Last update timestamp |

Tasks are associated with the authenticated user using `user_id`.

---

## 🔐 Authentication & Security

Authentication is handled using **Supabase Auth**.

The application:

- Maintains authenticated user sessions
- Associates every task with its user
- Retrieves only tasks belonging to the authenticated user
- Uses Supabase Row Level Security (RLS) to protect task data
- Keeps Supabase configuration outside the source code

> Never expose Supabase service-role keys or other private credentials in the repository.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Expo
- EAS CLI
- A Supabase project

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd GigTask
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

Create an environment configuration file such as `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start the Application

```bash
npx expo start
```

You can then run the application using Expo Go or a development build.

---

## 📦 Building the Application

### Development Build

```bash
eas build --profile development --platform android
```

### Production Build

```bash
eas build --profile production --platform android
```

For Play Store distribution, an Android App Bundle (`.aab`) can be generated using the production profile.

---

## 📱 Responsive Design

GigTask uses a reusable normalization utility to scale dimensions based on the device's screen size.

This allows UI elements such as:

- Padding
- Margins
- Font sizes
- Icons
- Buttons
- Cards

to adapt more consistently across different mobile devices.

---

## 🎨 UI & UX

The application follows a consistent design system throughout the app.

It includes:

- Shared color palette
- Consistent typography
- Reusable spacing and border radius values
- Gradient backgrounds and cards
- Priority-specific colors
- Responsive sizing
- Loading skeletons
- Toast feedback
- Safe-area-aware layouts

---

## ✅ Current Status

### Completed

- Supabase authentication
- User registration
- User login
- Logout
- Dashboard
- Task creation
- Task retrieval
- Task details
- Task editing
- Task deletion
- Task completion toggle
- Task filtering
- Priority filtering
- Dashboard statistics
- Responsive UI
- Loading states
- Skeleton screens
- Toast notifications
- Expo Router navigation

---

## 🔮 Future Improvements

Potential future additions include:

- 🔍 Task search
- 🔄 Recurring tasks
- 🔔 Push notifications and reminders
- 📶 Offline task support
- 📊 Advanced task analytics
- ↕️ Additional sorting options

---

## 📄 License

This project was developed for educational and portfolio purposes.
