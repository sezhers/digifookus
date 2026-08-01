---
title: Mis on krüptograafia?
description: Krüpteerimine, HTTPS ja lukuga pitser postkastil — kõik see põhineb samadel matemaatilistel ideedel. Lihtne sissejuhatus ilma valemiteta.
published: 2026-08-01
category: Krüptograafia
tags:
  - krüptograafia
  - turvalisus
  - algajale
draft: false
lang: et
author: sergei
---

Krüptograafia kõlab keerulisena, aga selle põhiidee on lihtne: muuta info nii, et selle loeb ainult see, kellel on selleks õigus. Kõik ülejäänud näevad ainult mõttetut tähemärkide jada.

## Kaks põhitüüpi

Krüpteerimist on kahte peamist sorti.

**Sümmeetriline krüpteerimine** kasutab ühte ja sama võtit nii sõnumi lukustamiseks kui avamiseks — nagu tavaline uks ja võti. See on kiire, aga eeldab, et võti saab kuidagi turvaliselt saatja ja saaja vahel liikuda enne, kui side ise saab turvaline olla.

**Asümmeetriline krüpteerimine** lahendab selle probleemi kahe eraldi võtmega: avalik võti, mida võib igaühele jagada, ja privaatvõti, mida ei jaga kunagi kellegagi. Sõnumi, mis on lukustatud avaliku võtmega, saab avada ainult vastava privaatvõtmega. Just see lahendus teeb võimalikuks turvalise suhtluse inimeste vahel, kes pole kunagi varem kohtunud — sealhulgas sinu brauseri ja iga veebilehe vahel.

## Kust sa seda iga päev kohtad

Kui aadressiribal on lukuikoon ja aadress algab "https"-ga, kasutad juba krüptograafiat — brauser ja server on kokku leppinud ühiste võtmete kasutamises, ilma et keegi kolmas saaks vahepealset liiklust lugeda.

Sõnumirakendused nagu Signal kasutavad otspunktkrüpteeringut, mis tähendab, et isegi rakenduse enda pakkuja ei näe sõnumite sisu — ainult saatja ja saaja seadmed omavad vajalikke võtmeid.

Paroolihaldurid ja pilveteenused krüpteerivad sinu andmed enne, kui need üldse serverisse jõuavad, nii et ka andmelekke korral jäävad need lugematuks.

## Miks see on oluline ka siis, kui sul "pole midagi varjata"

Krüptograafia ei kaitse ainult saladusi — see kaitseb terviklust ja usaldust. Digiallkiri (mis samuti põhineb asümmeetrilisel krüptograafial) tõestab, et dokumenti pole pärast allkirjastamist muudetud. Panga mobiilirakendus kasutab krüptograafiat tõestamaks, et ülekande käsu saatis päriselt sina, mitte keegi teine.

Iga kord, kui midagi internetis "lihtsalt töötab" turvaliselt — olgu see e-pood, pangandus või e-riigi portaal — on selle taga tavaliselt mõni neist samadest põhimõtetest.

Järgmistes artiklites vaatame lähemalt, kuidas krüpteerimine praktikas tööle rakendada — failide, ketaste ja igapäevaste sõnumirakenduste tasandil.
