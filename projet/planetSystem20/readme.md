# planete System

*documentation en cours d'écriture*

## dossiers principaux 

`dist` dossier de distribution du projet, aller dans ce dossier et ouvrer sur index.html pour voir le projet

`config` fichier relative à *Compil.sh* (voir plus bas)

`src` fichier source du projet

### data

le données ont été écrite spécifiquement pour ce site web, il y'a 8 planets dans `DATA.corps`

pour chaque planet, il y a deux type de données :

*   données d'affichages 

*   données d'information (`DATA.corps.data`)

### dossier dans `src`

* `data` données des planetes

* `infoplanet` info-bulle d'information

* `nav` conserne le menu

* `scripteJS` les scripts utilisé, ici nous utilisons [d3.js](https://d3js.org/)

* `svg` affichage des planets 

## Compil.sh

[Compil.sh](infoCompil.md) est un mini *bunder*.

la seul dèpendance de *Compil.sh* est `Bash`, cela permet de n'avoir aucune problème d'installation ou de dépendance.



