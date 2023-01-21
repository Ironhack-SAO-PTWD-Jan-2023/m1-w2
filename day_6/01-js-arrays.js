const numberArr = [];

const initialArr = ['Hércules', 'Matheus', 'André'];
// índice/index      0           1          2
// comprimento                              3
// const studentArr = initialArr.slice(0); // shallow copy // cópia rasa
const studentArr = [...initialArr]; // shallow copy
console.log(studentArr);

const mixedArr = ['Bruno', 2, false];

// console.log(studentArr[1]);
// console.log(studentArr[0]);
// console.log(studentArr[3]);
// console.log(studentArr[99]);

// adiciona elementos no array

studentArr.push('Lucas'); // adiciona no final
console.log(studentArr);

studentArr.unshift('Vitor'); // adiciona no inicio
console.log(studentArr);

studentArr.splice(2, 0, 'Natalia'); // adiciona no índice 2, removendo 0 elementos
console.log(studentArr);

// removendo elementos do array

studentArr.splice(4, 1); // remove 1 elemento no índice 4
console.log(studentArr);

studentArr.pop(); // remove do final
console.log(studentArr);

studentArr.shift(); // remove do começo
console.log(studentArr);

console.log(initialArr);

// LOOPS
console.log('-- for --');
for (let i = 0; i < studentArr.length; i += 1) {
  console.log(studentArr[i]);
}

console.log('-- forEach --');
// function showName (name) {
//   console.log(name);
// }

studentArr.forEach(function (name) {
  console.log(name);
});

['a', 'b', 'c', 'd'].forEach(function () {
  console.log(`Oi`)
});

const myArr = [1, 2, 3, 4]
myArr.forEach(function (num) {
  console.log(num *2);
});

studentArr.forEach(function (student, index) {
  console.log(index, student);
})