const input = document.querySelector('input');
const output = document.getElementById('name-output');
input.addEventListener('input', updateValue);

function updateValue(item) {
    if (document.getElementById('name-input').value != '') {
  output.textContent = item.target.value;
    }
    else{
        output.textContent = "незнакомец"
    }
}