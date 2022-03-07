var n1 = new Number();
	var n2 = new Number();
	var n3 = new Number();
    n1=prompt("Ingrese un numero")
    n2=prompt("Ingrese un numero")
    n3=prompt("Ingrese un numero")
	if ((n1>n2) && (n1>n3)) {
		document.write("El numero mayor es ",n1,'<BR/>');
	} else {
		if ((n2>n1) && (n2>n3)) {
			document.write("El numero mayor es ",n2,'<BR/>');
		} else {
			if ((n3>n1) && (n3>n2)) {
				document.write("El numero mayor es ",n3,'<BR/>');
			} else {
				document.write("Los numeros ingresados son iguales",'<BR/>');
			}
		}
	}