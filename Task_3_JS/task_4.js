const countTotalSalary = function(employees) {
   /* let sum=0;
    for (let employer of Object.values(employees)) {
         sum += employer;
        
    }*/
    let sum=0;
    for(let employer in employees ){
        sum += employees[employer];
    }
    return sum;
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countTotalSalary({})); // 0
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400