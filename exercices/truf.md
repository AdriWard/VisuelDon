# Fonctions de  *Truf*

[turf.js](https://turfjs.org/) est un librairie qui permet de faire des transformations sur des données géographiques


## fonction `circle` 

la fonction `circle` retourne un objet *geojson* du type `polygone`

pour créer un objet il faut 3 arguments:

* Les coordonnées

* le rayon du cercle

* l'unité du rayon

## Fonction `bbox` 

la fonction `bbox`est une *bounding box* permet de créer un carré (depuis une autre forme), car la plus par des API Géographique retourne des données à l'intérieur d'un rectangle.


la fonction `bbox` prends un objet geojson et retourne une "bounding box".

## fonction `bboxPolygone`

permet de créer un carré en polygone et avec `addTo(map)` nous l'ajoutons à la carte.

## fonction `distance` 

permet de calculer la distance depuit un point jusqu'au point d'arrivée.

elle prends trois arguments :

* un point de départ

* un point d'arrivée

* l'unité de mesure