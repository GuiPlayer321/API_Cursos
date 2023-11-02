
const cursos =['node','flutter','react','next']

/*server.get('/curso/:id',(req, res)=>{
    const nome = req.query.nome
    const {id} =req.params
    return res.json({id: `${id}`,resposta: `estou ouvindo ${nome}`});
})*/


//retorna todos os cursos
server.get('/curso',(req, res)=>{
    return res.json(cursos)
})


//retorna o curso filtrando pelo index  
server.get('/curso/:id',(req, res)=>{
    const {id} =req.params
    return res.json(cursos[id]);
})

//adiociona um novo curso, passando um body
server.post('/curso',(req,res)=>{
    const{novo_curso} =req.body
    cursos.push(novo_curso)
    return res.json(cursos)
})

//atualiza um curso, passando seu id e um body
server.put('/curso/:id', (req,res)=>{
    const {id} = req.params;
    const {curso} = req.body;

    cursos[id] = curso;

    return res.json(cursos)
})

//deleta um curso passando seu id
server.delete('/curso/:id', (req, res)=>{
    const{id} = req.params;
    cursos.splice(id,1)
    return res.json({retorno: "curso excluido"})
})

