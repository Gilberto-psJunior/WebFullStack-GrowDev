let pessoas=[
{
    nome:"Ana",
    idade:17
    ,moradia:"apartamento"
},

{
    nome:"Maria",
    idade:32
    ,moradia:"apartamento" 
},
{
    nome:"Braga",
    idade:51
    ,moradia:"casa"
}
];
for(let pessoa of pessoas){
    for(nome of pessoa.nome){
        console.log(nome)
    }
}