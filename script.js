let montoTotalPrestamo = parseFloat(prompt("Ingrese el monto total del prestamo:"))
let tasaInteres = parseFloat(prompt("Ingrese la tasa de interes:"))
let numeroMeses = parseInt(prompt("Ingrese lo numero de meses: "))

if (numeroMeses<12){
    tasaInteres+=2
}else if(numeroMeses>=12&&numeroMeses<=36){
    tasaInteres+=0
}else{
    tasaInteres-=1
}
alert("La nueva tasa de interes es: "+tasaInteres+"\nEl nuevo monto tal del prestamo es: "+(montoTotalPrestamo*(tasaInteres/100)).toFixed(4))
