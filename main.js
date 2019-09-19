console.log("this");

/**Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
 */

let rectangle = {
  width: 10,
  height: 5,
  getSquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getSquare());

/**Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
 */

const price = {
  price: 10,
  discount: "15%",
  gitPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return this.price - (this.price * parseInt(this.discount)) / 100;
  }
};

console.log(price.gitPrice());
console.log(price.getPriceWithDiscount());

/**Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
 */

let heightObject = {
  height: 10,
  objIncrement: function() {
    return ++this.height;
  }
};

console.log(heightObject.height);
console.log(heightObject.objIncrement());
console.log(heightObject.height);

/**Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
 */

let numerator = {
  value: 1,
  double: function() {
    this.value * 2;
    return this;
  },
  plusOne: function() {
    this.value++;
    return this;
  },
  minusOne: function() {
    this.value--;
    return this;
  }
};
numerator
  .double()
  .plusOne()
  .plusOne()
  .minusOne();
console.log(numerator.value);

/**Создать объект с розничной ценой и количеством продуктов. Этот
объект должен содержать метод для получения общей стоимости
всех товаров (цена * количество продуктов)
 */

let priceProduct = {
  quantity: 10,
  price: 20,
  totalCost: function() {
    return this.quantity * this.price;
  }
};

console.log(priceProduct.totalCost());

/**Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь. Для
второго объекта нужно узнать общую стоимость всех деталей, но
нельзя создавать новые функции и методы. Для этого
“позаимствуйте” метод из предыдущего объекта.
 */

let newPriceProduct = {
  quantity: 10,
  price: 30
};

console.log(priceProduct.totalCost.call(newPriceProduct));

/**Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes
 */

let sizes = {
    width: 5,
    height: 10
  },
  getSquare = function() {
    return this.width * this.height;
  };

console.log(getSquare.call(sizes));

/**let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25. */

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

console.log('arrow function');

/**Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

function sum() {
  const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0 */

let newSum = (...args) => {
  if (!args.length) return 0;
  return args.reduce((prev, next) => prev + next);
};
console.log(newSum(1, 2, 3, 4));

/**Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) → 
{
  first: ‘a’,
  other: [‘b’, ‘c’, ‘d’]
} */

function destructFunc(arg1, ...args) {
  return arg1, args;
}

console.log(destructFunc(1, 2, 3, 4));

/**Организовать функцию getInfo, которая принимает объект вида
{ name: ...,  info: { employees: [...], partners: [ … ]  } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {  
  name: 'Google',   
  info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};
getInfo(organisation); → 
Name: Google 
Partners: Microsoft Facebook */

const organisation = {  
  name: 'Google',   
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};

function getInfo({
  name,
  info: {
    partners: [$first, $second]
  }
}) {
  if (!name) return "Unknown";
  return `name: ${name} partners: ${$first} , ${$second}`;
}
console.log(getInfo(organisation));



