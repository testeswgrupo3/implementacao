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
//converdte a data exibida dos elementos par um objeto que contem os campos ano,mes,dia,hora,mim,seg respectivamente
function converteHora(hora){
  var horario =hora.split(":");
  return{hora:Number(horario[0]),minutos:Number(horario[1])}
}

//verifica se duas turmas possuem coicidencia de horario
function bateHorario(turmaTentativa, turmaCadastrada) {
  var coincide = false;
  console.log("<Comparando>");
  console.log(turmaTentativa);
  console.log(turmaCadastrada);
  console.log("</Comparando>");
  for(var j = 0; j < turmaCadastrada.diaHora.length; j++){
    var horarioTurmaCadastrada = converteHora(turmaCadastrada.diaHora[j].horaInicio);
    for(var i = 0; i < turmaTentativa.diaHora.length; i++){
      var horarioTurmaTentativa = converteHora(turmaTentativa.diaHora[i].horaInicio);
      if(turmaCadastrada.diaHora[j].desc == turmaTentativa.diaHora[i].desc){
        if(horarioTurmaCadastrada.hora == horarioTurmaTentativa.hora){
            coincide = true;
        }else{
            var diferenca = Math.abs((horarioTurmaCadastrada.hora*60+horarioTurmaCadastrada.minutos) - (horarioTurmaTentativa.hora*60+horarioTurmaTentativa.minutos));
            console.log("Diferenca: "+diferenca);
            if(diferenca < 120){
              coincide = true;
            }
        }
      }
    }
  }
  return coincide;
}

//recebe uma lista de alunos e retorna apenas os que não estão matriculados na turma com id passado como paramento
function filtrarAlunos(alunos,idTurma){
  return _.filter(alunos,function(o){
   console.log(o);
   if(o.listaTurmas.indexOf(idTurma) == '-1'){
     return o;
   }
 })
}

//verifica se a turma possui capacidade para todos os alunos com cadastro para serem realizados
function verificaCapacidadeTurma(turma){
  if((Number(turma.quantidadeAlunosCadastrados) + cadastro.listaAlunos.length) <= Number(turma.quantidadeMaxAlunos)){
    return true;
  }else return false;
}
