const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

//função que atualiza o valor na tela
const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

//Adiciona um Número
plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

//Subtrai um valor
minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

//Reseta o contador
resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});

//
document.addEventListener('mouseup', () => clearInterval(intervalId));