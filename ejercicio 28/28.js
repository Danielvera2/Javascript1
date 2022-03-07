var notas,suma,n,acum,prom;
acum=1;
suma=0;

notas=prompt("Cuantas notas va a ingresar")
while (acum<=notas) {
    n=prompt("Ingrese la nota N° ",+acum,".");
    suma=parseInt(suma)+parseInt(n);
    acum=acum+1;
}
prom=suma/notas
document.write("El promedio es: ",+prom)