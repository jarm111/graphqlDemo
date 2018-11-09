# GraphGL Demo

## QraphQL vs. REST
Yleisimmät ongelmat rest apissa liittyvät haetun datan tarpeellisuuteen, dataa on joko liikaa tai yhdestä endpointista ei saada kaikkea tarpeellista dataa jolloin hakujen määrä kasvaa. Näistä seuraa yleensä turhaa liikennettä ja jolloin aplikaatio saattaa tuntua hitaalta ja käyttää turhaan asiakkaan mobiilidataa.

### REST Esimerkki
REST APIa käyetettäessä data haetaan usein useista endpointeista. Esimerkiksi alla olevassa kuvassa data haetaan kolmesta eri endpointista.

![Esimerkki REST API](https://imgur.com/VIWd5I5.png)

### GraphQL
GraphGL:ssä palvelimella ei tarvitse kuin yhden endpointin josta kaikki tarpeellinen data haetaan. Alla samainen edellä esitetty datan haku toteutettuna graphqlllä

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