

var a = 0 ;
var resultadoS = 0;
var contador = 0;
var operador = "";
var operacion = "";

function num1(b){

	a = a+b;
	contador = contador +1;

		if (contador == 2) { 
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 3) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 4) { 
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 5) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 6) { 
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 7) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 8) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 9) { 
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 10) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 11) { 
			a = a - b;
			a = a * 10;
			a = a+b;
		}
		if (contador == 12) {
			a = a - b;
			a = a * 10;
			a = a+b;
		}		
}

function sumar(){

	var sumaFirst = operador.localeCompare("");
	var suma = operador.localeCompare(" + ");
	var resta = operador.localeCompare(" - ");
	var multiplicar = operador.localeCompare(" * ");
	var dividir = operador.localeCompare(" / ");



	if (sumaFirst==0) {
		resultadoS = a;
		contador = 0;
		operador = " + ";
		mostrarOperador();
	}

	if (suma==0) {
		resultadoS = resultadoS + a;
		contador = 0;
		operador = " + ";
		mostrarOperador();

	}
	if (resta==0) {
		resultadoS = resultadoS - a;
		contador = 0;
		operador = " + ";
		mostrarOperador();
		
	}
	if (multiplicar==0) {
		resultadoS = resultadoS * a;
		contador = 0;
		operador = " + ";
		mostrarOperador();
		
	}
	if (dividir==0) {
		resultadoS = resultadoS / a;
		contador = 0;
		operador = " + ";
		mostrarOperador();
		
	}
}

function restar(){

	var restaFirst = operador.localeCompare("");
	var suma = operador.localeCompare(" + ");
	var resta = operador.localeCompare(" - ");
	var multiplicar = operador.localeCompare(" * ");
	var dividir = operador.localeCompare(" / ");

	if (restaFirst==0) {

		resultadoS = a;
		contador = 0;
		operador = " - ";
	}

	if (suma==0) {
		resultadoS = resultadoS + a;
		contador = 0;
		operador = " - ";

	}
	if (resta==0) {
		resultadoS = resultadoS - a;
		contador = 0;
		operador = " - ";
		
	}
	if (multiplicar==0) {
		resultadoS = resultadoS * a;
		contador = 0;
		operador = " - ";
		
	}
	if (dividir==0) {
		resultadoS = resultadoS / a;
		contador = 0;
		operador = " - ";
		
	}
}

function multiplicar(){

	var multiFirst = operador.localeCompare("");
	var suma = operador.localeCompare(" + ");
	var resta = operador.localeCompare(" - ");
	var multiplicar = operador.localeCompare(" * ");
	var dividir = operador.localeCompare(" / ");

	if (multiFirst==0) {

		resultadoS = a;
		contador = 0;
		operador = " * ";
	}

	if (suma==0) {
		resultadoS = resultadoS + a;
		contador = 0;
		operador = " * ";

	}
	if (resta==0) {
		resultadoS = resultadoS - a;
		contador = 0;
		operador = " * ";
		
	}
	if (multiplicar==0) {
		resultadoS = resultadoS * a;
		contador = 0;
		operador = " * ";
		
	}
	if (dividir==0) {
		resultadoS = resultadoS / a;
		contador = 0;
		operador = " * ";
		
	}
}

function dividir(){

	var divFirst = operador.localeCompare("");
	var suma = operador.localeCompare(" + ");
	var resta = operador.localeCompare(" - ");
	var multiplicar = operador.localeCompare(" * ");
	var dividir = operador.localeCompare(" / ");

	if (divFirst==0) {

		resultadoS = a;
		contador = 0;
		operador = " / ";
	}

	if (suma==0) {
		resultadoS = resultadoS + a;
		contador = 0;
		operador = " / ";

	}
	if (resta==0) {
		resultadoS = resultadoS - a;
		contador = 0;
		operador = " / ";
		
	}
	if (multiplicar==0) {
		resultadoS = resultadoS * a;
		contador = 0;
		operador = " / ";
		
	}
	if (dividir==0) {
		resultadoS = resultadoS / a;
		contador = 0;
		operador = " / ";
		
	}
}

function igual(){


	var suma = operador.localeCompare(" + ");
	var resta = operador.localeCompare(" - ");
	var multiplicar = operador.localeCompare(" * ");
	var dividir = operador.localeCompare(" / ");

	if (suma==0) {

	resultadoS = resultadoS + a;
	a = 0 ;
	contador = 0;
	operador = "";
	operacion = "";
	l1.innerHTML=resultadoS;
	resultadoS = 0;
	}

	if (resta==0) {

	resultadoS = resultadoS - a;
	a = 0 ;
	contador = 0;
	operador = "";
	operacion = "";
	l1.innerHTML=resultadoS;
	resultadoS = 0;
	}

	if (multiplicar==0) {

	resultadoS = resultadoS * a;
	a = 0 ;
	contador = 0;
	operador = "";
	operacion = "";
	l1.innerHTML=resultadoS;
	resultadoS = 0;
	}

	if (dividir==0) {

	resultadoS = resultadoS / a;
	a = 0 ;
	contador = 0;
	operador = "";
	operacion = "";
	l1.innerHTML=resultadoS;
	resultadoS = 0;
	}
}

function mostrar(){

	l1.innerHTML= operacion + a ;
}

function mostrarOperador(){

	operacion =operacion + a + operador;
	l1.innerHTML = operacion;
	a = 0;
}

function borrar(){

	a = 0 ;
	resultadoS = 0;
	contador = 0;
	operador = "";
	operacion = "";
	mostrar();
}