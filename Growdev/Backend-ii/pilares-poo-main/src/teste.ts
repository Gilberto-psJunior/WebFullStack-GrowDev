// class Carro {
//   marca: string
//   modelo: string
//   ano: number

//   constructor(marca: string, modelo: string, ano: number) {
//     this.marca = marca
//     this.modelo = modelo
//     this.ano = ano
//   }

//   exibirInformacoes(): void {
//     console.log(`Este é um ${this.marca} ${this.modelo} do ano ${this.ano}`)
//   }
// }

// const meuCarro = new Carro('Toyota', 'Corolla', 2022)

// console.log(meuCarro)
// meuCarro.exibirInformacoes()

// class Exemplo {
//   constructor(public variavelPublica: string, private variavelPrivada: number) { }

//   mostrarDetalhes(): void {
//     console.log(`Variável Pública: ${this.variavelPublica}`)
//     console.log(`Variável Privada: ${this.variavelPrivada}`)
//   }
// }

// const instancia = new Exemplo('Olá', 40)
// console.log(instancia.variavelPublica)
// console.log(instancia.variavelPrivada)

// instancia.mostrarDetalhes()

class ContaBancaria {
  constructor(private _valor: number) { }

  get valor(): number {
    return this._valor
  }

  set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor * 2
    } else {
      console.log('O valor não pode ser negativo.')
    }
  }
}

const conta = new ContaBancaria(10)
console.log(conta.valor = 30)

// conta.valor = 20

console.log(conta.valor)

// conta.valor = -4
// console.log(conta.valor)

// abstract class Animal {
//   constructor(protected nome: string, protected tipo: string) { }

//   // emitirSom(): void {
//   //   console.log("Som genérico emitido")
//   // }

//   abstract emitirSom(): void
// }

// class Cachorro extends Animal {
//   constructor(nome: string, private raca: string) {
//     super(nome, "Cachorro")
//   }

//   emitirSom(): void {
//     console.log("Au, au!")
//   }
// }

// class Galinha extends Animal {
//   constructor(nome: string, private corPena: string) {
//     super(nome, 'Galinha')
//   }

//   emitirSom(): void {
//     console.log('Cocoricó!')
//   }
// }

// // const animal = new Animal("Mimoso", "Gato")
// // console.log(animal)

// const cachorro = new Cachorro("Totó", "Poodle")
// console.log(cachorro)
// cachorro.emitirSom()
// // cachorro.latir()

// const galinha = new Galinha("Pintadinha", "Azul")
// console.log(galinha)
// galinha.emitirSom()
// // galinha.cacarejar()






