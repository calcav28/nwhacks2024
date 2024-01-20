const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 6969;

app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function connectDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB database.");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.listen(port, () => {
  // perform a database connection when server starts
  connectDatabase().catch(console.dir);
  console.log(`Server is running on port: ${port}`);
});