var num = new Number();
var nmayor = new Number();
var cont = new Number();
nmayor = 0;
cont = 1;
for (cont=1;cont<=10;cont++) {
    num=prompt("Ingrese un numero")
    if ((nmayor<num)) {
        nmayor = num;
    }
}
document.write("El numero mayor es: ",nmayor,'<BR/>');