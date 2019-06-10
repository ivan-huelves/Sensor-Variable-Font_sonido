# Sensor Variable Font - sonido

El proyecto da un uso semántico a las tipografías variables en interfaces gráficas, estableciendo una relación entre la propia tipografía y los datos recogidos por diferentes sensores.

Providing variable fonts with a semantic use in graphic interfaces to establish a relationship between typography and the data collected by different sensors.

## Prototipo Nº4. Sensor de sonido aplicado a las capacidades expresivas de la tipografía en una pantalla de gran formato

[![Sensor Variable Font - sonido](/img/sensorvariablefont-sonido.jpg)](https://vimeo.com/341422442 "Sensor Variable Font - sonido")

En el cuarto prototipo desarrollado se propone una aplicación de la tipografía variable más centrada en las sensaciones. Concretamente se relaciona la música de un concierto, con la tipografía proyectada en la pantalla del escenario.

Por un lado los elementos serían el sensor de sonido que registra la frecuencia de la música con unos valores entre 7 y 50. Estos valores, al igual que los que se establecían para el prototipo del sensor de luz, han de ser calibrados ya que dependen del volumen de la música y el nivel de ruido que detecte el sensor cuando supuestamente hay silencio. El valor registrado se actualiza cada 10 milisegundos. El sensor empleado se trata del denominado SparkFun Sound Detector que cuenta con un amplificador de señal y la posibilidad de detectar no solo el audio, sino, la presencia de sonido de forma binaria y la amplitud del sonido.

Y por otro la tipografía variable WHOA Spine. Se ha seleccionado esta tipografía por sus capacidades expresivas empleándose sus tres ejes de variación: Horizontal, Vertical y Rotate. Los dos primeros limitando los valores de 0 a 1.000 y el tercero de -45 a 45.

La Función significativa seleccionada ha sido el ritmo y aleatoriedad. Como se ha dicho anteriormente en este caso ha primado la capacidad expresiva del prototipo al haber definido un contexto de carácter lúdico. La tipografía varía en función a la amplitud de los sonidos registrados en tiempo real lo que crea una experiencia tipográfica muy dinámica, como si la propia tipografía estuviese bailando. Cuanto mayor amplitud registrada, mayor es el valor del eje de variación. Para mantener controlada la sensación de ritmo y no pareciese totalmente aleatorio, los ejes de variación horizontal y vertical se han limitado solo a sus valores positivos, es decir arriba y a la derecha, mientras que para el eje de variación Rotate, que hace rotar las letras, sus valores sí que siguen el ritmo de la música pero el signo del valor (positivo o negativo) se modifica de forma aleatoria en el sentido del giro.

Una vez que se ha establecido la intención significativa se prosigue con la Función normalizadora. Como acabamos de describir los valores mínimos y máximos del sensor de sonido se corresponden respectivamente con los valores mínimos y máximos de los ejes de variación.

Finalmente una vez que el valor mapeado se ha transformado a partir del proceso de significación se decide aplicar a todos los glifos.
