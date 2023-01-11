const cards = document.querySelectorAll(".cartao");
const icon = document.querySelectorAll(".icon");

icon.forEach((icon) => {
  icon.addEventListener("click", () => {
    const openedCard = document.querySelector(".selecionado");
    openedCard.classList.remove("selecionado");

    const selectedId = icon.attributes.id.value;

    const toOpenCard = document.getElementById(selectedId);
    toOpenCard.classList.add("selecionado");
  });
});
