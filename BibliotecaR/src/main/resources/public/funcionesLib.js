function ListarLib(){
$('#tablaC').show();
$('#crearN').hide();
$('#guardarC').hide();
$('#actualizarC').hide();

$.ajax({

url: "http://localhost:8080/api/Lib/all",
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTC(respuesta);

}
})
}

function mostrarTC(filas){
let myTablaC="<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>NAME</th><th scope='col'>TARGET</th><th scope='col'>CAPACITY</th><th scope='col'>DESCRIPTION</th><th scope='col'>CATEGORY</th><th scope='col'>MESSAGE</th><th scope='col'>RESERVATION</th><th scope='col'></th><th scope='col'></th></tr></thead>";
for(i=0; i<filas.length; i++){
myTablaC += "<tbody class='table-group-divider'>"
myTablaC += "<tr>"
myTablaC += "<td>"+filas[i].id+"</td>"
myTablaC += "<td>"+filas[i].name+"</td>"
myTablaC += "<td>"+filas[i].target+"</td>"
myTablaC += "<td>"+filas[i].capacity+"</td>"
myTablaC += "<td>"+filas[i].description+"</td>"
myTablaC += "<td>"+filas[i].category+"</td>"
myTablaC += "<td>"+filas[i].messages+"</td>"
myTablaC += "<td>"+filas[i].reservations+"</td>"
myTablaC += "<td><button type='button' class='btn btn-outline-warning' onclick='cargarDatos(\""+filas[i].id+"\")'>Editar</button></td>"
myTablaC += "<td><button type='button' class='btn btn-outline-danger' onclick='eliminarLib(\""+filas[i].id+"\")'>Eliminar</button></td>"
myTablaC += "</tr>"
myTablaC += "</tbody>"
}
myTablaC+="</table>";
$('#libespecifi').empty;
$('#tablaC').append(myTablaC);
}

function consultaCli(){
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
let idClient=$("#idLib").val();
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$.ajax({
url:"http://localhost:8080/api/Lib/"+idClient,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
$('#idLib_insert').val(respuesta.idClient);
$('#nameLib_insert').val(respuesta.email);
$('#nameLib_insert').attr('disabled', 'disabled');
$('#targetlib_insert').val(respuesta.email);
$('#targetlib_insert').attr('disabled', 'disabled');
$('#capacityLib_insert').val(respuesta.password);
$('#capacityLib_insert').attr('disabled', 'disabled');
$('#descriptionLib_insert').val(respuesta.name);
$('#descriptionLib_insert').attr('disabled', 'disabled');
$('#categoryLib_insert').val(respuesta.age);
$('#categoryLib_insert').attr('disabled', 'disabled');
$('#messagesLib_insert').val(respuesta.message);
$('#messagesLib_insert').val(respuesta.reservation);
$('#reservationsLib_insert').val(respuesta.message);
$('#reservationsLib_insert').val(respuesta.reservation)
}
});
/*$.ajax({
url:"http://localhost:8080/api/Lib/"+codigoC,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
texto=respuesta.idClient+"  --  " +respuesta.email +"  --  "+respuesta.password+"  --  "+respuesta.name+"  --  "+respuesta.age+"  --  "+respuesta.messages+"  --  "+respuesta.reservations;
$('#libespecifi').empty;
$('#libespecifi').append(texto);

}
});*/
}

function guardarLib(){

let datos =
{
email:$('#emailC_insert').val(),
password:$('#passwordC_insert').val(),
name:$('#nameC_insert').val(),
age:$('#ageC_insert').val()
}
let datosEnvio=JSON.stringify(datos);
//console.log(datosEnvio);
$.ajax({
url:"http://localhost:8080/api/Lib/save",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
dataype:JSON,
success:function(respuesta){
alert("Se guardo correctamente");
$('#crearN').hide();
$("#todo").load('Lib.html');
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
url:"http://localhost:8080/api/Lib/"+idClient,
type: "GET",
dataype: "JSON",
success:function(respuesta){
$('#idLib_insert').val(respuesta.id);
$('#nameLib_insert').val(respuesta.name);
$('#nameLib_insert').attr('disabled', 'disabled');
$('#targetlib_insert').val(respuesta.target);
$('#capacityLib_insert').val(respuesta.capacity);
$('#descriptionLib_insert').val(respuesta.description);
$('#categoryLib_insert').val(respuesta.category);
$('#messagesLib_insert').val(respuesta.messages);
$('#reservationsLib_insert').val(respuesta.reservations)
}
});
}

function actualizarLib(){
let datos = {
id: $('#idLib_insert').val(),
name:$('#nameLib_insert').val(),
target:$('#targetlib_insert').val(),
capacity:$('#capacityLib_insert').val(),
description:$('#descriptionLib_insert').val()
}
let datosJson=JSON.stringify(datos);
$.ajax({
url:"http://localhost:8080/api/Lib/update",
type:"PUT",
data: datosJson,
contentType:"application/JSON",
dataType: "JSON",
success: function(respuesta){
console.log(respuesta);
$("#todo").load('Lib.html');
ListarCli();
alert(respuesta + 'Libreria modificado exitosamente');
$('#crearN').hide();
}
});
$('#idLib_insert').val("");
$('#nameLib_insert').val("");
$('#nameLib_insert').removeAttr('disabled');
$('#targetlib_insert').val("");
$('#targetlib_insert').removeAttr('disabled');
$('#capacityLib_insert').val("");
$('#capacityLib_insert').removeAttr('disabled');
$('#descriptionLib_insert').val("");
$('#descriptionLib_insert').removeAttr('disabled');
$('#crearN').hide();
}

function eliminarLib(id){
alert(idClient);
var opcion=confirm("¿Está seguro de eliminar la libreria? " +idClient);
if(opcion==true){
$.ajax({
url:"http://localhost:8080/api/Lib/"+idClient,
type:"DELETE",
dataType:"JSON",
success: function(respuesta){
$("#todo").load('Lib.html');
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
$("#todo").load('Lib.html');
$('#idLib_insert').val("");
$('#nameLib_insert').val("");
$('#nameLib_insert').removeAttr('disabled');
$('#targetlib_insert').val("");
$('#targetlib_insert').removeAttr('disabled');
$('#capacityLib_insert').val("");
$('#capacityLib_insert').removeAttr('disabled');
$('#descriptionLib_insert').val("");
$('#descriptionLib_insert').removeAttr('disabled');
$('#crearN').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$('#guardarC').hide();

}