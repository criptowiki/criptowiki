---
title: Tipos de billeteras
permalink: tipos-de-billeteras
image: bitcoin/es/tipos-de-billeteras.jpg
updated: 26/11/2024
---

[Ya vimos dónde se guardan los bitcoins y el funcionamiento básico de una billetera]({{ site.baseurl }}/donde-se-guardan-los-bitcoins). Veamos ahora los distintos tipos de billeteras disponibles que nos permiten enviar y recibir bitcoins. Hay distintas maneras de clasificar a los distintos tipos de billeteras.

## Según su plataforma

Una es **según la plataforma sobre la cual funciona**: escritorio, web, móvil, hardware y de papel.

### 1) Escritorio

Son **programas que funcionan en computadoras personales (PC)**. Suelen contar con funcionalidades avanzadas, y también *pueden* ser muy privadas, pero al mismo tiempo, si se infecta con software malicioso la computadora, los bitcoins pueden ser robados. Es por esto que es solo para usuarios más experimentados.

Bitcoin Core, Electrum y Wasabi son ejemplos de billeteras de escritorio.

### 2) Web

Son **sitios web** que ofrecen la posibilidad de crear una cuenta con pocos, o ningún, dato personal explícito (si piden, generalmente no es más que una dirección de correo electrónico y una contraseña).

Muchas veces, al crear la cuenta, la página web nos muestra una [frase de recuperación]({{ site.baseurl }}/diccionario/frase-de-recuperacion-semilla-seed), de la cual tenemos que realizar varias copias en distintos lugares. De esta manera, por más que la empresa desaparezca, podemos, en teoría, recuperar nuestros bitcoins. Decimos "en teoría" porque la realidad es que en todo momento debemos confiar que la empresa que nos creó la billetera no guarde una copia de la frase de recuperación con la que tendrían acceso a los bitcoins.

{% include image.html url="articles/billetera-blockchaincom-750x.png" description="Blockchain.com es un ejemplo de billetera web." %}

### 3) Móvil

Son **apps para smartphones**. Se distinguen por ser muy fáciles de usar. Son ideales para moverse en la calle, para pequeñas operaciones del día a día.

BRD y Samourai son ejemplos de billeteras móviles.

{% include image.html width="500" url="articles/billetera-brd.png" description="BRD, una billetera de criptomonedas para smartphones. Fuente: <a href='https://brd.com/'>brd.com</a>" %}

### 4) Hardware

Son **dispositivos que tienen el tamaño de una memoria USB (*pendrive*) y cuentan con una pantalla y unos pocos botones**. Se conectan a una computadora, celular o tablet donde previamente descargamos un programa que utilizamos para interactuar con la billetera.

Son consideradas muy seguras porque las transacciones se firman con la clave privada **en el dispositivo** (la clave privada no sale del mismo). Luego se transmite la transacción firmada a los nodos y se añadirá a la blockchain de Bitcoin si es válida.

Cuando uno configura una nueva billetera de hardware e ingresa una frase de recuperación que generó previamente en otra billetera, lo hace directamente utilizando los botones de la billetera de hardware. De esta manera la frase de recuperación no es ingresada mediante un teclado en una computadora que podría estar comprometida.

<p class="important">
Es importante tener en cuenta que no todas las billeteras hardware son de código abierto, por lo que sus usuarios en realidad están confiando en que la empresa detrás de la billetera no haya instalado una "puerta trasera" (con la que tendrían acceso al dinero).
</p>

Ledger es un ejemplo de una empresa reconocida que produce billeteras hardware (cuyo diseño no es 100% abierto).

{% include image.html url="articles/ledger-nano-s.png" description="Ledger Nano S, una billetera de hardware." %}

### 5) Papel

<p class="important">
No es recomendable utilizar este tipo de billeteras.
</p>

La claves **se imprimen literalmente en un papel, fuera de línea**. Es considerado un método obsoleto y no es recomendable.

{% include image.html url="articles/billetera-papel-bitcoin.png" description="Billetera de papel. No recomendables." %}

Al enviar una clave privada a una impresora, se aumenta la superficie de ataque y hay más cosas que podrían salir mal: la impresora podría estar conectada a internet o a una red inalámbrica, y la clave ser interceptada; se podría recuperar la información de la impresora; el programa para generar las claves podría estar manipulado; entre otros riesgos que con otras billeteras no existen.

Las billeteras de papel son de la época donde se utilizaban las "billeteras aleatorias". Cada vez que uno quería una nueva dirección para recibir bitcoins, debía generar una clave privada y realizar una copia de esta clave. Hoy en día las billeteras generan una frase de recuperación. Al guardar una copia de la frase de recuperación, uno está realizando una copia de seguridad de ilimitada cantidad de claves privadas y direcciones en un solo movimiento.

Si lo que uno quiere es almacenar la frase de recuperación en un medio más duradero que el papel, hay artefactos de metal que permiten hacerlo. Por ejemplo, SeedPlate.

<p class="important">
En casi todos los casos, las billeteras no solicitan datos personales explícitamente. Sin embargo, esto no significa que sean anónimas, ya que pueden registrar datos importantes como nuestra dirección IP.
</p>

## Según su conexión a internet

Otra manera de categorizarlas es según **si la clave privada de la billetera entra en contacto con internet o no**:

- **Billeteras calientes** (también conocidas como "almacenamiento caliente", "almacenamiento en línea" o "*hot wallets*"). Las clave privada maestra es generada en un dispositivo conectado a internet, lo cual las hace menos seguras ya que si alguien obtiene una copia de esa clave puede enviarse todos los bitcoins "guardados" en esas direcciones asociadas. Pero cuentan con la ventaja de que son **más fáciles y rápidas de utilizar**.

Las billeteras web son un ejemplo de este tipo de billeteras.

- **Billeteras frías** (también conocidas como "almacenamiento en frío", "almacenamiento fuera de línea o "*cold wallets*"). Las clave privada maestra nunca entra en contacto con internet. Son muy seguras porque las transacciones se firman con la clave privada fuera de línea y luego se difunden los detalles de la operación a la blockchain a través de internet. Como las billeteras frías gratuitas son complicadas de utilizar, y las billeteras frías fáciles de utilizar hay que comprarlas (las de hardware), se usan para guardar el dinero a largo plazo, como una suerte de caja de seguridad privada donde tenemos el control absoluto.

Las billeteras de hardware son un ejemplo de este tipo de almacenamiento.

<p class="important">Como las billeteras frías son más seguras, se suele recomendar tener gran parte del dinero en este tipo de almacenamiento para guardar a largo plazo y una pequeña parte en billeteras calientes para las operaciones del día a día.</p>

Para más información sobre billeteras de bitcoin, puedes compararlas en [bitcoin.org](https://bitcoin.org/es/elige-tu-monedero).

Las billeteras mencionadas son solo algunas de las opciones y criptowiki no garantiza la seguridad de ninguna. Sin embargo, veremos cada una en más detalle para poder elegir con libertad.