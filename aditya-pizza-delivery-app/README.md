# 🍕 Pizza Delivery System App - MERN

> **Pizza Delivery System App** (MERN - MongoDB, Express, React, Node.js) ek full-stack web application hai jisme users online apni pasand ka pizza customise karke order kar sakte hain.  
> Is project ka focus hai **professional UI, smooth functionality, security features**, aur **real-time order tracking**.

---


## ✨ Features

- **User & Admin Authentication:** Secure login/signup with JWT aur role-based access (User/Admin).
- **Custom Pizza Builder:** User apni pasand ka base, sauce, cheese, veggies select karke customise kar sake.
- **Pizza & Inventory Management:** Admin pizzas aur ingredients add/update/delete kar sakta hai; low stock alerts.
- **Order Management:** Order create, status track, real-time delivery update.
- **Payment Integration:** Razorpay Test Mode se secure checkout & payment verification.
- **Admin Dashboard:** Orders, inventory, customers ka complete control.
- **Email Notifications:** Order confirmations & alerts via Nodemailer.
- **Order History:** Users apne purane orders dekh sakte hain.

---

## 🛠 Built With

**Frontend:**  
- React.js (Vite) + Tailwind CSS + Redux Toolkit + React Router

**Backend:**  
- Node.js + Express.js + MongoDB (Mongoose)  
- JWT auth, bcrypt password hashing  
- Razorpay API integration  
- Nodemailer for emails

**Database:**  
- MongoDB Atlas / Local MongoDB

---

## 🚀 Getting Started

### 📋 Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+)
- NPM / PNPM / Yarn
- MongoDB Atlas account (or local MongoDB instance)
- Razorpay test account

### 📥 Installation

1. **Repo clone karo**
git clone https://github.com/adityak12322/pizza-delivery-app.git
cd pizza-delivery-app



2. **Dependencies install karo**
Backend
cd server
npm install

Frontend
cd ../client
npm install


3. **Environment Variables set karo**

📄 **`.env` (Backend)**  
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SALT=10
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password
SUPERADMIN_EMAIL=admin@example.com
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret


📄 **`.env` (Client)**  

VITE_SERVER_URL=http://localhost:5000
VITE_CLIENT_URL=http://localhost:3000
VITE_RAZORPAY_KEY_ID=your_key_id


4. **Database seed (optional)**

npm run data:import

reset data
npm run data:destroy


5. **Run application**

npm run dev

frontend: http://localhost:3000
backend: http://localhost:5000


---

## 📧 Contact

- **Developer:** ADITYA KUMAR  
- **GitHub:** [adityak12322](https://adityak12322/YOUR-GITHUB-USERNAME)  
- **Portfolio:** your-portfolio-link  
- **Email:** adityak12322@gmail.com  

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

> 🚀 Developed with ❤️ by **ADITYA KUMAR**
