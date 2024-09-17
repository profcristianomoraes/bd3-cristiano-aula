/* NOME DO BANCO DE DADOS: */
const database = 'BD3-CRISTIANO-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* SELECIONA UM LIVRO DE UMA CATEGORIA E  UM VALOR DETERMINADO */
db[collection].find({

    $or:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]

});