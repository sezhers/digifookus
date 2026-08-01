---
title: Tugev parool ja paroolihaldurid
description: Miks "P@rool123" ei ole tugev parool, ja miks paroolihaldur on lihtsaim viis oma kontosid päriselt kaitsta.
published: 2026-08-03
category: Turvalisus
tags:
  - turvalisus
  - paroolid
  - algajale
draft: false
lang: et
author: sergei
---

Enamik inimesi teab, et "123456" on halb parool. Vähem teatakse, miks "P@rool2024!" — mis tundub tugev — on tegelikult samuti nõrk, ja miks lahendus pole parem parool, vaid teistsugune süsteem.

## Miks "keeruline" ei tähenda "tugev"

Parooli tugevus ei tule sellest, kui palju erimärke seal on, vaid sellest, kui raske on seda ära arvata või läbi proovida. "P@rool2024!" järgib tuttavat mustrit — suur täht alguses, tavaline sõna, erimärk lõpus — ja just selliseid mustreid proovivad ründajate programmid esimesena.

Palju tugevam on pikk, juhuslik ja unikaalne parool: midagi sellist nagu `7kv-tempel-vaas-93qz`, mida ei ole võimalik meelde jätta ega mustri järgi ära arvata. Probleem on ilmne — sellist parooli ei jäta keegi pähe, iga konto jaoks eraldi.

## Sellepärast ongi olemas paroolihaldurid

Paroolihaldur on rakendus, mis genereerib ja salvestab sinu eest juhuslikke, unikaalseid paroole iga konto jaoks — sina pead meeles pidama ainult ühe peasalasõna (master password), mis avab kogu halduri sisu. Kõik muu käib automaatselt: haldur täidab parooli ise, kui logid teenusesse sisse, ja hoiatab, kui mõni parool on nõrk või on juba lekitatud.

See lahendab kaks levinud probleemi korraga:

1. **Sama parooli taaskasutamine.** Kui kasutad üht parooli mitmes kohas ja üks nendest teenustest satub rünnaku alla ning lekitab sinu parooli, saavad ründajad sama kombinatsiooniga proovida kõiki teisi sinu kontosid. Unikaalne parool iga koha jaoks tähendab, et üksik leke ei mõjuta teisi kontosid.
2. **Nõrgad, kergesti meeldejäävad paroolid.** Kui haldur genereerib parooli sinu eest, pole vaja seda meelde jätta — nii pole ka põhjust seda lihtsaks teha.

## Mida teha täna

- Vali üks usaldusväärne paroolihaldur ja alusta selle kasutamist vähemalt kõige olulisemate kontode (e-post, pangandus, sotsiaalmeedia) jaoks.
- Loo peasalasõna, mis on pikk, kuid sinu jaoks meeldejääv — näiteks neli juhuslikku sõna koos.
- Lisa kaheastmeline autentimine kõikjal, kus see on saadaval — parool üksi ei kaitse sind enam, kui keegi seda juba teab.
- Lase halduril otsida taaskasutatud ja lekkinud paroole ning vaheta need järk-järgult välja.

See on üks lihtsamaid turvalisuse harjumusi, mis nõuab ühekordset seadistamist ja annab pideva kaitse — ilma, et peaksid iga päev midagi rohkem tegema.
