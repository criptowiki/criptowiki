---
title: ¿Dónde se guardan las criptomonedas?
permalink: donde-se-guardan-las-criptomonedas
position: 2
updated: 21/05/2020
---

Así como para navegar por internet utilizamos navegadores web como Google Chrome o Safari, para enviar, recibir y “guardar” criptomonedas usamos billeteras (también conocidas como **monederos** o **wallets**). Decimos "guardar" porque en realidad las criptomonedas se guardan en una **blockchain**; la billetera funciona como una pantalla que nos permite interactuar con ellas.

## ¿Qué es una billetera?

Una billetera se encarga de generar y guardar las claves que nos permiten usar nuestras criptomonedas. Pero, ¿qué son estas claves? En su forma más básica, cuando uno crea una billetera, lo que hace es crear un espacio (puede ser virtual o físico) donde se guardan uno o más **pares de claves públicas y privadas**. Son pares porque se generan de a dos y están vinculadas entre sí, solo que no es posible conocer la clave privada a partir de la pública pero sí viceversa. Estas claves no las elige uno sino que **se generan al azar y no es necesario memorizarlas**. 

La **clave privada** se ve como una serie de números y letras pero en realidad es un número muy grande elegido al azar que se representa de esa manera para no tener que escribir un número muy grande. Este es un ejemplo de una clave privada:

> **5JxJWLzGpQoGG7QDiGXxLZZyARCdVYzxoAPTujkZsViS2MeZjfh**

Nos permite enviar las criptomonedas a otra persona y es por eso que debemos mantenerla en secreto. **No debemos compartirla con nadie**, jamás, diga lo que diga. Con la clave privada lo que hacemos es firmar digitalmente las transacciones y así enviamos nuestras monedas a otras personas. Además, podremos acceder a nuestro dinero usando cualquier billetera que nos permita importar la clave privada, independientemente de la que hayamos usado antes.

A partir de la clave privada se genera una **clave pública** y a partir de esta se genera una **dirección pública** (o simplemente dirección), que es la que debemos compartir para que nos envíen criptomonedas. Esta es la dirección asociada a la clave privada anterior:

> **16HzCp2oAPnz2cc9q5vEjMbXzWau5je7Q9**

**Es importante entender que en la billetera se guardan las claves y no las criptomonedas en sí. Las criptomonedas solo existen digitalmente y es en la blockchain donde se lleva un registro de cuántas monedas le pertenece a cada dirección pública**. Como comparación algo burda pero útil para comenzar a visualizar qué es una blockchain, podemos imaginarla como un documento de Excel online al cual todos podemos acceder, donde se registran todas las transacciones que ocurren en todo el mundo. Se registra qué dirección envía qué monedas a qué otra dirección, junto con la fecha y hora. Es **inmutable** porque una vez que se registró una transacción no hay manera de eliminarla o editarla. Además, es **transparente** porque cualquiera puede ver todos los registros. Hay páginas web (como [blockstream.info](https://blockstream.info/tx/recent)) que nos permiten explorar la blockchain de bitcoin, por ejemplo.

Si uno genera muchas direcciones en la billetera, ¿tiene que guardar una copia de cada clave privada generada (asociada a cada dirección nueva)? Depende, pero hoy en general la respuesta es no. Hay varios tipos de billeteras según cómo se crean las claves privadas. Dos importantes a conocer son las **no determinísticas** y las determinísticas. Las primeras, también conocidas como "billeteras aleatorias", generan claves privadas independientes, que no están vinculadas entre sí. Entonces si, por ejemplo, uno quisiera tener 3 direcciones, este tipo de billetera crea 3 claves privadas distintas, cada una asociada a una dirección. Este tipo de billetera es la que se usaba en los comienzos de bitcoin pero resulta poco práctica ya que uno tiene que hacer una copia de seguridad de la billetera cada vez que genera una dirección nueva.

Hoy la mayoría de las billeteras son **determinísticas**, donde primero se genera una **semilla (también conocida como frase de recuperación)** y a partir de esta se generan todas las claves privadas y direcciones. Esta semilla es un número grande que se lo suele representar por medio de 12 o 24 palabras, donde el orden de las mismas importa. ¿Cuántas direcciones se pueden generar? Infinitas. Este un ejemplo de una semilla: **obtain sheriff early develop thing increase horror safe arrive honey hedgehog arm**

Solo tenemos que guardar una copia de la frase de recuperación en un lugar seguro al crear la billetera. Luego, si perdemos la billetera, solo debemos importar las palabras a una billetera nueva. La billetera automáticamente generará todas las claves privadas y direcciones correspondientes a partir de la semilla, y tendremos acceso a nuestro dinero nuevamente. **Como usuarios nunca nos cruzamos con las claves privadas y claves públicas.** Cuando le queremos enviar criptomonedas a alguien necesitamos saber su direccion, pero generalmente no la ingresamos a mano, sino que escaneamos un [código QR]({{ site.url }}/diccionario/codigo-qr), o en todo caso, copiamos y pegamos la dirección. Nunca las copiamos a mano ya que es un método lento y podemos equivocarnos.

## Información muy importante

- **Podemos tener tantas billeteras y direcciones como queramos sin tener que aportar datos personales** (aunque hay billeteras que sí piden datos, pero uno siempre puede elegir alternativas si quisiera).
- **Debemos guardar una copia (o varias) de la semilla o clave privada**. En caso de perder la billetera, siempre podremos acceder a nuestras criptomonedas con esa información.
- **Si perdemos la semilla o clave privada, perdemos todas las criptomonedas guardadas allí**. Es imposible recuperarlas y no hay a quien reclamarle.
- **Cada criptomoneda tiene asociado un tipo de dirección determinado y no es posible tener en una única dirección todas las criptomonedas que queramos**. Entonces si enviamos, por ejemplo, bitcoins (BTC) a una dirección de otra criptomoneda, por ejemplo, ether (ETH), las perderemos.
- **No es necesario tener conexión a internet para crear una billetera**. Por increíble que suene, las claves se generan mediante algoritmos que generan números muy grandes. La blockchain no se tiene que actualizar para incorporar nuestras direcciones. Es extremadamente poco probable (sino es que imposible) que otra persona genere las mismas claves.

## Tipos de billeteras

Hay distintas maneras de clasificar a los distintos tipos de billeteras. Una es **según la plataforma sobre la que funciona**:
- Escritorio
- Web
- Móvil
- Hardware
- Papel

Otra manera de categorizarlas es según **si la clave privada es expuesta a internet en algún momento o no**:
- Billetera caliente (o hot wallet)
- Billetera fría (o cold wallet)

> Conoce las [ventajas y desventajas de cada tipo de billetera]({{ site.url }}/tipos-de-billeteras).

### Bibliografía
<div id="bibliography">
<div>Antonopoulos, A. M. (2018). Mastering bitcoin: programming the open blockchain. Retrieved from https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc</div>
<div>Antonopoulos, A. M. (2018). Mastering bitcoin: programming the open blockchain. Retrieved from https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc</div>
</div>