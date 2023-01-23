const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (name.value && email.value && message.value)
  {
    submitBtn.innerHTML = "Sending...";
    submitBtn.setAttribute("disabled", "disabled");
    const data = { name: name.value, email: email.value, message: message.value };
    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
    "Content-Type": "application/json"
    }
    })
    .then(response => response.json())
    .then(data => {
    setTimeout(() => {
    submitBtn.innerHTML = "Sent!";
    submitBtn.removeAttribute("disabled");
    form.reset();
    }, 1000);
    })
    .catch(error => {
    console.error("Error:", error);
    submitBtn.innerHTML = "Try Again";
    submitBtn.removeAttribute("disabled");
    });
    }
    });
