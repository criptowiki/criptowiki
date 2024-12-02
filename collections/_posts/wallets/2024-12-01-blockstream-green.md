---
title: Blockstream Green
permalink: /billeteras/blockstream-green
image: wallets/blockstream-green-256x256.png
---

Blockstream Green es una billetera para bitcoin y activos Liquid, disponible tanto para dispositivos móviles (Android, iOS) como para computadoras personales (Linux, Windows, macOS)[^1][^2].

{% include image.html url="wallets/blockstream-green-homescreen.png" width="300" description="Pantalla de inicio. Créditos: Blockstream." %}

# Sobre Blockstream

El CEO de la empresa detrás del software es **Adam Back**, un criptógrafo experimentado, citado en el *whitepaper* escrito por Satoshi Nakamoto por haber creado el algoritmo de prueba de trabajo Hashcash[^3].

# Seguridad y Privacidad

Blockstream Green es una billetera **sin custodia** (el usuario tiene la frase de recuperación y no la empresa), de **código abierto** (el código fuente está publicado en internet) y **sin KYC** (no solicita datos personales explícitamente)[^4].

También permite definir un **PIN de 6 dígitos** y crear cuentas con **doble factor de autenticación** (2FA)[^1]. Además, para más privacidad, permite conectarse a un **servidor Electrum propio** y acceder mediante **Tor**.

Para usuarios Android, es posible descargar la app mediante **F-Droid** (es recomendable verificar la descarga)[^5].

# La Red Liquid

Blockstream es uno de los 15 miembros de una federación global distribuida que opera una red de código abierto[^6] llamada Liquid, una *sidechain* de bitcoin. Como *sidechain*, no busca reemplazar la red Bitcoin sino complementarla para poder realizar transacciones más rápidas, con menores comisiones y más privadas por defecto[^7]. En la red Liquid no se transfiere bitcoin (o satoshis) sino Liquid Bitcoin (L-BTC), que tiene respaldo verificable en bitcoin. Además, la red soporta otros activos Liquid, como Tether (L-USDt). 

**Es importante destacar que si bien puede tener una utilidad concreta en determinadas situaciones, BTC y L-BTC no son exactamente la misma cosa: L-BTC implica más riesgos en una red menos descentralizada que Bitcoin.**

**Si bien la billetera crea cuentas separadas para Bitcoin y para Liquid Bitcoin, al utilizar la billetera es importante prestar atención y no confundir una moneda o dirección de una red con la otra**[^9].

[^1]: [Blockstream Green: Simple and secure Bitcoin wallet](https://blockstream.com/green/)
[^2]: [Blockstream Green Now on Desktop](https://blog.blockstream.com/en-blockstream-green-now-on-desktop/)
[^3]: [About Blockstream](https://blockstream.com/about/)
[^4]: [GitHub - Blockstream/green_qt: Blockstream Green App](https://github.com/Blockstream/green_qt)
[^5]: [A Newly Redesigned Blockstream Green Wallet Goes Mobile](https://blog.blockstream.com/the-newly-redesigned-blockstream-green-wallet-comes-to-mobile/)
[^6]: [The Liquid Network](https://liquid.net/federation) 
[^7]: [How does Liquid keep my transaction data confidential?](https://help.blockstream.com/hc/en-us/articles/900001390743-How-does-Liquid-keep-my-transaction-data-confidential)
[^8]: [What is the Liquid Network?](https://help.blockstream.com/hc/en-us/articles/900002016823-What-is-the-Liquid-Network)
[^9]: [The Truth About Liquid](https://blog.liquid.net/the-truth-about-liquid/)