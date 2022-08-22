const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
database = null;
const databasePath = path.join(__dirname, "todoApplication.db");

const installAndRunning = async (request, response) => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, async (request, response) => {
      console.log("server is running at http://localhost/3000/");
    });
  } catch (error) {
    console.log(`dbError:${error.message}`);
    process.exit(1);
  }
};

installAndRunning();

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        status='${status}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        priority='${priority}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        status='${status}' AND priority='${priority}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        todo LIKE "%Buy%"`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        category='${category}' AND status='${status}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        category='${category}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        category='${category}' AND priority='${priority}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

app.get("/todo/:todoId/", async (request, response) => {
  const { todoId } = request.params;
  const todoDetails = request.body;
  const { id, todo, category, priority, status, due_date } = todoDetails;
  const getTodoQuery = `
    SELECT
        *
    FROM
        todo
    WHERE 
        id='${todoId}'`;
  const todoArray = await database.all(getTodoQuery);
  response.send(todoArray);
});

module.exports = app;
