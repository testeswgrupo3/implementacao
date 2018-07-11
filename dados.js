  var alunosFullTeaching;
  var turmasFullTeaching;
  $.ajax({
     type : "GET",
     dataType : "json",
     crossDomain: true,
     async:false,
     url : 'http://146.48.84.228/testesw2018/grupo3.php?acao=2',
     success: function(data){
      console.log("<alunos recebidos>");
      console.log(data);
      console.log("</alunos recebidos>");
       alunosFullTeaching=data.alunos;
     },
     error: function(err){
       console.error(err);
     }
   });

   $.ajax({
      type : "GET",
      dataType : "json",
      crossDomain: true,
      async:false,
      url : 'http://146.48.84.228/testesw2018/grupo3.php?acao=1',
      success: function(data){
        console.log("<truemas recebidos>");
        console.log(data);
        console.log("</trumas recebidos>");
        turmasFullTeaching= data.turmas;
      },
      error: function(err){
        console.error(err);
      }
    });
