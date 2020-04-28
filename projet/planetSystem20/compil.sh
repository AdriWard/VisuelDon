#!/bin/bash

version="1.4"

##########################################################################################################

dirMaster="src"

################################## variables de fichier de sortie ###################################################

dirOutput=""

scriptJS=""

styleCSS=""

################################## variables de fichie de Config ###################################################

dirConfig=""

IncludeFile=""

scriptConfig=""

styleConfig=""

################################## variables de fichie de temporaire ###################################################

tempBrique="temp"

##########################################################################################################

echo "Compil version : $version"

##########################################################################################################

### répertoire d'entrée

if [ ! -z $dirMaster ];
then

    if [[ $dirMaster != */ ]];
    then

    dirMaster=$dirMaster/

    fi

    echo "repertoire de création de page (Master) : $dirMaster"
fi


################################################ Output ###############################################
#### repertoire de sortie

if [ ! -z $dirOutput ];
then

    if [[ $dirOutput != */ ]];
    then

    dirOutput=$dirOutput/

    fi

else

    dirOutput="dist/"

fi

echo "repertoire de sortie : $dirOutput"

##### nom du scripte Javascipte

if [ ! -z $scriptJS ];
then

    scriptJS="${scriptJS#/}"

    scriptJS=$dirOutput$scriptJS

else

    scriptJS=$dirOutput"script.js"

fi


##### nom de la feuille de style CSS

if [ ! -z $styleCSS ];
then

    styleCSS="${styleCSS#/}"

    styleCSS=$dirOutput$styleCSS

else

    styleCSS=$dirOutput"style.css"

fi

rm -rf $dirOutput

mkdir $dirOutput

######################################################### fichier de configuration ##########################################

#### réertoire de configuration

if [ ! -z $dirConfig ];
then

    if [[ $dirConfig != */ ]];
    then

    dirConfig=$dirConfig/

    fi

else

    dirConfig="config/"

fi

echo "repertoire de configuration : $dirConfig"

#### fichier IncludeFile

if [ ! -z $IncludeFile ];
then

    IncludeFile="${IncludeFile#/}"

    IncludeFile=$IncludeFile

else

    IncludeFile="IncludeFile"

fi


####scripte pour fichier .js #######

if [ ! -z $scriptConfig ];
then

    scriptConfig="${scriptConfig#/}"

    scriptConfig=$scriptConfig

else

    scriptConfig="script"

fi


##### style pour fichier .css ##############

if [ ! -z $styleConfig ];
then

    styleConfig="${styleConfig#/}"

    styleConfig=$styleConfig

else

    styleConfig="style"

fi


### création répertoire #####

if [[ ! -z $dirConfig ]];
then
    mkdir $dirConfig
fi


### repertoire temporaire ####

if [ ! -z $tempBrique ];
then

    if [[ $tempBrique != */ ]];
    then

    tempBrique=$tempBrique/

    fi

else

    tempBrique="temp/"

fi

echo "repertoire de temporaire : $tempBrique"


########################################## IncludeFile ###########################################################3

