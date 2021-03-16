let a = Number(prompt("Число а"));
let b = Number(prompt("Число b"));
let operate = prompt("Знак операції +,-,*,/");
if(operate == "+"){
    alert(`Сума чисел a i b = ${a+b}`)
}
else if(operate == "-"){
    alert(`Різниця чисел a i b = ${a-b}`)
}
else if(operate == "*"){
    alert(`Добуток чисел a i b = ${a*b}`)
}
else if(operate == "/"){
    alert(`Частка чисел a i b = ${a/b}`)
}
else{
    alert(`Не правильна операція`)
}

