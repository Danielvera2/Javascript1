var n1,n2;

n1=prompt("Ingrese el primer numero");
n2=prompt("Ingrese el segundo numero");

if (n1>n2) {
    document.write("Numeros ordenados de manera ascendente: ",n2,",",n1);
    document.write("Numeros ordenados de manera descendente: ",n1,",",n2);
    
}else{
    document.write("Numeros ordenados de manera ascendente: ",+n1," , ",+n2);
    document.write("Numeros ordenados de manera descendente: ",+n2," , ",+n1);
}