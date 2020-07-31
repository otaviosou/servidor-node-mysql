const Sequelize = require('sequelize')

// CONECTA COM O BANCO DE DADOS
const sequelize = new Sequelize('postapp', 'user', 'passworld', {

    host: 'localhost',
    dialect: 'mysql'
})

// VERIFICA SE A CONEXAO ACONTECEU
sequelize.authenticate()
    .then(() => {
        console.log('conexao feita')
    })
    .catch((error) => {
        console.log(`Conexao nao feita: ${error}`)
    })

module.exports = {
    Sequelize,
    sequelize
}




