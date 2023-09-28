// salvar na variável os elementos que vamos manipular
const contador = document.getElementById("contador")
const status = document.getElementById("status")
const diminuidor = document.getElementById("diminuidor")

let numPresenca = 0
const minPresenca = 5

contador.innerText = numPresenca

function registrarPresenca() {
  numPresenca++
  contador.innerText = numPresenca
  if (numPresenca >= minPresenca) {
    status.innerText = "A aula pode começar"
    status.classList.add("pode-comecar")
  } else {
    status.innerText = "Aguarde por mais presenças"
    status.classList.add("aguardando")
  }
}

// function diminuirPresenca() {
//   if (numPresenca > 0) {
//     numPresenca--
//     contador.innerText = numPresenca
//     if (numPresenca < 5) {
//       status.innerText = "Aguarde por mais presenças"
//       status.classList.add("pode-comecar")
//     }
//   } else {
//     numPresenca = 0;
//     contador.innerText = numPresenca
//     status.innerText = "Aguarde por mais presenças"
//     status.classList.add("pode-comecar")
//   }
// }



