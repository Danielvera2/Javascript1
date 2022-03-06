var nimpares=0;
var npares=0;
cont=1;
var n;
var num
n=prompt("Cuantos numeros va a ingresar")

while (cont<=n){
    num=prompt("Ingrese el numero ",+cont);
    if(parseInt(num) % 2 == 0 ){
      npares=parseInt(npares)+1;
    }else{
        nimpares=parseInt(nimpares)+1;
    }

    cont=cont+1;
}
document.write("La cantidad de numeros pares es de: ",+npares);
document.write("La cantidad de numeros impares es de: ",+nimpares);