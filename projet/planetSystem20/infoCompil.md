# Compil

*version : 1.4*

*compil* est un *bunder* frontend pour les fichier ```.html```,```css```,```.js``` et ```json``` 

simple d'utilisation, il ne requère uniquement ```bash``` pour son execution

## new version 1.1

maintenent il y'a deux fichier permetent de choisire l'ordre d'incorporation

## new version 1.2

ajout du fichier d'inclusion *includeFile*

## new version 1.4

*Compil* accepte le incorporation de plus d'un niveau. 

on peut mettre une brique dans une brique, mais pas une brique dans une brique dans une brique

## Dépendece

*Compil* réquère l'interpréteur de scripts ```Bash```

## Lancer Compil

 pour lancer Compil, il faut lance le scripte ```compil``` ou ```compil.sh``` avec la commande :

 ```bash compil```

 ou

 ```bash compil.sh```

 ## Fichier de sortie

 *Compil* créer 3 fichier de sortie (maximume) dans le répertoire ```dist/```

 * scripte.js : code javascript
 * style.css : feuille de style CSS
 * *page*.html : selon *Système brique et page* du projet, voir plus bas 

 ## implémenttation fihcier *.json*,*.js* et *.css*

 ### Fichier *.json*


*Compil* transforme le fichier ```.json``` en objet javascript

le nom du fichier *json* devient le nom (en majuscule) de la objet javascript

```data.json => const DATA```

il sont placé au début du fichier ```dist/script.js```

les fichiers peuvent être dans n'import qu'elle répertoire

### Fichier *.js*

*Compil* regroupe les fichiers ```.js``` dans l'unique fichier ```dist/scripte.js```

les fichiers peuvent être dans n'import qu'elle répertoire

#### verison 1.1 : fichier *script*

l'ordre d'implémentation se fait selon le fichier ```script``` que *Compil* crée si il n'existe pas.

lancer une première fois *Compil* avec la commande ```bash compil.sh``` : il va créer le fichier ```script``` qui contient tout le fichier ```.js``` avec la forme ```@nom_fichier@```.

*Compil* va se référer à ce fichier pour l'ordre de implémentation des fichiers javascript, changer l'ordre des nom de fichier et vous changer l'ordre d'implémentation

si vous enlever le nom d'un fichier celui si ne sera plus incorporer dans ```dist/script.js```

__ATTENTION__ si vous metter deux fois le même nom de fichier celui si sera incorporer deux fois

*script* ne prend en compte que les fichier ```.js```

### Fichier *.css*

*Compil* regroupe les fichiers ```.css``` dans l'unique fichier ```dist/style.css```

les fichiers peuvent être dans n'import qu'elle répertoire

#### verison 1.1 : fichier *style*

l'ordre d'implémentation se fait selon le fichier ```style``` que *Compil* crée si il n'existe pas.

lancer une première fois *Compil* avec la commande ```bash compil.sh``` : il va créer le fichier ```style``` qui contient tout le fichier ```.css``` avec la forme ```@nom_fichier@```.

*Compil* va se référer à ce fichier pour l'ordre de implémentation des fichiers CSS, changer l'ordre des nom de fichier et vous changer l'ordre d'implémentation

si vous enlever le nom d'un fichier celui si ne sera plus incorporer dans ```dist/style.css```

__ATTENTION__ si vous metter deux fois le même nom de fichier celui si sera incorporer deux fois

*style* ne prend en compte que les fichier ```.css```

## Système brique et page pour les fichier *.html*

*Compil* fonctionne avec le système de brique et de page

* les briques sont des "bout" de code html

* les pages sont les pages html final du projet, c'est dans les pages qu'on incorpore les briques

### comment se différecie une page d'une brique ?

tout fichier *.html* peut être vue comment une brique.

Une page est tout fichier *.html* qui dans le répertoire *Master*, qui est repertoire courant par défaut.

l'utilisateur peut changer le répertoire par défaut en modifient la variable ```dirMaster``` dans ```compil.sh```

exemple :

fichier de création de page => src/

> ```compil.sh```

> dirMaster="src"


### Comment implémenter une brique dans une page ?

exempl : incorporer un menu dans une page,

nous créons un fichier *.html* contenent le code du menu, on appel ce fichier ```nav.html``` (qui n'est pas dans le répertoire master)

dans la page ```index.html``` (qui est dans le répertoire master) il suffie d'ajouter ```@nav@``` dans le fichier à l'endroit on l'on veut incorporer la *brique*

*index.html*
```html

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

        @nav@ 
    

        <h1>Titre</h1>

        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Repellendus est id accusamus nulla. Voluptates molestiae, 
            ducimus hic ullam eligendi rerum adipisci consequatur et, 
            accusamus numquam facilis odit odio sint provident. </p>
    
    </body>
</html>

```

__IL NE DOIT PAS AVOIR DE MOT COLLER A LA BRIQUE__

exemple :

``` <h2>@titre@</h2> ``` ne fonctionne pas !!!! 

```<h2> @titre@ </h2> ``` fonctionne !

### sytsème de semi-brique : solution au multi-incoporation

*Compil* permet incorporer une brique dans une brique mais pas plus (une brique dans une brique dans une brique)


si il y a une incoporation de plus d'un niveaux il est posssible de créer des semi-briques

``` main.html``` => ``` <h2> Main <h2> ```

```endMain.html``` => ``` <h2> fin de Main <h2> ```

en dans une page html 

*page.html*
```html

    <h1> page HTML </h1>

    @main@

    @div1@

    @div2@

    @div3@

    @endMain@

```

### remarque 

*Compil* ajoute le lien *style.css* et *scripte.js* automatiquement, mais pas le reste du code HTML

il faut créer une page : 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```

**ATTENTION** : Compil ne rajoute le lien `.js` seulement si il y a un `<body>` et `.css` seulement si il y a un `<head>` 

## autres fichiers

il est possible d'incorporer des fichiers ou dossiers dans ```dist/``` il faut ajouter leur nom dans ```IncludeFile``` qui est dans `dist/`

### IncludeFile

IncludeFile incorpore des fichiers ou dossiers dans le répertoire ```dist/``` 

* pour un fichier  ajouter @nom_du_fichier@

* pour un dossier ajouter le nom du dossier @nom_Dossier@

exemple
```
@image.jpeg@ # nom de fichier

@img@ # nom d'un dossier img/

```
la syntaxe suivante est aussi accépter

```

@image1@ # nom de fichier

@img/@ # nom de dossier

```