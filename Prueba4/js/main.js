/* Cuantos años tienes 

var lenguaje = "Javascript";

alert ("Comenzando a programar");
alert (lenguaje);

prompt ("Escribe tu nombre", "Mi nombre es: ");

var nombre = prompt ("Escribe tu alias: ");

var year= prompt ("Escribe el año en que naciste");

var edad = 2018 - year;

alert ("Hola " + nombre);

document.write ("Nombre: ", nombre, " <br/> ");
document.write ("Edad: ", edad);



 //Datos 

 //Numerico

 //var numero = 19;
 //var numero= 0;*/

 // String - Cadena de texto
 /* 
 var nombre = "Isis"
 var apellido = "Cortes \ "Pisis\" ";
 document.write (nombre + " " + apellido + "<br/>");
 
 //Arreglo
 var amigos = ["Xaz", "Luz", "Sandra"];
 document.write(amigos[2] + "<br/>");

 
//Objeto
var objeto={
	color: "Black",
	fontFamily: "Arial"
}
 
//Undefined

var nodefinida;
docuemnt.write (nodefinida);

//Null
var numero = 19;
var numero = null;




//Nan
var hola = "¿Qué tal como te va?";
document.write(hola * 2);
 */

/* 
 var nuevo = prompt ("Dime el nombre de mi otro amigo desaparecido: ");
 var amigaDesaparecida = "Marisol";
 var amigos = ["Isis ", " Jazmin ", " Lizbeth ", " Ale ", amigaDesaparecida + " ", nuevo];
 // se intercambia item //
 amigos[4]="Erick";

 //Push se agregan items //
 amigos.push("Maritza ","Jessica "," Ado");

 //Pop se eliminan items //

amigos.pop();


 document.write(amigos,  ".","<br/>");

 document.write("Tu tienes: ", amigos.length, " amigos.","<br/>");

 //Agregar arreglos //

 var amigos2 =["Pepe", "Ramon", "Jose"];
 var amigos= amigos.concat(amigos2);
 var order = amigos.sort();
  //Ordena en orden alfabetico los arreglos- order//
 document.write(order.join(" : "),"<br/>")
 document.write("Ahora tienes: ", amigos.length, " amigos.");


if (edad > 18){
	if (nombre == texto || "ISIS" == texto || "isis" == "texto"){

	alert ("Hola " + nombre);
	document.write ("Hola ", texto, ".");
	}

else {
	alert ("Hola extraño");
	document.write ("Hola ", texto, ".");
	}
}


else {
	alert ("No puedes entrar, porque eres menor de edad.");
}


  if (nombre == texto || "ISIS" == texto || "isis" == "texto" && edad >= "25" ){

	alert ("Hola " + nombre);
	document.write ("Hola ", texto, ".");
	}

else {
	alert ("No puedes entrar extraño.");
}

  */


var dias =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for (i = 0;  i<=dias.length; i++){
	document.write (i+ "<br/>");
}

for (i2 = 0;  i2<=dias.length - 1; i2++){
	document.write (dias[i2] + "<br/>");
}

/* Condicional

var nombre = prompt ("Introduce tu nombre");
var contrasena= prompt ("Introduce tu contrasena");

if (contrasena == 12345 ){
	alert ("Bienvenido tienes acceso " + nombre);
	document.write ("Hola ", nombre, ".");

}else{
	alert("No eres bienvenido " + nombre);
	document.write ("Lo siento ", nombre, ". Sigue intentando.");
}

Ciclo de edad y nombre para tener acceso al portal


var edad = prompt ("Cuantos años tienes?");
var nombre = prompt("Como te llamas?");

if (edad >= 18 && nombre == "ISIS" || nombre == "Isis" || nombre == "isis"){
	alert ("Hola " + nombre);
	document.write ("Hola ", nombre, ". Tienes ", edad, " años. Bienvenida al portal");
}

else {
	alert ("Hola " + nombre + ". No puedes entrar al portal.");
	document.write ( "Tienes ", edad, " años.");
}

Array con amigos

var amigos=["Isis", "Liz", "Yazz", "Ale", "Ado", "Erick"];

for (i = 0;  i <= amigos.length && i <= 5; i++){
	document.write (amigos[i] + "<br/>");
}




var i = 1;

while (i <= 10){
	document.write ("Repeticion " + i +"</br>");
	i++;
}






var dias =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
	numero = dias.length -1 ,
	i = 0;

while (i <= numero ){
	document.write (dias[i] +"</br>");
	i++;
}





function saludo(){
	document.write ("Hola como estas");
}
saludo ();



function saludo (nombre){
	document.write ("Hola como estas " + nombre);
}

saludo("Carlos");



function suma (numero1, numero2){

	var num1= numero1;
	var num2= numero2;
	document.write (num1 + num2);
}

suma (2,4);


var suma = function (numero1, numero2){

	var num1= numero1;
	var num2= numero2;
	return num1 + num2;
}

document.write (suma(80 , 40));

var suma = function (numero1, numero2){

	var num1= numero1;
	var num2= numero2;
	return num1 + num2;
}

document.write (suma(80 , 40));
document.write ("<br/>");
document.write(suma(2,5));


function numeroMayor (valor1, valor2){
	if (valor1> valor2){
		return valor1;
	} else{
		return valor2;
	}
}
document.write("El numeroMayor es:");
document.write ("<br/>");
document.write (numeroMayor(1,5));



function nM (num1, num2){
	if (num1> num2){
		return num1;
	}
	else {
		return num2;
	}
}

document.write ("El numero mayor es :")
document.write ("<br/>")
document.write (nM (2,4));


var suma = function (){
	var nu1 = parseInt(document.getElementById ("numero1").value);
	var nu2 = parseInt(document.getElementById ("numero2").value);
	var resultado= nu1 + nu2;
	return resultado;
}



var suma = function (){
	var nu1 = parseFloat(document.getElementById ("numero1").value);
	var nu2 = parseFloat(document.getElementById ("numero2").value);
	var resultado= nu1 + nu2;
	return resultado;
}

<body>
	<form>
		<input type="text" id="numero1" />
		<input type="text" id="numero2" />
		<input type="button" value="Sumar" onclick="alert(suma());" />
	</form>
<script src="js/main.js" type="text/javascript"></script>
</body>




var vGlobal="Esta es una variable global";
var miFuncion = function(){
	alert (vGlobal);
	vGlobal = "Esta es mi variable global modificada";
    alert (vGlobal);

}

miFuncion();



var miFuncion = function(){
   variableLocal= "Esta es mi variable local.";
	
}

miFuncion();
alert (variableLocal);

*/