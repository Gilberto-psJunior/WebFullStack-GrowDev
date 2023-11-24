/*                   Exercicio 1
 1. Crie uma função que receba 2 números e retorne um objeto
 contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.
*/


function calculaMedia(n1:number,n2:number) {

  let media :number=(n1+n2)/2;
  
  const aprovado = media >= 6;
  return {
    media: media,
    aprovado: aprovado
  };

}



console.log( calculaMedia(8,6) )


/*           exercicio 2
Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
*/

interface NotaEPeso {
  nota: number;
  peso: number;
}

function calcularMediaPonderada(notasEPesos: NotaEPeso[]): number | string {
  
  if (notasEPesos.length === 0) {
      return "A lista está vazia, não é possível calcular a média ponderada.";
  }

  
  let somaNotasPonderadas = 0;
  let somaPesos = 0;

  
  for (let i = 0; i < notasEPesos.length; i++) {
      const { nota, peso } = notasEPesos[i];

     
      somaNotasPonderadas += nota * peso;

    
      somaPesos += peso;
  }

  const mediaPonderada = somaNotasPonderadas / somaPesos;

  
  return mediaPonderada;
}


const listaDeNotasEPesos: NotaEPeso[] = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 },
  { nota: 9, peso: 1 }
];

const resultado: number | string = calcularMediaPonderada(listaDeNotasEPesos);
console.log("Média Ponderada:", resultado);


/*                  exercicio 3
3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.

*/

interface Transacao {
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface Carteira {
  saldo: number;
  transacoes: Transacao[];
}

function adicionarTransacao(carteira: Carteira, valor: number, tipo: 'entrada' | 'saida'): void {
  if (tipo === 'saida' && valor > carteira.saldo) {
      throw new Error("Saldo insuficiente para esta transação de saída.");
  }

  const transacao: Transacao = { valor, tipo };
  carteira.transacoes.push(transacao);

  if (tipo === 'entrada') {
      carteira.saldo += valor;
  } else {
      carteira.saldo -= valor;
  }
}


const minhaCarteira: Carteira = {
  saldo: 1000,
  transacoes: []
};

try {
  adicionarTransacao(minhaCarteira, 500, 'entrada');
  adicionarTransacao(minhaCarteira, 200, 'entrada');
  adicionarTransacao(minhaCarteira, 50, 'saida');
  adicionarTransacao(minhaCarteira, 300, 'saida');
} catch (error) {
  console.error(error.message);
}


console.log("Saldo:", minhaCarteira.saldo);
console.log("Transações:", minhaCarteira.transacoes);

/*
Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.
*/



interface Produto {
  id: number;
  nome: string;
  preco: number;
}


class GerenciadorDeProdutos {
  private produtos: Produto[] = [];
  private proximoId: number = 1;

  
  cadastrarProduto(nome: string, preco: number): void {
      const novoProduto: Produto = {
          id: this.proximoId,
          nome,
          preco
      };

      this.produtos.push(novoProduto);
      this.proximoId++;
  }

  
  listarProdutos(): Produto[] {
      return this.produtos;
  }

  
  excluirProduto(id: number): void {
      this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}


const gerenciador = new GerenciadorDeProdutos();


gerenciador.cadastrarProduto("Produto A", 50);
gerenciador.cadastrarProduto("Produto B", 30);


console.log("Lista de Produtos:");
console.log(gerenciador.listarProdutos());


const idParaExcluir = 1;
gerenciador.excluirProduto(idParaExcluir);


console.log("\nLista de Produtos após Exclusão:");
console.log(gerenciador.listarProdutos());

/*
Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”

*/ 

interface User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
}


function mostrarInformacoesUsuario(usuario: User): string {
  const salarioFormatado = usuario.salario ? `R$ ${usuario.salario}` : 'N/A';

  return `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salarioFormatado}`;
}


const usuarioComSalario: User = {
  nome: "Daphne",
  idade: 23,
  ocupacao: "analista de TI",
  salario: 1000
};

const usuarioSemSalario: User = {
  nome: "Daphne",
  idade: 23,
  ocupacao: "analista de TI"
};


console.log(mostrarInformacoesUsuario(usuarioComSalario));
console.log(mostrarInformacoesUsuario(usuarioSemSalario));
