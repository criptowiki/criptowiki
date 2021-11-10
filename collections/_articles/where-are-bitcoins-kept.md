---
title: ¿Dónde se guardan los bitcoins?
permalink: donde-se-guardan-los-bitcoins
position: 2
updated: 09/11/2021
---

Así como para navegar por internet utilizamos navegadores web como Firefox o Safari, para enviar, recibir y “guardar” bitcoins usamos billeteras (también conocidas como **monederos** o en inglés, **wallets**). Decimos "guardar" porque en realidad los bitcoins existen como registros en la blockchain de Bitcoin; la billetera funciona como una pantalla que nos permite interactuar con ellos.

## ¿Qué es una billetera?

Una billetera se encarga de generar y administrar las claves que nos permiten usar nuestros bitcoins. Pero, ¿qué son estas **claves**? Para entender, veamos lo que sucede cuando uno prepara una billetera, que es lo que uno debe hacer si quiere recibir bitcoins.

<p class="important">Nota: Para una explicación concisa y práctica que nos permita comenzar a utilizar Bitcoin, en este artículo nos concentraremos en las billeteras Bitcoin determinísticas, que son las que permiten generar e importar una frase de recuperación. Hoy en día son las más utilizadas, por lejos.</p>


#### Olvidando lo conocido

Las billeteras Bitcoin **son diferentes a las billeteras digitales de bancos o fintechs**. Si bien hay billeteras Bitcoin que solicitan datos personales, hay otras más orientadas a la privacidad que no solicitan ningún dato personal (al menos no explícitamente). No es necesario ingresar nombre ni dirección de correo electrónico ni número de celular. Estos datos no son necesarios porque es la **blockchain de Bitcoin** la que lleva un registro de cuántos y cuáles bitcoins hay en cada dirección, y es con la **frase de recuperación** que podemos acceder a determinados bitcoins.

Descifremos entonces qué es la frase de recuperación y qué es la blockchain de Bitcoin.

<p class="important">Nota: Que una billetera no nos solicite explícitamente datos personales (como una dirección de correo electrónico) no significa que seamos usuarios anónimos. Por ejemplo, las billeteras podrían registrar, entre otros datos, nuestra dirección IP.</p>


## Blockchain de Bitcoin

Es un libro contable digital, descentralizado, público e inmutable. "Libro contable" porque registra todas las transacciones realizadas entre direcciones de manera cronológica; "descentralizado" porque el mismo registro completo se encuentra disponible en miles de computadoras o nodos; "público" porque cualquiera puede leer los registros (y verificarlos); "inmutable" porque una vez incorporada y verificada una transacción no se puede editar ni eliminar.

Cuando uno realiza una transacción, donde se incluye la cantidad de [satoshis]({{ site.baseurl }}/diccionario/satoshi) a enviar, la dirección destinataria que recibirá los satoshis y la comisión que uno está dispuesto a pagar, al principio estará pendiente de confirmación. Las confirmación lleva entre 10 a 60 minutos en promedio. Cuanto más comisión se pague, menor será el tiempo de espera[^1].

Las transacciones confirmadas se van agrupando en bloques de información, donde cada bloque añadido enlaza solo al bloque inmediatamente anterior, y así hasta llegar al primer bloque; de ahí su nombre "blockchain" o en español, "cadena de bloques". Cada uno de estos bloques se añade a la blockchain cada 10 minutos en promedio porque así está diseñado (por eso la espera mínima mencionada) y solo se añade una vez que una de las tantas computadoras que se encuentran realizando cálculos, conocidas como "mineros", efectivamente encuentra la solución. En realidad, como a una sola computadora le llevaría mucho tiempo, trabajan juntas en "piletas de minería" ("mining pools").

Hay exploradores de la blockchain de Bitcoin, como **[Blockstream Explorer](https://blockstream.info/)**, que nos permiten ver en detalle los últimos bloques añadidos y las últimas transacciones realizadas.

<p class="important">¿Qué se calcula exactamente? ¿Por qué 10 minutos? Seguramente tendrás muchas preguntas. Blockchain es solo una de las tantas tecnologías que utiliza Bitcoin. En próximos artículos veremos en mayor detalle cómo la genial combinación de ellas da forma a Bitcoin.</p>

#### Frase de recuperación

{% include image.html url="articles/ejemplo-frase-de-recuperacion.png" description="Ejemplo de una frase de recuperación." width="500" %}

Las billeteras muestran por lo menos 2 opciones en su inicio:
> 1) Generar (o crear) una frase de recuperación

> 2) Importar una frase de recuperación

Como es posible observar, las billeteras Bitcoin de hoy en día se centran en la frase de recuperación, y es por eso que es tan importante entender qué implica.

Cuando coloquialmente se habla de "crear una billetera Bitcoin" en realidad significa, en la práctica, generar una frase de recuperación. Para eso elegimos dicha opción y el programa generará y nos mostrará la frase de recuperación, que debemos guardar en absoluto secreto.

Dependiendo de la billetera, la frase de recuperación está formada por 12 a 27 palabras. Uno no elige las palabras ni el orden. No debemos compartir mediante mensaje de texto ni correo electrónico ni mensajería, ni siquiera en un mensaje a nosotros mismos. Tampoco debemos imprimir ni tomar una fotografía ni realizar captura de pantalla. No debemos compartirla con nadie, jamás, diga lo que diga.

#### ¿Por qué es tan importante la frase de recuperación?

La frase de recuperación, también conocida como "frase semilla" (en inglés, "*seed phrase*"), es una manera práctica de representar un número aleatorio muy grande (que como usuarios nunca vemos). Detrás de escena lo que sucede cuando seleccionamos "Crear billetera" es que el programa genera un número aleatorio enorme. Para poder copiarlo fácilmente se representa mediante palabras en un determinado orden. Es a partir del número que se representa mediante la frase que se pueden generar ilimitada cantidad de direcciones (para recibir bitcoins) y de cada una se deriva su correspondiente clave privada (para poder enviarlos)[^2][^3].

