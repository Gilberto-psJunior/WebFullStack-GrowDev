import  { GradeAndWeight, Wallet, Product, ProductCRD, User, Director, CompanyMember }  from "./types"

// Exercícios de fixação

// Atividade 1:

// Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

function isApproved(grade1: number, grade2: number): object {
    const average = (grade1 + grade2) / 2
    return { average, aproved: average >= 6}
}

console.log("------- Atividade 1 -------")
console.log(isApproved(6, 5))



// Atividade 2:

// Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

function weightedArithmetic(gradesAndWeightsList: GradeAndWeight[]): void {
    let dividend: number = 0
    let divisor: number = 0
    
    gradesAndWeightsList.forEach(gradeAndWeight => {
        dividend += gradeAndWeight.grade * gradeAndWeight.weight
        divisor += gradeAndWeight.weight
    })

    console.log("Average = " + dividend / divisor)
}

console.log("------- Atividade 2 -------")
weightedArithmetic([
    {
        grade: 8,
        weight: 2
    },
    {
        grade: 10,
        weight: 6
    },
    {
        grade: 5,
        weight: 2
    },
])



// Atividade 3:

// Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

function walletDraftAndDeposit(wallet: Wallet): string {
    if (wallet.deposit) {
        wallet.balance += wallet.deposit
        return `Depósito executado com êxito. Seu saldo é atual é de ${wallet.balance} reais.`
    } else if (wallet.draft) {
        if (wallet.draft > wallet.balance) {
            return `Saldo insuficiente. Seu saldo é atual é de ${wallet.balance} reais.`
        } else {
            wallet.balance -= wallet.draft
            return `Saque executado com êxito. Seu saldo é atual é de ${wallet.balance} reais.`
        }
    }
}

console.log("------- Atividade 3 -------")
console.log(walletDraftAndDeposit({
    balance: 0,
    draft: 2000
}))
console.log(walletDraftAndDeposit({
    balance: 0,
    deposit: 2000
}))
console.log(walletDraftAndDeposit({
    balance: 0,
    draft: 1500
}))



// Atividade 4:

// Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

const listProducts: Product[] = [] 

function productCRD(action: ProductCRD): string {
    if (action.register) {
        listProducts.push(action.register)
        return "Produto cadastrado com êxito"
    } else if (action.listProducts) {
        let message: string = ""
        listProducts.forEach(product => {
            message += `Nome do produto: ${product.productName} - Preço: ${product.price} reais | `
        })
        return message
    } else if (action.deleteProduct) {
        for (let index: number = 0; index < listProducts.length; index++) {
            if (listProducts[index].productName === action.deleteProduct.productName && listProducts[index].price === action.deleteProduct.price) {
                listProducts.splice(index, 1)
                return `Produto excluído com êxito`
            } 
        }
        return "Produto não encontrado"
    }
}

console.log("------- Atividade 4 -------")
console.log(productCRD(
    {
        register: {
            productName: "Laranja",
            price: 2
        }
    }
))
console.log(productCRD(
    {
        register: {
            productName: "Mamão",
            price: 7
        }
    }
))
console.log(productCRD({listProducts: true}))
console.log(productCRD(
    {
        deleteProduct: {
            productName: "Laranja",
            price: 2
        }
    }
))
console.log(productCRD({listProducts: true}))



// Atividade 5:

// Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

function showUserInfo(user: User): void {
    console.log(`${user.name}, ${user.age} anos, ${user.occupation}, salário R$ ${user.wage ? user.wage : "N/A"}`)
}

console.log("------- Atividade 5 -------")
showUserInfo(
    {
        name: "Daphne",
        age: 23,
        occupation: "Analista de TI",
        wage: 1000
    }
)
showUserInfo(
    {
        name: "Jean",
        age: 21,
        occupation: "Desenvolvedor web Full Stack"
    }
)


// Atividade 6:

// Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

function showDirectorInfo(director: Director): void {
    console.log(`Diretor(a) ${director.name}, ${director.age} anos, ${director.occupation}, comissão nível: ${director.commission}, salário R$ ${director.wage ? director.wage : "N/A"}`)
}

console.log("------- Atividade 6 -------")
showDirectorInfo(
    {
        name: "Daphne",
        age: 23,
        occupation: "Analista de TI",
        wage: 1000,
        commission: 3
    }
)
showDirectorInfo(
    {
        name: "Jean",
        age: 21,
        occupation: "Desenvolvedor web Full Stack",
        commission: 5
    }
)



// Atividade 7:

// Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

const companyMemberList: CompanyMember[] = [
    {
        name: "Daphne",
        age: 23,
        occupation: "Analista de TI",
        wage: 1000,
        commission: 3
    },
    {
        name: "Jean",
        age: 21,
        occupation: "Desenvolvedor web Full Stack",
    }
]

function showCompanyMembersInfo(mebers: CompanyMember[]): void {
    mebers.forEach(member => {
        if ("commission" in member) {
            console.log(`Diretor(a) ${member.name}, ${member.age} anos, ${member.occupation}, comissão nível: ${member.commission}, salário R$ ${member.wage ? member.wage : "N/A"}`)
        } else {
            console.log(`${member.name}, ${member.age} anos, ${member.occupation}, salário R$ ${member.wage ? member.wage : "N/A"}`)
        }
    })
}

console.log("------- Atividade 7 -------")
showCompanyMembersInfo(companyMemberList)