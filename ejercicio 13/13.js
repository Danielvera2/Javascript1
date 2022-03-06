var area,perimertro,radio;

radio=prompt("Escribir el radio del circulo");

perimertro=2*3.14*parseInt(radio);
area= 3.14* parseInt(radio)*parseInt(radio);

document.write("El area del circulo es de: ",+area); 

document.write("El perimetro del circulo es de: ",+perimertro);