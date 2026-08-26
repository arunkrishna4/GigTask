GigTask

GigTask is a lightweight task management mobile application built with
Expo React Native, TypeScript, and Supabase. It allows
authenticated users to create, manage, filter, and track their tasks
from a clean, responsive mobile interface.

Features

🔐 User authentication with Supabase

Login

Registration

Session persistence

Logout

📝 Task management

Create tasks

View task details

Edit tasks

Delete tasks

Mark tasks as completed/incomplete

🎯 Task priorities

Low

Medium

High

📅 Due-date management

🔎 Task filtering

All / Pending / Completed

All / Low / Medium / High priority

📊 Dashboard statistics

Total tasks

Pending tasks

Completed tasks

🔄 Pull-to-refresh and automatic task refresh after creation/update

⏳ Loading skeletons for smoother loading states

🔔 Toast notifications for important actions

📱 Responsive UI using a reusable normalization utility

🎨 Consistent theme, gradients, spacing, typography, and reusable
styles

Tech Stack

Technology                       Purpose

React Native                     Mobile application
Expo                             Development and build platform
TypeScript                       Type-safe development
Expo Router                      File-based navigation
Supabase                         Authentication and PostgreSQL database
React Native Toast Message       Toast notifications
React Native DateTimePicker      Due-date selection
Expo Linear Gradient             UI gradients
React Native Safe Area Context   Device safe-area handling

Architecture

GigTask follows a Separation of Concerns (SoC) approach.

GigTask/
├── app/                    # Expo Router pages
│   ├── auth/               # Login and registration
│   ├── tasks/              # Dashboard, create and details screens
│   └── ...
│
├── components/             # Reusable UI components
├── constants/              # Theme and application constants
├── context/                # Global application context
├── hooks/                  # Screen/business logic
├── lib/                    # External service configuration
├── services/               # Supabase/database operations
├── styles/                 # Screen and component styles
├── types/                  # TypeScript types/interfaces
├── utils/                  # Validation, formatting and normalization
└── assets/                 # Application assets

The application keeps UI rendering inside pages/components while data
access and business logic are handled through services, hooks, contexts,
and utilities.

Database

GigTask uses Supabase PostgreSQL with authenticated users owning their
tasks.

Each task contains:

id

user_id

title

description

due_date

priority

completed

created_at

updated_at

Tasks are queried using the authenticated user's ID so users only
retrieve their own tasks.

Getting Started

Prerequisites

Node.js

npm

Expo CLI / Expo tooling

A Supabase project

Android Studio or Expo Go for local testing

Installation

Clone the repository:

git clone <your-repository-url>
cd GigTask

Install dependencies:

npm install

Create your environment configuration with your Supabase project
credentials.

Then start the development server:

npx expo start

For a development build:

eas build --profile development --platform android

For a production build:

eas build --profile production --platform android

Environment Variables

Configure the Supabase connection using environment variables rather
than hardcoding credentials.

Example:

EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Never commit private service-role keys or other secrets to the
repository.

Security

Authentication is handled through Supabase Auth.

Database operations are scoped to the authenticated user.

Supabase Row Level Security should be enabled for the tasks table.

Sensitive credentials are kept outside the source code.

UI & UX

GigTask uses a consistent visual system across the application:

Shared color palette

Reusable spacing and radius values

Responsive sizing through a normalization utility

Gradient-based visual elements

Priority-specific visual indicators

Loading states and skeleton screens

Toast feedback for user actions

Safe-area-aware layouts

The UI is designed to remain usable across different mobile screen
sizes.


License

This project is intended for educational and portfolio purposes.
