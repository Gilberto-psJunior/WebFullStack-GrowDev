const data = [
    {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
    },
    {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
    },
    {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
    },
    {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
    },
    {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
    },
    {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
    },
    {
      nome: 'Joice Castro da Silva',
      sexo: 'F',
      salario: 3350.25,
    },
  ];
  
  // Filtrar os objetos com sexo igual a 'M'
  const homens = data.filter(pessoa => pessoa.sexo === 'M');
  
  // Calcular a média dos salários dos homens usando reduce
  const somaSalariosMasculinos = homens.reduce((total, pessoa) => total + pessoa.salario, 0);
  const mediaSalariosMasculinos = somaSalariosMasculinos / homens.length;
  
  // Imprimir a média dos salários masculinos no console
  console.log('Média dos salários de todas as pessoas do sexo masculino:', mediaSalariosMasculinos);
  