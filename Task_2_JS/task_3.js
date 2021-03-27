const findLongestWord = function(string) {
    for(i=0; i < string.split(' ').length;i++){
      let  strLength = string.split(' ')[1].length;
      if(string.split(' ')[i].length > strLength){
          return string.split(' ')[i];
      }
    }
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'