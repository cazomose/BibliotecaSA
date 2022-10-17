function ListarCli(){
$('#tablaC').show();
$('#crearN').hide();
$('#guardarC').hide();
$('#actualizarC').hide();

$.ajax({

url: "http://localhost:8080/api/Category/all",
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTC(respuesta);

}
})
}

function mostrarTC(filas){
let myTablaC="<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>NAME</th><th scope='col'>DESCRIPTION</th><th scope='col'>LIBS</th><th scope='col'></th><th scope='col'></th></tr></thead>";
for(i=0; i<filas.length; i++){
myTablaC += "<tbody class='table-group-divider'>"
myTablaC += "<tr>"
myTablaC += "<td>"+filas[i].id+"</td>"
myTablaC += "<td>"+filas[i].name+"</td>"
myTablaC += "<td>"+filas[i].description+"</td>"
myTablaC += "<td>"+filas[i].libs+"</td>"
myTablaC += "<td><button type='button' class='btn btn-outline-warning' onclick='cargarDatos(\""+filas[i].id+"\")'>Editar</button></td>"
myTablaC += "<td><button type='button' class='btn btn-outline-danger' onclick='eliminarCliente(\""+filas[i].id+"\")'>Eliminar</button></td>"
myTablaC += "</tr>"
myTablaC += "</tbody>"
}
myTablaC+="</table>";
$('#cliespecifi').empty;
$('#tablaC').append(myTablaC);
}

function consultaCli(){
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
let idC=$("#idCli").val();
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$.ajax({
url:"http://localhost:8080/api/Category/"+idC,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
$('#idCa_insert').val(respuesta.id);
$('#nameCa_insert').val(respuesta.name);
$('#nameCa_insert').attr('disabled', 'disabled');
$('#descriptionCa_insert').val(respuesta.description);
$('#descriptionCa_insert').attr('disabled', 'disabled');
$('#libsCa_insert').val(respuesta.libs);
$('#descriptionCa_insert').attr('disabled', 'disabled');
}
});
/*$.ajax({
url:"http://localhost:8080/api/Client/"+codigoC,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
texto=respuesta.idClient+"  --  " +respuesta.email +"  --  "+respuesta.password+"  --  "+respuesta.name+"  --  "+respuesta.age+"  --  "+respuesta.messages+"  --  "+respuesta.reservations;
$('#cliespecifi').empty;
$('#cliespecifi').append(texto);

}
});*/
}

function guardarClient(){

let datos =
{
name:$('#nameCa_insert').val(),
description:$('#descriptionCa_insert').val()
}
let datosEnvio=JSON.stringify(datos);
//console.log(datosEnvio);
$.ajax({
url:"http://localhost:8080/api/Category/save",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
dataype:JSON,
success:function(respuesta){
alert("Se guardo correctamente");
$('#crearN').hide();
$("#todo").load('Category.html');
ListarCli()
$('#tablaC').show();
}
});
}

function cargarDatos(id){
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').show();
$('#tablaC').hide();
$.ajax({
url:"http://localhost:8080/api/Category/"+id,
type: "GET",
dataype: "JSON",
success:function(respuesta){
$('#idCa_insert').val(respuesta.id);
$('#nameCa_insert').val(respuesta.name);
$('#descriptionCa_insert').val(respuesta.description);
$('#libsCa_insert').val(respuesta.libs);
}
});
}

function actualizarClient(){
let datos = {
id: $('#idCa_insert').val(),
name:$('#nameCa_insert').val(),
description:$('#descriptionCa_insert').val()
}
let datosJson=JSON.stringify(datos);
$.ajax({
url:"http://localhost:8080/api/Category/update",
type:"PUT",
data: datosJson,
contentType:"application/JSON",
dataType: "JSON",
success: function(respuesta){
console.log(respuesta);
$("#todo").load('Category.html');
ListarCli();
alert(respuesta + 'Modificado exitosamente');
$('#crearN').hide();
}
});
$('#idCa_insert').val("");
$('#nameCa_insert').val("");
$('#nameCa_insert').removeAttr('disabled');
$('#descriptionCa_insert').val("");
$('#descriptionCa_insert').removeAttr('disabled');
$('#crearN').hide();
}

function eliminarCliente(id){
alert(id);
var opcion=confirm("¿Está seguro de eliminar la categoria " +id);
if(opcion==true){
$.ajax({
url:"http://localhost:8080/api/Category/"+id,
type:"DELETE",
dataType:"JSON",
success: function(respuesta){
$("#todo").load('Category.html');
ListarCli();
alert("Se elimino correctamente");
}
});
}
}

function Guarda(){

$('#crearN').show();
$('#actualizarC').hide();
$('#tablaC').hide();
$('#guardarC').show();
}

function Limpiar(){
$("#todo").load('Category.html');
$('#idCa_insert').val("");
$('#nameCa_insert').val("");
$('#nameCa_insert').removeAttr('disabled');
$('#descriptionCa_insert').val("");
$('#descriptionCa_insert').removeAttr('disabled');
$('#libsCa_insert').val("");
$('#libsCa_insert').removeAttr('disabled');
$('#crearN').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$('#guardarC').hide();

}
