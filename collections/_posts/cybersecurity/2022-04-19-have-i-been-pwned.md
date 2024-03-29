---
title: ¿Han filtrado mis datos? Have I Been Pwned?
permalink: /ciberseguridad/have-i-been-pwned
image: cybersecurity/es/have-i-been-pwned.png
excerpt: "HIBP es un sitio web donde se puede consultar gratuitamente si una dirección de correo electrónico, nombre de usuario o número de teléfono se encuentra en alguna filtración pública."
updated: 07/08/2023
---

{% include image.html url="cybersecurity/es/have-i-been-pwned.png?v=2" alt="Página de inicio de HIBP" %}

[Have I Been Pwned](https://haveibeenpwned.com/) es un sitio web donde se puede consultar gratuitamente si una dirección de correo electrónico, nombre de usuario o número de teléfono se encuentra en alguna filtración pública.

Conocido también por sus iniciales "**HIBP**", fue creado en diciembre de 2013 por **Troy Hunt**, consultor de seguridad web y director regional de Microsoft. Lo creó para que cualquier persona u organización lo utilice para estar al tanto de nuevas filtraciones[^1].

{% include image.html url="cybersecurity/es/have-i-been-pwned-filtraciones.png?v=2" alt="Filtraciones más grandes (izquierda) y filtraciones recién añadidas (derecha)" %}

Nada impide que una persona cualquiera ingrese la dirección de otra persona para saber qué cuentas fueron expuestas, pero la realidad es que cibercriminales ya estaban utilizando esa información y era la mayoría de las personas la que no estaba al tanto, y lo creó justamente para generar conciencia.

El autor explica que una filtración de datos (o brecha de datos) es "un incidente en el que los datos quedan expuestos inadvertidamente en un sistema vulnerable, normalmente debido a controles de acceso insuficientes o a fallos de seguridad en el software"[^2]. Al momento de esta publicación, incluye 591 sitios web y más de 11700 millones de cuentas.

{% include image.html url="cybersecurity/es/have-i-been-pwned-filtrado-no.png?v=2" alt="Si no se encuentra la dirección, pantalla verde :)" %}

Es posible registrarse para estar al tanto de nuevas filtraciones y también es posible "optar por salir", es decir, eliminar el correo electrónico para que no aparezca en consultas ([haveibeenpwned.com/OptOut](https://haveibeenpwned.com/OptOut)).

{% include image.html url="cybersecurity/es/have-i-been-pwned-filtrado-si.png?v=2" alt="Si se encuentra, pantalla roja y..." %}
{% include image.html url="cybersecurity/es/have-i-been-pwned-filtrado-si-2.png?v=2" alt="... el listado asociado de sitios filtrados y qué datos están expuestos :(" %}

Para utilizar HIBP te recomendamos acceder mediante **Tor**, ya que no tenemos la certeza que del otro lado no están asociando búsquedas con direcciones IP.

Además, se financia mediante donaciones en [Bitcoin](/bitcoin/) y Bitcoin Cash.

{% include image.html url="cybersecurity/es/have-i-been-pwned-donaciones.png?v=2" alt="Acepta donaciones en Bitcoin y Bitcoin Cash" %}

¿Por qué "pwned" y de dónde obtiene la información? ¿Por qué Bitcoin es mejor que Bitcoin Cash y qué podemos hacer si nuestros datos se encuentran ahí? ¿Qué es Tor? Próximamente en criptowiki.

[^1]: [Who, what & why - Have I Been Pwned](https://haveibeenpwned.com/About)
[^2]: [FAQs](https://haveibeenpwned.com/FAQs)