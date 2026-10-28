# ShopEase — MERN E-Commerce App

A responsive full-stack e-commerce starter converted from the uploaded ShopEase Spring Boot reference project to the MERN stack.

## Tech stack
- React 18 + Vite
- Node.js + Express REST API
- MongoDB + Mongoose
- JWT authentication and bcrypt password hashing
- Responsive custom storefront UI

## Features
- Product catalog with search and category filtering
- Product cards and cart with quantity updates
- User registration and login
- JWT-protected order checkout and order history
- Admin role and order status dashboard
- Admin product create/update/delete REST endpoints
- Seeded demo products and admin account
- Stock validation and stock decrement during checkout

## Requirements
- Node.js 18+ (Node 20+ recommended)
- MongoDB Community Server running locally, or MongoDB Atlas connection string
- VS Code (recommended)

## Run locally

### 1. Start MongoDB
Install and start MongoDB Community Server, or create a MongoDB Atlas cluster.

### 2. Start the backend
```bash
cd server
npm install
```
Copy `.env.example` to `.env` and update `MONGO_URI` and `JWT_SECRET` if needed.

```bash
npm run dev
```
The API runs at `http://localhost:5000`. Health check: `http://localhost:5000/api/health`.

### 3. Start the frontend (new terminal)
```bash
cd client
npm install
npm run dev
```
Open the Vite URL printed in the terminal, normally `http://localhost:5173`.

## Demo admin
- Email: `admin@shopease.com`
- Password: `admin123`

The server creates this demo account and starter products on first startup. Change the demo password before deploying publicly.

## API overview
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/products` and `GET /api/products/:id`
- Admin: `POST /api/products`, `PUT /api/products/:id`, `DELETE /api/products/:id`
- `POST /api/orders`
- `GET /api/orders/mine`
- Admin: `GET /api/orders`, `PATCH /api/orders/:id/status`

## GitHub
1. Create a new GitHub repository.
2. Open this project folder in VS Code.
3. Run `git init`, `git add .`, `git commit -m "Initial MERN ShopEase project"`.
4. Add your repository remote and run `git push -u origin main`.

## Notes
- The frontend uses a local API base URL (`http://localhost:5000/api`) for development.
- This is a starter portfolio project, not a production-ready payment integration. Checkout creates an order but does not process card payments.
- Product images are loaded from Unsplash URLs.
