var a,b,c,x;
a=0;
b=1;
x=1;

document.write("La serie de fibonacci con numeros menores a 200 es: ")
while (x<=13) {
    document.write(a,",")
    c=a+b;
    a=b;
    b=c;
    x=x+1;
}