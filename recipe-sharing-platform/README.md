📚 Recipe Sharing Platform

A simple, modern, and responsive recipe-sharing application built with React and Tailwind CSS. Users will be able to browse recipes, view detailed recipe pages, and submit new recipes through a form.

🚀 Project Overview

The Recipe Sharing Platform is designed to help users explore and share recipes. This project will evolve over multiple tasks, starting from the basic setup to fully functional pages.

This README covers Task 0: Project Setup.

🛠️ Technologies Used

React (Vite) – For building the UI and managing components

Tailwind CSS – For styling with utility-first classes

PostCSS & Autoprefixer – For Tailwind processing

JavaScript (ES6+)

📂 Project Setup Instructions
1️⃣ Create the React Project
npm create vite@latest recipe-sharing-platform -- --template react
cd recipe-sharing-platform

2️⃣ Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

3️⃣ Configure Tailwind

Modify tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};


Add Tailwind imports to src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

4️⃣ Verify Tailwind Installation

Edit App.jsx:

function App() {
  return (
    <h1 className="text-4xl text-blue-500 font-bold text-center mt-10">
      Recipe Sharing Platform
    </h1>
  );
}

export default App;


Run the project:

npm run dev


If you see blue text, Tailwind CSS is working correctly.

📁 Project Structure (Initial)
recipe-sharing-platform/
│── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│── public/
│── index.html
│── tailwind.config.js
│── postcss.config.js
│── package.json
└── README.md
