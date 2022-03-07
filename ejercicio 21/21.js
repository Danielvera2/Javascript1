var num,D1,R1,D2,R2;
num=prompt("Ingrese un numero de 3 cifras");
D1=(parseInt(num)-(num%100))/100
R1=num % 100;
D2 = (R1 - (R1%10)) / 10;
D3 = R1 % 10;

if ((D3*100)+(D2*10)+D1) {
    document.write("El numero es un palindromo");
}else{
    document.write("El numero no es un palindromo");
}
