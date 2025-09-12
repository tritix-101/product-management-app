# 🛍️ ProStore - Product Management App

A **FULL STACK** application for managing products with basic **CRUD operations**.  
This project demonstrates my ability to work with **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.  

---

## 🚀 Features
- 📋 Display list of products
- ➕ Add new product via form (with image URL support)  
- 🗑️ Delete product (with confirmation)  
- ✏️ Edit existing product details  
- 🔍 Search products by name  
- ↕️ Sort products by price (low-to-high, high-to-low)  
- 🎨 Clean UI with custom CSS (no external frameworks)  

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite, React Router, Hooks, Functional Components)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose)
- **Tools:** PostMan(for API calls testing), VScode

---

## 📦 Installation & Setup

### 1. Clone the Repository

git clone https://github.com/your-username/product-management-app.git
cd product-management-app

### 2. Setup Backend
- cd backend
- npm install
- npm run dev
- Backend runs at: http://localhost:7777

### 3. Setup Frontend
- cd frontend
- npm install
- npm run dev
- Frontend runs at: http://localhost:5173

## 📌 API Endpoints

- GET /api/products → Fetch all products
- POST /api/products → Add new product
- PUT /api/products/:id → Update product
- DELETE /api/products/:id → Delete product
