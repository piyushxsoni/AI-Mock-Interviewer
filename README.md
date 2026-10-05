# AI Interview Platform

A full-stack AI-powered mock interview platform built with React, Node.js, Express, MongoDB, and Groq AI. The platform helps users practice technical interviews with AI-generated questions, real-time answer evaluation, and detailed performance reports.

## 🚀 Live Demo

**Frontend:**
https://ai-mock-interviewer-2km5.onrender.com

## ✨ Features

* **AI-Generated Questions** — AI generates interview questions based on role and difficulty
* **Real-time Evaluation** — AI evaluates answers and provides scores and feedback
* **Timer per Question** — 2-minute countdown for each interview question
* **Voice Input** — Browser speech recognition for hands-free answering
* **Detailed Reports** — Performance grade, strengths, improvements, and question-wise breakdown
* **Rich Dashboard** — View interview statistics, history, and quick-start options
* **JWT Authentication** — Secure user registration and login using JWT
* **Password Security** — Passwords are securely hashed using bcryptjs
* **Real-time Communication** — Socket.io for real-time interview interactions

## 🛠️ Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Frontend       | React 18 + Vite + Tailwind CSS |
| Backend        | Node.js + Express.js           |
| Database       | MongoDB + Mongoose             |
| AI             | Groq AI                        |
| Authentication | JWT + bcryptjs                 |
| Real-time      | Socket.io                      |
| Deployment     | Render                         |

## 📁 Folder Structure

```text
ai-interview/
├── client/         # React Frontend (Vite + Tailwind)
└── server/         # Node.js Backend (Express + MongoDB)
```

## ⚙️ Setup & Run Locally

### Prerequisites

Make sure you have:

* Node.js v18+
* MongoDB running locally or a MongoDB Atlas database
* Groq API Key

### 1. Clone the Repository

```bash
git clone https://github.com/piyushxsoni/AI-Mock-Interviewer.git
cd AI-Mock-Interviewer
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/ai-interview
JWT_SECRET=your_super_secret_jwt_key
GROQ_API_KEY=your_groq_api_key
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

> Never commit `.env` files or API keys to GitHub.

### 4. Start the Backend

Open Terminal 1:

```bash
cd server
npm run dev
```

### 5. Start the Frontend

Open Terminal 2:

```bash
cd client
npm run dev
```

### 6. Open the Application

Visit:

```text
http://localhost:5173
```

## ☁️ Deployment

The application is deployed using Render.

### Frontend

The React/Vite frontend is deployed as a Render Static Site.

**Live URL:**

https://ai-mock-interviewer-2km5.onrender.com

### Backend

The Node.js/Express backend is deployed separately as a Render Web Service.

The frontend communicates with the backend through the `VITE_API_URL` environment variable.

For production, configure:

```env
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com/api
```

The backend should also be configured with:

```env
CLIENT_URL=https://ai-mock-interviewer-2km5.onrender.com
```

### MongoDB

For production deployment, MongoDB Atlas can be used instead of a local MongoDB instance.

Configure the MongoDB connection string through the backend environment variables:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

## 🔐 Authentication

The platform uses JWT-based authentication.

Authentication flow:

```text
User
  ↓
Register / Login
  ↓
Backend validates credentials
  ↓
JWT Access Token
  ↓
Token stored by frontend
  ↓
Authorization: Bearer <token>
  ↓
Protected API Routes
```

Passwords are hashed using `bcryptjs` before being stored in MongoDB.

## 🤖 AI Interview Flow

```text
User selects role & difficulty
            ↓
      AI generates questions
            ↓
       User answers
            ↓
      AI evaluates answer
            ↓
       Score + Feedback
            ↓
       Next question
            ↓
     Interview completed
            ↓
      Detailed report
```

## 📊 MongoDB Collections

The application uses MongoDB collections such as:

* `users`
* `interviews`
* `reports`

## 🔒 Security

* JWT-based authentication
* bcrypt password hashing
* Environment variables for secrets
* CORS configuration
* Protected API routes
* MongoDB Atlas access controls
* API keys are excluded from version control

## 📌 Project Highlights

This project demonstrates practical experience with:

* Full-stack web development
* React and Vite
* REST APIs
* Node.js and Express
* MongoDB and Mongoose
* JWT authentication
* AI API integration
* Socket.io
* Environment-based configuration
* Production deployment using Render

## 👨‍💻 Author

**Piyush Soni**

GitHub:
https://github.com/piyushxsoni

LinkedIn:
https://linkedin.com/in/piyushsoni01official
