# Food-Delivery-App
A food delivery web application developed using the MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS). The frontend UI components were designed using ReactJS, the backend logic is developed using NodeJS, and the server is set up using ExpressJS. The database consisting of user data, restaurant data, food data, order data etc. are stored in MongoDB as JSON-like documents.

## Requirements  
Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- **npm**: npm is usually included with Node.js installation. You can verify if you have it by running `npm -v` in your terminal.

- **MongoDB**: This project uses MongoDB as the database. You can download and install it from [mongodb.com](https://www.mongodb.com/).

## Installation
Follow these steps to set up and run the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/drew0310/Food-Delivery-App.git
   cd Food-Delivery-App

2. Create a MongoDB database and update the database connection settings in `backend/config/config.env`.

3. Install backend dependencies:

   ```bash
   cd backend
   npm i --force

4. Install nodemon utility using npm:

     ```bash
     npm install -g nodemon

  `nodemon` is a utility that monitors for changes in your Node.js applications and automatically restarts the server when changes are detected. (If `npm start` is used to 
   run the backend, it is required to manually restart the server everytime changes are made in the application.)

   
5. Start the backend server (server.js file) using nodemon:

   ```bash
   nodemon run server

6. Go to frontend and install the frontend dependencies:

   ```bash
   cd ../frontend
   npm i --force

7. Start the frontend using npm:

   ```bash
   npm start

8. All set! Open your favourite browser and access the app at `http://localhost:3000`.


## Configuration 
In the `backend/config/config.env` file, you can find the various configuration settings for the app. Make sure to update these as needed for your specific setup.  

## Demo Video  

https://screenrec.com/share/kM2GrOoYW

