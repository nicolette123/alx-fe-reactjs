📘 Tailwind React Integration

This project demonstrates how to set up Tailwind CSS inside a React application using Vite.
It follows the exact steps required in the ALX task “0. Setting Up Tailwind CSS in a New React Project.”

🚀 Project Setup
1️⃣ Create a New React Project
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration

2️⃣ Install Tailwind CSS & Vite Plugin
npm install tailwindcss @tailwindcss/vite

3️⃣ Configure Tailwind Plugin in Vite

Modify vite.config.js:

// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ✅ Added

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Added
  ],
})

4️⃣ Import Tailwind in CSS

Open src/index.css and add:

@import "tailwindcss";

5️⃣ Test the Installation

Run the app:

npm run dev


If everything is correct, Tailwind styles will work immediately.

✅ Sample App Component

src/App.jsx

import React from "react";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600">
        Tailwind is working! 🎉
      </h1>
    </div>
  );
}

export default App;

📂 Project Structure
tailwind-react-integration/
│── public/
│── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── vite.config.js
│── package.json
│── README.md

🛠 Tools Used

Vite

React

Tailwind CSS

Node.js

📌 Repository

GitHub: alx-fe-reactjs
Directory: tailwind-react-integration