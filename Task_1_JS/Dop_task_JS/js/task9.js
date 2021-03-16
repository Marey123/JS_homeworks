let num = Number(prompt("Введіть число: 1)Ножиці,2)Папер,3)Камінь"));
function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let result = selfRandom(1,3);
if(result == 3 && num == 1){
alert("Комп'ютер вийграв! Камінь vs Ножиці")
}
else if(result == 3 && num == 2){
alert("Ти вийграв! Камінь vs Папер")
}
else if(result == num){
    alert("Нічия,спробуй ще раз!")
}
else{
    if(result == 2 && num == 1){
        alert("Ти вийграв! Папер vs Ножиці")
    }
    else if(result == 2 && num == 3){
        alert("Комп'ютер вийграв! Папер vs Камінь")
    }
    else{
        if(result == 1 && num == 2){
            alert("Комп'ютер вийграв! Ножиці vs Папер")
        }
        else if(result == 1 && num == 3){
            alert("Ти вийграв! Ножиці vs Камінь")
        }
    





    }
    




}
