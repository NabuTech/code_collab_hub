const express = require("express");
const bodyParser = require("body-parser");

const app = express();
port = 3000;

app.use(bodyParser.json());

// Get all items
app.get("/api/items", async (req, res) => {});

// Get item by id
app.get("/api/items/:id", async (req, res) => {});

// Create a new item
app.post("/api/items", async (req, res) => {});

// Update item by id
app.put("/api/items/:id", async (req, res) => {});

// Delete item by id
app.delete("/api/items/:id", async (req, res) => {});

// Home page
app.get("/", async (req, res) => {});

// Login
app.post("/api/login", async (req, res) => {});

// Logout
app.post("/api/logout", async (req, res) => {});

// Register
app.post("/api/register", async (req, res) => {});

// Form
app.post("/api/form", async (req, res) => {});
