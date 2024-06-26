# Worko.ai Backend Internship Assignment

## Overview

This project is part of the application process for a Backend Internship at Worko.ai. It includes setting up a Node.js project with Express, creating a RESTful API for user management, and connecting to a MongoDB database.

## Goals

1. Assess candidate's skills in writing backend services.
2. Evaluate candidate's self-learning and delivery management skills.

## Project Specifications

Worko.ai is developing a product to assist job seekers in requesting referrals from various companies. Additionally, users can request services like resume review, interview handholding, career guidance, and mock interviews.

## Milestones

### Backend API Setup

1. Create a Node.js project with MVC architecture:

   - Controller layer
   - Service layer
   - DAO layer
   - Models for CRUD operations
   - DTO for request and response
   - Validator framework

2. Create API endpoints for `/worko/user`:

   - `GET /worko/user` - List all users
   - `GET /worko/user/:userId` - Get user details
   - `POST /worko/user` - Create a new user
   - `PUT /worko/user/:userId` - Update user
   - `PATCH /worko/user/:userId` - Partially update user
   - `DELETE /worko/user/:userId` - Soft delete user in the database

3. Validate the following fields on API call:

   - Email
   - Zip Code
   - ID (in case of POST/PUT/DELETE)

4. Persist user information in the database:

   - Choose a NoSQL database (MongoDB is preferred)
   - Read DB config from environment variables

5. Write unit tests with at least 60% coverage.

6. Implement basic authentication for all APIs.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Joi

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/abhay2131/worko.ai_backend.git
   cd worko.ai_backend

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGO_URI=mongodb+srv://sharma727485:Thu8BT0AapeRlv9@cluster0.7jdlo15.mongodb.net/worko-ai?retryWrites=true&w=majority&appName=Cluster0
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

5. The server should now be running on `http://localhost:5000`.

### Directory Structure

```plaintext
├── config
│   └── dbConfig.js
├── controllers
│   └── userController.js
├── models
│   └── userModel.js
├── routes
│   └── userRoutes.js
├── services
│   └── userService.js
├── app.js
├── package.json
└── .env

```
