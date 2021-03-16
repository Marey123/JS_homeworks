let a = Number(prompt("Число а"));
let b = Number(prompt("Число b"));
let c = Number(prompt("Число c"));
if ((typeof a =='number')|| (typeof b =='number')||(typeof c =='number')){
    if(a >= b && a >= c){
        alert(`Найбільше число: ${a}`)
    }
    else if(b >= a && b >= c){
        alert(`Найбільше число: ${b}`)
    }
    else{
        alert(`Найбільше число: ${c}`)

    }
   
}
else{
    alert("Це не число,спробуйте знову!")
}