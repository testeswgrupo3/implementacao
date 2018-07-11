var dataTeste =
{
  convercaoHora:{entrada:"09:09",resultadoEsperado: {hora: 9,minutos:9}},
  bateHorario:{classesEquivalencia: {entrada:[  {
                                                //duas turmas com coicidencia de horario
                                                    turmaA:{"id":"0",
                                                      		"nome":"Estrutura de dados",
                                                      		"quantidadeMaxAlunos":71,
                                                      		"quantidadeAlunosCadastrados":"0",
                                                      		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                     ,
                                                     turmaB:{"id":"1",
                                                       		"nome":"Fisica",
                                                       		"quantidadeMaxAlunos":71,
                                                       		"quantidadeAlunosCadastrados":"0",
                                                       		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                },
                                                {
                                                  //Duas turmas sem coicidencia de horário em dias diferentes
                                                    turmaA:{"id":"0",
                                                      		"nome":"Estrutura de Dados",
                                                      		"quantidadeMaxAlunos":71,
                                                      		"quantidadeAlunosCadastrados":"0",
                                                      		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                     ,
                                                    turmaB:{"id":"1",
                                                      		"nome":"Fisica",
                                                      		"quantidadeMaxAlunos":71,
                                                      		"quantidadeAlunosCadastrados":"0",
                                                      		"diaHora":[{"desc":"Mon","horaInicio":"13:27"}]}
                                                  }
                                               ],
                                          resultadoEsperado:[true,false]},
                    analiseValorLimite:{entrada:[
                                                  {
                                                    //Duas turmas em dias diferentes com diferença de 1 hora e 59 minutos
                                                      turmaA:{"id":"0",
                                                            "nome":"Estrutura de dados",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                            "nome":"Fisica",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Mon","horaInicio":"18:26"}]}
                                                  },
                                                  {
                                                    //Duas Turmas em dias diferentes com diferença de 2 horas
                                                      turmaA:{"id":"0",
                                                            "nome":"Estrutura de dados",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                            "nome":"Fisica",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Mon","horaInicio":"18:27"}]}
                                                  },
                                                  {
                                                    //Duas Turmas em dias diferentes com diferença de 2 horas e 1 minuto
                                                      turmaA:{"id":"0",
                                                            "nome":"Estrutura de dados",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                            "nome":"Fisica",
                                                            "quantidadeMaxAlunos":71,
                                                            "quantidadeAlunosCadastrados":"0",
                                                            "diaHora":[{"desc":"Mon","horaInicio":"18:28"}]}
                                                  },
                                                  {
                                                    //Duas no mesmo dia com diferença de 1 hora e 59 minutos
                                                      turmaA:{"id":"0",
                                                        		"nome":"Estrutura de dados",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                        		"nome":"Fisica",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"18:26"}]}
                                                  },
                                                  {
                                                    //Duas no mesmo dia com diferença de 2 horas
                                                      turmaA:{"id":"0",
                                                        		"nome":"Estrutura de dados",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                        		"nome":"Fisica",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"18:27"}]}
                                                  },
                                                  {
                                                    //Duas no mesmo dia com diferença de 2 horas e 1 minuto
                                                      turmaA:{"id":"0",
                                                        		"nome":"Estrutura de dados",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"16:27"}]}
                                                       ,
                                                      turmaB:{"id":"1",
                                                        		"nome":"Fisica",
                                                        		"quantidadeMaxAlunos":71,
                                                        		"quantidadeAlunosCadastrados":"0",
                                                        		"diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                                  }
                                                 ],
                                            resultadoEsperado:[false,false,false,true,false,false]}

              },
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
  verificarCapacidadeTurma:{classesEquivalencia:
                              {entrada:[
                                        {
                                          //Matricular um numero de alunos que supere a capacidade da turma
                                          alunos:[{"id":"1",
                                          "nome":"Student Imprudent",
                                          "listaTurmas":["1","2"]},
                                          {"id":"2",
                                          "nome":"Student Concludent",
                                          "listaTurmas":["1"]},
                                          {"id":"4",
                                          "nome":"New Student",
                                          "listaTurmas":["1"]}],
                                          turma: {"id":"7",
                                                "nome":"Fisica",
                                                "quantidadeMaxAlunos":71,
                                                "quantidadeAlunosCadastrados":"70",
                                                "diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                          },
                                          {
                                            //Matricular um numero de alunos que nao supere a capacidade da turma
                                            alunos:[{"id":"1",
                                            "nome":"Student Imprudent",
                                            "listaTurmas":["1","2"]},
                                            {"id":"2",
                                            "nome":"Student Concludent",
                                            "listaTurmas":["1"]},
                                            {"id":"4",
                                            "nome":"New Student",
                                            "listaTurmas":["1"]}],
                                            turma: {"id":"7",
                                                  "nome":"Fisica",
                                                  "quantidadeMaxAlunos":71,
                                                  "quantidadeAlunosCadastrados":"0",
                                                  "diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                            }
                                        ],
                              resultadoEsperado: [false,true]},
                        analiseValorLimite:{entrada:[
                                            {
                                              //Matricular um numero de alunos que não supere em 1 a capacidade da turma
                                              alunos:[{"id":"1",
                                              "nome":"Student Imprudent",
                                              "listaTurmas":["1","2"]},
                                              {"id":"2",
                                              "nome":"Student Concludent",
                                              "listaTurmas":["1"]},
                                              {"id":"4",
                                              "nome":"New Student",
                                              "listaTurmas":["1"]}],
                                              turma: {"id":"1",
                                                    "nome":"Fisica",
                                                    "quantidadeMaxAlunos":70,
                                                    "quantidadeAlunosCadastrados":"66",
                                                    "diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                              },
                                              {
                                                //Matricular um numero de alunos que atinga a capaciadade da turma
                                                alunos:[{"id":"1",
                                                "nome":"Student Imprudent",
                                                "listaTurmas":["1","2"]},
                                                {"id":"2",
                                                "nome":"Student Concludent",
                                                "listaTurmas":["1"]},
                                                {"id":"4",
                                                "nome":"New Student",
                                                "listaTurmas":["1"]}],
                                                turma: {"id":"1",
                                                      "nome":"Fisica",
                                                      "quantidadeMaxAlunos":71,
                                                      "quantidadeAlunosCadastrados":"68",
                                                      "diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                                },
                                                {
                                                  //Matricular um numero de alunos que supere em 1 a capaciadade da turma
                                                  alunos:[{"id":"1",
                                                  "nome":"Student Imprudent",
                                                  "listaTurmas":["1","2"]},
                                                  {"id":"2",
                                                  "nome":"Student Concludent",
                                                  "listaTurmas":["1"]},
                                                  {"id":"4",
                                                  "nome":"New Student",
                                                  "listaTurmas":["1"]}],
                                                  turma: {"id":"1",
                                                        "nome":"Fisica",
                                                        "quantidadeMaxAlunos":71,
                                                        "quantidadeAlunosCadastrados":"69",
                                                        "diaHora":[{"desc":"Thu","horaInicio":"18:28"}]}
                                                  }
                                                ],
                                  resultadoEsperado:[true,true,false]}
                        },

  cadastro:{entrada:{"id":"1",
                    "nome":"Student Imprudent",
                    "listaTurmas":["1","2"]},
            resultadoEsperado:{adicionado: true,removido:false}
         }
}


QUnit.test( "Testa Formatação de hora", function( assert ) {
      var resultado = converteHora(dataTeste.convercaoHora.entrada);
      assert.ok( (resultado.hora==dataTeste.convercaoHora.resultadoEsperado.hora)&&(resultado.minutos==dataTeste.convercaoHora.resultadoEsperado.minutos),"Formatação de hora Passou!")
});

QUnit.test( "Testa Bate horario", function( assert ) {
      //Iniciando os dados para a realizacao dos teste
      var dadosClasseEquivalencia = dataTeste.bateHorario.classesEquivalencia;
      var dadosValorLimite = dataTeste.bateHorario.analiseValorLimite;
      var numTestesClasseEquivalencia = dadosClasseEquivalencia.entrada.length;
      var numTestesValorLimite =  dadosValorLimite.entrada.length;

      //Efetuando os testes com classe de classes equivalencia
      for(var i=0;i<numTestesClasseEquivalencia;i++){
        var resultado = bateHorario(dadosClasseEquivalencia.entrada[i].turmaA,dadosClasseEquivalencia.entrada[i].turmaB);
        var notificacao = {t1: dadosClasseEquivalencia.entrada[i].turmaA.diaHora, t2: dadosClasseEquivalencia.entrada[i].turmaB.diaHora,bateHorario:resultado};
        assert.ok(resultado==dadosClasseEquivalencia.resultadoEsperado[i] ,"Passou! "+JSON.stringify(notificacao))
      }

      //Efetuando os testes com análise do valor limite
      for(var i=0;i<numTestesValorLimite;i++){
        var resultado = bateHorario(dadosValorLimite.entrada[i].turmaA,dadosValorLimite.entrada[i].turmaB);
        var notificacao = {t1: dadosValorLimite.entrada[i].turmaA.diaHora, t2: dadosValorLimite.entrada[i].turmaB.diaHora,bateHorario:resultado};
        assert.ok(resultado==dadosValorLimite.resultadoEsperado[i] ,"Passou! "+JSON.stringify(notificacao))

      }

});
QUnit.test( "Filtrar alunos que não pertencem a turma", function( assert ) {
      var resultado = filtrarAlunos(dataTeste.filtrarAlunos.entrada.alunos,dataTeste.filtrarAlunos.entrada.idTurma);
      assert.ok( resultado.length==dataTeste.filtrarAlunos.resultadoEsperado.length,"Tamanho do resultado esta correto!")
      for(var i=0;i<resultado.length;i++){
        assert.ok( resultado[i].id==dataTeste.filtrarAlunos.resultadoEsperado[i].id,"Aluno "+resultado[i].id+" ok")
      }
});

QUnit.test( "Testa verificar Capacidade Turma", function( assert ) {
      //Iniciando os dados para a realizacao dos teste
      var dadosClasseEquivalencia = dataTeste.verificarCapacidadeTurma.classesEquivalencia;
      var dadosValorLimite = dataTeste.verificarCapacidadeTurma.analiseValorLimite;
      var numTestesClasseEquivalencia = dadosClasseEquivalencia.entrada.length;
      var numTestesValorLimite =  dadosValorLimite.entrada.length;

      //Efetuando os testes com classe de classes equivalencia
      for(var i=0;i<numTestesClasseEquivalencia;i++){
        cadastro.idTurma = dadosClasseEquivalencia.entrada[i].turma.id;
        for(var j=0;j<dadosClasseEquivalencia.entrada[i].alunos.length;j++){
            cadastro.adicionarAluno(dadosClasseEquivalencia.entrada[i].alunos[j].id);
        }
        var vagas =Number(dadosClasseEquivalencia.entrada[i].turma.quantidadeMaxAlunos)-Number(dadosClasseEquivalencia.entrada[i].turma.quantidadeAlunosCadastrados);
        var notificacao = {turma:dadosClasseEquivalencia.entrada[i].turma.id,vagas:vagas,tentouInserir:dadosClasseEquivalencia.entrada[i].alunos.length}
        assert.ok(verificaCapacidadeTurma(dadosClasseEquivalencia.entrada[i].turma)==dadosClasseEquivalencia.resultadoEsperado[i] ,"Passou! "+JSON.stringify(notificacao));
        cadastro.idTurma = null;
        cadastro.listaAlunos=[];
      }

      for(var i=0;i<numTestesValorLimite;i++){
        cadastro.idTurma = dadosValorLimite.entrada[i].turma.id;
        for(var j=0;j<dadosValorLimite.entrada[i].alunos.length;j++){
            cadastro.adicionarAluno(dadosValorLimite.entrada[i].alunos[j].id);
        }
        var vagas =Number(dadosValorLimite.entrada[i].turma.quantidadeMaxAlunos)-Number(dadosValorLimite.entrada[i].turma.quantidadeAlunosCadastrados);
        var notificacao = {turma:dadosValorLimite.entrada[i].turma.id,vagas:vagas,tentouInserir:dadosValorLimite.entrada[i].alunos.length}
        assert.ok(verificaCapacidadeTurma(dadosValorLimite.entrada[i].turma)==dadosValorLimite.resultadoEsperado[i] ,"Passou! "+JSON.stringify(notificacao));
        cadastro.idTurma = null;
        cadastro.listaAlunos=[];
      }

});

QUnit.test( "Remover aluno com cadastro pendente", function( assert ) {
      function verificaAlunoListaCadastro(idAluno){
        var index = cadastro.listaAlunos.indexOf(idAluno);
        if ( index > -1) {
          return true;
        }else{
          return false;
        }
      }
      cadastro.adicionarAluno(dataTeste.cadastro.entrada.id);
      assert.ok(verificaAlunoListaCadastro(dataTeste.cadastro.entrada.id)==dataTeste.cadastro.resultadoEsperado.adicionado ,"Passou! "+dataTeste.cadastro.entrada.id+ " Esta para ser cadastrado");
      cadastro.removerAluno(dataTeste.cadastro.entrada.id);
      assert.ok(verificaAlunoListaCadastro(dataTeste.cadastro.entrada.id)==dataTeste.cadastro.resultadoEsperado.removido ,"Passou! "+dataTeste.cadastro.entrada.id+ " Não esta mais para ser cadastrado");


});
