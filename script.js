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
    article.dataset.id = book.id;
    article.dataset.status = book.status;
    article.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>Status: ${book.status}</p>
      <label>% read: <input type="number" class="percent-input" value="${book.percent_read}" min="0" max="100"></label>
      <label>Rating: <input type="number" class="rating-input" value="${book.rating ?? ""}" min="1" max="5"></label>
      <button class="save-btn">Save</button>
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
list.addEventListener("click", async function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.parentElement;
    const id = card.dataset.id;
    await fetch(`/api/books/${id}`, { method: "DELETE" });
    card.remove();
  }

  if (event.target.classList.contains("save-btn")) {
    const card = event.target.parentElement;
    const id = card.dataset.id;
    const status = card.dataset.status;
    const percentRead = card.querySelector(".percent-input").value;
    const rating = card.querySelector(".rating-input").value;

    await fetch(`/api/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: status, percent_read: percentRead, rating: rating || null }),
    });
  }
});