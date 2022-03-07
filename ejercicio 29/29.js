var num = new Number();
	var i = new Number();
	var j = new Number();
num=prompt("Ingrese un numero")

	document.write("Ingrese un numero",'<BR/>');
	num = Number(prompt());
	for (i=num;i>=1;i--) {
		for (j=1;j<=i;j++) {
			document.write(j);
		}
		// enter
		document.write("",'<BR/>');
	}