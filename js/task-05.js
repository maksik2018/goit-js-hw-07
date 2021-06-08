// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'

const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

const onInputChange = event =>
    outputEl.textContent = inputEl.value !== "" ? event.currentTarget.value : "незнакомец";


inputEl.addEventListener('input', onInputChange);


















// const inputEl = document.querySelector('#name-input');
// const spanEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     spanEl.textContent = event.currentTarget.value || 'незнакомец';
   
// }
