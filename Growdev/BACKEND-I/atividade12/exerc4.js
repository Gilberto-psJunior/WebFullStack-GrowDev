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
  
  const somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0);
  
console.log(somaSalarios.toFixed(2))
  const mediasalario =somaSalarios/7;
  const pessoas =data.filter(pessoa =>pessoa.nome)
  console.log("a media é",mediasalario.toFixed(2))