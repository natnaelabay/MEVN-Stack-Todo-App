const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const Todos = await  Todo.find()
  res.send(Todos)
});

router.post("/", async (req, res) => {
  const todo = await Todo.create({
    todo: "natnale",
    description: "abay",
  });
  todo.save()
  res.json(todo);
});

module.exports = router;
