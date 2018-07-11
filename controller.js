
$( document ).ready( function(){
  $(".grupoAluno").hide();
  var add= "";
  for(var i=0; i<turmasFullTeaching.length;i++){
    add+="<option value='"+ turmasFullTeaching[i].id+"'>"+turmasFullTeaching[i].nome+"</option>";
  }
  $("#turma").append(add);

  //função que dispara ao clicar no botao para selecionar turma
  $("#btnTurma").click(function(){
    var addAluno= "";
    var b = $("#turma").val();
    $("#nomeTurma").text(_.find(turmasFullTeaching,{"id": b}).nome);
    console.log("b");
    console.log(b);
    cadastro.idTurma=b;
    var turmaAtual = _.find(turmasFullTeaching,{"id": b});

    //lista de alunos que não estão matriculados na turma selecionada
    var listaAlunosInserir = filtrarAlunos(alunosFullTeaching,b);

    var listaAlunos = document.querySelector("#listaAlunos");
    for(var i=0; i<listaAlunosInserir.length;i++){
      var div = document.createElement("div");
      var input= document.createElement("input");
      var label = document.createElement("label");

      //criando o input
      input.setAttribute("type",'checkbox');
      var dataNumAluno = document.createAttribute('data-numAluno');
      dataNumAluno.value = 'aluno'+(i+1);
      input.setAttributeNode(dataNumAluno);
      var dataVlId = document.createAttribute("data-vlId");
      dataVlId.value =  listaAlunosInserir[i].id;
      input.setAttributeNode(dataVlId);
      var id = document.createAttribute("id");
      id.value =  'aluno'+listaAlunosInserir[i].id;
      input.setAttributeNode(id);

      //função que dispara ao clicar no checkbox
      input.addEventListener("click",(function(idAluno,label){
        return function(){
            //verifica se esta marcado
            if(this.checked){
              var coincide=false;
              var aluno =_.find( alunosFullTeaching,{"id": idAluno});
              console.log("<aluno selecionado>");
              console.log(aluno);
              console.log("</aluno selecionado>");
              //verifica se o aluno marcado coicede horário com a turma selecionada
              for(var j = 0; j < aluno.listaTurmas.length; j++){
                  if (bateHorario(turmaAtual,_.find(turmasFullTeaching,{ "id": aluno.listaTurmas[j]}))){
                      coincide = true;
                      break;
                  }
              }
              //se o aluno coincide horario com a turma selecionada desabilita o chekbox
              if(coincide){
                alert("O aluno "+aluno.nome+" tem aula nesse horario");
                label.style.textDecoration= "line-through";
                this.checked=false;
                this.removeEventListener("click",arguments.callee);
                this.disabled = true;
              }else{//caso não possua coincidencia de horario adiciona o aluno para cadastro
                cadastro.adicionarAluno(idAluno);
              }
            }else{//ao desmarcar o aluno remove o mesmo do cadastro pendente
              cadastro.removerAluno(idAluno);
            }
        }
      })(listaAlunosInserir[i].id,label));

      //cria o label para cada checkbox
      label.setAttribute("for","aluno"+listaAlunosInserir[i].id);
      label.textContent = listaAlunosInserir[i].nome;

      //emenda os elementos
      div.appendChild(input);
      div.appendChild(label);
      listaAlunos.appendChild(div);
    }
    $(".grupoAluno").show();
    $(".grupoTurma").hide();
  })

  //ao clicar no botão salvar para cadastrar os alunos a função abaixo é executada
  $("#btnAlunos").click(function(){
    var idTurma = $("#turma").val();
    var turma = _.find(turmasFullTeaching,{"id": idTurma});
    if(verificaCapacidadeTurma(turma)){
      $("#result").text("");
      $("#result").text(JSON.stringify(cadastro));
    }else{
      alert("Número máximo de alunos atingido");
    }
  })
})
