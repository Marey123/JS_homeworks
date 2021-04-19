let counterValue = 0;
function increment(){
    document.querySelector('button[data-action="increment"]').addEventListener('click',()=>{
    counterValue +=1;
    document.getElementById('value').innerHTML = counterValue;})
    
}

function decrement(){
    document.querySelector('button[data-action="decrement"]').addEventListener('click',()=>{
    counterValue -=1;
    document.getElementById('value').innerHTML = counterValue;})
}


increment();
decrement();
