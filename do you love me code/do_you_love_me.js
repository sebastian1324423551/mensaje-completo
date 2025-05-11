const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Cambiado de .result-container.yes a .result-container
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const mothersDayMessage = document.querySelector(".mothers-day-message"); // Añadido

// change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex"; // Cambiado de "inherit" a "flex" para mejor visualización
    gifResult.play();
    
    // Mostrar mensaje después de 1 segundo
    setTimeout(() => {
      mothersDayMessage.style.display = "block";
    }, 1000);
  }, 3000);
});
