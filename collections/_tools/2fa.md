---
title: Autenticación de dos factores (2FA)
permalink: /herramientas/autenticacion-de-dos-factores-2fa
---

### ¿Qué es?

Hay distintos **factores de autenticación** que permiten identificarnos en una página web o app:
> algo que conocemos, como una contraseña

> algo que somos, como una huella digital

> algo que tenemos, como un teléfono celular

La autenticación de dos factores consiste en **utilizar 2 de ellos**.

La combinación más frecuente es ingresar **una contraseña y también un código temporario de un solo uso (a veces llamado *token*)** que, o se recibe por mensaje de texto, o es generado en una aplicación autenticadora en el celular. Depende del sitio web qué método se utiliza, aunque esta última es la opción más segura de las dos (más sobre esto abajo). 

Puedes activarlo en muchas aplicaciones conocidas, como Twitter, tu provedor de correo electrónico y en casas de cambio de criptomonedas, donde muchas veces es obligatorio su uso.

### ¿Por qué el mensaje de texto no es recomendable?

Este método asume que solo el dueño del celular tiene acceso a los mensajes de texto que recibe. Pero esto no es así ya puede verse comprometido fácilmente.

Existe un tipo de ataque llamado "SIM swap" o "simjacking", donde el atacante se hace pasar por su víctima y solicita una tarjeta SIM con la cual puede recibir mensajes de texto en otro celular y así recibir el código[^1].

[^1]: ["How to Prevent and Respond to a SIM Swap Scam"](https://lifehacker.com/how-to-prevent-and-respond-to-a-sim-swap-scam-1835627474). Consultado el 14 de mayo de 2020.