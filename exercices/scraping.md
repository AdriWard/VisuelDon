# Technique de scraping

## Technique 1

1. trouver la requête dans le *Network* dans la console développeur du browser, on la copie (click droite et ```copy > copy as cURL (POSIX)```)

2. nous pouvons enregistrer le résulta de la requéte dans un fichier .json ```curl https://www.example.com/api/graphql > data.json```

3. créer un code *Javascripte* pour préparer et filtrer ces données (avec *Ramda*) et prendre ce que l'on veut.

4. enregistrer les données (filtrer) dans un nouveux fichier ```dataFinal.json``` 

## Technique 2

1. Trouver la requête.

1. téclécharger les données avec ```node-fetch```

1. souver les données dans un fichier ```ndjson``` (permet d'avoir un objet json par ligne).

1. si l'on veut baucoup de données, on peut utiliser une boucle.

1. si les données sont dans un fichier ```.ndjson```, nous utilison la lirbarie ```readline``` pour lire chaque ligne, qui est un objet ```json```