var nombre,n1,n2,n3,promedio;

nombre=prompt("Nombre del estudiante");
n1=prompt("Ingrese nota 1");
n2=prompt("Ingrese nota 2");
n3=prompt("Ingrese nota 3");

promedio= (parseFloat(n1) +parseFloat (n2) + parseFloat(n3))/3;
if (promedio >= 6.95 ){
    document.write("Su nota promedio es de: " +promedio);
    
    document.write("El estudiante ",nombre, "APROBADO");
}else{
    document.write("Su nota promedio es de: ",+promedio);
    
    document.write("El estudiante ",nombre, "REPROBADO");
}