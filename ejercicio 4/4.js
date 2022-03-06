var base,altura,area,Perimetro;

base=prompt("Ingrese la base del triangulo");
altura=prompt("Ingrese la altura del triangulo");

area=parseFloat(base)*parseFloat(altura);
Perimetro = (2 * base) + (2 * altura);
document.write("El area del traingulo es de: ",+area);
document.write("El perimertro del traingulo es de: ", +Perimetro);