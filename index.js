// Node.js server code
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());


const dataDirectory = path.join(__dirname, "data");

app.get("/api/post", (req, res) => {
  try {
    const postFilePath = path.join(dataDirectory, "./database/post.json");
    const postData = JSON.parse(fs.readFileSync(postFilePath, "utf-8"));
    res.json(postData);
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch posts" });
  }
});

//routes
// app.get("/api/post", (req, res) => {
//   try{
//       const post = [{
//         id: 1,
//         title: "Cat drown of alcohol",
//         des: "loreu ipium kkkkk.."
//       },
//     ];
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({error: "Cannot fetch user"});
//   }
// })

//announcement API
app.get("/api/announcement", (req,res) => {
 try {
   const announcement = [
     {
       id: 1,
       title: "School resumes on Monday",
       des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
     },
   ];
   res.json(announcement);
 } catch (error) {
   res.status(500).json({ error: "Cannot fetch user" });
 }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
