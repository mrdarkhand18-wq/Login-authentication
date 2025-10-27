Login-authentication
A secure Login Authentication System enabling users to register, log in, and access protected pages. Built with modern web security practices to ensure safe handling of user data.

✨ Features
New account creation (Registration)
Secure password hashing
JWT token-based authentication
Input validation
Protected routes for authenticated users
Logout + session clear

🧩 Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT
Security: bcrypt

🌍 Live Deployment
Netlify Link:
🔗 https://login-authenticationsystem.netlify.app/

Backend Deployment (Add if you deploy backend too)

📂 GitHub Repository

🔗 https://github.com/mrdarkhand18-wq/Login-authentication.git

🧱 Project Structure

Copy code

/project-root
│
├── /src
│   ├── /routes
│   ├── /controllers
│   ├── /models
│   ├── /middleware
│   └── app.js
├── package.json
└── README.md

🎯 Objectives

This system aims to provide a reliable and secure authentication workflow, focusing on encryption, validation, and safe user access control.

🚀 Setup & Installation

Clone the repository
Copy code

git clone https://github.com/mrdarkhand18-wq/Login-authentication.git
Navigate into folder
Copy code

cd Login-authentication
Install dependencies
Copy code

npm install
Configure environment variables
Create .env file:
Copy code

PORT=5000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the server
Copy code
npm start

🔁 Authentication Flow

User registers account
Password stored after hashing
Login verification
JWT token issued
Protected access granted

🛡️ Security

Password hashing with bcrypt
Token validation
Input sanitization
Prevents injection attacks



📌 Future Enhancements

Forgot password (email-based reset)
Mobile responsive UI 🔄
Social login (Google/Github OAuth)
Account verification via email



👨‍💻 Author

Name: Dark Hand
Email: darkhand18@gmail.com
GitHub: https://github.com/mrdarkhand18-wq
Live Demo: https://login-authenticationsystem.netlify.app/
📜 License
MIT License
