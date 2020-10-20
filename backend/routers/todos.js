const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const Todos = await Todo.find();
  res.send(Todos);
});
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    todo: req.body.todo,
    description: "abay",
  });
  todo.save();
  res.json(todo);
});
router.delete("/:id", async (req, res) => {
  const todo = await Todo.findOneAndDelete(req.params.id);
  res.send(todo);
});
module.exports = router;
