// Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  console.log(data.get("title"));
});