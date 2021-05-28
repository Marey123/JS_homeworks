const colors = [
    'red',
    'green',
    'violet',
    'gray',
    'blue',
    'yellow',
  ];
  let refStartButton = document.querySelector('button[data-action="start"]');
  let refStopButton = document.querySelector('button[data-action="stop"]');
  let refBody = document.querySelector("body");
let interval;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  refStartButton.addEventListener('click',()=>{
    refStartButton.setAttribute('disabled','true')
    refStopButton.removeAttribute('disabled')
     interval = setInterval(() =>{
      refBody.setAttribute("style",`background-color: ${colors[randomIntegerFromInterval(0,5)]}`)
     },1000);

      
  });

  refStopButton.addEventListener('click',()=>{
    clearInterval(interval);
    refStopButton.setAttribute('disabled','true')
    refStartButton.removeAttribute('disabled')
    
  })

  