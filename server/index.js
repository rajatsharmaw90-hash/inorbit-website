import express from "express";
import bodyParser from "body-parser";
import {Client} from "pg";
import cors from "cors";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ urlencoded: true}))

// Connect DB
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

client.connect();


// API to save data
app.post("/contact", async (req, res) => {
  const  {first, last, email, mobile, enquiry}  = req.body;

  try {
    await db.query(
      "INSERT INTO contacts(first_name, last_name, email, mobile, enquiry) VALUES($1, $2, $3, $4, $5)",
      [first, last, email, mobile, enquiry]
    );

    res.json({ message: "Saved successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});