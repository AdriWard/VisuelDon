# planete System

*documentation en cours d'écriture*

## A faire

 ### info-bull

 j'ai ajouté un *drag and drop* à l'info-bull, mais je dois encore le finialiser.

 le déplacement se fait sans problème, sauf quand on saissie l'info-bull par le texte, qui décale l'info-bull au moment du drop

 ### couleur planetes et orbites

 les planetes n'ont pas encore leur couleurs définitive.

  les orbites sont peut-être trop fin sur un fond noir, je vais tester différente grandeure

  ### compléter la documentation

  j'ai mis ce qui est demandé dans la documentation, mais j'aimerai la compléter avec plus d'information

  ### *si le temps* ajout d'un logo

  j'aimais bien qu'on puise voir toutes les orbites (en même temps), je pourrais le faire avec un *logo* (bouton) dans le menu.

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



