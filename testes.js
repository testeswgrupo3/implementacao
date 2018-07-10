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
QUnit.test( "verifica se é possivel selecionar uma turma", function( assert ) {
      var idTuma = 1;
      $("#turma").val(idTuma);
      $("#btnTurma").click();
      var turma = _.find(mockTumas,{"id" : idTuma});
      assert.ok($("span#nomeTurma").text()==turma.nome,"Turma: "+turma.nome+" selecionada corretamente");

});
QUnit.test( "vrifica se os alunos visualizados não pertencem a turma selecionada", function( assert ) {
      var list = $("#listaAlunos div input");
      for(var i=0;i<list.length;i++){
          assert.notOk( verificaAlunoTurma(1,_.find(mockAlunos,{"id": parseInt(list[i].getAttribute("data-vlid"))})),"Aluno_"+ list[i].getAttribute("data-vlid") +"_ok!" );
      }
});

function alunoDisponivel(aluno,tuma){
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

      for(var i=0;i<list.length;i++){
          list[i].click();
      }
      $("#btnAlunos").click();

      console.log($("#result").text());
      var resultado = JSON.parse($("#result").text());
      var turmaAtual = _.find(mockTumas,{"id": resultado.idTurma});
      console.log(turmaAtual);
      for(var i=0;i<resultado.listaAlunos.length;i++){
          var alunoAtual = _.find(mockAlunos,{"id": resultado.listaAlunos[i]});
          console.log(alunoAtual);
          assert.ok( alunoDisponivel(alunoAtual,turmaAtual),"Aluno "+ alunoAtual.id+" está Disponivel");
      }
});
