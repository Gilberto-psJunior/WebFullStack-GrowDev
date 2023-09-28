function primo(i) {
let divisor = 0;
   for (let index = 1; index < i; index++) {
    
    if (i%index==0){divisor++}
    
   }
   if (divisor>1) {
    return false;
    
   }  
   else {
    return true;
   }
}
console.log(primo(7))