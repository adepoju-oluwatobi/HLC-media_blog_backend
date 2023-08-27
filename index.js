// Node.js server code
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

app.use(cors());

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