if [ ! -z `find -name $IncludeFile` ];
then

    for fichier in `cat $dirConfig$IncludeFile`
    do

    if [[ $fichier = *@*  ]];
    then

        fichier=${fichier#@}
        
        fichier=${fichier%@*}

        fichier=${fichier%/*}

        if [[ `find -name "${fichier}*" -not -path "./${dirOutput}*" | wc -l` >  1 ]];
        then
            temp=`find -name "${fichier}" -not -path "./${dirOutput}*"`
        else
            temp=`find -name "${fichier}*" -not -path "./${dirOutput}*"`
        fi

        if [[ $temp ]];
        then

            temp2=${temp#./${dirMaster}}

            temp2=${temp2%./*}

            temp2=${temp2##*/}

            echo "incorparation de : $fichier - dans ./$dirOutput"

            cp -r $temp dist/$temp2

        else
            
            echo -e '\033[0;33m'
            
            echo "erreur incorparation du fichier: $fichier - dans ./$dirOutput"

            echo -e '\033[0m'

        fi

    fi

    done

else
    
    touch $dirConfig$IncludeFile

fi

#########################################################################################################


################################## creer les variable de données JSON ####################################

for fichier in `find -name "*.json" -not -path "./$dirOutput*"`
do
    nom=${fichier%.*}

    nom=${nom##*/}

    nom=${nom^^}

    echo "const ${nom} = " >> $scriptJS

    cat $fichier >> $scriptJS

    echo ";" >> $scriptJS

    echo -e "\n" >> $scriptJS

    echo "implementaion données : $nom"

done 

##########################################################################################################

###################################### traitement des fichier js #########################################

if [ ! -z `find -name $scriptConfig` ];
then

    for fichier in `cat $dirConfig$scriptConfig`
    do

    if [[ $fichier = *@*  ]];
    then

        fichier=${fichier#@}
        
        fichier=${fichier%@*}

        fichier=${fichier%.js*}

        temp=`find -name "${fichier}.js" -not -path "./$dirOutput*"`

        if [[ $temp ]];
        then

            echo "implementaion du brique : $fichier - fichier : $scriptJS"

            cat $temp >> $scriptJS

            echo -e "\n" >> $scriptJS

        else
            
            echo -e '\033[0;33m'
            
            echo "erreur brique : $fichier - fichier : $scriptJS"

            echo -e '\033[0m'

        fi

    fi

    done

else

    for fichier in `find -name "*.js" -not -path "./$dirOutput*"`
    do

        cat $fichier >> $scriptJS

        echo -e "\n" >> $scriptJS

        echo "implementaion script javascripte : $fichier"

        fichier=${fichier##*/}
        
        fichier=${fichier%.js*}

        fichier=@${fichier}@

        echo -e "\n" >> $dirConfig$scriptConfig

        echo $fichier >> $dirConfig$scriptConfig

    done

fi

##########################################################################################################

##################################### traitement des fichier css #########################################

if [ ! -z `find -name $styleConfig` ];
then

    for fichier in `cat $dirConfig$styleConfig`
    do

    if [[ $fichier = *@*  ]];
    then

        fichier=${fichier#@}
        
        fichier=${fichier%@*}

        fichier=${fichier%.css*}

        temp=`find -name "${fichier}.css" -not -path "./$dirOutput*"`

        if [[ $temp ]];
        then

            echo "implementaion du brique : $fichier - fichier : $styleCSS"

            cat $temp >> $styleCSS

            echo -e "\n" >> $styleCSS

        else
            
            echo -e '\033[0;33m'
            
            echo "erreur brique : $fichier - fichier : $styleCSS"

            echo -e '\033[0m'

        fi
    fi
    done

else

    for fichier in `find -name "*.css" -not -path "./$dirOutput*"`
    do

        cat $fichier >> $styleCSS

        echo -e "\n" >> $styleCSS

        echo "implementaion fichier CSS : $fichier"

        fichier=${fichier##*/}
        
        fichier=${fichier%.css*}

        fichier=@${fichier}@

        echo -e "\n" >> $dirConfig$styleConfig

        echo $fichier >> $dirConfig$styleConfig

    done

fi

##########################################################################################################

################################################ multi-brique .html ######################################

mkdir $tempBrique

for page in `find -name "*.html" -not -path "./$dirOutput*"`
do

    for fichier in `cat ${page}`
    do

    if [[ $fichier = *@*  ]];
    then

        fichier=${fichier#@}
        
        fichier=${fichier%@*}

        temp=`find -name "${fichier}.html" -not -path "./$dirOutput*" -a -not -path "./$tempBrique*"`

        if [[ $temp ]];
        then

            echo "préparation brique : $fichier"

            fichier=`cat $temp`

        else
            
            echo -e '\033[0;33m'
            
            echo "erreur brique : $fichier"

            echo -e '\033[0m'

            fichier=""
        fi

    fi

    nomPage=${page##*/}

    echo -n $fichier" " >> $tempBrique${nomPage}

done

done

##########################################################################################################


############################################ Traitement HTML #############################################

for page in `ls ${dirMaster} | grep .html`
do

for fichier in `cat ${dirMaster}${page}`
do

    if [[ $fichier = *@*  ]];
    then

        fichier=${fichier#@}
        
        fichier=${fichier%@*}

        temp=`ls $tempBrique | grep $fichier.html`

        if [[ $temp ]];
        then

            echo "implementaion du brique : $fichier - page : $page"

            fichier=`cat $tempBrique/$temp`
 
        else
            
            echo -e '\033[0;33m'
            
            echo "erreur brique : $fichier - page : $page"

            echo -e '\033[0m'

            fichier=""
        fi

    fi

    if [[ $fichier = */head* ]];
    then
        echo '<link rel="stylesheet" href="style.css">' >> $dirOutput${page}
    fi

    if [[ $fichier = */body* ]];
    then
        echo '<script src="script.js"></script>' >> $dirOutput${page}
    fi

    echo -n $fichier" " >> $dirOutput${page}

done

echo "création page html : $page"

################################################# start de browser web ###################################

start dist/${page}

##########################################################################################################

done

rm -rf $tempBrique

if [[ `ls ${dirMaster} | grep .html | wc -l` == 0 ]];
then

echo -e '\033[0;33m'
            
echo "erreur : il n'y a pas de page .html dans le repertoire ${dirMaster}"

echo -e '\033[0m'

echo -e '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title></title>
</head>
<body>
<script src="script.js"></script>
</body>
</html>' >> ${dirOutput}index.html

echo "cération de la page de default : index.html"

fi

##########################################################################################################