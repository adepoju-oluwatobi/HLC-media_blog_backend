// Node.js server code
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

//routes
app.get("/api/data", (req, res) => {
  try {
    const data = { message: "Hello from the server!" };
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user", (req, res) => {
  try{
      const user = [{
        id: 1,
        title: "Cat drown of alcohol",
        des: "loreu ipium kkkkk.."
      },
      {
      id: 2,
      name: "Rachael",
      email: "missrachael41@gmail.com"
      }
    ];
    res.json(user);
  } catch (error) {
    res.status(500).json({error: "Cannot fetch user"});
  }
})

app.get("/api/announcement", (req,res) => {
 try {
   const post = [
     {
       id: 1,
       title: "School resumes on Monday",
       des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
     },
     {
       id: 2,
       name: "Rachael",
       email: "missrachael41@gmail.com",
     },
   ];
   res.json(post);
 } catch (error) {
   res.status(500).json({ error: "Cannot fetch user" });
 }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
