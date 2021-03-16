let number = prompt("Вгадай число від 1 до 10");

function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let result = selfRandom(1,10);
if(result == number){
    alert(`Вітаю ви вгадали число ${result}`)
}
else{
    alert(`Ви програли, компютер загадав ${result}`)
}
