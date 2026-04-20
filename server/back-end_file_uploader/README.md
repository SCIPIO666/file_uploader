# [FILE UPLOADER PROJECT]

[GOOGLE DRIVE CLONE FOR STRORING MEDIA FILES]

## 🛠️ Tech Stack

**Frontend:** React + Vite + TailwindCSS + React Hook Form + Zod
**Backend:** Node.js + Express + PostgreSQL + Prisma + Multer + Pino + Supabase
**Auth:** JWT + bcrypt
**Testing:** Vitest + Supertest + React Testing Library + Playwright

## 📦 Quick Start

```bash
# Backend
cd server/back-end_file_uploader
cp .env.example .env  # Add DATABASE_URL, JWT_SECRET
npm install
npx prisma migrate dev
npm run dev

# Frontend (new terminal)
cd ../frontend
cp .env.example .env  # Add VITE_API_URL=http://localhost:5000
npm install
npm run dev