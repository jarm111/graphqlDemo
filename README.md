# GraphQL demo

## GraphQL vs. REST
Yleisimmät ongelmat rest apissa liittyvät haetun datan tarpeellisuuteen, dataa on joko liikaa tai yhdestä endpointista ei saada kaikkea tarpeellista dataa jolloin hakujen määrä kasvaa. Näistä seuraa yleensä turhaa liikennettä ja aplikaatio saattaa tuntua hitaalta sekä käyttää turhaan asiakkaan mobiilidataa. GraphQL pyrkii poistamaan nämä ongelmat mahdollistamalla kaiken tarvittavan datan noutamisen yhdestä endpointista. Lisäksi palvelin toimittaa asiakasohjelmalle vain sen pyytämän datan jolloin vältytään turhalta liikenteeltä.

GraphQL asettaa clientin suorituskyvyn etusijalle.


### REST Esimerkki
REST APIa käytettäessä sivun tarvitsema data haetaan usein useista endpointeista. Esimerkiksi alla olevassa kuvassa data haetaan kolmesta eri endpointista. 

![Esimerkki REST API](https://imgur.com/VIWd5I5.png)

### GraphQL
GraphGL:ssä palvelimella ei välttämättä ole kuin yksi endpointti, josta kaikki tarpeellinen data haetaan. Alla edellä esitetty datan haku toteutettuna graphql:llä. GraphQL endpointtiin lähetetään query jossa kerrotaan mitä tietoja tarvitaan, sekä vaaditut argumentit. Asiakas sovellukselle palautetaan pyynnön mukainen data.

GraphQL soveltuu REST APIa paremmin nopesti kehittyville sovelluksille joustavan luonteensa takia. Monet muutokset clienttiin eivät tarvitse muutoksia serverille. Esimerkiksi jos viimeisimpiä seuraajia ei ladatakaan enää etusivulla ei kyselystä tarvitse kuin poistaa followers osa, jolloin palvelin ei palauta tiedot kuin käyttäjästä ja hänen postauksistaan.  

![Datan haku QraphQL endpointista](https://imgur.com/uY50GHz.png)

## GraphQL SDL (Schema Definition Language)
GraphQL malli määritellään vahvasti tyypitetyllä syntaksilla. Mallissa (schema) on kolme juurityyppiä `Query`, `Mutation` ja `Subcription`. Juurityypit vastaavat kolmea GrapQL:n operaatiota. Query palauttaa jotain tietoa tietokannasta, mutation muokkaa tai lisää dataa tietokantaan ja subscription mahdollistaa datan muutosten seuraamisen ja muutosten näyttämisen asiakasohjelmassa ilman uusien kyselyiden lähettämistä. Demossa on käsitelty vain query ja mutation tyyppejä. Malliin voi luoda myös omia objekti tyyppejä kuten esimerkissä oleva ´Message´ tyyppi.

Mallissa esitellyt tyypit määrittävät mitä dataa on mahdollista hakea. Serverille tulevat kyselyt validoidaan ja suoritetaan mallin mukaan. Mallissa oleva huutomerkki `!` tarkoitta ettei kyseisen kentän arvo voi olla null ja palvelu lupaa antaa sille jonkin arvon.  Esimerkiksi alla olevaan scheemaan ajettu `query { info }` voi palauttaa vain string tyyppistä dataa eikä sen arvo voi olla null. 

Kentät voivat myös vaatia argumettejä, esimerkiksi ´message´ kenttä alla, argumenttien nimi ja arvon tyyppi on määritelty.

```
// Demon gql-schema

type Query {
  info: String!
  message(_id: String!): Message
  allMessages: [Message!]
}

type Mutation {
  createMessage(msg: String!): Message!
}

# Uusi tyyppi ja sen määritys
type Message {
  _id: ID!
  msg: String!
  user: String
}

```

## Kyselyiden suorittaminen
Kyselyt (queryt) suoritetaan resolver funktioissa, jotka palauttavat scheman mukaista dataa. Yksinkertainen esimerkki tästä on demon `info` kysely joka palauttaa kovakoodatun stringin "Tämä on QraphQL API".
```
  info() {
    return 'Tämä on QraphQL API';
  }
```


## Demosta
Demon frontti on tehty angularilla, angulariin tarvitsee asentaa [Apollo client](https://www.apollographql.com/) jotta sovellukseen saadaan helposti graphql tuki. Apollo tukee myös muita JavaScript frameworkkejä kuten Reactia ja Vue.js:ää.

Backendinä on node-express palvelin johon lisätty QraphQL:n tarvitsemat kirjastot, tietokantana mongodb

## Asennus
0. Cloonaa tai lataa repository
1. Asenna Node.js, versio 8.x. tai 10.x. [nodejs.org](nodejs.org)
2. Asenna Angular cli  `npm install -g @angular/cli `
3. Aja `npm install ` molemmissa projektin ali-kansioissa
4. Lisää .env tiedosto graphql_backend kansioon 
    ```
    /graphql_backend/.env

    PORT=4600
    DB_URI=mongodb://localhost:27017/graphql-demo
    ```
5. käynnistä backend komennolla `npm start `
6. ja frontend komennolla `ng serve -o`

Noden kehittämistä helpottaa nodemonin asennus `npm install -g nodemon`, ajetaan komennolla `nodemon server.js`. Nodemon tarkkailee tiedostoja ja käynnistää prosessin uudestaan muutosten yhteydessä.

## Tehtävä - tee jompikumpi
1. Laajenna graphql:n schema ja resolver kattamaan tietokannasta löytyvät tiedot ´user´ ja ´title´. Käytä näitä jollain tavoin frontendissä. Esim. lisää viesteihin näkyviin otsikko ja nimimerkki, lisäksi viestin kirjoittamisen yhteydessä tallenna nimimerkki ja otsikko.

2. Tee haluamallasi tekniikalla, esim React tai vue.js, frontend joka käyttää demo-palvelinta ja näyttää ainakin viestit ja mahdollistaa uusien viestien kirjoittamisen.


## Lähteet ja linkit
[qraphql.org](https://graphql.org/)

[Yleinen GraphQL esittely lopussa tutoriaaleja eri tekniikoille](https://www.howtographql.com/)

[GraphQL Node.js tutoriaali](https://www.howtographql.com/graphql-js/0-introduction/)

[Angular GraphQL tutoriaali](https://medium.com/codingthesmartway-com-blog/apollo-client-for-angular-making-use-of-graphql-8d9a571e020c)
