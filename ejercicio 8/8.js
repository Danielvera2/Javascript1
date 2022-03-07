var nota = new Number();
	var nombre = new String();
    nombre=prompt("Ingrese el nombre del estudiante")
    nota=prompt("Ingrese la nota del estudiante")
	if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nombre," Necesita Reforzamiento",'<BR/>');
	} else {
		if (nota>=3 && nota<=4) {
			document.write("El estudiante ",nombre,"  Desaprobado",'<BR/>');
		} else {
			if (nota>=5 && nota<=7) {
				document.write("El estudiante ",nombre,"  aprobado",'<BR/>');
			} else {
				if (nota>=8 && nota<=9) {
					document.write("El estudiante ",nombre,"  promedio EXCELENTE",'<BR/>');
				} else {
					if (nota==10) {
						document.write("El estudiante ",nombre,"  BECADO",'<BR/>');
					} else {
						document.write("Nota no valida volver a ingresar",'<BR/>');
					}
				}
			}
		}
	}
    
