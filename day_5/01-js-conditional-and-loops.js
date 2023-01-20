// if..else
if ('condição') {
  // o que fazer caso a condição seja verdadeira.
} else { // se não/caso contrário
  // o que fazer caso a condição seja falsa.
}

if ('condição 1') {
  // o que fazer caso a condição 1 seja verdadeira.
} else if ('condição 2') {
  // o que fazer caso a condição 1 seja falsa e a condição 2 seja verdadeira.
} else if ('condição 3') {
  // o que fazer caso as condições 1 e 2 sejam falsas e a condição 3 seja verdadeira.
} else {
  // o que fazer caso as condições 1, 2 e 3 sejam falsas.
}

// const age = parseInt(prompt('Indique sua idade: '));
// if (age <= 16) {
//   alert('você tem desconto de 50%');
// } else if (age <= 18) {
//   alert('você tem desconto de 20%');
// } else {
//   alert('você não tem desconto');
// }

const name = 'Arya';
let house = '';
// if (name === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (name === 'Daenyrys') {
//   house = 'Targaryen';
// } else if (name === 'Jhon Snow' || name === 'Sansa' || name === 'Arya') {
//   house = 'Stark';
// } else {
//   house = 'other';
// }

switch(name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenyrys':
    house = 'Targaryen';
    break;
  case 'Jhon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  default:
    house = 'other';
}

// LOOPS
// while -> "enquanto"

// while('condição') {
  // o que ele vai fazer enquanto a condição for verdadeira.
// }

let j = 0;

while (j < 100) {
  console.log(j);
  j+=1;
}

// FOR
// for ('inicialização'; 'condição'; 'expressão ao final') {
  // código a ser executado enquanto a condição for verdadeira
// }

for (let i = 0; i < 100; i += 1) {
  console.log(i);
}

// FOR..OF
// for (const valor of algumaCoisaIterável) {
  // código a ser executado para CADA item 'valor' dentro do 'algumaCoisaIterável'.
// }

const fruits = ['banana', 'goiaba', 'maçã', 'limão'];
console.log('-- FOR --')
for (let i = fruits.length - 1; i >= 0; i -= 1) {
  console.log(fruits[i])
}

console.log('-- FOR..OF --')
for (let fruit of fruits) {
  if(fruit === 'goiaba') {
    continue;
  }
  console.log(fruit);
}


