var clave,costo,duracion;


clave=prompt("Escoja la clave hacia donde llama , -(1) - 0.13$ - Estados Unidos, (2) - 0.11$ -Canada,(3) - 0.52$ -America del sur,  (4) - 0.99$ -America Central,  (5) - 0.17$ -Mexico, (6) - 0.20$ -Asia, (7) - 0.59$ -Africa , (8) - 0.28$ -Oceania");
duracion=prompt("Ingrese la duracion de la llamada")

switch (clave){
    case "1":
        costo = 0.13 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "2":
        costo = 0.11 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
        case "3":
        costo = 0.52 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
        case "4":
        costo = 0.99 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "5":
        costo = 0.17 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "6":
        costo = 0.20 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "7":
        costo = 0.59 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "8":
        costo = 0.28 * duracion;
         document.write("El total a pagar es de: ",+costo,"$");
         break;
    default:
        document.write("Codigo incorrecto")
        break;
}