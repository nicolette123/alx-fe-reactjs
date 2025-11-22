GitHub User Search – React + Vite Application

A simple and responsive GitHub User Search Application built with React, Vite, and Axios.
Users can search GitHub profiles, view avatars, usernames, and navigate directly to a user’s GitHub page.

This project is part of the ALX React Fundamentals tasks under the repository:

alx-fe-reactjs
Directory: github-user-search

🚀 Features

🔍 Search GitHub users using the official GitHub Search API

👤 Display user avatar, username, and account type

🔗 Direct link to GitHub profile

⚡ Fast performance using Vite

🔐 Optional GitHub token support via .env for increased API rate limits

📁 Clean component-based structure

📂 Project Structure
github-user-search/
├── 
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── UserList.jsx
│   │   └── UserCard.jsx
│   └── services/
│       └── githubService.js

🛠️ Technologies Used

React (frontend framework)

Vite (development & bundling)

Axios (API requests)

CSS (styling)

GitHub REST API

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/alx-fe-reactjs.git
cd alx-fe-reactjs/github-user-search


Or if you're creating fresh:

npm create vite@latest github-user-search -- --template react
cd github-user-search

2️⃣ Install Dependencies
npm install

3️⃣ Install Axios
npm install axios

🔐 (Optional) Add GitHub API Token

If you want higher rate limits (recommended):

Create a .env file in the project root:

VITE_APP_GITHUB_API_KEY=ghp_your_github_token_here


GitHub tokens can be created here:
https://github.com/settings/tokens

⚠️ Never commit your .env file to GitHub!

▶️ Running the Project

Start development server:

npm run dev


Open the printed local URL (usually):

http://localhost:5173/

🧪 How the App Works

User types a search query (e.g., torvalds, microsoft)

The app calls the GitHub Search API:

GET https://api.github.com/search/users?q=USERNAME


Results are displayed using:

UserCard (individual profile)

UserList (collection of results)

📡 API Service

API logic is isolated inside:

src/services/githubService.js


This keeps the code clean and easy to maintain.

🖼️ UI Overview

SearchBar — input + search button

UserCard — displays avatar + username + link

UserList — grid layout of all results

App.jsx — coordinates search + loading + errors

📦 Build for Production
npm run build


Preview production build locally:

npm run preview

🤝 Author

Nicolette Mukeshimana
ALX Front-End Engineering