const URL_SUNSYSTEM = "https://api.le-systeme-solaire.net/rest/bodies/";

const x = parseInt(document.getElementById("sun").getAttribute('cx'));

const y = parseInt(document.getElementById("sun").getAttribute('cy'));

const rSun =  parseInt(document.getElementById('sun').getAttribute('r'));

const svg = document.getElementById('sunSystem');

const fracDistance = 2300000; //100000;

const fracRotation = 50; //120;

const fracVol = 1000; //1000;

// EVENEMENT CLICK - FLAG

const flag = [];

for(let i = 0;i<9;i++)
{
    flag[i] = true;
}


let createTemplCeleste = (planet) => {

    //template pour orbite planet

    let tmpOrbite = document.createElementNS('https://www.w3.org/2000/svg','path');
    tmpOrbite.setAttribute('id','orbite' + planet);
    tmpOrbite.setAttribute('class','notinfo');
    tmpOrbite.setAttribute('fill','none');
    tmpOrbite.setAttribute('d','');
    tmpOrbite.setAttribute('stroke-width',35);

    svg.append(tmpOrbite);

    //template pour orbite

    let tmpOrbite2 = document.createElementNS('https://www.w3.org/2000/svg','path');
    tmpOrbite2.setAttribute('id','orbite2' + planet);
    tmpOrbite2.setAttribute('class','notinfo');
    tmpOrbite2.setAttribute('fill','none');
    tmpOrbite2.setAttribute('d','');
    tmpOrbite2.setAttribute('stroke-width',2);

    svg.append(tmpOrbite2);

    //template pour planet

    let tmpAnimate = document.createElementNS('https://www.w3.org/2000/svg','animateMotion');

    tmpAnimate.setAttribute('id','rotation' + planet);

    let tmpPlanet = document.createElementNS('https://wwww.w3.org/2000/svg','circle');

    tmpPlanet.setAttribute('id',planet);

    tmpPlanet.append(tmpAnimate);

    svg.append(tmpPlanet);  

    //rotation pour text

    let tmpAnimate2 = document.createElementNS('https://www.w3.org/2000/svg','animateMotion');

    tmpAnimate2.setAttribute('id','rotation2' + planet);
    
    //template pour texte 

    let text = document.createElementNS('https://www.w3.org/2000/svg','text');

    text.setAttribute('id','text' + planet);
    text.setAttribute('class','notinfo');
    text.setAttribute('x',1000);
    text.setAttribute('y',650);
    text.setAttribute('font-family','Verdana');
    text.setAttribute('font-size',55);
    text.setAttribute('fill','indianred');
    text.setAttribute('text-anchor','middle');

    text.append(tmpAnimate2);

    svg.append(text);

}

let CorpCeleste = (planet,color) => {

        let ElementPlanet = document.getElementById(planet);
        let rotation = document.getElementById('rotation' + planet);
        let rotation2 = document.getElementById('rotation2' + planet);
        let textPlanet = document.getElementById('text' + planet);
        let orbite = document.getElementById('orbite' + planet);
        let orbite2 = document.getElementById('orbite2' + planet);

        ElementPlanet.setAttribute('cx',0);
        ElementPlanet.setAttribute('cy',0);

        rotation.setAttribute('repeatCount','indefinite');
        rotation2.setAttribute('repeatCount','indefinite');

        ElementPlanet.setAttribute('fill',color);

        textPlanet.setAttribute('fill',color);

        textPlanet.setAttribute('x',-100);
        textPlanet.setAttribute('y',-100);

        orbite2.setAttribute('stroke',color);
        

        $.get(URL_SUNSYSTEM + planet, corp => {

            console.log("distance " + corp.semimajorAxis/fracDistance);
            console.log("rotation " + corp.sideralOrbit/fracRotation);
            console.log("volume " + corp.meanRadius/fracVol);

            textPlanet.append(document.createTextNode(corp.name));

            ElementPlanet.setAttribute('r',corp.meanRadius/fracVol);

            rotation.setAttribute('dur',corp.sideralOrbit/fracRotation);

            rotation.setAttribute('path','M ' + (x - corp.semimajorAxis/fracDistance - rSun) +' ' + y +' a 1 1 0 0 1 ' + ((corp.semimajorAxis/fracDistance + rSun)*2) + ' 0 A 1 1 0 0 1 ' + (x - corp.semimajorAxis/fracDistance - rSun) +' '+ y +' Z');
            
            rotation2.setAttribute('dur',corp.sideralOrbit/fracRotation);

            rotation2.setAttribute('path','M ' + (x - corp.semimajorAxis/fracDistance - rSun) +' ' + y +' a 1 1 0 0 1 ' + ((corp.semimajorAxis/fracDistance + rSun)*2) + ' 0 A 1 1 0 0 1 ' + (x - corp.semimajorAxis/fracDistance - rSun) +' '+ y +' Z');

            orbite.setAttribute('d','M ' + (x - corp.semimajorAxis/fracDistance - rSun) +' ' + y +' a 1 1 0 0 1 ' + ((corp.semimajorAxis/fracDistance + rSun)*2) + ' 0 A 1 1 0 0 1 ' + (x - corp.semimajorAxis/fracDistance - rSun) +' '+ y +' Z');

            orbite2.setAttribute('d','M ' + (x - corp.semimajorAxis/fracDistance - rSun) +' ' + y +' a 1 1 0 0 1 ' + ((corp.semimajorAxis/fracDistance + rSun)*2) + ' 0 A 1 1 0 0 1 ' + (x - corp.semimajorAxis/fracDistance - rSun) +' '+ y +' Z');
        })    

}

