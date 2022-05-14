# Statistici Covid-19
> Aplicatia prezinta cazurile totale, vindecarile si decesele in urma infectarii cu Covid-19 din tara in care este localizat dispozitivul, dar ofera si posibilitatea de a vizualiza date despre o alta tara la alegere introdusa de la tastatura sau aleasa dintr-o lista.

## Cuprins
* [Descriere problema](#descriere-problema)
* [Interfata utilizator](#Interfata-utiliator)
* [Tehnologii](#tehnologii)
* [Descriere API](#descriere-api)
* [Autentificare si autorizare servicii utilizate](#autentificare)
* [Flux de date](#flux-date)
* [Referinte](#referinte)
* [Contact](#contact)

## Descriere problema
COVID-19 este boala infecţioasă cauzată de coronavirusul cel mai recent descoperit. Acest nou virus şi această boală nu au fost cunoscute înainte de apariţia focarului în Wuhan, China, în decembrie 2019.
Aplicatia ofera accesul la date cu privire la evoluția cazurilor de COVID-19, la nivel global, este esențial în adoptarea măsurilor de sănătate publică împotriva pandemiei.
De asemenea, datele aplicatiei sunt actualizate in ritm constant, astfel numărul acestora este determinat de modificările aduse platformei electronice prin care sunt raportate și centralizate rezultatele testelor pentru noul coronavirus. Astfel, conform noii metodologii, centrele de testare introduc în mod direct rezultatele testelor realizate, urmând ca de la nivelul Direcțiilor de Sănătate Publică să fie realizată ancheta epidemiologică și atribuite cazurile pozitive județului/localității de care aparțin persoanele infectate.

## Interfata utilizator

Introducere parametrii


![Image-1](https://user-images.githubusercontent.com/105311851/168444828-05c96b44-2900-4b5d-9927-5bfcd5165b55.png)


Obtinere rezultat


![Image-2](https://user-images.githubusercontent.com/105311851/168444849-74405430-127f-47d9-ba65-d21cf514d271.png)


## Tehnologii
* Node.js
* JavaScript
* HTML
* CSS

## Descriere API
* Primul API utilizat intoarce un JSON ce contine date despre locatia actuala a dispozitivului, astfel ca atunci cand accesam aplicatia sa ne afiseze datele din tara in care suntem localizati.

Request (Metoda HTTP: GET ) la endpoint-ul:
`"https://api.ipgeolocation.io/ipgeo?apiKey=14c7928d2aef416287e034ee91cd360d"`

Response:
`{"ip":"2a02:2f04:d20a:6c00:6012:2057:e61f:47f3","continent_code":"EU","continent_name":"Europe","country_code2":"RO","country_code3":"ROU","country_name":"Romania","country_capital":"Bucharest","state_prov":"","district":"Bucharest","city":"Bucharest","zipcode":"","latitude":"44.43429","longitude":"26.10298","is_eu":true,"calling_code":"+40","country_tld":".ro","languages":"ro,hu,rom","country_flag":"https://ipgeolocation.io/static/flags/ro_64.png","geoname_id":"10100375","isp":"RCS & RDS SA","connection_type":"","organization":"RCS & RDS SA","currency":{"code":"RON","name":"Romanian Leu","symbol":"lei"},"time_zone":{"name":"Europe/Bucharest","offset":2,"current_time":"2022-05-14 15:47:43.203+0300","current_time_unix":1652532463.203,"is_dst":true,"dst_savings":1}}`

* AL doilea API utilizat intoarce un JSON cu situatia actuala a infectarii Covid-19. Se afiseaza numarul cazurilor totale, al vindecarilor si al deceselor.
Request (Metoda HTTP: GET) la endpoint-ul:
`"https://api.covid19api.com/total/country/Romania/status/deaths"`

Response( pt a se vedea tot raspunsul, se poate accesa link-ul de mai sus):
`[{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-22T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-23T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-24T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-25T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-26T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-27T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-28T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-29T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-30T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-01-31T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-01T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-02T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-03T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-04T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-05T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-06T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-07T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-08T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-09T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-10T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-11T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-12T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-13T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-14T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-15T00:00:00Z"},{"Country":"Romania","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Cases":0,"Status":"deaths","Date":"2020-02-16T00:00:00Z"},{"Country":"(…)}]`

## Autentificare si autorizare servicii utilizate
Cele doua API-uri utilizate sunt publice, a fost nevoie sa imi creez un cont de utilizator pentru a primii Api keys.

## Flux de date
Initial aplicatia returneaza datele din tara in care este localizat dispozitivul, ulterior utilizatorul poate introduce de la tastatura locatia din care vrea sa vada statisticile Covid-19, dar de asemenea exista un dropdown list din care poate alege locatia direct, ramane la latitudinea fiecarui utilizator metoda mai potrivita de a cauta.
Se face un request catre primul API, care intoarce un JSON cu date despre locatia actuala a dispozitivului, astfel ca atunci cand accesam aplicatia sa ne afiseze datele din tara in care suntem localizati.
Ulterior, se face un request catre al doilea API, care intoarce un JSON cu situatia actuala a infectarii Covid-19. Se afiseaza numarul cazurilor totale, al vindecarilor si al deceselor.

In final, utilizand response-urile de la cele doua API-uri, aplicatia intoarce statisticile despre infectarile covid din tara in care este localizat utilizatorul sau pe care acesta a cautat-o sau a selectat-o din lista.
## Referinte
* https://api.covid19api.com

## Contact
Via mail: otetnicolae18@stud.ase.ro
