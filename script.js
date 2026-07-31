// Form Submission
const list = document.querySelector("#book-list");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const newEntry = {
    title: data.get("title"),
    author: data.get("author"),
    type: data.get("type"),
    status: data.get("status"),
  };

  console.log(newEntry);


const article = document.createElement("article");
article.className = "entry";
article.innerHTML = `
  <h2>${newEntry.title}</h2>
  <p>${newEntry.author}</p>
  <p>Status: ${newEntry.status}</p>
  <button class="delete-btn">Delete</button>
`;

list.appendChild(article);
});


// Delete Btn
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const card = event.target.parentElement;
    card.remove();
  }
});