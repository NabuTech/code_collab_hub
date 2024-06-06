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
    db = client.db("authDB");
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
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Get user by id
app.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await db.collection("users").findOne({ _id: ObjectId(id) });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await db.collection("users").insertOne(newUser);
    res.json(result.ops[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Update user by id
app.put("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const result = await db
      .collection("users")
      .updateOne({ _id: ObjectId(id) }, { $set: updatedUser });
    if (result.modifiedCount == 0) {
      res.status(404).send("User not found");
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Delete user by id
app.delete("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db
      .collection("users")
      .deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount == 0) {
      res.status(404).send("User not found");
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

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
