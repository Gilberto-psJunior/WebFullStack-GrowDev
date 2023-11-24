// class Animal {
//   constructor(
//     public nome: string,
//     public tipo: string
//   ) { }

//   emitirSom() {
//     console.log(`${this.nome} emitiu som.`)
//   }
// }

// class Cachorro extends Animal {
//   constructor(
//     nome: string,
//     private raca: string
//   ) {
//     super(nome, "Cachorro")
//   }

//   latir() {
//     console.log(`${this.nome} (${this.raca} está latindo.)`)
//   }
// }

// const meuCachorro = new Cachorro("Rex", "Labrador")

// meuCachorro.emitirSom()
// meuCachorro.latir()
// console.log(meuCachorro)

// class Aluno {
//   constructor(
//     private nome: string,
//     private idade: number
//   ) { }

//   apresentar() {
//     console.log(`Aluno ${this.nome}, Idade: ${this.idade}`)
//   }
// }

// class Turma {
//   constructor(
//     private nome: string,
//     private alunos: Aluno[] = []
//   ) { }

//   adicionarAluno(aluno: Aluno) {
//     this.alunos.push(aluno)
//   }

//   listarAlunos() {
//     console.log(`Alunos da turma ${this.nome}`)
//     this.alunos.forEach(aluno => {
//       aluno.apresentar()
//     })
//   }
// }

// const aluno1 = new Aluno('Monã', 20)
// const aluno2 = new Aluno('Gabriel', 21)

// const turmaA = new Turma('Turma 19 FullStack')

// turmaA.adicionarAluno(aluno1)
// turmaA.adicionarAluno(aluno2)

// console.log(turmaA)
// turmaA.listarAlunos()

// class Lutador {
//   constructor(
//     public nome: string,
//     public estilo: string
//   ) { }

//   treinar() {
//     console.log(`${this.nome} está treinando.`)
//   }
// }

// class Luta {
//   constructor(
//     public lutador1: Lutador,
//     public lutador2: Lutador
//   ) { }

//   iniciarLuta() {
//     console.log(`Começou a luta entre ${this.lutador1.nome} e ${this.lutador2.nome}!`)
//   }
// }

// const lutador1 = new Lutador("Pablo", "Karatê")
// const lutador2 = new Lutador("Marcos", "Karatê")

// lutador1.treinar()
// lutador2.treinar()

// const luta = new Luta(lutador1, lutador2)

// console.log(luta)

// luta.iniciarLuta()


// class Monitor {
//   constructor(public nome: string) { }

//   supervisionar() {
//     console.log(`${this.nome} está monitorando a turma!`)
//   }
// }

// class Turma {
//   constructor(
//     public nome: string,
//     public monitores: Monitor[] = []
//   ) { }

//   adicionarMonitor(monitor: Monitor) {
//     this.monitores.push(monitor)
//   }

//   mostrarMonitores() {
//     if (this.monitores.length === 0) {
//       console.log(`A turma ${this.nome} não possui monitores.`)
//     } else {
//       console.log(`Monitores da turma ${this.nome}:`)
//       this.monitores.forEach(monitor => {
//         console.log(monitor.nome)
//       })
//     }
//   }
// }

// const monitorA = new Monitor("Carla")
// const monitorB = new Monitor("Jean")

// const turmaA = new Turma('Turma 16 fullstack')
// turmaA.adicionarMonitor(monitorA)
// turmaA.adicionarMonitor(monitorB)

// console.log(turmaA)

