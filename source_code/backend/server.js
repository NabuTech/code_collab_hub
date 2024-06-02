// server.js
import { MongoClient, ObjectId } from "mongodb";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
port = 3000;
const url = process.env.connection_string;
const client = new MongoClient(url);

async function connect() {
  await client.connect((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
  console.log("Connected to MongoDB");
}

connect();

app.use(bodyParser.json());

// Get all users
app.get("/api/users", async (req, res) => {});

// Get user by id
app.get("/api/users/:id", async (req, res) => {});

// Create a new user
app.post("/api/users", async (req, res) => {});

// Update user by id
app.put("/api/users/:id", async (req, res) => {});

// Delete user by id
app.delete("/api/users/:id", async (req, res) => {});

// Get all profiles
app.get("/api/profiles", async (req, res) => {});

// Get profile by id
app.get("/api/profiles/:id", async (req, res) => {});

// Create a new profile
app.post("/api/profiles", async (req, res) => {});

// Update profile by id
app.put("/api/profiles/:id", async (req, res) => {});

// Delete profile by id
app.delete("/api/profiles/:id", async (req, res) => {});

// Get all projects
app.get("/api/projects", async (req, res) => {});

// Get project by id
app.get("/api/projects/:id", async (req, res) => {});

// Create a new project
app.post("/api/projects", async (req, res) => {});

// Update project by id
app.put("/api/projects/:id", async (req, res) => {});

// Delete project by id
app.delete("/api/projects/:id", async (req, res) => {});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
