var sueldo, categoria,Bonificación;

categoria=prompt("Escoja su categoria, Bonificación por categoría: A = 10%; B = 20%; C = 30%; D = 50%");
sueldo=prompt("Ingrese su sueldo")

switch (categoria) {
    case "A":
        Bonificación=parseInt(sueldo)*0.1;
        document.write("Su bonificacion es de: ",+Bonificación)
        break;
    case "B":
        Bonificación=parseInt(sueldo)*0.2;
        document.write("Su bonificacion es de: ",+Bonificación)
        break;
    case "C":
        Bonificación=parseInt(sueldo)*0.3;
        document.write("Su bonificacion es de: ",+Bonificación)
        break;                       
    case "D":
        Bonificación=parseInt(sueldo)*0.5;
        document.write("Su bonificacion es de: ",+Bonificación)     
        break;  
    default:
        document.write("Categoria incorrecta Ingrese nuevamente")
    break;
}