// node 01-js-types.js

// tipos principais
// - primitivos || valores primitivos
// - não-primitivos || valores não-primitivos || objetos

/* PRIMITIVOS
 - number*
 - string*
 - boolean
 - null
 - undefined
 - symbol (adicionado no ES6)
*/

// NUMBER
// - inteiro / integer / int
// - ponto-flutuante / floating-point / float

const intNumber = 38;
const floatNumber = 33.5;
const inf = Infinity;

const name = 'Hercules'
const whatIsThis = name / 2; // retorna NaN

// EXPRESSÕES NUMÉRICAS
console.log('-- expressões numéricas --')
const soma = 2 + 3;
const sub = 5 - 1;
const multi = 3 * 2;
const div = 6 / 2;
console.log(soma)
console.log(sub)
console.log(multi)
console.log(div)

console.log('-- operadores avançados --')
const exp = 2 ** 5;
console.log(exp);

const quociente = 4 / 2;  // valor da divisão
const modulo = 7 % 7;     // resto da divisão inteira
console.log(modulo);

console.log(8 % 2 === 0); // é par
console.log(9 % 2 === 0); // é impar

// operador de atribuição
console.log('-- operadores de atribuição --')
let myAge = 42;
console.log('inicial:', myAge);
myAge = myAge + 10;
console.log('+10:', myAge);
myAge += 10;
console.log('+10:', myAge);


// expressões
console.log('-- expressões --')

// const result = 4 + 2;
// const result = (7 + 5) / 3 - 8;
const result = 10 + (5 * 2 ** 3) / 4 - 6;

console.log(result);

// PEMDAS
// Parenteses
// Exponencial
// Multi
// Div
// Adição
// Subtração

// STRING
console.log('\n-- STRINGS --')

// console.log('User\tId');
// console.log('Matheus\t01');
// console.log('Lucas\t02');

console.log('aspas simples', "aspas duplas", `backticks/crase/template literals`)

const studentName = "Vitor";
console.log(`${studentName} caminha ${(10 / 3).toFixed(2)} km por dia.`);

// antes do ES6
var customer1 = {
  firstName: 'Daniel',
  lastName: 'K. Albanez'
}
var msg1 = 'Olá ' + customer1.firstName + ' ' + customer1.lastName + '!';
console.log(msg1);

// depois do ES6
const customer2 = {
  firstName: 'Bruno',
  lastName: 'K. Albanez'
}
const msg2 = `Olá ${customer2.firstName} ${customer2.lastName}!`;
console.log(msg2);

console.log('-- caracteres especiais --');
const favoriteMovie = "Meu filme favorito é o 'Tudo e Todo lugar ao mesmo tempo'.";
console.log(favoriteMovie);
const message = 'I\'m Ok!'
console.log(message);

const fruits1 = '1. banana\n2. goiaba\n3. abacaxi';
console.log(fruits1);
const fruits2 = `1. banana
2. goiaba
3. abacaxi`;
console.log(fruits2);

console.log(message.length);

console.log('-- métodos de string --')

// concatenar
let stringContainer = '';
console.log(stringContainer);
stringContainer += 'Olá, mundo!';
console.log(stringContainer);
stringContainer += ' Como vai?';
console.log(stringContainer);

// acessando caracteres
const greeting = 'Olá! Seja bem vindo!';
console.log(`"${greeting}" é uma string com comprimento de ${greeting.length} caracteres`);

// utilizando o charAt(n)
console.log(greeting.charAt(0));
console.log(greeting.charAt(1));
console.log(greeting.charAt(2));
console.log(greeting.charAt(19));
console.log(greeting.charAt(99));

// utilizando o índice
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[19]);
console.log(greeting[99]);

// encontrando o índice por um caractere/substring
const example = 'Não se preocupe! Não precisa chorar!';
console.log(example.indexOf('Não'));
console.log(example.indexOf('e'));
console.log(example.indexOf('não'));
console.log(example.indexOf('r!'));

console.log(example.indexOf('Não', 3));

// repetir a mesma string
console.log('Uma string!'.repeat(3));
console.log(`${'na '.repeat(20)}, Batman!`);

// selecionando uma substring/trecho pelo índice
let comSubstring = example.substring(example.length - 3, example.length);
console.log(comSubstring);
// let comSubstr = example.substr(0, 3);
// console.log(comSubstr);
let comSlice = example.slice(-3);
console.log(comSlice);

// ordenando strings
// str1.localeCompare(str2);
// 1 se str1 > str2
// -1 se str1 < str2
// 0 se str1 === str2
console.log('Miami'.localeCompare('barcelona'));

// .startsWith(str[, posição])
console.log(example.startsWith('Não'));
console.log(example.startsWith('Não', 17));

// .endsWith(str[, posição])

// .includes(str[, posição])
console.log(example.includes('se'));
console.log(example.includes('não'));
