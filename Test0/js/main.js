$(document).ready(function(){
	    	$("button").click(function(){

	    		alert($("textarea").val());
	    		var txt=$("textarea").text();	    		
	    		$("ol").append("<li>", '<input class="check" type="checkbox">', txt , '<i class="material-icons">delete</i>', "</li>");
		});

	});
















































/* Division

var num1 = prompt("Escribe un numero");
console.log(num1);

var num2 = prompt("Escribe otro numero");
console.log(num2);

var resultado  = num1 / num2;
console.log (resultado);

document.write ("El resultado de divir " + num1 + " / " + num2 + " es igual a: " + resultado);
 */

 /* Nombre Apellido Ciudad donde vives

 var nombre = prompt ("Escribe tu nombre");
 var apellido = prompt ("Escribe tu apellido");
 var ciudad = prompt ("Escribe tu ciudad");

 document.write ("Hola ", nombre, " ", apellido, " de ", ciudad, ".");

 */

 /* Los dias que llevas existiendo en la tierra
 var nombre = prompt ("Escribe tu nombre");
 var edad = prompt ("Escribe tu edad");
 var resultado = edad  *  365

 document.write ("Hola ", nombre, " tienes ", resultado, " dias existiendo en la tierra.")*/


 /* Area de un circulo
 var radio = prompt ("Escribe el radio del circulo");
 var radioalcuadrado = radio * radio
 var resultado = 3.1416  *  radioalcuadrado

 document.write("El area del circulo es ", resultado, ".");
*/

 /*Area de un circulo2
var radio = prompt ("Escribe el radio del circulo");
var resultado = Math.PI.pow(radio, 2);
var resultado = resultado.toFixed (2);

document.write(resultado);*/

 /*Area de un triangulo
var base = prompt ("Escribe la base");
var altura = prompt ("Escribe la altura");
var resultado = (base * altura) / 2;

document.write(resultado);
*/

 /* Factorial
var num = prompt ("Escribe un numero");
for(var i=1;i< 5;i++){
num = i*num;
}
document.write(num);

*/
 /* Suma Resta Multiplicacion cuando pides 2 Numeros al usuario

var num1 = parseInt(prompt ("Escribe un numero"));
var num2 = parseInt(prompt ("Escribe otro numero"));
var add = +num1 + +num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division =num1 / num2;

if (num1 > num2){
	document.write("Tu primer numero fue: ", num1, " . Y tu segundo numero fue: ", num2, " . ");
	document.write("La suma de ambos numeros es: ", add, " . ");
	document.write ("La resta de ambos numeros es: ", resta,  " . ");

} else if (num1<num2){
	document.write("Tu primer numero fue: ", num1, " . Y tu segundo numero fue: ", num2, " . ");
	document.write("La multiplicacion de ambos numeros es: ", multiplicacion, " . ");
	document.write ("La division de ambos numeros es: ", division, " . ");
	
} else{
	var num1 = prompt ("Tus numeros son iguales. Escribe un numero.");
	var num2 = prompt ("Escribe otro numero.");
}

*/

 /*  Array
var meses=["Enero ", "Febrero ", "Marzo ", "Abril ", "Mayo ", "Junio ", "Julio ", "Agosto ", "Septiembre ", "Octubre ", "Noviembre ", "Diciembre "];
	alert (meses.join("\n"));
*/
 /*  Suma 10 Digitos
var n1 = +prompt ("Escribe el primer numero");
var n2 = +prompt ("Escribe el segundo numero");
var n3 = +prompt ("Escribe el tercer numero");
var n4 = +prompt ("Escribe el cuarto numero");
var n5 = +prompt ("Escribe el quinto numero");
var n6 = +prompt ("Escribe el sexto numero");
var n7 = +prompt ("Escribe el septimo numero");
var n8 = +prompt ("Escribe el octavo numero");
var n9 = +prompt ("Escribe el noveno numero");
var n10 = +prompt ("Escribe el decimo numero");

var total= (n1 + n2+ n3 + n4+ n5 + n6 + n7 + n8 + n9 + n10) ;
document.write("La suma de los 10 digitos es: ", total, " .");
*/


/* Numero Par o Impar

var num= prompt ("Escribe un numero y te diremos si es par o impar.")

if (num %2 == 0) {
		document.write("Es par. ");
	} 

else{
		document.write("Es impar.");
	}
	
*/

/* 
 Numeros de menor a mayor

var n1 = prompt ("Escribe el primer numero");
var n2 = prompt ("Escribe el segundo numero");
var n3 = prompt ("Escribe el tercer numero");

var numeros = [n1, n2, n3];

numeros = numeros.sort();
document.write("El orden de los numeros de menor a mayor es: ", numeros);

*/

/* Numero telefonico 

var n1 = prompt ("Escribe el primer numero de telefono");
var p1 = prompt ("Escribe el dueño");
var n2 = prompt ("Escribe el segundo numero de telefono");
var p2 = prompt ("Escribe el dueño");
var n3 = prompt ("Escribe el tercer numero de telefono");
var p3 = prompt ("Escribe el dueño");
var element =prompt ("Hola soy una Agenda Digital!!!! Ingresa el numero de la persona que buscas.");



if (element == n1) {
	document.write("El dueño debe ser: ", p1);
}

else if (element == n2){
	document.write("El dueño debe ser: ", p2);
}

else {
	document.write("El dueño debe ser: ", p3);
}



*/
