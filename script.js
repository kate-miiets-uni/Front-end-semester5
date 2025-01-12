// Масиви кольорів для фону та тексту
const backgroundColors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
const textColors = ["red", "blue", "green", "purple"];

// Індекси для поточних кольорів
let bgIndex = 0;
let textIndex = 0;

// Номер варіанта 7
const variantNumber = 7;

// Функція для зміни кольору фону та тексту елемента
function toggleElementStyle(element) {
    // Зміна кольору фону
    element.style.backgroundColor = backgroundColors[bgIndex];
    // Зміна кольору тексту
    element.style.color = textColors[textIndex];

    // Оновлення індексів
    bgIndex = (bgIndex + 1) % backgroundColors.length;
    textIndex = (textIndex + 1) % textColors.length;
}

// Отримайте елемент з id рівним номеру варіанта
const elementById = document.getElementById(`element${variantNumber}`);
if (elementById) {
    elementById.addEventListener('click', function() {
        toggleElementStyle(elementById);
    });
}

// Отримайте наступний елемент за допомогою querySelector
const nextElementSelector = `#element${variantNumber + 1}`;
const nextElement = document.querySelector(nextElementSelector);
if (nextElement) {
    nextElement.addEventListener('click', function() {
        toggleElementStyle(nextElement);
    });
}

// Робота з кнопками впливу на зображення
const addImage = document.getElementById('addImage');
const increaseImage = document.getElementById('increaseSize');
const decreaseImage = document.getElementById('decreaseSize');
const deleteImage = document.getElementById('deleteImage');

// Функція для автоматичного додавання зображення
function addImageAutomatically() {
    const imageContainer = document.getElementById('imageContainer');
    let imageElement = document.createElement('img');
    imageElement.id = 'image';
    imageElement.src = '/Users/mac/Desktop/Front_End_5semester/lab1/photo/amsterdam_city.jpg';
    imageElement.alt = 'Фото міста';
    imageElement.style.width = '600px';
    imageElement.style.height = 'auto';
    imageContainer.appendChild(imageElement);
}

// Викликаємо функцію для автоматичного додавання зображення
addImageAutomatically();

// Функція для додавання зображення
addImage.addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    let imageElement = document.getElementById('img');
    if (!document.body.contains(imageElement)) {
        imageElement = document.createElement('img');
        imageElement.src = '/Users/mac/Desktop/Front_End_5semester/lab1/photo/amsterdam_city.jpg';
        imageElement.alt = 'Фото міста';
        imageElement.style.width = '600px';
        imageElement.style.height = 'auto';
        imageContainer.appendChild(imageElement);
    }
});

// Функція з збільшення розміру зображення
increaseImage.addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('img');
    if (images.length > 0) {
        const lastImageElement = images[images.length - 1];
        const currentWidth = parseInt(window.getComputedStyle(lastImageElement).width);
        lastImageElement.style.width = (currentWidth + 50) + 'px';
    }
});

// Функція для зменшення розміру зображення
decreaseImage.addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('img');
    if (images.length > 0) {
        const lastImageElement = images[images.length - 1];
        const currentWidth = parseInt(window.getComputedStyle(lastImageElement).width);
        if (currentWidth > 50) {
            lastImageElement.style.width = (currentWidth - 50) + 'px';
        }
    }
});

// Функція для видалення зображення
deleteImage.addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('img');
    if (images.length > 0) {
        const lastImageElement = images[images.length - 1];
        imageContainer.removeChild(lastImageElement);
    }
});
