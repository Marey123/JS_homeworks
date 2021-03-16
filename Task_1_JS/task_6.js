let total = 0;
while (true) {
    let num = prompt("Пожалуста введите число");
    if (num === null)  {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    } else {
        if (isNaN(num)) {
            alert("Было введено не число, попробуйте еще раз");
        } else {
            num = Number(num)
            total += num;
        }
    }
}