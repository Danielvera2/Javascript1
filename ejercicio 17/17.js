var spares,simpares, n,x;
 n=prompt("Cuantos numeros quiere sumar")

 spares=0;
 simpares=0;

for (let x = 0;x <= n; x++) {
    if (x % 2 == 0) {
        spares=spares + parseInt(x);
    }else
    simpares=simpares + parseInt(x);   
}
document.write("La suma de los ",+n,"numeros pares es de: ",spares);
document.write("La suma de los ",+n,"numeros impares es de: ",simpares);