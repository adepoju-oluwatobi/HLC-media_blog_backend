const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

//oath to the database folder
const databaseDirectory = path.join(__dirname, "database");


//route to fetch post
router.get("/api/post", (req, res) => {
  try {
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));
    res.json(postData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot fetch posts" });
  }
});


//route to create a new post
router.post("/api/post", (req, res) => {
  try {
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));

    const newPost = req.body; // Assuming the request body contains the new post data
    postData.push(newPost);

    fs.writeFileSync(postFilePath, JSON.stringify(postData, null, 2));

    res.status(201).json({ message: "Post added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot add post" });
  }
});

// Route to fetch a specific post for editing
router.get("/api/post/:postId", (req, res) => {
  try {
    const postId = req.params.postId;
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));

    const post = postData.find((p) => p.id === postId);
    
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot fetch post for editing" });
  }
});

// Route to update a specific post
router.put("/api/post/:postId", (req, res) => {
  try {
    const postId = req.params.postId;
    const postFilePath = path.join(databaseDirectory, "post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));

    const updatedPostData = req.body;
    
    // Find the index of the post with the matching ID
    const postIndex = postData.findIndex((p) => p.id === postId);
    
    if (postIndex === -1) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Update the post data
    postData[postIndex] = {
      ...postData[postIndex],
      ...updatedPostData,
    };

    // Write the updated data back to the JSON file
    fs.writeFileSync(postFilePath, JSON.stringify(postData, null, 2));

    res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot update post" });
  }
});

//routes for announcements
router.get("/api/announcement", (req, res) => {
  try {
    const announcementFilePath = path.join(
      databaseDirectory,
      "announcement.json"
    );
    const announcementData = JSON.parse(
      fs.readFileSync(announcementFilePath, "utf-8")
    );
    res.json(announcementData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cannot fetch announcements" });
  }
});

module.exports = router;
