function media(n1,n2,n3,letra) {
    const medAri =parseInt(n1+n2+n3)/3
const mediP=parseInt((5*n1)+(3*n2)+(2*n3))/(10);

if (letra =="a") {

return(medAri)
}
else {
return(mediP)
}
}
console.log(media(5,2,3,"p"));