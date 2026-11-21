# 🚀 Adimire Ent — IT Services & Digital Solutions Website

A full-stack MERN (MongoDB, Express, React, Node.js) website for **Adimire Ent**, an IT services company offering web development, mobile apps, digital marketing, and custom software solutions.

## 📁 Project Structure

```
Adimire/
├── client/          # React frontend (port 3000)
│   ├── public/
│   └── src/
│       ├── components/   # Navbar, Footer, ServiceCard, HeroSection, ContactForm
│       ├── pages/        # Home, Services, ContactUs, Career
│       ├── services/     # API configuration (Axios)
│       └── styles/       # CSS files
├── server/          # Express backend (port 5000)
│   ├── config/      # Database connection
│   ├── controllers/ # Route handlers
│   ├── data/        # Seed data for services
│   ├── models/      # Mongoose schemas
│   └── routes/      # API routes
└── package.json     # Root scripts
```

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js** v18+
- **MongoDB** running locally on `mongodb://localhost:27017`

### Install Dependencies

```bash
# Install root dependencies
npm install

# Install both client and server dependencies
npm run install-all
```

### Run the Application

```bash
# Run both frontend and backend concurrently
npm run dev

# Or run them separately:
npm run server    # Backend on http://localhost:5000
npm run client    # Frontend on http://localhost:3000
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, services preview, why choose us, CTA |
| Services | `/services` | Full service cards with features |
| Contact Us | `/contact` | Contact form + company info |
| Career | `/career` | Job listings |

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all services |
| GET | `/api/services/:id` | Get single service |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/careers` | Get active job listings |
| POST | `/api/careers/apply` | Submit job application |

## 🎨 Services Offered

1. **Web & E-commerce** — Corporate websites, CMS, online stores, portals
2. **Applications** — Web apps, mobile apps, dashboards, APIs
3. **Digital Growth** — SEO, digital marketing, paid campaigns, analytics
4. **Creative & Brand** — UI/UX, brochures, brand assets, content
5. **Cloud & Support** — Hosting, SSL, maintenance, security, backups
6. **Custom Software** — Workflow automation, CRM/ERP, industry systems

## 📝 License

© 2024 Adimire Ent. All rights reserved.
