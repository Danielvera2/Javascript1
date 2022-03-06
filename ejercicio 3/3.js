var nombre,cu,subtotal,descuento,total,unidades;

nombre=prompt("Ingrese el nombre del producto")
cu=prompt("Ingrese el costo del producto")
unidades=prompt("Ingrese el numero de unidades")

subtotal=parseInt(cu)*parseInt(unidades);

document.write("El subtotal de su compra es de: " ,+subtotal);

descuento= parseFloat(subtotal)*parseFloat(0.1);

document.write(  "Su descuento es de : ",+descuento )  ;

total=parseFloat(subtotal)-parseFloat(descuento)  ;

document.write(  "Su total a pagar es de: ", +total)  ;
