const express = require('express')
const app = express()
// PEGA A TABELA POSTAGEM DO BANCO
const Postagem = require('./models/Postagem')


app.use(express.json())

// CREATE
app.post('/postagens', (req, res) => {


    const { titulo, conteudo } = req.body
    // FAZ UM INSERT INTO NA TABELA
    Postagem.create({
        titulo,
        conteudo
    })
    .then( () => {
        return res.json( { msg : 'POST CRIADO'})
    }) 
    .catch( () => {
        return res.json( { msg: 'POST NAO CRIADO'})
    })

})

// READ
app.get('/postagens', async (req, res) => {

    // FAZENDO UMA QUERY E RETORNANDO A LISTA
    const posts = await Postagem.findAll({raw: true });
    console.log(posts)
    return res.json(posts)
})


// UPDATE

app.put('/postagens', async (req, res) => {

    const titulo = req.body.titulo

    await Postagem.update({titulo}, {
        where: {
            id: '4'
        }
    })

    return res.json({msg: 'Postagem editada'})
})

// DELETE

app.delete('/postagens/:id', async( req, res) => {

    const id = req.params.id

    await Postagem.destroy({
        where: {
            id
        }
    })

    return res.json( { msg: 'Postagem deletada'})
})




app.listen(3131)