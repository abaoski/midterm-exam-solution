//question 4
const express = require('express');
const app = express();

app.use(express.json());

let todos = [];


app.get('/todos', (req, res) => {
  res.json(todos);
});


app.get('/todos/:name', (req, res) => {
  const { name } = req.params;
  const todo = todos.find(t => t.name === name);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  res.json(todo);
});


app.post('/todos', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Both name and description are required.' });
  }

 
  const existingTodo = todos.find(t => t.name === name);
  if (existingTodo) {
    return res.status(400).json({ message: 'Todo with this name already exists.' });
  }

  const newTodo = { name, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:name', (req, res) => {
  const { name } = req.params;
  const { description } = req.body;

  const todo = todos.find(t => t.name === name);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  todo.description = description || todo.description;

  res.json(todo);
});

app.delete('/todos/:name', (req, res) => {
  const { name } = req.params;
  const todoIndex = todos.findIndex(t => t.name === name);

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  const deletedTodo = todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted', todo: deletedTodo[0] });
});

app.listen(300, () => {
  console.log(`Server is running on http://localhost:3000`);
});
