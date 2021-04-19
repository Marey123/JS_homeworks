let liRef =  document.querySelectorAll(".item");
let h2Ref = document.querySelectorAll("h2");
let ulRef = document.querySelectorAll("#categories");
console.log(`В списке ${categories.children.length} категории`);
liRef.forEach(el => console.log(` Категория: ${el.querySelector("h2").innerText}`))
liRef.forEach(el => console.log(`Количество элементов: ${el.querySelector("ul").children.length}`))


