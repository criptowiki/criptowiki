---
title: Tipos de billeteras
permalink: tipos-de-billeteras
position: 3
---

[Ya vimos dónde se guardan las criptomonedas y el funcionamiento básico de una billetera]({{ site.url }}/donde-se-guardan-las-criptomonedas). Veamos ahora los distintos tipos de billeteras disponibles que nos permiten enviar y recibir criptomonedas. Hay distintas maneras de clasificar a los distintos tipos de billeteras.

## Según su plataforma

Una es **según la plataforma sobre la cual funciona**: escritorio, web, móvil, hardware y de papel.

### 1) Escritorio

Son **programas que funcionan en computadoras personales (PC)**. Otorgan control total y privacidad al usuario pero al mismo tiempo, si se infecta con malware la computadora, las criptomonedas pueden ser robadas. Es por esto que es solo para expertos o usuarios más experimentados.

Bitcoin Core, Electrum y Wasabi son ejemplos de billeteras de escritorio.

### 2) Web

Son **sitios web** que ofrecen la posibilidad de crearse una cuenta con pocos o ningún dato personal (si piden, generalmente no es más que un correo electrónico y una contraseña).

Muchas veces, al crear la cuenta, la página web nos muestra una frase de recuperación que debemos anotar en un papel y guardarlo en  un lugar seguro. De esta manera, por más que la empresa desaparezca, podemos, en teoría, recuperar nuestras criptomonedas. Decimos en teoría porque la realidad es que en todo momento debemos confiar que la empresa que nos creo la billetera no guarde una copia de la clave privada o frase de recuperación (de la cual se derivan todas las claves públicas, claves privadas y direcciones).

{% include image.html url="articles/billetera-blockchaincom-750x.png" description="Blockchain.com es un ejemplo de billetera web." %}

### 3) Móvil

Son **apps para smartphones**. Se distinguen por ser muy fáciles de usar para cobrar y pagar en el día a día.

BRD y Samourai son ejemplos de billeteras móviles.

{% include image.html width="500" url="articles/billetera-brd.png" description="BRD, una billetera de criptomonedas para smartphones. Fuente: <a href='https://brd.com/'>brd.com</a>" %}

### 4) Hardware

Son **dispositivos que tienen el tamaño de un pendrive y cuentan con una pantalla y unos pocos botones**. Se conecta a una computadora donde previamente descargamos un programa que utilizamos para interactuar con la billetera y transferir nuestro dinero.


Son muy seguras porque las transacciones se firman con la clave privada en el dispositivo (la clave privada nunca sale del mismo) y luego se difunden los detalles de la transacción a la blockchain a través de internet.


Ledger Nano S y Trezor son ejemplos de billeteras de hardware.

{% include image.html url="articles/ledger-nano-s.png" description="Ledger Nano S, una billetera de hardware." %}

### 5) Papel

Las claves se generan en una computadora aislada de internet (nunca entra en contacto con internet) y **se imprimen literalmente en un papel, metal o elemento duradero**.

{% include image.html url="articles/billetera-papel-bitcoin.png" description="Billetera de papel generada en bitaddress.org (solo utilizarla si uno sabe lo que está haciendo. Más en cripto.wiki próximamente)" %}

<p class="important">
En casi todos los casos, las billeteras no solicitan datos personales explícitamente. Solo algunas billeteras web donde creamos una cuenta (y no es más que correo electrónico y contraseña). Sin embargo, esto no significa que sean anónimas, ya que pueden registrar datos importantes como nuestra dirección IP.
</p>


## Según su conexión a internet

Otra manera de categorizarlas es según **si la billetera (y las claves privadas) entran en contacto con internet o no**:

- **Billeteras calientes** (también conocidas como "hot wallets", "almacenamiento caliente" u "almacenamiento online"). Las claves privadas son generadas en un dispositivo conectado a internet, lo cual las hace menos seguras ya que si alguien obtiene una copia de esas claves puede enviarse todas las monedas guardadas en esas direcciones asociadas. Pero cuentan con la ventaja de que son **más fáciles y rápidas de utilizar**.

Las billeteras web son un ejemplo.

- **Billeteras frías** (también conocidas como "cold wallets", "almacenamiento en frío" u "almacenamiento offline"). Las claves privadas nunca entran en contacto con internet. Son muy seguras porque las transacciones se firman con la clave privada de manera offline y luego se difunden los detalles de la transacción a la blockchain a través de internet. Como las billeteras frías gratuitas son complicadas de utilizar, y las billeteras frías fáciles de utilizar son caras (las de hardware), se usan para guardar el dinero a largo plazo, como una suerte de caja de seguridad privada donde tenemos el control absoluto.

Las billeteras de hardware son un ejemplo de este tipo de almacenamiento.

<p class="important">Como las billeteras frías son más seguras, se suele recomendar tener gran parte del dinero en este tipo de almacenamiento para guardar a largo plazo y una pequeña parte en billeteras calientes para las operaciones del día a día.</p>

Para más información sobre billeteras de bitcoin, puedes compararlas en [bitcoin.org](https://bitcoin.org/es/elige-tu-monedero).

Las billeteras mencionadas son solo algunas de las opciones y criptowiki no garantiza la seguridad de ninguna. Sin embargo, próximamente veremos cada una en más detalle para poder elegir con libertad.