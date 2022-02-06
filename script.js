// Задание 1
// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

function Shop(name, location) {
    this.name = name;
    this.location = location;
    this.getDescription = function() {
        return `${this.name}, ${this.location}`;
    }
}

let oneShop = new Shop('Santa', 'ул.Мира д.3б');
let secondShop = new Shop('Green', 'проспект Незовисимости 2а')
let shops = [oneShop, secondShop];
console.log(shops);
let addres = shops.map(item => item.location);
console.log(addres);

//Задание 2
// По данному url расположена задача:
// https://jsonplaceholder.typico...
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.
let httpRequest = new XMLHttpRequest();
let div = document.querySelector('div');

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    div.innerText = obj.title; 
}

httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();

//Задача 3
// Запросом на сервер по этому url: https://jsonplaceholder.typico... достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
let httpRequest = new XMLHttpRequest();
let ul = document.querySelector('ul');

httpRequest.onload = function() { 
    let obj = JSON.parse(httpRequest.responseText);
    console.log(obj);
    for(let i = 0; i <= 20; i++) {
        let li = document.createElement('li');
        li.innerText = obj[i].title;
        ul.appendChild(li);
    } 
}

httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();




// Задание 4
// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typico...
// Оформить тегами как в ПРИМЕРЕ.
// Порядок работы:
// 1) создать http-запрос и получить результат в виде массива объектов (через JSON.parse)
// 2) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - описать функцию добавления элемента на страницу, функция принимает 3 параметра - тег, содержимое и название класса для CSS.
// - вызвать функцию 3 раза: для добавления имени, имейла и комментария.
// - прописать CSS для классов

let div = document.querySelector('div');

function createBox(name, email, body) {
    let title = document.createElement('h2');
    title.innerText = name;
    div.appendChild(title);
    let contact = document.createElement('p');
    contact.innerText = email;
    div.appendChild(contact);
    let paragraph = document.createElement('p');
    paragraph.innerText = body;
    div.appendChild(paragraph);
}

let httpRequest = new XMLHttpRequest();

httpRequest.onload = function() { 
    let obj = JSON.parse(httpRequest.responseText);
    for(let i = 0; i <= 10; i++) {
        let name = obj[i].name;
        let email = obj[i].email;
        let body = obj[i].body;
        createBox(name, email, body);
    }
}

httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();