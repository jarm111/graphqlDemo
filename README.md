# GraphGL demo

## QraphQL vs. REST
Yleisimmät ongelmat rest apissa liittyvät haetun datan tarpeellisuuteen, dataa on joko liikaa tai yhdestä endpointista ei saada kaikkea tarpeellista dataa jolloin hakujen määrä kasvaa. Näistä seuraa yleensä turhaa liikennettä ja jolloin aplikaatio saattaa tuntua hitaalta ja käyttää turhaan asiakkaan mobiilidataa.


### REST Esimerkki
REST APIa käyetettäessä data haetaan usein useista endpointeista. Esimerkiksi alla olevassa kuvassa data haetaan kolmesta eri endpointista.

![Esimerkki REST API](https://imgur.com/VIWd5I5.png)

### GraphQL
GraphGL:ssä palvelimella ei tarvitse kuin yksi endpointti, josta kaikki tarpeellinen data haetaan. Alla edellä esitetty datan haku toteutettuna graphql:llä. 

GraphQL soveltuu REST APIa paremmin nopesti kehittyville sovelluksille joustavan luonteensa takia. Monet muutokset clienttiin eivät tarvitse muutoksia serverille. Esimerkiksi jos viimeisimpiä seuraajia ei ladatakaan enää etusivulla ei kyselystä tarvitse kuin poistaa followers osa, joilloin palvelin ei palauta tiedot kuin käyttäjästä ja hänen postauksistaan.  

![Saman datan haku QraphQL endpointista](https://imgur.com/uY50GHz.png)

### Lähteet
[qraphql.org](https://graphql.org/)

[Fullstack tutoriaali sarja](https://www.howtographql.com/)

## Asennus
1. Node.js, versio 8.x. tai 10.x. [nodejs.org]
2. Angular cli  `npm install -g @angular/cli `
3. Aja `npm install ` molemmissa kansioissa
4. käynnistä backend komennolla `npm start `
5. ja frontend komennolla `ng serve`