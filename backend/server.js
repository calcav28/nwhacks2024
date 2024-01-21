// Import necessary modules
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Import routes
const eventsRoute = require('./routes/events');

// Load environment variables
require("dotenv").config({ path: "./config.env" });

// Setup Express
app.use(cors());
app.use(express.json());

// Database connection setup
const db = new MongoClient(process.env.URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Bind db to req param
let dbClient;

async function connectDatabase() {
    try {
        // Connect to database
        await db.connect();
        dbClient = db.db("eventsData");
        console.log("Connected to MongoDB database.");
    } catch (error) {
        console.error("Could not connect to database: ", error);
    }
}

// Middleware to attach the client to the request
app.use((req, res, next) => {
  req.mongoClient = dbClient;
  next();
});

// Routes
app.use('/events', eventsRoute);

// Start the server and connect to the database
const port = process.env.PORT;
app.listen(port, () => {
    connectDatabase().catch(console.error);
    console.log(`Server is running on port: ${port}`);
});