

let k = Number(prompt("Оберіть 1 чи 2: 1)З Цельсію у Фарінгейт,2)З Фарінгейту у Цельсій:"))
switch(k) {
    case 1: 
    let C = Number(prompt("Градусы по Цельсию"));
alert(`Градусів по Фаренгейту: ${C*1.8+32}`)
    break;
case 2:
    let F = Number(prompt("Градусы по Фаренгейту"));
    alert(`Градусів по Цельсію: ${(F-32)/1.8}`)
    break;
    default:
    alert( "Нема таких значень" );
}