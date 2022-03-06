var A,D,PA,PD,total;

A=prompt("Ingrese el numero de estudiantes aprobados");
D=prompt("Ingrese el numero de estudiantes desaprobados");

total=parseInt(A)+parseInt(D);
PA=parseInt(A)*100/parseInt(total);
PD=parseInt(D)*100/parseInt(total);
document.write("Total de estudiantes: ",+total);
document.write("Porcentajde de aprobados: ",+PA);
document.write("Porcentaje de desaprobados: ",+PD);