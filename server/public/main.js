const socket = io()

//Con "on" escucho los valores envaidos por emit
socket.on('envioValorSensorMapeado', function(valorMapeado, valorMapeado2, valorSensor){ //Con on escucho los valores envaidos por emit
  
  //PASO EL VALOR DE ARDUINO A UNA VARIABLE DEFINIDA EN CSS
  let ejevariacion = document.getElementById("valorModificaEjeVariacion");
  
  //FUNCION SIGNIFICATIVA
  ejevariacion.style.setProperty('--horYver',valorMapeado);//--nombre eje variación
  let ejevariacion2 = document.getElementById("valorModificaEjeVariacion");
  valorMapeado2Aleatorio = valorMapeado2*(Math.round(Math.random()) * 2 - 1);//para pasar el valor de negativo a positivo de forma aleatoria
  ejevariacion2.style.setProperty('--rota',valorMapeado2Aleatorio);//--nombre eje variación

  //PARA MOSTRAR LOS VALORES EN EL HTML
  let valor = document.getElementById("muestroValorSensor");
  let valor2 = document.getElementById("muestroValorSensor2");
  let valor3 = document.getElementById("muestroValorSensor3");
  let valor4 = document.getElementById("muestroValorSensor4");

  valor.innerHTML = `${valorSensor}`;
  valor2.innerHTML = `${valorMapeado}`;
  valor3.innerHTML = `${valorMapeado}`;
  valor4.innerHTML = `${valorMapeado2Aleatorio}`;
})