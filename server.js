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

app.get("/api/books", function (req, res) {
  res.json(books);
});

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});


app.get("/api/books/:id", function (req, res) {
  const id = Number(req.params.id);
  const book = books.find(function (b) {
    return b.id === id;
  });
  res.json(book);
});



app.post("/api/books", function (req, res) {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    status: req.body.status,
  };

  books.push(newBook);
  res.json(newBook);
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