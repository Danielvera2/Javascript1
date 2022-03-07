var n,mul2,mul3;
n=1;
mul2=0;
mul3=0;
while (n<=100) {
    if (n % 2==0) {
        document.write(n,", ")
        mul2=mul2+1;
    }else{
        if (n%3==0) {
            document.write(n,", ")
            mul3=mul3+1;
        }
    
    }
    n=n +1;
}
document.write("Numeros multiplos de 2: ",+mul2,", ")
document.write("Numeros multiplos de 3: ",+mul3)