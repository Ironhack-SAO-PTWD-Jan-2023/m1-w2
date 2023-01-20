// boolean, undefined, null e imutabilidade

// boolean

true
false
typeof true // 'boolean'

// operadores lógicos
// OR (ou) | AND (e) | NOT (não/inverso)

// OR: ||
// expressão1 || expressão2
// console.log(3 < 5) // true
// console.log(7 < 5) // false
// console.log(1 > 4 || 3 < 5 || 7 < 5 || false || 8%2 === 0) // true, ao menos 1 tem q ser true

// AND: &&
// expressão1 && expressão2
// console.log(1 > 4 && 3 < 5 && 7 < 5 && false && 8%2 === 0) // false, todos tem q ser true

// NOT: !
// console.log(!(3 < 5));
// console.log(!(1 > 4 || 3 < 5 || 7 < 5 || false || 8%2 === 0));
// console.log(!(1 > 4) && 3 < 5 && !(7 < 5) && !false && 8%2 === 0);
// console.log(false || !true)

// undefined
// let myCode;
// console.log(myCode);

typeof undefined // 'undefined'

// null
typeof null // object

// truthy e falsy
// truthy
true
'0'
'false'
35
-123
{}
[]
Date;

// falsy
false
0
""
null
undefined
NaN

// imutabilidade

let city = 'miami';
console.log(city);

city = 'berlin';
console.log(city);

city[0] = 'M';
console.log(city); // não mudou a letra!

let myAge = 38;
