import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import exp from "constants";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: false })); // url encoded
app.use(express.json()); //raw data

// app.use(express.static(path.join(__dirname, "public")));

//GET all posts
// app.get("/api/posts", (req, res) => {
//   res.json(posts);
// });

app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
