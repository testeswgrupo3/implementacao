const http = require('http')
var url  = require("url")
var fs = require('fs')

var alunos= [
    {"id":"1",
    "nome":"Student Imprudent",
    "listaTurmas":["1","2"]},
    {"id":"2",
    "nome":"Student Concludent",
    "listaTurmas":["1"]},
    {"id":"4",
    "nome":"New Student",
    "listaTurmas":["1"]}
  ]

function inicia(){
    function sobreRequisicao(req, res){
      console.log('Recebendo uma request para '+ req.url)
      if (req.url == "/") {
         fs.readFile("./index.html", function(err, data){
           res.end(data);
         });
      }else if (req.url != null) {
         fs.readFile("./"+req.url, function(err, data){
           res.end(data);
         });
      }else if("/alunos.json"){
         res.end('{ "alunos":'+JSON.stringify(alunos)+'}');
      }else {
    	 	res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
    	}
    }
    http.createServer(sobreRequisicao).listen(process.env.PORT)
    console.log("Servidor iniciado em http://localhost:"+process.env.PORT);
}
inicia();
