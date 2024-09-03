/* NOME DO BANCO DE DADOS: */
const database = 'BD3-CRISTIANO-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* ALTERA OS DADOS DE UM DOCUMENTO DA COLLECTION */
db[collection].updateOne(
    {titulo:'As Cavernas de Aço'},
    { $set:{valor:'250'} }

);