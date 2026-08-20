# Hospital Appointment System — ITUE301 Practical Exam (Set A)

## Project
A Hospital Appointment System built with React (frontend), Express.js (backend), and MongoDB with Mongoose (database).

## Frontend Setup & Run
```
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173

## Backend Setup & Run
```
cd backend
npm install
npm run dev
```
Runs on http://localhost:5000

## MongoDB Setup
1. Install MongoDB Community Server and ensure it's running locally as a service.
2. Local connection string used: `mongodb://localhost:27017/hospitalDB`
3. No manual database creation needed — it's created automatically on first write.

## Required Environment Variables
Create a `.env` file inside `backend/` with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
See `.env.example` for reference.

## API Endpoints
- GET  /api/v1/doctors
- GET  /api/v1/appointments
- POST /api/v1/appointments
- POST /api/v1/mongo-test/seed (demonstrates schema working)
- POST /api/v1/mongo-test/validation-fail (demonstrates validation failure)