/* NOME DO BANCO DE DADOS: */
const database = 'BD3-CRISTIANO-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO NUMERO */
// db[collection].find(
//     { valor: {$gt:100}}
// );


/* SELECIONA O LIVRO COM VALOR MENOR QUE DETERMINADO NUMERO */
db[collection].find(
    { valor: {$lte:100}}
);