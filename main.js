const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__content__close");

button1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  console.log("close");
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
