// let изменяемый,const неизменяемый(отличие между let и const)
// callback - это функция которая передаётся в params
// отличие между методом и функцией(метод представляет собой обьект у которого есть ключ и значение в виде функции)
// цикл - это часть кода котрый возвращает нам нашу перерменную так как мы хотим
// forEach - это функция,for - это цикл
// DOM - это средства или API обращения к document
// можно получить тег по id (getElementById)
// создайте обьект с методами getSum getLength getMax getMin и поле array
const Obj = {
    array: [],
  
    getSum: function() {
      let sum = 0;
      for (let i = 0; i < Obj.array.length; i++) {
        sum += Obj.array[i];
      }
      return sum;
    },
  
    getLength: function() {
      return Obj.array.length;
    },
  
    getMax: function() {
      let max = Obj.array[0];
      for (let i = 1; i < Obj.array.length; i++) {
        if (Obj.array[i] > max) {
          max = Obj.array[i];
        }
      }
      return max;
    },
  
    getMin: function() {
      let min = Obj.array[0];
      for (let i = 1; i < Obj.array.length; i++) {
        if (Obj.array[i] < min) {
          min = Obj.array[i];
        }
      }
      return min;
}
};

Obj.array.push(1, 2, 3, 4, 5);

console.log(Obj.getSum());
console.log(Obj.getLength());
console.log(Obj.getMax());
console.log(Obj.getMin());