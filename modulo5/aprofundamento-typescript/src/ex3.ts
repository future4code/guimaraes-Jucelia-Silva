type post = {
    autor:string,
    texto:string
}

const posts:post[] = [
  {
    autor: "Augusto Cury",
    texto: "Ansiedade"
  },
  {
    autor: "Nicholas Sparks",
    texto: "No Seu Olhar"
  },
  {
    autor: "Lispector",
    texto: "A Hora Da Estrela"
  },
  {
    autor: "E Não Sobrou Nenhum",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Bernard Cornwell",
    texto: "O Último Reino"
  }
]

//b
function buscarPostsPorAutor(posts:post[], autorInformado:string):post[] {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

console.log(buscarPostsPorAutor(posts, "Bernard Cornwell"));