// DRY - Don't Repeat Yourself

function nomeDaFunc (parametro1, parametro2) {
  //... código para executar ao invocarem a função
}

nomeDaFunc('goiaba', 12);

// estrutura

/*
function <name> ([<parameters>]) {
  <instructions>
  [return <expression>;]
}
*/

// keyword        function parameters (if any)
//  ^    name          ^
//  |    |             |
function sayHelloWorld(someParameters) {
  // o código a ser executado
}

function sayHello () {
  console.log('Hello there!');
}

// sayHello();

function sayHelloAndre () {
  console.log('Hello, André!');
}

function sayHelloVitor () {
  console.log('Hello, Vitor!');
}

// sayHelloAndre();
// sayHelloVitor();

function sayHello (goiaba) { // o nome do parâmetro eu coloco o que eu quiser (mas faça fazer sentido!!!!)
  console.log(`Hello, ${goiaba}`);
  return `Olá, ${goiaba}`;
}

// sayHello('André');
// sayHello('Vitor');

const username = 'Natalia';
// sayHello(username);

function sayHelloGroup (user1, user2, user3) {
  console.log(`Hello, ${user1}, ${user2} and ${user3}!`)
}

// sayHelloGroup('Hércules', 'Matheus', 'Bruno', 'Lucas');

// return

// const greeting = sayHello('João');
// console.log('greeting:', greeting)

function printName (user1) {
  if (typeof user1 !== 'string') {
    return 'Use string!'
  }
  // if (!user1) {
  //   return 'Por favor, passe um nome.'
  // }
  if(!user1.length) { // 0 -> false || !0 -> !false -> true
    return 'Por favor, passe um nome válido.';
  }

  const message = `Name is ${user1} and it has ${user1.length} characters.`;
  return message;
}

// console.log(printName('DK'));

function createUserInfo (firstName, lastName, hobby) {
  const userInfo = {
    firstName,
    lastName,
    hobby
  }
  return userInfo;
}

const user1 = createUserInfo('André', 'Poli', 'Futebol');
const user2 = createUserInfo('João Victor', 'Souto', 'Kart');
// console.log(user1.hobby);
// console.log(user2.firstName);

function createList (item1, item2, item3) {
  const list = [item1, item2, item3];
  return list;
}

const fruitList = createList('goiaba', 'banana', 'maçã');
// console.log(fruitList);
// console.log(fruitList[0]);
// console.log(fruitList[5]);

// boas práticas
/*
- código limpo (DRY)
- abstração: saber como usar uma função sem necessariamente precisar saber COMO ela executa.
- separação de preocupações (separation of concerns): separar um problema grande em vários problemas pequenos.
- princípio de responsabilidade única: função tem q fazer uma e apenas uma coisa.

- nome da função com apenas UM verbo.
- se sua função tiver +20 linhas, provavelmente dá pra melhorar o código.
- se vc estiver agrupando muitas instruções, provavelmente sua função faz mais de uma coisa.
*/

// REFATORAÇÃO

function media (numberArr) {
  // 0 -> false // !0 -> !false -> true
  // se o array estiver vazio... ele encerra minha função (não executa mais nada)
  if (!numberArr.length) return 0;
  const sum = soma(numberArr);
  return sum / numberArr.length;
}

function soma (numberArr) {
  if (!numberArr.length) return 0;
  let sum = 0;
  for (let i = 0; i < numberArr.length; i += 1) {
    sum += numberArr[i];
  }
  return sum;
}

const arr = [1, 2, 3];

// console.log('soma:', soma(arr));
// console.log('média:', media(arr));

