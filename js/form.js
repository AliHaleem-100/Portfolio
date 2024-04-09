form.addEventListener("submit", (e) => {
  e.preventDefault();
  receive_container.classList.add("show");
  form.reset();
  setTimeout(() => {
    receive_container.classList.remove("show");
  }, 2000);
  
});
