
# 💬 Feedback Collector App

A modern web application to collect and manage user feedback. The app provides two interfaces:
- **User Panel**: Users can submit feedback using a clean and minimalistic form.
- **Admin Panel**: Admins can view all submitted feedback in a structured and visually appealing format.

---

## 🧑‍💻 Tech Stack

### 🔹 Frontend
- **React.js** – Component-based UI framework.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **React Router DOM** – For client-side routing and navigation.
- **Hosted on:** [Netlify](https://feedbackcolector.netlify.app/)

### 🔹 Backend
- **Node.js** – JavaScript runtime for server-side development.
- **Express.js** – Lightweight and fast web framework.
- **Hosted on:** [Vercel](https://feedback-server-olive.vercel.app)

### 🔹 Database
- **MongoDB** – NoSQL database to store feedback data.
- **Mongoose** – ODM to interact with MongoDB easily.

---

## 🌐 Features

- ✨ **Minimalist UI**: Built using Tailwind CSS with a clean and soft "milimist" theme.
- 📤 **Feedback Submission**: Users can submit name, email, and message.
- 🧾 **Live Feedback Viewer**: Admins can view a list of submitted feedback with date and time.
- ⏱️ **Timestamp Formatting**: Feedback cards show human-readable date and time.
- 🌙 **Dark Mode Support**: Tailwind classes include support for dark mode themes.
- 🔐 **Routing**: Controlled navigation between user/admin sections.

---

## 📁 Project Structure

```
root/
├── src/                   # Source Folder
│   └── components/        # Reuseable components along with Pages
│   └── constants/         # Constants like API URLs
│   └── App.jsx/           # Main Frontend File
└── README.md             # You're reading it!
```

---

## 🚀 Deployment Steps

### ✅ Frontend on Netlify
1. Push your `client/` folder to a GitHub repository.
2. Go to [Netlify](https://feedbackcolector.netlify.app/) and click **New Site from Git**.
3. Connect your repo and choose the `client/` directory as the root.
4. Set the build command to `npm run build` and the publish directory to `dist` or `build` (based on your setup).
5. Click Deploy.

### ✅ Backend on Vercel
1. Push your `server/` folder to a separate GitHub repository (or monorepo setup).
2. Go to [Vercel](https://feedback-server-olive.vercel.app) and import your backend repository.
3. Set build command as `npm install` and output as `.` (if using `app.js` directly).
4. Add environment variables (like `MONGO_URI`) in the Vercel dashboard.
5. Click Deploy.

---

## 🔧 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/feedback-collector.git
cd feedback-collector
```

### 2. Install frontend dependencies
```bash
npm install
npm run dev
```

### 3. Install backend dependencies
```bash
npm install
node app.js
```

### 4. Configure `.env`
Add your environment variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🙌 Author

Made with ❤️ by Krushna M Diwate


