function ListarCli(){
$('#tablaC').show();
$('#crearN').hide();
$('#guardarC').hide();
$('#actualizarC').hide();

$.ajax({

url: "http://localhost:8080/api/Client/all",
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTC(respuesta);

}
})
}

function mostrarTC(filas){
let myTablaC="<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>EMAIL</th><th scope='col'>PASSWORD</th><th scope='col'>NAME</th><th scope='col'>AGE</th><th scope='col'>MESSAGES</th><th scope='col'>RESERVATIONS</th><th scope='col'></th><th scope='col'></th></tr></thead>";
for(i=0; i<filas.length; i++){
myTablaC += "<tbody class='table-group-divider'>"
myTablaC += "<tr>"
myTablaC += "<td>"+filas[i].idClient+"</td>"
myTablaC += "<td>"+filas[i].email+"</td>"
myTablaC += "<td>"+filas[i].password+"</td>"
myTablaC += "<td>"+filas[i].name+"</td>"
myTablaC += "<td>"+filas[i].age+"</td>"
myTablaC += "<td>"+filas[i].messages+"</td>"
myTablaC += "<td>"+filas[i].reservations+"</td>"
myTablaC += "<td><button type='button' class='btn btn-outline-warning' onclick='cargarDatos(\""+filas[i].idClient+"\")'>Editar</button></td>"
myTablaC += "<td><button type='button' class='btn btn-outline-danger' onclick='eliminarCliente(\""+filas[i].idClient+"\")'>Eliminar</button></td>"
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
let idClient=$("#idCli").val();
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$.ajax({
url:"http://localhost:8080/api/Client/"+idClient,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
$('#idC_insert').val(respuesta.idClient);
$('#emailC_insert').val(respuesta.email);
$('#emailC_insert').attr('disabled', 'disabled');
$('#passwordC_insert').val(respuesta.password);
$('#passwordC_insert').attr('disabled', 'disabled');
$('#nameC_insert').val(respuesta.name);
$('#nameC_insert').attr('disabled', 'disabled');
$('#ageC_insert').val(respuesta.age);
$('#ageC_insert').attr('disabled', 'disabled');
$('#messagesC_insert').val(respuesta.message);
$('#reservationC_insert').val(respuesta.reservation)
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
email:$('#emailC_insert').val(),
password:$('#passwordC_insert').val(),
name:$('#nameC_insert').val(),
age:$('#ageC_insert').val()
}
let datosEnvio=JSON.stringify(datos);
//console.log(datosEnvio);
$.ajax({
url:"http://localhost:8080/api/Client/save",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
dataype:JSON,
success:function(respuesta){
alert("Se guardo correctamente");
$('#crearN').hide();
$("#todo").load('Client.html');
ListarCli()
$('#tablaC').show();
}
});
}

function cargarDatos(idClient){
$('#crearN').show();
$('#guardarC').hide();
$('#actualizarC').show();
$('#tablaC').hide();
$.ajax({
url:"http://localhost:8080/api/Client/"+idClient,
type: "GET",
dataype: "JSON",
success:function(respuesta){
$('#idC_insert').val(respuesta.idClient);
$('#emailC_insert').val(respuesta.email);
$('#emailC_insert').attr('disabled', 'disabled');
$('#passwordC_insert').val(respuesta.password);
$('#nameC_insert').val(respuesta.name);
$('#ageC_insert').val(respuesta.age);
$('#messagesC_insert').val(respuesta.message);
$('#reservationC_insert').val(respuesta.reservation)
}
});
}

function actualizarClient(){
let datos = {
idClient: $('#idC_insert').val(),
name:$('#nameC_insert').val(),
email:$('#emailC_insert').val(),
password:$('#passwordC_insert').val(),
age:$('#ageC_insert').val()
}
let datosJson=JSON.stringify(datos);
$.ajax({
url:"http://localhost:8080/api/Client/update",
type:"PUT",
data: datosJson,
contentType:"application/JSON",
dataType: "JSON",
success: function(respuesta){
console.log(respuesta);
$("#todo").load('Client.html');
ListarCli();
alert(respuesta + 'Cliente modificado exitosamente');
$('#crearN').hide();
}
});
$('#nameC_insert').val("");
$('#nameC_insert').removeAttr('disabled');
$('#emailC_insert').val("");
$('#emailC_insert').removeAttr('disabled');
$('#passwordC_insert').val("");
$('#passwordC_insert').removeAttr('disabled');
$('#ageC_insert').val("");
$('#ageC_insert').removeAttr('disabled');
$('#crearN').hide();
}

function eliminarCliente(idClient){
alert(idClient);
var opcion=confirm("¿Está seguro de eliminar el libro " +idClient);
if(opcion==true){
$.ajax({
url:"http://localhost:8080/api/Client/"+idClient,
type:"DELETE",
dataType:"JSON",
success: function(respuesta){
$("#todo").load('Client.html');
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
$("#todo").load('Client.html');
$('#idC_insert').val("");
$('#nameC_insert').val("");
$('#nameC_insert').removeAttr('disabled');
$('#emailC_insert').val("");
$('#emailC_insert').removeAttr('disabled');
$('#passwordC_insert').val("");
$('#passwordC_insert').removeAttr('disabled');
$('#ageC_insert').val("");
$('#ageC_insert').removeAttr('disabled');
$('#crearN').hide();
$('#actualizarC').hide();
$('#tablaC').hide();
$('#guardarC').hide();

}