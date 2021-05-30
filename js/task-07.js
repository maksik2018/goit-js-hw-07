//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInputChange = event => {
    const size = event.currentTarget.value;
    spanEl.style.fontSize =  size + 'px';

};
inputEl.addEventListener('input', onInputChange);

