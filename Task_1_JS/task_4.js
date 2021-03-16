let credits = 35500;
let pricePerDroid = 3000;
let quantity = prompt("Какое количество дроидов Вы хотите купить?")

let totalPrice = 0;


if( quantity===null) { 
  alert("Отменено пользователем!")
}
else{
totalPrice = quantity*pricePerDroid;
if (totalPrice > credits) { 
    alert("Недостаточно средств на счету!")
  }
  else if (totalPrice < credits ){
   alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)} 
}
 