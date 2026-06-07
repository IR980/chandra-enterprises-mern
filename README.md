# Chandra Enterprises

A modern full-stack Banana Supply, Logistics, and Cold Storage Management website built using React, Node.js, Express, MongoDB, and Tailwind CSS.

---

## Project Overview

Chandra Enterprises is a business website designed for banana wholesale supply, cold storage services, logistics, and transportation management.

The platform allows customers to:

* Explore company services
* View products
* Browse gallery
* Submit inquiries
* Request quotations
* Register and login
* Manage profiles
* Subscribe to newsletters
* Contact the company directly

---

## Features

### Frontend Features

* Modern Responsive UI
* React Router Navigation
* Home Page
* About Page
* Products Page
* Services Page
* Gallery Page
* Contact Page
* Inquiry Page
* Login & Registration
* User Profile Page
* Edit Profile System
* Newsletter Subscription
* Google Maps Integration
* WhatsApp Integration
* Animated UI using Framer Motion
* Swiper Product Slider
* React Hot Toast Notifications

### Backend Features

* REST API Architecture
* User Authentication
* JWT Based Login System
* Protected Routes
* MongoDB Database Integration
* Contact Inquiry System
* Dynamic Products API
* Dynamic Gallery API
* Newsletter Subscription API
* User Profile Management

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Framer Motion
* Swiper JS
* Axios
* React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* cors
* morgan

---

## Project Structure

```bash
Chandra-Enterprises
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── api
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   └── App.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/chandra-enterprises.git
```

```bash
cd chandra-enterprises
```

---

## Frontend Setup

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend URL:

```bash
http://localhost:5000
```

---

## Available APIs

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### User Profile

```http
GET /api/users/profile
PUT /api/users/profile
```

### Inquiries

```http
POST /api/inquiries
GET /api/inquiries
```

### Products

```http
GET /api/products
```

### Gallery

```http
GET /api/gallery
```

### Newsletter Subscription

```http
POST /api/subscribers
```

---

## Request Quote Workflow

```text
Product Showcase
      ↓
Request Quote
      ↓
Inquiry Page
      ↓
Auto-Filled Product Name
      ↓
Submit Inquiry
      ↓
MongoDB Database
```

---

## Future Improvements

* Admin Dashboard
* Product Management Panel
* Inquiry Management Panel
* Cloudinary Image Upload
* Product Search & Filters
* Order Tracking
* Email Notifications
* Deployment on Render & Vercel

---

## Author

### Chandra Enterprises

Developer: Irshad Alam

Location: Greater Noida, Uttar Pradesh, India

---

## License

This project is developed for Chandra Enterprises and intended for business use.
© 2026 Chandra Enterprises. All Rights Reserved.
