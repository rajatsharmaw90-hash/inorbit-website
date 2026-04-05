import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg"; // Common fix for ES modules


const { Client } = pkg;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect DB
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err));

// API to save data
app.post("/contact", async (req, res) => {
  const { first, last, email, mobile, enquiry } = req.body;

  console.log(req.body);

  try {
    await client.query(
      "INSERT INTO contacts(first_name, last_name, email, mobile, enquiry) VALUES($1, $2, $3, $4, $5)",
      [first, last, email, mobile, enquiry]
    );

    res.json({ message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

// Test route
app.get("/", (req, res) => res.send("Server is running"));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});