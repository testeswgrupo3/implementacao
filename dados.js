var mockTumas = [
  {"id":"1",
  "nome":"Project analisys",
  "quantidadeMaxAlunos":74,
  "quantidadeAlunosCadastrados":"4",
  "diaHora":
  [{"desc":"This is a nice description about this session.","data":"09:09:36 27-Nov-50495"}]},
  {"id":"2",
  "nome":"Nice examples",
  "quantidadeMaxAlunos":59,
  "quantidadeAlunosCadastrados":"2",
  "diaHora":[{"desc":"This is a nice description about this session.","data":"23:22:56 27-Feb-50496"}]},
  {"id":"3",
  "nome":"Session 1: Introduction to Web",
  "quantidadeMaxAlunos":50,
  "quantidadeAlunosCadastrados":"0",
  "diaHora":[{"desc":"This is a nice description about this session.","data":"23:22:56 02-Jun-50493"}]},
  {"id":"4",
  "nome":"Session 2: Databse integration",
  "quantidadeMaxAlunos":37,
  "quantidadeAlunosCadastrados":"0",
  "diaHora":[{"desc":"This is a nice description about this session.","data":"23:22:56 06-Nov-50509"}]},
  {"id":"5",
  "nome":"Project analisys 2",
  "quantidadeMaxAlunos":74,
  "quantidadeAlunosCadastrados":"4",
  "diaHora":
  [{"desc":"This is a nice description about this session.","data":"09:09:36 27-Nov-50495"}]}
  ];

  var mockAlunos = [
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

  var cadastro = {
    idTurma:null,
    listaAlunos:[],
    adicionarAluno: function(idAluno){//adiciona id de um aluno na lista de alunos pendentes para o cadastro
      this.listaAlunos.push(idAluno);
    },
    removerAluno: function(idAluno){//remove o id de um aluno da lista de alunos pendentes para cadastro
      var index = this.listaAlunos.indexOf(idAluno);
      if ( index > -1) {
        this.listaAlunos.splice(index, 1);
      }
    }
  }