En pocas palabras, quien tenga acceso a la frase de recuperación puede acceder a los bitcoins. Por eso la importancia de mantenerla en secreto. Como usuarios solo vemos la frase de recuperación al crear la billetera (o al importarla). Veremos direcciones a medida que las generemos cada vez que queremos recibir un pago. Salvo excepciones, no nos cruzaremos con claves privadas ni públicas.

## Direcciones y claves

Cuando uno ingresa una frase de recuperación en una billetera, la billetera deriva (utilizando matemática) las claves y las direcciones.

Siguiendo el ejemplo previo, si uno ingresa dicha frase de recuperación en la billetera [BRD]({{ site.baseurl }}/billeteras/brd), selecciona Bitcoin y selecciona "recibir", la billetera generará y mostrará la siguiente dirección: 

> 1MCmRGGmgUqURMy3LiVJb38Q323FBvKThS

La dirección que nos muestre la compartimos a quien nos quiera enviar bitcoins, ya sea así textual o mediante un [código QR]({{ site.baseurl }}/diccionario/codigo-qr) (es lo mismo pero con otra forma).

<p class="important">Nota: La frase de recuperación y la dirección presentadas son solo ejemplos. No utilizar ni enviar satoshis allí.</p>


##### Ejemplo

Si perdemos nuestro dispositivo, por ejemplo un celular donde teníamos 0.01 BTC, solo basta con conseguir otro dispositivo donde descargaremos una billetera (que puede ser de otra empresa) y esta vez elegiremos la otra opción (es decir "importar una frase de recuperación") e ingresamos las palabras de manera ordenada. En realidad, dicho 0.01 BTC **nunca estuvo en el celular; solo existe como un registro en la blockchain de Bitcoin**. Por eso al ingresar la frase de recuperación en otra billetera en otro celular estaremos importando parte de la información necesaria para poder acceder a esos 0.01 BTC.

Nótese que en ningún momento estamos ingresando una dirección de correo electrónico o número de teléfono.

<p class="important">Nota: Decimos que la frase de recuperación es "parte de la información necesaria" para tener acceso a los bitcoins porque además de ingresar la frase de recuperación, a veces hay que ingresar la "ruta de derivación". (Ver abajo).</p>



## Información muy importante

1. **Podemos generar tantas frases de recuperación como queramos, gratuitamente y sin tener que ingresar datos personales**. Si bien existen billeteras que sí piden datos, uno siempre puede elegir alternativas más privadas.

2. **Cada frase de recuperación nos permite generar ilimitada cantidad de direcciones. Distintas frases de recuperación nos dan acceso a diferentes direcciones**.

3. **Debemos guardar varias copias de la frase de recuperación en diferentes lugares**. En caso de perder el dispositivo (sea celular o billetera hardware, por ejemplo), siempre podremos acceder a los satoshis con esa información.

4. **Si perdemos toda copia de la frase de recuperación, perdemos acceso a todos los satoshis "guardados" en las direcciones asociadas**. Es imposible recuperar el acceso y no hay a quién o qué reclamarle.

5. **No es necesario tener conexión a internet para crear una frase de recuperación**. La blockchain de Bitcoin no tiene que incorporar las direcciones a medida que las generamos y tampoco tenemos que conectarnos a internet para recibir bitcoins. Solo es necesario que la persona que realiza un pago en Bitcoin se conecte para poder "mover" sus bitcoins a nuestra dirección. Es extremadamente poco probable (sino es que imposible) que otra persona genere las mismas claves y direcciones.


## Ruta de derivación

Usualmente como usuarios no vemos la "ruta de derivación" porque muchas billeteras no la muestran con la intención de mejorar la experiencia de usuario. Sin embargo, dado que la ruta de derivación varía entre billeteras, si eventualmente la organización que desarrollaba la billetera que uno utiliza deja de operar, cuando queramos acceder utilizando otra billetera, necesitaremos la ruta derivación para poder importarla correctamente.

Como hemos visto, utilizando diferentes frases de recuperación es posible generar diferentes direcciones. Ahora expandimos: con una misma frase de recuperación, si se modifica la ruta de derivación, se tendrá acceso a **otro** conjunto ilimitado de direcciones.

No es necesario entrar en pánico si uno no tiene a mano la ruta de derivación dado que hay sitios web como **[walletsrecovery.org](https://walletsrecovery.org/)** que llevan un registro de las rutas de derivación que utilizan distintas billeteras.


## Tipos de billeteras

Hay distintas maneras de clasificar a los distintos tipos de billeteras. Una es **según la plataforma sobre la que funciona**: escritorio, web, móvil, hardware.

Otra manera de categorizarlas es según **si la frase de recuperación entra en contacto con internet en algún momento o no**: billetera caliente (o *hot wallet*) y billetera fría (o *cold wallet*).

> Conoce las [ventajas y desventajas de cada tipo de billetera]({{ site.baseurl }}/tipos-de-billeteras).


### Bibliografía

[^1]: Saylor Academy. PRDV151: Bitcoin for Everybody. How Bitcoin Works Under the Hood. Retrieved from [https://learn.saylor.org/mod/page/view.php?id=30739](https://learn.saylor.org/mod/page/view.php?id=30739)

[^2]: Antonopoulos, A. M. (2018). Mastering bitcoin: programming the open blockchain. Retrieved from [https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc)

[^3]: Antonopoulos, A. M. (2018). Mastering bitcoin: programming the open blockchain. Retrieved from [https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc)