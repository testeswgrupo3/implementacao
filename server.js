const http = require('http')
var porta = process.env.PORT || 3000
const ip = 'localhost'
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
const server = http.createServer((req, res) => {
  console.log('Recebendo uma request para '+ req.url)
  if (req.url == "/") {
     fs.readFile(__dirname + "/index.html", function(err, data){
       res.end(data);
     });
  }else if (req.url != null) {
     fs.readFile(__dirname + req.url, function(err, data){
       res.end(data);
     });
  }else if("/alunos.json"){
     res.end('{ "alunos":'+JSON.stringify(alunos)+'}');
  }else {
	 	res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
	}

})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
