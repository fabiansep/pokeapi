$(function () {

  //swal("Debe Seleccionar Pokemon", "", "error");
  $('#table_id').DataTable(); 


});



$("#btn_Buscar").click(function () {

   if($("#inputPokeName").val()==""){
      swal("Debe Seleccionar Pokemon", "", "error");
    return;
   }
   else{

    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/'+$("#inputPokeName").val(),
      type: 'GET',
      dataType: 'json',
      success: function (data) {

        $('#table_id').html('');
        $('#table_id').append('<thead><tr class="table-titulo"> <th>Movimiento</th><th>Altura</th><th>Peso</th></tr></thead><tbody class="table-body">');

        var i = 0;
        var x = data.moves.length;

        for(i=0;i<x;i++){
          var content = '<tr>'

          + '<td style="text-align:center">' + data.moves[i].move.name + '</td>'
          + '<td style="text-align:center">' + data.height  + '</td>'
          + '<td style="text-align:center">' + data.weight + '</td>'
          '</tr>';
          $('#table_id').append(content);
          console.log(i);
        }


        $('#table_id').append('</tbody>');

      },
      error: function (request, error) {
          //alert("Request: " + JSON.stringify(request));
          var mensaje = "No se encontró pokemon";
          swal(mensaje, "", "error");
      }
  });


    


   }


});