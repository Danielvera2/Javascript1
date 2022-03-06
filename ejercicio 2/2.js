var nombre, htrabajadas, vhora, sueldo;

nombre=prompt("Ingrese el nombre del trabajador")

htrabajadas=prompt("Ingrese el numero de horas trabajadas al mes")

vhora=prompt("Ingrese el valor por hora")

sueldo = parseInt(htrabajadas)*parseInt(vhora);

document.write("Debe recicbir un sueldo de: ", + sueldo)