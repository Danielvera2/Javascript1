var n ;
var imv;
var n1;
n=prompt("ingrese un numero")

n1 = n;
inv = 0;
do {
    inv = (inv*10)+(n%10);
    n = Math.trunc(n/10);
} while (n>0);
document.write(inv, );
if (inv==n1) {
    document.write("El numero ingresado es un palindromo");
} else {
    document.write("El numero ingresado no es un palindromo");
}
