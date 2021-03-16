
  let year = prompt("Рік народження:");

if (year%4!=0 || year%100==0 && year%400!=0 ){
  alert( 'Не високосний рік' );
}
else{
 
  alert( 'Високосний рік' );
}

