function ListarCli(){
$.ajax({
url: "http://localhost:8080/ListarClient",
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
mostrarTC(respuesta);
}
})
}

function mostrarTC(filas){
let myTablaC="<table>";
for(i=0; i<filas.length; i++){
myTablaC += "<tr>"
myTablaC += "<td>"+filas[i].id+"</td>"
myTablaC += "<td>"+filas[i].name+"</td>"
myTablaC += "<td>"+filas[i].email+"</td>"
myTablaC += "<td>"+filas[i].age+"</td>"
myTablaC += "<td><buttton onclick='cargarDatos("+filas[i].id+")'>Editar</button></td>"
myTablaC += "<td><buttton onclick='eliminarCliente("+filas[i].id+")'>Eliminar</button></td>"

myTablaC += "</tr>"
}
myTablaC+="</table>";
$('#cliespecifi').empty;
$('#tablaC').append(myTablaC);
}

function consultaCli(){
let codigoC=$("#idCli").val();
$.ajax({
url:"http://localhost:8080/BuscarCli/"+codigoC,
type: "GET",
dataype: "JSON",
success:function(respuesta){
console.log(respuesta);
texto=respuesta.id+"  --  " +respuesta.name +"  --  "+respuesta.email+"  --  "+respuesta.age;
$('#cliespecifi').empty;
$('#cliespecifi').append(texto);

}
});
}

function guardarClient(){
let datos =
{
id:$('#idC_insert').val(),
name:$('#nameC_insert').val(),
email:$('#emailC_insert').val(),
age:$('#ageC_insert').val(),
}
let datosEnvio=JSON.stringify(datos);
//console.log(datosEnvio);
$.ajax({
url:"http://localhost:8080/InsertarCliente",
type:"POST",
data:datosEnvio,
contentType:"application/JSON",
dataype:JSON,
success:function(respuesta){
alert(respuesta);
}
});
}