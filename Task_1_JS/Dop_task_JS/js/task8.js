let minut  =  Number(prompt("Введіть хвилини:"))
let Hours = Math.round(minut/60);
let Minutes = minut%60;

alert(`${Hours}:${Minutes}`)