//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counter = document.querySelector('#value')
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;

}
const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;

}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);