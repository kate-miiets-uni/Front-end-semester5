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

// Робота з формою
document.getElementById('myForm').addEventListener('submit', function (e){
    e.preventDefault();

    var fullName = document.getElementsByName('fullName')[0];
    var variant = document.getElementsByName('variant')[0];
    var phoneNumber = document.getElementsByName('phoneNumber')[0];
    var faculty = document.getElementsByName('faculty')[0];
    var email = document.getElementsByName('email')[0];

    // Регулярні вирази для перевірки форматів
    const fullnameRegex = /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐа-яіїєґ].\s[А-ЯІЇЄҐа-яіїєґ].$/;
    const variantRegex = /^\d{2}$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const facultyRegex = /^[А-ЯІЇЄҐа]{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.com/;

    // Перевірка валідності введених даних
    let valid = true;

    if(!fullnameRegex.test(fullName.value)){
        fullName.style.borderColor = 'red';
        valid = false;
    }
    else {
        fullName.style.borderColor = 'green';
    }

    if(!variantRegex.test(variant.value)){
        variant.style.borderColor = 'red';
        valid = false;
    }
    else {
        variant.style.borderColor = 'green';
    }

    if(!phoneRegex.test(phoneNumber.value)){
        phoneNumber.style.borderColor = 'red';
        valid = false;
    }
    else {
        phoneNumber.style.borderColor = 'green';
    }

    if(!facultyRegex.test(faculty.value)){
        faculty.style.borderColor = 'red';
        valid = false;
    }
    else {
        faculty.style.borderColor = 'green';
    }

    if(!emailRegex.test(email.value)){
        email.style.borderColor = 'red';
        valid = false;
    }
    else {
        email.style.borderColor = 'green';
    }

    // Виведення результатів
    if (valid) {
        var newWindow = window.open("", "Result Window", "width=400,height=400");
        newWindow.document.write(`<h2>Введені дані</h2>`);
        newWindow.document.write(`<p><strong>ПІБ:</strong> ${fullName.value}</p>`);
        newWindow.document.write(`<p><strong>Варіант:</strong> ${variant.value}</p>`);
        newWindow.document.write(`<p><strong>Телефон:</strong> ${phoneNumber.value}</p>`);
        newWindow.document.write(`<p><strong>Факультет:</strong> ${faculty.value}</p>`);
        newWindow.document.write(`<p><strong>Email:</strong> ${email.value}</p>`); } else {
        alert('Будь ласка, виправте помилки у введених даних.');
    }
})

// Робота з таблицею
document.addEventListener('DOMContentLoaded', (event) => {
    var table = document.getElementById('myTable');
    var variantNumber = 7; // Номер варіанта 7

    // Генерація таблиці 6х6
    for (var i = 0; i < 6; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 6; j++) {
            var cell = row.insertCell();
            cell.innerHTML = i * 6 + j + 1;

            // Наведення на клітинку
            cell.onmouseover = function() {
                if (parseInt(this.innerHTML) === variantNumber) {
                    this.style.backgroundColor = getRandomColor();
                }
            };

            // Клік на клітинці
            cell.onclick = function() {
                if (parseInt(this.innerHTML) === variantNumber) {
                    var color = document.getElementById('colorPicker').value;
                    this.style.backgroundColor = color;
                }
            };

            // Подвійний клік на клітинці
            cell.ondblclick = function() {
                var selectedRow = this.parentNode.rowIndex;
                for (var k = selectedRow; k < table.rows.length; k += 2) {
                    for (var l = 0; l < table.rows[k].cells.length; l++) {
                        table.rows[k].cells[l].style.backgroundColor = getRandomColor();
                    }
                }
            };
        }
    }
});

// Функція для генерації випадкового кольору
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Робота з fetch та promise
document.getElementById('fetchButton').addEventListener('click', function () {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Перетворюємо відповідь у формат JSON
        })
        .then(data => {
            const users = data.results;

            // Очищення таблиці перед додаванням нових даних
            for (let i = 0; i <= 4; i++) {
                document.getElementById(`userPicture${i + 1}`).src = '';
                document.getElementById(`userCell${i + 1}`).textContent = '';
                document.getElementById(`userCity${i + 1}`).textContent = '';
                document.getElementById(`userPostcode${i + 1}`).textContent = '';
                document.getElementById(`userEmail${i + 1}`).textContent = '';
            }

            // Додавання нових даних до таблиці
            users.forEach((user, index) => {
                const i = index;
                document.getElementById(`userPicture${i + 1}`).src = user.picture.medium;
                document.getElementById(`userCell${i + 1}`).textContent = user.cell;
                document.getElementById(`userCity${i + 1}`).textContent = user.location.city;
                document.getElementById(`userPostcode${i + 1}`).textContent = user.location.postcode;
                document.getElementById(`userEmail${i + 1}`).textContent = user.email;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Обробка помилок
        })
        .finally(() => {
            console.log('Запит завершено'); // Виконується у будь-якому випадку
        });
});