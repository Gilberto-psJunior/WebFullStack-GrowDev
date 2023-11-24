// Tipagem

// Tipagem dinâmica - possível atribuir multiplos tipos a uma varíavel.

// Tipagem estática - possível atribuir apenas um tipo a uma varíavel.

// Os principais tipos disponíveis em Typescript são listados abaixo:

let valor1: boolean // true ou false
let valor2: string // Caracteres e textos
let valor3: number // Números (inteiros ou decimais)
let valor4: null // Valor nulo (usado para representar uma ausência intencional de valor)
let valor5: undefined // Valor nulo (quando não há valor inicializado ou retornado)
let valor6: any // Qualquer tipo (tipo dinâmico)
let valor7: void // Valor vazio (usado para tipar funções que não retornam valor)



// Funções

// No contexto das funções e métodos de classes, é possível adicionar tipagem estática para parâmetros de entrada e também para o retorno usando o Typescript.

// Função de recebe dois números e retorna outro número
function soma(x: number, y: number): number {
    return x + y
}

// Função que recebe dois números e retorna uma string
function multip(x: number, y: number): string {
    return `A multiplicação é ${x / y}`
}

// Função que recebe um texto e retorna um boolean
function textoGrande(texto: string): boolean {
    return texto.length > 10
}

// Função que recebe um texto e retorna vazio
function saudacao(mensagem: string): void {
    console.log(mensagem)
}



// Arrow Functions

const soma2 = (x: number, y: number): number => {
    return x + y
}

// A tipagem de funções é muito útil para a criação de contratos: requisitos de parâmetros e retornos de funções que devem ser implementadas posteriormente.

// Contrato
let concatenaStrings: (t1: string, t2: string) => string

// Implementação
concatenaStrings = (t1: string, t2: string) => {
    return t1 + t2
}



// Arrays

let textos: string[] = ["Web", "Full", "Stack"]
let numeros: number[] = [1, 2, 3]
let tupla: any[] = [1, "Growdev", true]
let textosArray: Array<string> = []
let numerosArray: Array<number> = []
let tuplaArray: Array<any> = []
let array: (string | number | boolean)[] = ["Web", 2, false]



// Objetos

let nome: string = "Jean"
let idade: number = 21

let dados: object = {
    nome,
    idade
}



// Type personalizados

type Categoria = "back-end" | "front-end"

function pintarCategorias(categoria: Categoria) {
    if(categoria === "back-end") console.log("vermelho");
    else if(categoria === "front-end") console.log("azul")
}

// Objeto com type (não recomendado)
type TypeProduct = {
    nome: string
    preco: number
}



// Interface 

// Objeto com Interface (recomendado)
interface TypeCarro {
    marca: string
    modelo: string
    ano: number
}

// Objeto com propriedade opcional
interface Pessoa1 {
    nome: string
    idade?: number // opcional
}

interface Telefone {
    telefone: string
}

// Extends

interface UsuarioCompleto1 extends Pessoa1, Telefone {
    email: string
}

const usuarios: UsuarioCompleto1[] = [
    { 
        email: "@gmail.com", 
        nome: "Jean", idade: 21, 
        telefone: "51 9999999"
    } 
]


// Função com mais de um tipo personalizado como parâmetro

type Produto = {
    preco: number
}

type Moto = {
    rodas: number
    marca: string
}

function produtoMoto(dados: Produto & Moto) {
    console.log(dados.marca, dados.preco, dados.rodas)
}

produtoMoto({
    preco: 3000, 
    rodas: 2, 
    marca: "biz"
})