const express = require("express");
const router = express.Router();

// Simulated user data for demo purposes
const users = [
  { username: "admin", password: "admin" },
  { username: "admin2", password: "admin2" },
];

// Route for user login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username and check the password
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Simulated successful login
    res.json({ message: "Login successful", user: user });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
