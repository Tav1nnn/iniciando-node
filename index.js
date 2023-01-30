const express = require('express')

const app = express()

app.listen('3000')


//GET
app.route('/').get((req, res)=>{//função do express que inicia a rota
    //req = requisição; res = resposta; .send = enviar
    res.send('hello')
})

app.route('/sobre').get((req, res)=>{
    res.send('sobre')
})

/*===========================================================*/

//POST
//middleware
app.use(express.json())//transformando tudo em json

app.route('/').post((req, res)=> {
    res.send(req.body)
})

/*===========================================================*/

//PUT
//editar informações

let author = 'otavio'
app.use(express.json())

app.route('/').get((req, res) => {
    res.send(author)
})

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
    console.log(author);
})

/*===========================================================*/

//DELETE
// : fala que é uma variavel
// params vem todas as variaveis da url
app.route('/:id').delete((req,res)=>{
    author = ''
    res.send(req.params.id)
})
