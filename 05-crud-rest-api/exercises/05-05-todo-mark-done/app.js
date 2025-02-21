import express from "express";
import {
  findTodo,
  listTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../05-99-model/todo.mjs";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  const todos = listTodo();
  res.json({ data: todos });
});

app.get("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const todo = findTodo(todoId);

  if (!todo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: todo });
});

app.post("/todos", (req, res) => {
  const { title, description } = req.body;

  if (title.length > 30) {
    res.status(400).json({ error: { message: "title too long" } });
    return;
  }

  if (description.length > 100) {
    res.status(400).json({ error: { message: "description too long" } });
    return;
  }

  const todo = createTodo({
    title,
    description,
  });

  res.json({ data: todo });
});

app.put("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const attributes = req.body;
  const updatedTodo = updateTodo(todoId, attributes);

  if (!updatedTodo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: updatedTodo });
});

app.patch("/todos/:todoId", (req, res) => {
  /**
   * 1. Get the `todoId` from req.params
   * 2. Parse the `todoId` to integer
   * 3. Read `isDone` from `req.body`
   * 4. Call `updateTodo` with `todoId` and `isDone` attribute
   * 5. If `updateTodo` returns `undefined`, return 404
   * 6. Else, return the updated todo
   */
  throw new Error("Not implemented");
});

app.delete("/todos/:todoId", (req, res) => {
  const todoId = parseInt(req.params.todoId, 10);
  const deletedTodo = deleteTodo(todoId);

  if (!deletedTodo) {
    res.status(404).json({ error: { message: "todo not found" } });
    return;
  }

  res.json({ data: deletedTodo });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
