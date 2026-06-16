# 🍌 Chandra Enterprises

A full-stack Banana Export, Cold Storage, Logistics, and Supply Chain Management platform built with the MERN Stack.

---

# 📌 Project Overview

Chandra Enterprises is a modern business website developed to manage banana supply operations, customer inquiries, product showcases, gallery management, user authentication, profile management, and payment workflows.

The platform provides a professional digital presence for Chandra Enterprises while streamlining communication between customers and administrators.

---

# 🚀 Features

## 🌐 Public Website

* Home Page
* About Us
* Products Showcase
* Services Page
* Gallery Page
* Contact Page
* Inquiry Page
* Newsletter Subscription
* Google Maps Integration
* WhatsApp Integration
* Responsive Design

---

## 🔐 Authentication System

### User Registration

* Name
* Email
* Phone Number
* Password

### User Login

* JWT Authentication
* Secure Password Hashing
* Protected Routes

### User Profile

* View Profile
* Edit Profile
* Update Name
* Update Phone Number
* Change Password
* Upload Profile Picture

---

## 👤 Profile Picture System

### Features

* Upload Profile Picture
* Cloudinary Integration
* MongoDB Storage
* Navbar Profile Avatar
* Profile Page Avatar
* Persistent After Refresh
* Real-Time Update

---

## 📦 Dynamic Products System

### Product Information

* Product Name
* Product Image
* Weight
* Packaging Type
* Shelf Life
* Availability Status

### Request Quote

Users can:

* Select Product
* Click Request Quote
* Redirect to Inquiry Page
* Product Auto Filled

---

## 📸 Dynamic Gallery System

### Gallery Features

* Image Gallery
* Category Filters
* Lightbox Preview
* Responsive Masonry Layout

### Upcoming Upgrade

* Video Gallery Support
* Image & Video Filters
* Cloudinary Media Storage

---

## 📨 Inquiry Management System

### Inquiry Form

* Name
* Email
* Phone
* Product
* Message

### Backend Features

* MongoDB Storage
* REST API
* Admin Management Ready

---

## 📩 Newsletter Subscription System

Users can:

* Enter Email
* Subscribe
* Save to MongoDB
* Duplicate Email Protection

---

## 🗺 Location System

### Google Maps Integration

* Company Location
* Embedded Google Maps
* Direct Navigation Support

---

## 💳 Payment System 

### Static QR Payment

Workflow:

Customer → Scan QR → Pay → Upload Screenshot → Admin Verification

Features:

* UPI Payment Support
* Google Pay
* PhonePe
* Paytm
* Transaction ID
* Payment Screenshot Upload

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Framer Motion
* Swiper.js
* React Icons
* React Photo View

## Backend

* Node.js
* Express.js
* JWT Authentication
* Multer
* Cloudinary
* BcryptJS

## Database

* MongoDB Atlas
* Mongoose ODM

## Storage

* Cloudinary

---

# 📂 Project Structure

```bash
Chandra-Enterprises/
│
├── client/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   │
│   ├── server.js
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Collections

## Users

```javascript
{
  name,
  email,
  phone,
  password,
  role,
  profilePicture
}
```

## Products

```javascript
{
  title,
  image,
  weight,
  packaging,
  shelfLife,
  availability
}
```

## Gallery

```javascript
{
  title,
  category,
  mediaUrl,
  mediaType,
  description
}
```

## Inquiries

```javascript
{
  name,
  email,
  phone,
  product,
  message
}
```

## Subscribers

```javascript
{
  email
}
```

## Payments

```javascript
{
  amount,
  transactionId,
  screenshot,
  status
}
```

---

# 🔑 Environment Variables

Create:

```env
server/.env
```

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME

CLOUDINARY_API_KEY=YOUR_API_KEY

CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/IR980/chandra-enterprises.git
```

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```
```bash
http://localhost:5173
```
---

## Install Backend

```bash
cd server
npm install
npm run dev
```
```bash
http://localhost:5000
```
---

# 🚀 Deployment

## Frontend

* Vercel

## Backend

* Render

## Database

* MongoDB Atlas

## Media Storage

* Cloudinary

---

# 🔮 Future Enhancements

* Admin Dashboard
* Product Management Panel
* Gallery Upload Panel
* Video Gallery
* Razorpay Integration
* Invoice Generation
* Order Management System
* Forgot Password System
* OTP Verification
* Email Notifications
* Analytics Dashboard

---

# 👨‍💻 Developer

### Irshad Dev

Full Stack MERN Developer

Specialized in:

* React.js
* Node.js
* Express.js
* MongoDB
* Cloudinary
* Tailwind CSS
* JWT Authentication
* REST APIs

### Project

**Chandra Enterprises**

Banana Export • Cold Storage • Logistics • Supply Chain Solutions

### Contact

📧 Email: [ia3055951@gmail.com](mailto:ia3055951@gmail.com)

📱 Phone: +91 9801835063

🌐 Portfolio: Coming Soon

💼 GitHub: https://github.com/IR980

---

## 👨‍💻 Author

**Chandra Enterprises**

Full Stack MERN Developer

Built and maintained the complete Chandra Enterprises platform including:

* Frontend Development
* Backend Development
* MongoDB Database Design
* Cloudinary Media Management
* Authentication System
* Profile Management
* Inquiry System
* Gallery Management
* Newsletter System
* Payment Integration

### © 2026 Chandra Enterprises

Designed & Developed with ❤️ by **Irshad Dev**


---

# 📄 License

This project is developed for Chandra Enterprises and is intended for business operations and customer engagement.

© 2026 Chandra Enterprises. All Rights Reserved.
---
