// para executar esse arquivo, use:
// node 00-js-intro.js
console.log('Olá mundo!');

// COMENTÁRIOS

// comentário de uma linha
// +1 linha

/**
 * se eu precisar comentar várias linhas
 * posso usar o /*
 * e finalizo com o asterisco/
 * assim deixo um bloco de 
 * comentário
 */

/*
aqui tb é um comentário
ok?
*/

// VARIÁVEIS
console.log('\n --- variáveis ---')
let goiaba = 5; // declarando uma variável
let banana, abacaxi; // declarando várias variáveis ao mesmo tempo
goiaba = 'isso é uma atribuição à uma variável';

// nomes de variáveis podem ter MAIÚSCULAS, minúsculas, números, _ e $
// não pode começar com número

let a, color, _private, $buffer;
let getTop10;

let camelCase; // <-- padrão adotado para o JS
let PascalCase;
let snake_case;

// reatribuindo valores
let favoriteFood; // declarando a variável
console.log('Valor:', favoriteFood, '| tipo:', typeof favoriteFood);
favoriteFood = 'Lasanha';
console.log('Valor:', favoriteFood, '| tipo:', typeof favoriteFood);
favoriteFood = 'Pizza';
console.log('Valor:', favoriteFood, '| tipo:', typeof favoriteFood);

// tipagem dinâmica
favoriteFood = 5;
console.log('Valor: ' + favoriteFood + ' | tipo: ' + typeof favoriteFood);

const student = 'Natália';


