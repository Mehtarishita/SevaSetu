# SevaSetu
SevaSetu AI is a smart volunteer management platform for large-scale events like Mahakumbh. It uses AI to recruit, allocate, track, and optimize volunteers based on skills, location, availability, and workload. Features include smart task assignment, real-time monitoring, emergency response support, and workforce analytics. 
# 🚀 SevaSetu AI

**Smart Volunteer Deployment & Workforce Optimization Platform**

SevaSetu AI is an AI-powered volunteer management and workforce optimization platform designed for large-scale events like Mahakumbh. It helps authorities recruit, manage, allocate, monitor, and optimize volunteers based on skills, location, workload, and operational requirements.

---

## 🌟 Problem Statement

Managing thousands of volunteers during large public events is challenging. Manual allocation often leads to:

* Inefficient volunteer deployment
* Delayed emergency response
* Volunteer overloading
* Poor resource utilization
* Lack of real-time visibility

SevaSetu AI solves these challenges using AI-driven assignment and workforce optimization.

---

## ✨ Features

### 👥 Volunteer Management

* Volunteer registration and onboarding
* Skill-based profiling
* Availability tracking
* Volunteer status monitoring

### 🚨 Incident Management

* Create and manage incidents
* Priority-based categorization
* Real-time incident tracking
* Emergency response coordination

### 🤖 AI-Powered Assignment

* Intelligent volunteer matching
* Skill-based recommendations
* Location-aware deployment
* Workload balancing

### 📊 Analytics Dashboard

* Volunteer distribution insights
* Skills analysis
* Workload monitoring
* Operational metrics

### 🧠 Fatigue Detection

* Volunteer workload tracking
* Burnout prevention recommendations
* Smart shift balancing

### 📍 Command Center

* Centralized operational dashboard
* Live volunteer monitoring
* Incident overview
* Deployment visibility

---

## 🏗️ Project Structure

```bash
sevasetu-ai/
├── app/
├── components/
├── lib/
├── services/
├── hooks/
├── context/
├── data/
├── public/
├── types/
└── scripts/
```

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js API Routes

### Database

* Firebase Firestore

### Authentication

* Firebase Authentication

### AI Integration

* Google Gemini API

### Deployment

* Vercel

---

## 📂 Core Modules

### Dashboard

Provides a comprehensive overview of:

* Total volunteers
* Active assignments
* Open incidents
* Workforce utilization

### Volunteers

Manage volunteer profiles including:

* Skills
* Location
* Availability
* Assignment history

### Incidents

Track operational issues and emergencies:

* Medical incidents
* Crowd management issues
* Lost & found cases
* Security concerns

### AI Assignment Engine

Matches volunteers using:

* Skill relevance
* Distance from incident
* Current workload
* Availability status

### Analytics

Generates insights on:

* Volunteer efficiency
* Skill distribution
* Assignment success rate
* Workforce demand

---

## 🧠 AI Workflow

### Volunteer Matching

Input:

```json
{
  "incident": "Medical Emergency",
  "location": "Sector A",
  "requiredSkills": ["First Aid"]
}
```

Output:

```json
{
  "recommendedVolunteers": [
    {
      "name": "Rahul",
      "matchScore": 95
    }
  ]
}
```

### Fatigue Analysis

The AI evaluates:

* Total working hours
* Consecutive assignments
* Recent workload

And recommends:

* Continue Assignment
* Rotate Volunteer
* Assign Break

---

## 🔥 Firestore Collections

### Volunteers

```json
{
  "id": "",
  "name": "",
  "skills": [],
  "location": "",
  "status": "",
  "workload": 0
}
```

### Incidents

```json
{
  "id": "",
  "title": "",
  "priority": "",
  "location": "",
  "status": ""
}
```

### Assignments

```json
{
  "incidentId": "",
  "volunteerId": "",
  "matchScore": 0,
  "assignedAt": ""
}
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/sevasetu-ai.git
```

### Navigate

```bash
cd sevasetu-ai
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

GEMINI_API_KEY=
```

### Run Development Server

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:3000
```

---

## 📸 Screens

* Dashboard
* Command Center
* Volunteer Management
* Incident Tracking
* AI Assignment Panel
* Analytics Dashboard

---

## 🎯 Future Enhancements

* Real-time GPS tracking
* Crowd density prediction
* AI chatbot assistant
* Multi-language support
* SMS and WhatsApp notifications
* Predictive workforce planning
* Mobile application

---

## 🏆 Hackathon Track

**Smart Volunteer Deployment & Workforce Optimization**

Built to improve volunteer coordination, operational efficiency, and emergency response for large-scale public gatherings such as Mahakumbh.

---

## 👩‍💻 Team

Developed with ❤️ using AI-assisted development tools including ChatGPT, Gemini, GitHub Copilot, and modern full-stack technologies.

---

## 📜 License

This project is licensed under the MIT License.
