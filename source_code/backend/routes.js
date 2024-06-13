const express = require("express");
const bodyParser = require("body-parser");
import { authMiddleware } from "./middleware/authentication";
import { requiresAuth } from "express-openid-connect";

const app = express();
port = 3000;

app.use(bodyParser.json());
app.use(authMiddleware);

// Get all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await db.collection("items").find({}).toArray();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Get item by id
app.get("/api/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await db.collection("items").findOne({ _id: ObjectId(id) });
    if (!item) {
      res.status(404).send("Item not found");
    } else {
      res.json(item);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Create a new item
app.post("/api/items", async (req, res) => {
  try {
    const newItem = req.body;
    const result = await db.collection("items").insertOne(newItem);
    res.json(result.ops[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Update item by id
app.put("/api/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedItem = req.body;
    const result = await db
      .collection("items")
      .updateOne({ _id: ObjectId(id) }, { $set: updatedItem });
    if (result.modifiedCount == 0) {
      res.status(404).send("Item not found");
    } else {
      res.json(updatedItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Delete item by id
app.delete("/api/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db
      .collection("items")
      .deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount == 0) {
      res.status(404).send("Item not found");
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Home page
app.get("/", async (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.collection("users").findOne({ email, password });
    if (!user) {
      res.status(401).send("Invalid email or password");
    } else {
      res.json(user);
      res.redirect(302, "/");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Logout
app.post("/api/logout", async (req, res) => {
  res.send("Logged out");
  res.redirect(302, "/login");
});

// Register
app.post("/api/register", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await db.collection("users").insertOne(newUser);
    res.json(result.ops[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Form
app.post("/api/form", async (req, res) => {
  try {
    const newForm = req.body;
    const result = await db.collection("forms").insertOne(newForm);
    res.json(result.ops[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// user profile
app.get("/api/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
