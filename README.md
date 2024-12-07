Project Overview:-
This project implements a simple Railway Management System API similar to IRCTC, designed to manage train bookings and user roles. It allows:
Admins to add new trains and manage train information.
Users to search trains, check seat availability, and book tickets.
The system is built with Node.js, Express.js, and MySQL, following RESTful API standards.

Features:-
User Authentication:

Register users (Admin or regular users).
Login and receive a token for subsequent authenticated requests.
Train Management:

Admins can add new trains, specify routes, and manage seating capacities.
Seat Booking:
Users can check availability of seats on trains between two stations.
Users can book seats and fetch booking details.

Concurrency Management:
Ensures that multiple users booking seats simultaneously do not overbook (uses MySQL transactions).
Role-Based Access Control:

Admin routes are protected with an API_KEY.
User routes require JWT-based authentication.
Tech Stack:-
Backend: Node.js, Express.js
Database: MySQL
Authentication: JWT (JSON Web Token)
Setup Instructions
1. Prerequisites
Node.js installed on your system.
MySQL installed and running.
2. Clone the Repository
git clone https://github.com/ujjawalkumar131/IRCTC_API_WorkIndia
cd IRCTC_API_WorkIndia
3. Install Dependencies
Run the following command to install required Node.js modules:
npm install
4. Configure Environment Variables:-
Create a .env file in the root directory:
touch .env
Add the following variables to the .env file:
env code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=irctc
JWT_SECRET=your_jwt_secret
API_KEY=your_admin_api_key

Replace:
your_mysql_password with your MySQL root password.
your_jwt_secret with a custom secret key for JWT.
your_admin_api_key with a secure, randomly generated API key.

5. Set Up the Database
Open the MySQL shell or a database management tool (e.g., MySQL Workbench).
Create the database:
sql code
CREATE DATABASE irctc;
Import the schema:
If there's a schema.sql file in the project, use it







   
   













