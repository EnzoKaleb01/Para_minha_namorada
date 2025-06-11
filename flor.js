// Opcional: adicionar efeito de cintilação
const petals = document.querySelectorAll('.petal');
setInterval(() => {
  petals.forEach(petal => {
    const brightness = 0.7 + Math.random() * 0.3;
    petal.style.background = `radial-gradient(circle at center, rgba(255, 200, 255, ${brightness}), rgba(150, 200, 255, ${brightness - 0.4}))`;
  });
}, 1000);
