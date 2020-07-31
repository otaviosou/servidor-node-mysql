const db = require('./db')

// CRIA UMA TABELA
const Postagem = db.sequelize.define('postagens', {

    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Postagem.sync({ force: true}) TA COMENTADO PORQUE SE NAO VAI RECRIAR A TABELA
module.exports = Postagem

