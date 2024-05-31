// server.js
import { MongoClient } from "mongodb";

const url = process.env.connection_string;
const client = new MongoClient(url);

async function connect() {
  await client.connect();
  console.log("Connected to MongoDB");
}
