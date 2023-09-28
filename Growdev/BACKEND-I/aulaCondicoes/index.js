let nota1 = prompt("digite primeira nota");
let nota2 = prompt("digite segunda nota")
let nota3 = prompt("digite terceira nota"); 

nota1 = +nota1;
nota2 = +nota2;
nota3 = +nota3;
media = (nota1+nota2+nota3)/3

if (media >=9) {
    alert("aprovado com nota excelente")
    
}
else if(media >=7){
    alert("aprovado nota boa")
}
else {
    alert("em recuperação faça outras provas")
    
   let recuperacao=prompt();
    
    if (recuperacao >= 6) {
        alert("passou na recuperaçao");
        
    }
    else{
        alert("reprovado estude mais!")
    }
}


