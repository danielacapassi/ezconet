const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const server = express();


server.use(express.json())
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ezconet"
})


server.get("/relatorios", (req, res) => {
    const query = "SELECT usuarioid, nome, datanascimento, email, descricao, ativo FROM usuario INNER JOIN sexo ON usuario.sexo=sexo.sexoid";

    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        } else {
             res.send(result)
        }
        
    })    
});

server.delete("/relatorios/:id", (req, res) => {
    const {id} = req.params
    const query = `DELETE FROM usuario WHERE usuarioid=${id}`;

    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        } else {
             res.send(result)
        }
        
    })    
});

server.put ("/edicao/:id", (req, res) => {
        const {nome, datanascimento, email, senha, sexo, ativo} = req. body
        const {id} = req.params
        
        let sexoFormatado = ""
        if (sexo === "Feminino"){
            sexoFormatado = "0"
        } else {
            sexoFormatado = "1" }
             
    
        let statusDescricao = ""
        if (ativo === "Ativo"){
            statusDescricao = "1"
        } else {
            statusDescricao = "0" }
    
    const query = `UPDATE usuario SET nome='${nome}', datanascimento='${datanascimento}', email='${email}', senha='${senha}', sexo='${sexoFormatado}', ativo='${statusDescricao}' WHERE usuarioid='${id}' `;

        connection.query(query, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                 res.send(result)
            }
            
        })    
});



    server.get("/usuario", (req, res) => {
    const query = "SELECT usuarioid, nome, datanascimento, email, sexo, ativo FROM usuario";

    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        } else {
             res.send(result)
        }
        
    })    
});


server.post("/usuario", (req, res) => {
    const { nome, datanascimento, email, senha, sexo, ativo } = req.body;
    console.log(req.body)
    
    let sexoFormatado = ""
    if (sexo === "Feminino"){
        sexoFormatado = "0"
    } else {
        sexoFormatado = "1" }
         
    connection.query(`INSERT INTO usuario(nome, datanascimento, email, senha, sexo, ativo ) values('${nome}', '${datanascimento}' , '${email}', '${senha}', '${sexoFormatado}' , '1' )`, (error, result) => { 
        if (error) {
            res.send("Erro ao inserir dados")
        } else {
               res.send(result)
        }
    })
})

server.listen(3333);