const URL_PLANET = "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false";

$.get(URL_PLANET, corp => {

    let listPLanet = [];

    console.log(corp);
    console.log(corp.bodies[7].id);

    for(let i= 0;i < 13;i++)
    {
        listPLanet.push(corp.bodies[i].id);
    }

    console.log(listPLanet);

})

createTemplCeleste('mercure');

createTemplCeleste('venus');

createTemplCeleste('terre');

createTemplCeleste('mars');

createTemplCeleste('jupiter');

createTemplCeleste('saturne');

createTemplCeleste('uranus');

createTemplCeleste('neptune');

$('body').html($('body').html());

CorpCeleste('mercure','darkgray');

CorpCeleste('venus','peachpuff');

CorpCeleste('terre','cornflowerblue');

CorpCeleste('mars','indianred');

CorpCeleste('jupiter','darkorange');

CorpCeleste('saturne','khaki');

CorpCeleste('uranus','cyan');

CorpCeleste('neptune','darkblue');

//événement 

// EVENEMENT SOLEIL

let sun = document.getElementById('sun');

let textSun = document.getElementById('textsun');

//let fontSun = document.getElementById('fontsun');

let tog = true;


sun.addEventListener('mouseover', () => {
    sun.setAttribute('fill','red');


    textSun.setAttribute('class','info');
  //  fontSun.setAttribute('class','info');


});



sun.addEventListener('mouseout' , () => {
    sun.setAttribute('fill','gold');

    textSun.setAttribute('class','notinfo');
    //fontSun.setAttribute('class','notinfo');
});




// EVENEMENT MERCURE


document.getElementById('mercure')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[1]) {overOut('mercure',true)};

});

document.getElementById('mercure')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[1]) {overOut('mercure',false)};
});

document.getElementById('orbitemercure')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[1]) {overOut('mercure',true)};
});

document.getElementById('orbitemercure')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[1]) {overOut('mercure',false)};

});

// EVENEMENT VENUS

document.getElementById('venus')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[2]){overOut('venus',true)};

});

document.getElementById('venus')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[2]){overOut('venus',false)};
});

document.getElementById('orbitevenus')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[2]){overOut('venus',true)};
});

document.getElementById('orbitevenus')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[2]){overOut('venus',false)};

});

// EVENEMENT TERRE

document.getElementById('terre')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[3]){overOut('terre',true)};

});

document.getElementById('terre')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[3]){overOut('terre',false)};
});

document.getElementById('orbiteterre')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[3]){overOut('terre',true)};
});

document.getElementById('orbiteterre')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[3]){overOut('terre',false)};

});

// EVENEMENT MARS

document.getElementById('mars')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[4]){overOut('mars',true)};

});

document.getElementById('mars')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[4]){overOut('mars',false)};
});

document.getElementById('orbitemars')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[4]){overOut('mars',true)};
});

document.getElementById('orbitemars')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[4]){overOut('mars',false)};

});

// EVENEMENT JUPITER


document.getElementById('jupiter')
.addEventListener('mouseover', () => {

   if(flag[0] && flag[5]){ overOut('jupiter',true)};

});

document.getElementById('jupiter')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[5])
    {
        overOut('jupiter',false);
    }

});

document.getElementById('orbitejupiter')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[5]) {overOut('jupiter',true);}
});

document.getElementById('orbitejupiter')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[5])
    {
        overOut('jupiter',false);
    }

});

// EVENEMENT SATURNE

document.getElementById('saturne')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[6]){overOut('saturne',true)};

});

