// №1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке)

//es5

"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - (this.price * 25) / 100;
};

const product1 = new Product("Товар 1", 230);
product1.make25PercentDiscount();

console.log(product1);

//es6

class Product1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price - (this.price * 25) / 100;
  }
}

const product2 = new Product1("Товар 1", 230);
product2.make25PercentDiscount();

console.log(product2);

//  № 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true

//es5
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
};

const post1 = new Post("Tony", "Hello, world!", new Date());
console.log(post1);
post1.edit("Yo, sup?");
console.log(post1);

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

const attached1 = new AttachedPost("admin", "Hello-Hello", new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit("Hey!");
console.log(attached1);

//es6
class Post3 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

const post3 = new Post("Tony", "Hello World!", new Date());
console.log(post3);
post3.edit("Yo, sup?");
console.log(post3);

class AttachedPost1 extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const attached2 = new AttachedPost("admin", "Hello-Hello", new Date());
console.log(attached2);
attached1.makeTextHighlighted();
attached2.edit("Hey!");
console.log(attached2);