const poemas = [
  {
    id: 1,
    titulo: "Quando um sorriso em meu rosto tornou-se lágrimas",
    resumo: "Um poema sobre dor, marcas e sobrevivência."
  }
];

const container = document.getElementById("poemas");

poemas.forEach(poema => {
  container.innerHTML += `
    <div class="poema">
      <h2>${poema.titulo}</h2>
      <p>${poema.resumo}</p>
      <a href="poema.html?id=${poema.id}">
        Ler poema completo
      </a>
    </div>
  `;
});