document.getElementById('saturne')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[6]){overOut('saturne',false)};
});

document.getElementById('orbitesaturne')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[6]){overOut('saturne',true)};
});

document.getElementById('orbitesaturne')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[6]){overOut('saturne',false)};

});

// EVENEMENT URANUS

document.getElementById('uranus')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[7]){overOut('uranus',true)};

});

document.getElementById('uranus')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[7]){overOut('uranus',false)};
});

document.getElementById('orbiteuranus')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[7]){overOut('uranus',true)};
});

document.getElementById('orbiteuranus')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[7]){overOut('uranus',false)};

});

// EVENEMENT NEPTUNE

document.getElementById('neptune')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[8]){overOut('neptune',true)};

});

document.getElementById('neptune')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[8]){overOut('neptune',false)};
});

document.getElementById('orbiteneptune')
.addEventListener('mouseover', () => {

    if(flag[0] && flag[8]){overOut('neptune',true)};
});

document.getElementById('orbiteneptune')
.addEventListener('mouseout', () => {

    if(flag[0] && flag[8]){overOut('neptune',false)};

});

// EVENEMENT CLICK - SOLEIL

sun.addEventListener('click', () => {

    overOut2('mercure',tog);
    overOut2('venus',tog);
    overOut2('terre',tog);
    overOut2('mars',tog);
    overOut2('jupiter',tog);
    overOut2('saturne',tog);
    overOut2('uranus',tog);
    overOut2('neptune',tog);

    tog = !tog;

    flag[0] = !flag[0];

});

document.getElementById('mercure').addEventListener('click' , () => {

    if(flag[0]){overOut('mercure',flag[1]);

    flag[1] = !flag[1];}
});

document.getElementById('orbitemercure').addEventListener('click' , () => {

    if(flag[0]){overOut('mercure',flag[1]);

    flag[1] = !flag[1];}
});

document.getElementById('venus').addEventListener('click' , () => {

    if(flag[0]){overOut('venus',flag[2]);

    flag[2] = !flag[2];}
});

document.getElementById('orbitevenus').addEventListener('click' , () => {

    if(flag[0]){overOut('venus',flag[2]);
    
    flag[2] = !flag[2];}
});

document.getElementById('terre').addEventListener('click' , () => {

    if(flag[0]){overOut('terre',flag[3]);

    flag[3] = !flag[3];}
});

document.getElementById('orbiteterre').addEventListener('click' , () => {

    if(flag[0]){overOut('terre',flag[3]);
    
    flag[3] = !flag[3];}
});

document.getElementById('mars').addEventListener('click' , () => {

    if(flag[0]){overOut('mars',flag[4]);

    flag[4] = !flag[4];}
});

document.getElementById('orbitemars').addEventListener('click' , () => {

    if(flag[0]){overOut('mars',flag[4]);

    flag[4] = !flag[4];}
});

document.getElementById('jupiter').addEventListener('click' , () => {

    if(flag[0]){overOut('jupiter',flag[5]);

    flag[5] = !flag[5];}
});

document.getElementById('orbitejupiter').addEventListener('click' , () => {

    if(flag[0]){overOut('jupiter',flag[5]);

    flag[5] = !flag[5];}
});

document.getElementById('saturne').addEventListener('click' , () => {

    if(flag[0]){overOut('saturne',flag[6]);

    flag[6] = !flag[6];}
});

document.getElementById('orbitesaturne').addEventListener('click' , () => {

    if(flag[0]){overOut('saturne',flag[6]);

    flag[6] = !flag[6];}
});

document.getElementById('uranus').addEventListener('click' , () => {

    if(flag[0]){overOut('uranus',flag[7]);

    flag[7] = !flag[7];}
});

document.getElementById('orbiteuranus').addEventListener('click' , () => {

    if(flag[0]){overOut('uranus',flag[7]);

    flag[7] = !flag[7];}
});

document.getElementById('neptune').addEventListener('click' , () => {

    if(flag[0]){overOut('neptune',flag[8]);

    flag[8] = !flag[8];}
});

document.getElementById('orbiteneptune').addEventListener('click' , () => {

    if(flag[0]){overOut('neptune',flag[8]);
    
    flag[8] = !flag[8];}
});


let overOut = (element,show) => {

    document.getElementById('text' + element).setAttribute('class',show? 'info': 'notinfo');
    document.getElementById('orbite2' + element).setAttribute('class',show? 'info': 'notinfo');
}

let overOut2 = (element,show) => {

    document.getElementById('orbite2' + element).setAttribute('class',show? 'info': 'notinfo');

}