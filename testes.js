var dataTeste = {
  convercaoData:{entrada:"09:09:36 27-Nov-50495",saidaEsperada: {ano:"50495",mes:"Nov",dia:"27",hora:"09",min:"09",seg:"36"}},
  bateHorario:{entrada:[{turmaA:{"id":"5",
                                    "nome":"Project analisys 2",
                                    "quantidadeMaxAlunos":74,
                                    "quantidadeAlunosCadastrados":"4",
                                    "diaHora":
                                    [{"desc":"This is a nice description about this session.","data":"09:09:36 27-Nov-50495"}]}
                             ,
                             turmaB:{"id":"6",
                                     "nome":"Project analisys 2",
                                     "quantidadeMaxAlunos":74,
                                     "quantidadeAlunosCadastrados":"4",
                                     "diaHora":
                                     [{"desc":"This is a nice description about this session.","data":"09:50:36 27-Nov-50495"}]}
                              }
                            ,
                            {turmaA:{"id":"58",
                                    "nome":"Project analisys",
                                    "quantidadeMaxAlunos":74,
                                    "quantidadeAlunosCadastrados":"4",
                                    "diaHora":
                                    [{"desc":"This is a nice description about this session.","data":"18:09:36 27-Nov-50495"}]}
                             ,
                             turmaB:{"id":"6",
                                     "nome":"Estrutura Dados dois",
                                     "quantidadeMaxAlunos":74,
                                     "quantidadeAlunosCadastrados":"4",
                                     "diaHora":
                                     [{"desc":"This is a nice description about this session.","data":"09:09:36 27-Nov-50495"}]}
                             }
                           ], resultadoEsperado:[true,false]},
  filtrarAlunos:{entrada:{alunos:[{"id":"1",
                                  "nome":"Student Imprudent",
                                  "listaTurmas":["1","2"]},
                                  {"id":"2",
                                  "nome":"Student Concludent",
                                  "listaTurmas":["1"]},
                                  {"id":"4",
                                  "nome":"New Student",
                                  "listaTurmas":["1"]}
                                ],idTurma:"2"},
                  resultadoEsperado:[{"id":"2",
                                    "nome":"Student Concludent",
                                    "listaTurmas":["1"]},
                                    {"id":"4",
                                    "nome":"New Student",
                                    "listaTurmas":["1"]}
                                  ]},
  verificarCapacidadeTurma:{entrada:{
                                      alunos:[{"id":"1",
                                      "nome":"Student Imprudent",
                                      "listaTurmas":["1","2"]},
                                      {"id":"2",
                                      "nome":"Student Concludent",
                                      "listaTurmas":["1"]},
                                      {"id":"4",
                                      "nome":"New Student",
                                      "listaTurmas":["1"]}],
                                      turma: {"id":"6",
                                              "nome":"Fisica",
                                              "quantidadeMaxAlunos":74,
                                              "quantidadeAlunosCadastrados":"72",
                                              "diaHora":
                                              [{"desc":"This is a nice description about this session.","data":"09:09:36 27-Nov-50495"}]}
                                      },
                            resultadoEsperado: false},
  cadastro:{entrada:{"id":"1",
                    "nome":"Student Imprudent",
                    "listaTurmas":["1","2"]},
            resultadosEspereados:{adicionado: true,removido:false}
         }
}


QUnit.test( "vrifica se as turmas visualizadas são iguais ao MOK", function( assert ) {
      for(var i=0;i<mockTumas.length;i++){
          assert.ok( $("#turma option")[i+1].textContent == mockTumas[i].nome,"Tuma_"+ mockTumas[i].nome +"_ok!" );
          assert.ok( $("#turma option")[i+1].value == mockTumas[i].id,"Id_" +mockTumas[i].id +"_ok!" );
      }
});

function verificaAlunoTurma(idTurma,aluno){
  for (var i =0; i<  aluno.listaTurmas.length;i++){
    if(aluno.listaTurmas[i]==idTurma){
      return true;
    }
  }
  return false;
}
  var idTuma = "2";
QUnit.test( "verifica se é possivel selecionar uma turma", function( assert ) {
      $("#turma").val(idTuma);
      $("#btnTurma").click();
      var turma = _.find(mockTumas,{"id" : idTuma});
      assert.ok($("span#nomeTurma").text()==turma.nome,"Turma: "+turma.nome+" selecionada corretamente");

});
QUnit.test( "vrifica se os alunos visualizados não pertencem a turma selecionada", function( assert ) {
      var list = $("#listaAlunos div input");
      if(list.length>0){
        for(var i=0;i<list.length;i++){
            assert.notOk( verificaAlunoTurma(idTuma,_.find(mockAlunos,{"id": list[i].getAttribute("data-vlid")})),"Aluno_"+ list[i].getAttribute("data-vlid") +"_ok!" );
        }
      }else{
        var cont = 0;
        for(var i=0;i<mockAlunos.length;i++){
            assert.ok( verificaAlunoTurma(idTuma,mockAlunos[i]),"Aluno_"+ mockAlunos[i].id +"_pertence a turma!" );
            cont++;
        }
          assert.ok( cont == mockAlunos.length,"Todos os alunos já estão nesta turma" );
      }

});

function alunoDisponivel(aluno,turma){
  for(var j = 0; j < aluno.listaTurmas.length; j++){
    var turmaJ = _.find(mockTumas,{"id": aluno.listaTurmas[j]});
    console.log(turmaJ);
    if (bateHorario(turmaJ,turma)) {
      return false;
    }
  }
  return true;
}

QUnit.test( "verifica se os alunos a serem inseridos não possuem coincidencia de horário", function( assert ) {

      var list = $("#listaAlunos div input");
      if(list.length>0){
        for(var i=0;i<list.length;i++){
            list[i].click();
        }
        $("#btnAlunos").click();

        console.log($("#result").text());
        var resultado = JSON.parse($("#result").text());
        var turmaAtual = _.find(mockTumas,{"id": resultado.idTurma});
        console.log("TurmaAtual");
        console.log(turmaAtual);
        for(var i=0;i<resultado.listaAlunos.length;i++){
            var alunoAtual = _.find(mockAlunos,{"id": resultado.listaAlunos[i]});
            console.log(alunoAtual);
            assert.ok( alunoDisponivel(alunoAtual,turmaAtual),"Aluno "+ alunoAtual.id+" está Disponivel");
        }
      }else{
        assert.ok( list.length==0,"Não é possivel inserir nenhum aluno na turma");
      }

});
