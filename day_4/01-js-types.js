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
