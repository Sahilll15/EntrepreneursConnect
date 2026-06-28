<div align="center">

# 🚀 Entrepreneurs Connect

**A community platform for ambitious founders.**
Entrepreneurs Connect is a full-stack **MERN** application where entrepreneurs connect, collaborate, and grow together — because success is best achieved through shared experiences and collective wisdom.

[![Live Demo](https://img.shields.io/badge/Live_Demo-entrepreneursconnect.vercel.app-111?style=for-the-badge&logo=vercel&logoColor=white)](https://entrepreneursconnect.vercel.app/)
&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-3178c6?style=for-the-badge)](./LICENSE)

</div>

---

## ✨ Features

- 🔐 **Secure authentication** — JWT-based auth with bcrypt-hashed passwords
- 👤 **Profiles & community** — connect and collaborate with other entrepreneurs
- 🖼️ **Media uploads** — images stored on **AWS S3**
- 📧 **Transactional emails** — onboarding & notifications via Nodemailer
- ⏰ **Scheduled jobs** — background cron tasks
- ⚡ **Snappy UX** — Redux state management with a Tailwind + Flowbite UI

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb)
![Redux](https://img.shields.io/badge/Redux-764abc?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06b6d4?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?logo=amazons3&logoColor=white)

**Frontend:** React · Redux · TailwindCSS · Flowbite &nbsp;|&nbsp; **Backend:** Node.js · Express · MongoDB · JWT · bcrypt · Nodemailer · AWS S3 · node-cron

## 📸 Screenshots

> _Add a screenshot or GIF of the feed / profile pages here._
<!-- ![Entrepreneurs Connect](docs/home.png) -->

## 🗂️ Project Structure

```
EntrepreneursConnect/
├── client/   # React + Redux + Tailwind frontend
└── server/   # Express + MongoDB REST API
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and a MongoDB connection string.

```bash
git clone https://github.com/Sahilll15/EntrepreneursConnect.git
cd EntrepreneursConnect

# --- Backend ---
cd server
npm install
# create .env → MONGO_URI, JWT_SECRET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, SMTP creds
npm run dev

# --- Frontend (new terminal) ---
cd ../client
npm install
npm start            # http://localhost:3000
```

## 📝 License

Released under the [MIT License](./LICENSE).

<div align="center"><sub>Built by <a href="https://sahilchalke.com">Sahil Chalke</a></sub></div>
