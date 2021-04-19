const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 

 ingredients.forEach((el) =>
  {
   let liRef = document.createElement("li");
   liRef.innerHTML = el;
  document.querySelector('#ingredients').append(liRef);

 });

 