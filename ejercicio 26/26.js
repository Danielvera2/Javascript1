var n1 = new Number();
var n2 = new Number();
var m3 = new Number();
document.write("Ingrese 3 numeros",'<BR/>');
n1 = Number(prompt());
n2 = Number(prompt());
n3 = prompt();
if (n1!=n2 && n1!=n3 && n2!=n3) {
    if ((n1>n2 && n1<n3) || (n1<n2 && n1>n3)) {
        document.write("El numero intermedio es: ",n1,'<BR/>');
    } else {
        if ((n2>n1 && n2<n3) || (n2<n1 && n2>n3)) {
            document.write("El numero intermedio es: ",n2,'<BR/>');
        } else {
            if ((n3>n1 && n3<n2) || (n3<n1 && n3>n2)) {
                document.write("El numero intermedio es: ",n3,'<BR/>');
            }
        }
    }
} else {
    document.write("Numeros iguales ingrese nuevamente",'<BR/>');
}
document.write("Los numeros son iguales")
