//ATiVIDADE 1

// Vamos modelar uma classe Livro que representará informações básicas sobre um livro.

// Crie uma classe chamada Livro com as seguintes propriedades:
// titulo (string): Título do livro.
// autor (string): Nome do autor do livro.
// anoPublicacao (number): Ano de publicação do livro.
// Adicione um método chamado mostrarDetalhes à classe. Este método deve imprimir no console uma mensagem formatada com os detalhes do livro, como "O livro 'Título' escrito por Autor foi publicado em Ano."
// Crie duas instâncias da classe Livro e atribua valores diferentes às suas propriedades.
// Chame o método mostrarDetalhes para cada instância, verificando se as informações são exibidas corretamente.

//RESPOSTA:

class Livro {
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    mostrarDetalhes(): void {
        console.log(`O livro ${this.titulo} escrito por ${this.autor} foi publicado em ${this.anoPublicacao}`);
    }
}

console.log("-------- ATIVIDADE 1 --------");


const livro1 = new Livro("Título 1", "Jean", 2020)
livro1.mostrarDetalhes()

const livro2 = new Livro("Título 2", "Rafael", 2018)
livro2.mostrarDetalhes()


//ATiVIDADE 2

// Crie uma classe ContaBancaria com propriedades titular, saldo e um método sacar que reduza o saldo. Adicione um construtor que aceite o titular e um saldo inicial (com um saldo padrão de 0). Crie uma instância da ContaBancaria, realize alguns saques e exiba o saldo final.

// RESPOSTA:

class ContaBancaria {
    titular: string
    saldo: number

    constructor(titular: string, saldo?: number) {
        this.titular = titular
        this.saldo = saldo > 0 ? saldo : 0
    }

    sacar(saque: number): void {
        if (saque > this.saldo) {
            console.log(`Saldo insuficiente, seu saldo atual é de ${this.saldo}`);
        } else if (saque === 0 || saque < 0) {
            console.log("Valor de saque inválido!")
        } else {
            this.saldo -= saque
            console.log(this.saldo)
        }
    }
}

console.log("-------- ATIVIDADE 2 --------");

const titular1 = new ContaBancaria("Jean")
titular1.sacar(1)


// Atividades extras: 

// Crie uma classe Pessoa com as propriedades nome e idade. Adicione um método mostrarDetalhes que exiba as informações da pessoa.

// Expanda a classe Pessoa adicionando um método que calcula e retorna a idade em dias.

// RESPOSTA:

console.log("ATIVIDADE EXTRA");

class Pessoa {
    nome: string
    idade: number

    mostrarDetalhes(): void {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade} anos`)
    }

    transformaIdade(): void {
        console.log(`A idade de ${this.nome} em dias é ${this.idade * 365}`)
    }
}

const pessoa1 = new Pessoa()
pessoa1.nome = "Jean"
pessoa1.idade = 21
pessoa1.mostrarDetalhes()
pessoa1.transformaIdade()


// Crie uma classe Carro com um construtor que aceite marca e modelo como parâmetros. Adicione uma propriedade ano ao construtor com um valor padrão. Crie uma instância do Carro sem passar o ano, e outra passando o ano.

// Adicione uma propriedade opcional cor à classe Carro. Crie instâncias do Carro com e sem a propriedade cor.

// RESPOSTA:

class Carro {
    marca: string
    modelo: string
    ano: number
    cor: string

    constructor(marca: string, modelo: string, ano?: number, cor?: string) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano > 0 ? ano : 2018
        this.cor = cor ? this.cor = cor : this.cor = "não informada"
    }

    mostrarDetalhes(): void {
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano} | Cor: ${this.cor}`)
    }
}

console.log("-------- ATIVIDADE EXTRA 2 --------");

const carro1 = new Carro("Tesla", "S")
carro1.mostrarDetalhes()
const carro2 = new Carro("Tesla", "X", 2020, "Preto")
carro2.mostrarDetalhes()