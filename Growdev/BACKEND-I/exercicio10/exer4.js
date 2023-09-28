 /*4. Crie uma função que recebe por parâmetro o tempo de duração de
 uma fábrica expressa em segundos e retorna esse tempo em horas,
 minutos e segundos.

 Ex:
 Entrada: 3672
 Saída: 1:1:12
*/ 

function converterSegHr(seg){
    const SEG_HORAS = 3600
    const SEG_MINUTOS = 60
    const horas = Math.floor(seg / SEG_HORAS)
    const minutos = Math.floor((seg % SEG_HORAS) / SEG_MINUTOS)
    const segundosRestantes = seg % SEG_MINUTOS
  
    console.log(`${horas}:${minutos}:${segundosRestantes}`)
  }
  
  converterSegHr(3672)
  
  