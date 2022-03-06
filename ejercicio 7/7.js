var clave,costo,duracion;


clave=prompt("Escoja la clave hacia donde llama , (1) - 0.15$ - Estados Unidos, (2) - 0.14$ -Canada,(3) - 0.25$ -España, (4) - 0.05$ -Colombia,(5) - 0.10$ -Venezuela, (6) - 0.11$ -Mexico, (7) - 0.12$ -Argentina, (8) - 0.08$ -Panama");
duracion=prompt("Ingrese la duracion de la llamada")

switch (clave){
    case "1":
        costo = 0.15 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "2":
        costo = 0.14 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
        case "3":
        costo = 0.25 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
        case "4":
        costo = 0.05 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "5":
        costo = 0.10 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "6":
        costo = 0.11 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "7":
        costo = 0.12 * duracion;
        document.write("El total a pagar es de: ",+costo,"$");
        break;
    case "8":
        costo = 0.08 * duracion;
         document.write("El total a pagar es de: ",+costo,"$");
         break;
    default:
        document.write("Codigo incorrecto")
        break;
}