// Form Submission
const list = document.querySelector("#book-list");
const form = document.querySelector("form");




// API get books
async function loadBooks() {
  const response = await fetch("/api/books");
  const books = await response.json();

  books.forEach(function (book) {
    const article = document.createElement("article");
    article.className = "entry";
    article.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>Status: ${book.status}</p>
      <button class="delete-btn">Delete</button>
    `;
    list.appendChild(article);
  });
}

loadBooks();




// Submit form
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const newEntry = {
    title: data.get("title"),
    author: data.get("author"),
    type: data.get("type"),
    status: data.get("status"),
  };

  const response = await fetch("/api/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEntry),
  });

  const savedBook = await response.json();
    list.innerHTML = "";
    loadBooks();
});





// Delete Btn
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.parentElement;
    card.remove();
  }
});