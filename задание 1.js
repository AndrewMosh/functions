/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/
var x = [1, 3, 5, "Hello", 3, 5, "Good bye", 8, null, 4];
var even = [];
var odd = [];
var zero = [];

function oddOrEven(array, even, odd, zero) {
  array.forEach((el) => {
    if (typeof el === "number" && !isNaN(el)) {
      switch (true) {
        case el === 0:
          zero.push(el);
          break;
        case el % 2 === 0:
          even.push(el);
          break;
        case el % 2 !== 0:
          odd.push(el);
          break;
      }
    }
  });
  console.log("Количество четных элементов " + even.length);
  console.log("Количество нечетных элементов " + odd.length);
  console.log("Количество нулевых элементов " + zero.length);
}
oddOrEven(x, even, odd, zero);
