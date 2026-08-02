const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hey Spook");
});

let books = [
  { id: 1, title: "Dune", author: "Frank Herbert", status: "finished" },
  { id: 2, title: "Harry Potter", author: "J.K. Rowling", status: "reading" },
];

app.get("/api/books", async function (req, res) {
  const result = await pool.query("SELECT * FROM books");
  res.json(result.rows);
});

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});


app.get("/api/books/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  res.json(result.rows[0]);
});



app.post("/api/books", async function (req, res) {
  const result = await pool.query(
    "INSERT INTO books (title, author, type, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [req.body.title, req.body.author, req.body.type, req.body.status]
  );
  res.json(result.rows[0]);
});



app.patch("/api/books/:id", function (req, res) {
  const id = Number(req.params.id);
  const book = books.find(function (b) {
    return b.id === id;
  });

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  book.status = req.body.status;

  res.json(book);
});



app.delete("/api/books/:id", function (req, res) {
  const id = Number(req.params.id);
  books = books.filter(function (b) {
    return b.id !== id;
  });
  res.json({ message: "Book deleted" });
});



const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reading_log",
  password: "6512",
  port: 5432,
});