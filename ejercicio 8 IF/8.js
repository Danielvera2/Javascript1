var nombre,nota;

nombre==prompt("Ingrese nombre del estudiante");
nota=prompt("Ingrese nota del estudiante");

if (nota >= 0 & nota <= 2){
    document.write("El estudiante ",+nombre," Necesita Reforzamiento");
}else{
    if(nota>=3 & nota<=4){
    document.write("El estudiante ",+nombre," Esta Reprobado");
    }
} 
    
if (nota>=7 & nota<=7) {
     document.write("El estudiante ",+nombre," Esta Aprobado");
}else (nota>=8 & nota<=9)
    document.write("El estudiante ",+nombre," Tiene un promedio excelente");
if (nota==10){
    document.write("El estudiante ",+nombre," Esta becado");
}else 
document.write("Nota no valida ingrese nuevamente")
    
