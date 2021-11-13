const toggles = document.querySelectorAll(".faq-toggle");
// const open = document.querySelectorAll(".fas fa-times");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// open.addEventListener("click", () => {
//   open.classList.add("active");
// });
