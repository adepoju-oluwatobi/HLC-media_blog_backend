// Import required modules
const express = require("express");
const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Define the port on which the server will run
const port = 3000;

const authRoutes = require("./routes/authRoutes");

// Import the router module from the specified path
const router = require("./routes/routes");

// Define a list of allowed origins for CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://drive.google.com/drive/folders/1C78fTZWnTJpRimj8PRlx6wSvelpg8KKU",
  "https://hlc-media-blog-frontend.vercel.app/",
];

// Enable CORS for the specified allowed origins
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Parse incoming requests with JSON payloads
app.use(express.json());

app.use("/auth", authRoutes);

// Use the imported router for handling routes
app.use("/", router);

// Serve static files (images) from the "public/images" directory
app.use("/images", express.static("public/images"));

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
