let choice = prompt("Введите страну для расчета стоимости доставки:").toLowerCase();

let price = 0;
let county = "";


switch(choice) {
    case 'китай':
        price = 150;
        country = choice;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;
    case 'чили':
        price = 250;
        country = choice;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;
    case 'австралия':
        price = 165;
        country = choice;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;
    case 'индия':
        price = 90;
        country = choice;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`)
        break;
    case 'ямайка':
        price = 130;
        country = choice;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        alert("Доставка в вашe страну не доступна")
}