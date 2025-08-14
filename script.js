function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se river light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "Foto caricatural de Victor Zoch, estilizada")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "Foto de Victor Zoch usando terno, com fundo cinza")
  }
}
