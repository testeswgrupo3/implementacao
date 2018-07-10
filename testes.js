QUnit.test( "hello test", function( assert ) {
      assert.ok( 1 == "1", "Passed!" );
  });

QUnit.test( "vrifica se as turmas visualizadas são iguais ao MOK", function( assert ) {
      for(var i=0;i<mockTumas.length;i++){
          assert.ok( $("#turma option")[i+1].textContent == mockTumas[i].nome,"Tuma_"+ mockTumas[i].nome +"_ok!" );
          assert.ok( $("#turma option")[i+1].value == mockTumas[i].id,"Id_" +mockTumas[i].id +"_ok!" );
      }
});

QUnit.test( "vrifica se os visualizadas são iguais ao MOK", function( assert ) {
      $("#turma").val(1);
      for(var i=0;i<mockTumas.length;i++){
          assert.ok( $("#turma option")[i+1].textContent == mockTumas[i].nome,"Tuma_"+ mockTumas[i].nome +"_ok!" );
          assert.ok( $("#turma option")[i+1].value == mockTumas[i].id,"Id_" +mockTumas[i].id +"_ok!" );
      }
});
