# planete System

vous pouvez voir le projet [ici](https://adriward.github.io/)

## structure de fichiers

### dossiers principaux 

`dist` dossier de distribution du projet.

`config` fichier relative à *Compil.sh* (voir plus bas)

`src` fichier source du projet

### dossier dans `src`

* `data` données des planetes

* `distance` page distance

* `infoplanet` info-bulle pour la page d'accueil

* `logo` conserne logo dans le menu

* `nav` conserne le menu

* `scripteJS` les scripts utilisé, ici nous utilisons [d3.js](https://d3js.org/)

* `svg` affichage des planets en page d'accueil

* `volume` page volume

### data

le données ont été écrite spécifiquement pour ce site web, il y'a 8 planets dans `DATA.corps`

il sont inspiré du site [le-systeme-solaire](https://api.le-systeme-solaire.net/)

on premier niveau il y a 

* `infoData` sont les dimensions de chaque données (km,°C,jours)

* `corps` qui contient les données des planetes

exemple :

```json
"corps": [
{
      "id" : "venus",
      "name" : "Venus",
      "distance": 230,
      "rayon" : 17,
      "color" : "#e58a8a",
      "revolution": 22,
      "flag": 0,
      "data": 
      {
          "DemiGrandAxe":108209500,
          "revolution":224.667,
          "rayon": 6051.8,
          "superficie" : {
              "superficieValue":460,
              "superficieExponent":6
          },
          "volume": {
              "volumeValue" : 928.43,
              "volumeExponent":9
          },
          "masse": {
              "masseValue" : 4.8685,
              "masseExponent":24
          },
          "gravity":8.87,
          "periodeRotation": -243.023,
          "temperature":462  
           }
        }
```


pour chaque planet, il y a deux type de données :

*   données d'affichages 

*   données d'informations (`DATA.corps.data`)


## Compil.sh

[Compil.sh](infoCompil.md) est un mini *bunder*.

la seul dèpendance de *Compil.sh* est `Bash`, cela permet de n'avoir aucune installation et de dépendance.



