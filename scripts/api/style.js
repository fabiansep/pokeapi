
$( document ).ready(function() {

    $("#opc_decimal_latitud").show();
    $("#opc_decimal_longitud").show();

    $("#opc_grados_latidud").hide();
    $("#opc_grados_lontiud").hide();
    $("#opc_grados_altura").hide();
    $("#div1").hide();

    $("#opcion_utm_norte").hide();
    $("#opcion_utm_zona").hide();
    $("#opcion_utm_este").hide();
    $("#opc_utm_elegir_zona").hide();
    $("#opcion_zona_distinta").hide();
    $("#vw_resultado_seleccionado").hide();


    $("#opc_grados_altura").hide();


});


$( "#opc_grados_lat_opc" )
  .change(function () {
    var str = "";
    $( "#opc_grados_lat_opc option:selected" ).each(function() {
      str = $( this ).val();
    });


     switch(str){

         case "decimal":
                 decimal();
                 break;
         case "grado":
                 grado();
                 break;
         case "utm":
                 utm();
                 break;
     }



  })
  .change();



function decimal() {

    $(".dropdown-toggle.btn").html('Decimal de Grado<i class="icon-caret-down"></i>');

    $("#opc_grados_latidud").hide();
    $("#opc_grados_lontiud").hide();
    $("#opc_grados_altura").hide();

    $("#opcion_utm_norte").hide();
    $("#opcion_utm_zona").hide();
    $("#opcion_utm_este").hide();
    $("#opc_utm_elegir_zona").hide();
    $("#opcion_zona_distinta").hide();
	$("#vw_resultado_seleccionado").hide();
	
    $("#opc_decimal_longitud").show();
    $("#opc_decimal_latitud").show().focus();

}

function grado() {

    $(".dropdown-toggle.btn").html('Grado Minutos y Segundos<i class="icon-caret-down"></i>');

    $("#opc_decimal_latitud").hide();
    $("#opc_decimal_longitud").hide();

    $("#opc_grados_latidud").show();
    $("#opc_grados_lontiud").show();
    $("#opc_grados_altura").show();

    $("#opcion_utm_norte").hide();
    $("#opcion_utm_zona").hide();
    $("#opcion_utm_este").hide();
    $("#opc_utm_elegir_zona").hide();
    $("#opcion_zona_distinta").hide();
	$("#vw_resultado_seleccionado").hide();
}

function utm() {
    $(".dropdown-toggle.btn").html('U.T.M.<i class="icon-caret-down"></i>');

    $("#opc_decimal_latitud").hide();
    $("#opc_decimal_longitud").hide();

    $("#opc_grados_latidud").hide();
    $("#opc_grados_lontiud").hide();
    $("#opc_grados_altura").hide();

    $("#opcion_utm_norte").show();
    $("#opcion_utm_zona").show();
    $("#opcion_utm_este").show();
    $("#opc_utm_elegir_zona").show();
    $("#opcion_zona_distinta").hide();
	$("#vw_resultado_seleccionado").hide();

}


$( "#optionOutputNo" ).click(function() {
  $("#zonaOutput").attr({"zona-output":"no"});
  $("#opcion_zona_distinta").hide();
  $("#vw_resultado_seleccionado").hide();
  
});

$( "#optionOutputSi" ).click(function() {
  $("#zonaOutput").attr({"zona-output":"si"});
  $("#opcion_zona_distinta").show();
  $("#vw_resultado_seleccionado").show();
});


$( "#optionsRadios1" ).click(function() {
  $("#transformacion").attr({"data-origen":"WSG84","data-final":"PSAD56"});
});

$( "#optionsRadios2" ).click(function() {
  $("#transformacion").attr({"data-origen":"WSG84","data-final":"SAD69"});
});

$( "#optionsRadios3" ).click(function() {
  $("#transformacion").attr({"data-origen":"PSAD56","data-final":"WSG84"});
});

$( "#optionsRadios4" ).click(function() {
  $("#transformacion").attr({"data-origen":"SAD69","data-final":"WSG84"});
});
