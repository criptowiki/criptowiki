---
title: Samourai Wallet
permalink: /billeteras/samourai
image_url: wallets/samourai-180x180.png
---

{% include image.html url=page.image_url %}


## Características
> Es una billetera móvil sin custodia, disponible para Android

> Muy enfocada en la privacidad del usuario

> Soporta Bitcoin; no muestra valores en monedas nacionales


## Sobre Samourai

En su [sitio web](https://samouraiwallet.com/) se presentan como (traducido): "activistas de la privacidad que hemos dedicado nuestras vidas a crear el software que Silicon Valley nunca construirá, que los reguladores nunca permitirán y en el que los *venture capital* nunca invertirán. Construimos el software que Bitcoin merece."

Entre los productos que ofrecen se encuentra la billetera Samourai Wallet.


## Cómo comenzar
1. Primero que nada, **descargar** la billetera para Android buscando "Samourai Wallet" en la tienda de aplicaciones y asegurarse que sea la aplicación oficial. Otra opción es visitar [la página oficial](https://samouraiwallet.com/download/wallet) y seguir el enlace de descarga.

2. La app nos pedirá **permiso** para acceder al "Almacenamiento" del dispositivo y nos preguntará en qué carpeta deseamos guardar una copia de seguridad encriptada de la billetera que estamos por crear.

3. Luego veremos que es posible **conectarse a la red Tor o a un servidor Dojo propio**. Conectarse a alguna opción o saltear este paso.

4. Seleccionamos **"Crear nueva billetera"**, ingresamos una **[frase de contraseña]({{ site.baseurl }}/herramientas/frase-de-contrasena)** y tildamos, si estamos de acuerdo, donde dice que entendemos que Samourai no nos puede ayudar si perdemos las claves. (Notar que ninguna billetera sin custodia correctamente diseñada podrá ayudarnos si perdemos las claves).

5. Ingresamos un **PIN**, que en este caso es un número entre 5 y 8 cifras. Este será solicitado cada vez que iniciamos la app (para no tener que ingresar la frase de recuperación y frase de contraseña cada vez).

6. **Nos recuerda que debemos crear una copia de respaldo de nuestra billetera**. Ofrece un [archivo PDF](https://samouraiwallet.com/recovery/worksheet) para, una vez impreso, escribir la frase de recuperación y la frase de contraseña allí (en dos hojas separadas).

7. Muestra un listado numerado que contiene 12 palabras. Esta es la **[frase de recuperación]({{ site.baseurl }}/diccionario/frase-de-recuperacion-semilla-seed)**. Nos recuerda que debemos anotar las palabras, mantenerlas en secreto, y que junto con la frase de contraseña, podremos recuperar la billetera.

8. Muestra la frase de contraseña. Seleccionamos "continuar" y ya podemos usar nuestra billetera.


## Importante

- La billetera creada en Samourai Wallet **se puede recuperar** mediante 2 caminos. **Camino 1**: se tiene la copia de seguridad que genera la app (archivo "samourai.txt") y la frase de contraseña (que ingresamos al crear la billetera). **Camino 2**: se tiene la frase de recuperación (es decir, las 12 palabras numeradas que generó la app) y la frase de contraseña. **Samourai [recomienda](https://docs.samourai.io/wallet/restore-recovery#restore-samourai-paper-backup) intentar restaurarla primero mediante el primer camino**.

- El PIN será solicitado cada vez que uno inicia la app. Si uno lo ingresa incorrectamente 3 veces consecutivas, la app solicitará la frase de contraseña. Si esta frase es correcta, mostrará el PIN.


## Enfocada en la privacidad

- El **teclado numérico se mezcla** cada vez que hay que ingresar el PIN. De esta manera, si hay alguien merodeando y mirando sobre nuestros hombros, se le dificultará reconocer el PIN.

- La **frase de contraseña** que uno ingresa se utiliza para encriptar la copia de seguridad en el dispositivo. Además, toma el rol de la palabra #13 en la frase de recuperación. Por eso en cualquier caso **es necesaria para restaurar la billetera**. Y por eso es recomendable usar una [frase de contraseña fuerte]({{ site.baseurl }}/herramientas/frase-de-contrasena).

- Cuenta con varias funciones innovadoras para proteger la privacidad del usuario. Una de ellas es [**Whirpool**](https://docs.samourai.io/whirlpool/start), que permite realizar CoinJoins fácilmente, con el objetivo de dificultar el rastreo de los satoshis de un usuario en la blockchain.


Más sobre Samourai Wallet, próximamente en cripto.wiki.