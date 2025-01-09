# Tubel E-Kisan

**Tubel E-Kisan** is a web application designed to connect farmers with machine owners. It provides a platform where farmers can rent agricultural machines and machine owners can manage their equipment. The system is built with a focus on scalability, user-friendliness, and secure role-based access for users.

---

## Features

### **Frontend**
- **Responsive UI**: Built with React.js, ensuring seamless performance across devices.
- **Role-Based Dashboards**:
  - **Farmer Dashboard**: Allows farmers to view, search, and book machines.
  - **Owner Dashboard**: Enables machine owners to add, update, or delete machine listings and manage bookings.
- **Navigation**: Implemented using React Router for smooth routing.
- **Authentication**: Secure login and signup for users.

### **Backend**
- **API Development**: Node.js and Express.js used for robust backend APIs.
- **Authentication**: 
  - Secure signup with hashed passwords using Bcrypt.
  - Login with JWT (JSON Web Tokens) for session management.
- **Booking Feature**: APIs for machine booking and managing transactions.
- **MongoDB Integration**: For efficient data storage and retrieval.

---

## Technologies Used

### **Frontend**
- React.js
- React Router
- CSS

### **Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT for authentication
- Bcrypt.js for password security

---

## Project Setup

### **Frontend**
1. Navigate to the `frontend` folder:
   ```bash
   cd tubel-e-kisan/frontend
   \

Install dependencies:
bash:
npm install


Start the development server:
bash:
npm start

Backend
Navigate to the backend folder:
bash:
cd tubel-e-kisan/backend
Install dependencies:
bash:
npm install

Set up environment variables:
Create a .env file in the backend folder.
Add the following variables:
env

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tubel-e-kisan?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000

Start the server:
bash:
npm start

Deployment
Frontend Deployment
Use Netlify or Vercel for deploying the frontend build.
Steps:
Run:
bash:
npm run build

Deploy the build folder to Netlify/Vercel.

Backend Deployment
Use services like Render, Heroku, or AWS for deploying the backend.
Ensure environment variables are set up correctly on the deployment platform.
Allow network access for the MongoDB cluster (IP whitelist).

Folder Structure


tubel-e-kisan/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   └── package.json
├── README.md
└── .gitignore

How to Test
Postman API Testing
Use Postman to test the backend API.
Examples:
Signup: POST http://localhost:5000/api/auth/signup
json:

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "role": "farmer",
  "location": "New York"
}
Login: POST http://localhost:5000/api/auth/login

json
Copy code
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Booking: POST http://localhost:5000/api/bookings

Frontend Testing
Ensure backend APIs are integrated with the frontend.
Test the full functionality through the UI.
Future Enhancements
Add payment gateway integration.
Implement email notifications for bookings.
Enhance search and filtering for machines.

Contributors:
Pritam Singh
GitHub: pritam018-sin
Email: wepritam.18@gmail.com
License
This project is licensed under the MIT License.






