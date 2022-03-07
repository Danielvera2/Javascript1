var acumulador, cont, i, j, k, m, num;
num=prompt("Ingrese la cantidad de terminos")

if (num<3) {
    document.write("No se puede ejecutar con numeros menores a 3 por favor vuelve a ingresar un numero",'<BR/>');
} else {
    cont = num;
    acumulador = " ";
    for (i=1;i<=3;i++) {
        acumulador = " ";
        for (j=1;j<=cont;j++) {
            acumulador = acumulador+" * ";
        }
        cont = cont-1;
        document.write(acumulador,'<BR/>');
    }
    cont = cont+1;
    for (k=1;k<=2;k++) {
        acumulador = " ";
        cont = cont+1;
        for (m=1;m<=cont;m++) {
            acumulador = acumulador+" * ";
        }
        document.write(acumulador,'<BR/>');
    }
}
