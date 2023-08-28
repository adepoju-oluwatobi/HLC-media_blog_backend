// Node.js server code
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

const allowedOrigins = [
  "http://localhost:5173",
  "https://drive.google.com",
  "https://another-domain.com",
];

app.use(cors({
  origin: allowedOrigins,
}));
app.use(express.json());


// Define a route to serve static files (images)
app.use('/images', express.static('public/images'));

const databaseDirectory = path.join(__dirname, "database");

app.get("/api/post", (req, res) => {
  try {
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));
    res.json(postData);
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch posts" });
  }
});

app.post("/api/post", (req, res) => {
  try {
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));

    const newPost = req.body; // Assuming the request body contains the new post data
    postData.push(newPost);

    fs.writeFileSync(postFilePath, JSON.stringify(postData, null, 2));

    res.status(201).json({ message: "Post added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Cannot add post" });
  }
});

//announcement API
app.get("/api/announcement", (req, res) => {
  try {
    const postFilePath = path.join(databaseDirectory, "announcement.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));
    res.json(postData);
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch posts" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
