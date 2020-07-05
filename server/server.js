const express  = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require('./data')

// colocar o servidor para usar arquivos estaticos como CSS e fotos por exemplo
server.use(express.static('public'))

// configurar a template engine
server.set('view engine','njk') //aqui eu altero o tipo de arquivo que o template ira usar (html ou njk)
// configurar qual o caminho e quais as opçoes em formato de objeto.
nunjucks.configure('views',{
    express:server,
    noCache:true
})


// paginas que serão renderizadas
server.get('/',function(req,res){
    
    return res.render('index')
})
server.get('/sobre',function(req,res){

    return res.render('sobre')
})
server.get('/receitas',function(req,res){

    return res.render('receitas',{ items:receitas })
})
server.get('/receita',function(req,res){
    const id = req.query.id

    const receita = receitas.find(function(receita){
        return receita.id == id
    })

    if (!receita){
        return res.render('PageError')
    }

    return res.render('receita',{item: receita})
})


// colocar o servidor para ouvir a porta desejada 
server.listen(3000,function(){
    console.log('server is running')
})