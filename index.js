const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((req, res)=>{//função do express que inicia a rota
    //req = requisição; res = resposta; .send = enviar
    res.send('hello')
})

app.route('/sobre').get((req, res)=>{
    res.send('sobre')
})
