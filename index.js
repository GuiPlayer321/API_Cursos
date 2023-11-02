const express = require('express');
const server = express();
server.use(express.json())

/*
server.use((req,res,next) =>{
    
    console.log("Função chamada e middleware ativado");
    console.log(`chamando a rota ${req.url}`);
    console.log(`chamando o metodo ${req.method}`);
    return next()
})
*/

const cursos =['node','flutter','react','next']

/*server.get('/curso/:id',(req, res)=>{
    const nome = req.query.nome
    const {id} =req.params
    return res.json({id: `${id}`,resposta: `estou ouvindo ${nome}`});
})*/

function checkIdCurso (req, res, next){
    const curso=cursos[req.params.id]

    if(!curso) return res.status(400).json({erro: "Curso nao encontrado"})

    return next()
}

function checkBodyCurso(req, res, next){
    const {curso} = req.body

    if(!curso) return res.status(406).json({erro:"É necessário informar o campo curso no body da requisão"})

    return next();
}

server.get('/curso',(req, res)=>{
    return res.json(cursos)
})

server.get('/curso/:id', checkIdCurso,(req, res)=>{
    const {id} =req.params
    return res.json(cursos[id]);
})

server.post('/curso',(req,res)=>{
    const{novo_curso} =req.body
    cursos.push(novo_curso)
    return res.json(cursos)
})

server.put('/curso/:id', checkIdCurso, checkBodyCurso, (req,res)=>{
    const {id} = req.params;
    const {curso} = req.body;

    cursos[id] = curso;

    return res.json(cursos)
})

server.delete('/curso/:id', checkIdCurso, (req, res)=>{
    const{id} = req.params;
    cursos.splice(id,1)
    
    return res.json({retorno: "curso excluido"})
})


server.listen(3001, ()=> console.log("Estou rodando na porta 30001"));