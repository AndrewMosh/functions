/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */

const mult = (x, n) => {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return console.log(result);
};

mult(3, 5);
mult(2, 9);
mult(5, 5);
