# 🚀 Full Stack Card Management App

A modern, responsive web application for managing and searching information cards, built with React, Express, and MongoDB.

## 🌟 Features

- 📊 Dynamic card display
- 🔍 Real-time search functionality
- 🎨 Responsive design
- 🔒 MongoDB integration

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **State Management**: React Hooks

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+ recommended)
- npm (v6+ recommended)
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harshyadavone/fullstack-card-app.git
   cd fullstack-card-app
   ```

2. **Set up the backend**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```
   MONGO_URI="your_mongodb_connection_string"
   NODE_ENV=development
   ```

3. **Set up the frontend**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📚 API Documentation

| Endpoint            | Method | Description           |
| ------------------- | ------ | --------------------- |
| `/api/cards`        | GET    | Fetch all cards       |
| `/api/cards`        | POST   | Create a new card     |
| `/api/cards/search` | POST   | Search cards by title |

## 👨‍💻 Author

**Your Name**

- GitHub: [@harshyadavone](https://github.com/harshyadavone)
- LinkedIn: [@harshdana](https://linkedin.com/in/harshdana)

---

⭐️ Star this repo if you like what you see!
