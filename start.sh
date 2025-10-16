#!/bin/bash

# Install dependencies for frontend and backend
cd frontend
npm install
npm run build
cd ..

cd backend
npm install
npm run build
cd ..

# Start backend in the background
cd backend
npm run start &

# Start frontend
cd ../frontend
npm start
