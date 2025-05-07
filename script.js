function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", "foto de joão de camisa branca olhando pro nada")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute("alt", "foto de joão com cara de bravo dando belezinha")
  }
}
