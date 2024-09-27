import express from "express";
const router = express.Router();

let posts = [
  { id: 1, name: "Post 1" },
  { id: 2, name: "Post 2" },
  { id: 3, name: "Post 3" },
];

//GET posts with limit
router.get("/", (req, res) => {
  let limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//GET one post
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let post = posts.find((post) => post.id === id);
  if (post) {
    return res.status(200).json(post);
  }
  res.status(404).json({ message: "User not found" });
});

//Create a post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    name: req.body.name,
  };

  if (!newPost.name) {
    return res.status(400).json({ message: "please enter name" });
  }
  posts.push(newPost);

  res.status(200).json(posts);
});

//DELETE one post
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex !== -1) {
    return res.json(posts.splice(postIndex, 1));
  }
  res.send("User not found");
});

export default router;
