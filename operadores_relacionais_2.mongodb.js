/* NOME DO BANCO DE DADOS: */
const database = 'BD3-CRISTIANO-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* SELECIONA LIVROS ENTRE OS VALORES DE 100 E 150 */
db[collection].find({
    valor: {$gte:100, $lte:150}
})