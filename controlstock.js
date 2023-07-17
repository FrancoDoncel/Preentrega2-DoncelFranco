//APP PARA CONTROL DE PRODUCTOS, consiste en una app para el control de stock de una empresa de ropa, el objeto producto tiene 3 propiedades, nombre de la prenda, cantidad en stock y precio de venta(precio unitario). Las acciones que puede realizar la app son,consultar, agregar, quitar o modificar algun producto, calcular el costo de envio y calcular el valor del pedido (si paga con efectivo o trasnferencia se le aplica un descuento y si paga con tarjeta se le aplican intereses)

//Objeto producto
class Producto{
        constructor(nombre,cantidad,precioUnitario){
                this.nombre=nombre
                this.cantidad=parseInt(cantidad)
                this.precioUnitario=parseFloat(precioUnitario)
        }
        modificaCantidad(){
                let cant= prompt("Ingrese cantidad de unidades (si desea restar ingrese numero en negativo):")
                cant= parseInt(cant)
                parseInt(this.cantidad+=cant)
                alert("La cantidad total es: "+ this.cantidad)

        }
        modificaPrecioUnitario(){
                let pu= prompt("Ingrese nuevo precio de venta")
                pu=parseFloat(pu)
                this.precioUnitario=pu
                alert("El nuevo precio de venta es: "+this.precioUnitario)
        }
}
//Objeto codigo postal
class CodigoPostal {
        constructor(provincia,localidad,codigoPostal,costoEnvio){
                this.provincia=provincia
                this.localidad=localidad
                this.codigoPostal=(codigoPostal)
                this.costoEnvio=(costoEnvio)
        }
}
//Arreglo codigo postal
let arrayCodigoPostal=[
        new CodigoPostal("San Juan","San Juan","5400","600"),
        new CodigoPostal("Mendoza","Mendoza","5500","1200"),
        new CodigoPostal("San Luis","San Luis","5700","1800"),
        new CodigoPostal("La Rioja","La Rioja","5300","1850")
];
//Arreglo de productos, stock ya cargado
let arrayProducto= [
        new Producto("REMERA","1000","9000"),
        new Producto("BUZO","1023","23000"),
        new Producto("CAMPERA","963","45000"),
        new Producto("CAMISA","562","16000"),
        new Producto("PANTALON","2560","20000"),
        new Producto("ZAPATILLA","300","70000")
];
//Consultar producto
function consultarProducto(){
        let codProducto= prompt("Ingrese producto a consultar (1. Remera, 2. Buzo, 3. Campera, 4. Camisa, 5. Pantalon, 6. Zapatilla):")
        alert("Producto: "+ arrayProducto[codProducto-1].nombre + "\nCantidad: "+ arrayProducto[codProducto-1].cantidad + "\nPrecio de venta: "+ arrayProducto[codProducto-1].precioUnitario)

}
//Agregar producto
function agregarProducto(){
        let nombre= prompt("Ingrese nombre del producto: ")
        let cantidad= prompt("Ingrese cantidad: ")
        let pu= prompt("Ingrese precio de venta: ")
        arrayProducto.push(new Producto(nombre.toUpperCase(),cantidad,pu))
        let largo=arrayProducto.length
        alert("Nuevo producto cargado"+ "\nNombre: "+ (arrayProducto[largo-1].nombre).toUpperCase() + "\nCantidad: "+ arrayProducto[largo-1].cantidad+ "\nPrecio de venta: "+ arrayProducto[largo-1].precioUnitario)

}
//Quitar producto
function quitarProducto(){
        let codProducto= prompt("Ingrese producto a eliminar (1. Remera, 2. Buzo, 3. Campera, 4. Camisa, 5. Pantalon, 6. Zapatilla):")
        arrayProducto.splice(codProducto-1,1)
        alert("El Producto fue eliminado con exito")
}
//Modificar producto
function modificarProducto(){
        let codProducto= prompt("Ingrese producto a modificar (1. Remera, 2. Buzo, 3. Campera, 4. Camisa, 5. Pantalon, 6. Zapatilla):")
        let codigo=prompt("Que desea modificar, ingrese una opcion (1. Cantidad, 2. Precio de venta)")
        if(codigo==1){
                arrayProducto[codProducto-1].modificaCantidad()
        }else{
                arrayProducto[codProducto-1].modificaPrecioUnitario()
        }
}
//Calcular de costo envio
function costoEnvio(){
        let cod=prompt("Ingrese codigo postal: ")
        let elemento= arrayCodigoPostal.find((valor)=>valor.codigoPostal==cod)
        alert("Provincia: "+elemento.provincia + "\nLocalidad: "+elemento.localidad + "\nCodigo postal: "+ elemento.codigoPostal + "\nCosto de envio: $" + elemento.costoEnvio)
}
//Calcular pedido
function calcularPedido(tipoDePago){
        if(tipoDePago.toLowerCase()=="efectivo" || tipoDePago.toLowerCase()=="transferencia" ){
                alert("Se aplica un descuento del 15%.")
                return (monto) => monto -= monto*0.15
        }else if (tipoDePago.toLowerCase()=="tarjeta"){
                alert("Se aplica un interese del 30%.")
                return (monto) => (monto+=monto*0.3)
        }

}
//Menu de inicio
function menuInicio(){
        let bandera = false;
        let seguir;
do {
        let entrada= prompt("Ingrese el numero de la accion a realizar:\n 1. Consultar producto\n 2. Agregar producto\n 3. Quitar producto\n 4. Modificar producto\n 5. Calcular envio \n 6. Calcular pedido\n 0. Salir");
        switch(entrada){
                case '1': consultarProducto()
                        bandera = false;
                break;
                case '2': agregarProducto()
                        bandera = false;
                break;
                case '3': quitarProducto()
                        bandera = false;
                break;
                case '4': modificarProducto()
                        bandera = false;
                break;
                case '5': costoEnvio()
                        bandera = false;
                break;
                case '6': let monto=0
                        let tipoDePago = prompt("Escriba el tipo de pago (efectivo, transferencia o tarjeta): ")
                        monto = prompt("Ingrese monto total vendido: ")
                        monto=parseFloat(monto)
                        let operacion = calcularPedido(tipoDePago)
                        alert("El total del pedido es: $"+ operacion(monto))
                        bandera = false;
                break;
                case '0':
                        bandera = false;
                        seguir = "no";
                break;
                default: alert("Codigo incorrecto, ingrese un numero valido (entre 0 y 4)");
                        bandera = true;
                break;
        }
        if(entrada!=0 && bandera===false){
                seguir= prompt("¿Desea realizar otra accion? (si/no)").toLowerCase();
                //VALIDACION DE SEGUIR
                while(seguir!="si" && seguir!="no"){
                alert("Opcion incorrecta, solo se admiten las palabras si/no");
                seguir= prompt("¿Desea realizar otra accion? (si/no)").toLowerCase();
                }
        }
} while (bandera || seguir =="si");
}


alert("Bienvenidos a la app de control de productos");
menuInicio();
alert("Programa finalizado");
