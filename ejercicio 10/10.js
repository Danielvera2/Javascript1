var n;
var cont=0;
var suma=0;

n=prompt("Ingrese un numero");

do{
    cont=cont+1;
    suma= suma + cont;
}while (cont<n);

document.write("La suma de los numeros es: ",+suma);
