# 🏡 LuxeEstate - Modern Real Estate Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A full-stack, high-performance real estate landing page and management application. Built with a modern responsive frontend featuring smooth scroll-triggered micro-interactions and a secure REST API backend.

---

## 🌟 Key Features

- **Dynamic Hero & Showcase:** Modern aesthetic with call-to-action flows and featured property highlights.
- **Animated Milestone Counter:** IntersectionObserver-powered smooth easing animations to display company statistics and property volume.
- **Interactive Property & Service Cards:** Clean hover effects and modular UI components for easy scalability.
- **Customer Testimonials & Social Proof:** Carousel-ready client feedback section designed for maximum trust conversion.
- **Full-Stack Architecture:** Decoupled client and server with MongoDB/Mongoose data models, JWT authentication, and bcrypt password hashing ready to go.
- **Responsive & Mobile-First:** Fluid design across desktops, tablets, and mobile screens.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Bundler / Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Styling:** Modular CSS3 with modern flex/grid layouts and CSS animations

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express 5](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Mongoose 9](https://mongoosejs.com/)
- **Auth & Security:** JWT (`jsonwebtoken`), `bcryptjs`, and `cors`

---

## 📂 Project Structure

```text
Real-estate-demo/
├── client/                     # Frontend Vite + React application
│   ├── src/
│   │   ├── assets/             # Images, icons, and static assets
│   │   ├── components/         # Reusable UI elements (Navbar, Footer, PropertyCard, etc.)
│   │   ├── pages/              # Landing page sections (Hero, Features, Services, Numbers, etc.)
│   │   ├── App.jsx             # Root layout orchestrator
│   │   └── index.css           # Global stylesheet & design tokens
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API application
│   ├── server.js               # Express entry point
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB connection URI (local or MongoDB Atlas)

---

### 1. Clone the Repository
```bash
git clone https://github.com/Nahom-prog/Real-estate-demo.git
cd Real-estate-demo/demo
```

### 2. Frontend Setup (Client)
```bash
cd client
npm install
npm run dev
```
The client app will be running at `http://localhost:5173`.

### 3. Backend Setup (Server)
```bash
cd ../server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/real-estate
JWT_SECRET=your_super_secret_key
```

Start the backend server:
```bash
npm run dev
```
The server will start at `http://localhost:5000`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Nahom-prog/Real-estate-demo/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with care by <a href="https://github.com/Nahom-prog">Nahom</a> 🚀
</p>
