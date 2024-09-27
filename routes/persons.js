import express from "express";
const router = express.Router();

let persons = [
  { id: 1, name: "John" },
  { id: 2, name: "Joey" },
  { id: 3, name: "James" },
];

//Get persons info with limit or all user info fetch
router.get("/", (req, res) => {
  let limit = req.query.limit;

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).send(persons.slice(0, limit));
  }
  res.status(200).json(persons);
});

//Get single person info by id
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let person = persons.find((person) => person.id === id);

  if (person) {
    return res.status(200).json(person);
  }
  return res.status(404).json({ message: "User not found" });
});

//POST one person info in api
router.post("/", (req, res) => {
  let newPost = {
    id: persons.length + 1,
    name: req.body.name,
  };

  if (!newPost.name) {
    return res.status(400).json({ message: "Please enter name" });
  }

  persons.push(newPost);
  res.status(200).json(persons);
});

export default router;
