// Form Submission
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

  const list = document.querySelector("#book-list");

const article = document.createElement("article");
article.className = "entry";
article.innerHTML = `
  <h2>${newEntry.title}</h2>
  <p>${newEntry.author}</p>
  <p>Status: ${newEntry.status}</p>
`;

list.appendChild(article);
});
