//converdte a data exibida dos elementos par um objeto que contem os campos ano,mes,dia,hora,mim,seg respectivamente
function converteData(data){
  var aux = data.split(" ");
  var horario = aux[0].split(":");
  var dia = aux[1].split("-");
  console.log(dia[2]+" "+dia[1]+" "+dia[0]+" "+horario[0]+" "+horario[1]+" "+horario[2]+" "+0);
  return{ano:dia[2],mes:dia[1],dia:dia[0],hora:horario[0],min:horario[1],seg:horario[2]}
}

//verifica se duas turmas possuem coicidencia de horario
function bateHorario(turmaTentativa, turmaCadastrada) {
  var coincide = false;
  console.log("<Comparando>");
  console.log(turmaTentativa);
  console.log(turmaCadastrada);
  console.log("</Comparando>");
  for(var j = 0; j < turmaCadastrada.diaHora.length; j++){
    var dataTurmaCadastrada = converteData(turmaCadastrada.diaHora[j].data);
    for(var i = 0; i < turmaTentativa.diaHora.length; i++){
      var dataTurmaTentativa = converteData(turmaTentativa.diaHora[i].data);
      if(dataTurmaTentativa.ano == dataTurmaCadastrada.ano){
        if(dataTurmaTentativa.mes == dataTurmaCadastrada.mes){
          if(dataTurmaTentativa.dia == dataTurmaCadastrada.dia){
            if(dataTurmaTentativa.hora == dataTurmaCadastrada.hora){
                coincide = true;
            }
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
