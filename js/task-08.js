// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить,
//         коллекция элементов очищается.

// // Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const inputEl = document.querySelector('[type="number"]');
const renderEl = document.querySelector('[data-action="render"]');
const destroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

renderEl.addEventListener('click', onCreateBoxes);
destroyEl.addEventListener('click', OnDestroyBoxes);


function onCreateBoxes() {
    let basicSize = 30;
    let num = inputEl.value;

   for (let i = 0; i < num; i+=1) {
       const size = basicSize += 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${random()} , ${random()} , ${random()} )`;
    boxesEl.appendChild(div);
  }
};

function OnDestroyBoxes() {
    boxesEl.innerHTML = '';
};

function random() {
  return Math.floor(Math.random() * 256);
}

