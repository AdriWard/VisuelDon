    
  
  let showPlanet = (d) => {

    d3.select(`.orbite${d.id}`)
        .style('opacity',100)
        

    d3.selectAll(`.text${d.id}`)
        .style('visibility','visible')

    d3.select(`button.${d.id}`)
        .style('color',d => d.color)

    d3.select(`.line${d.id}`)
        .style('opacity',100)

    if(d.id == 'sun')
    {
        d3.selectAll('g.sun circle').style('fill','#d8345f')
    }
   
   } 



let hiddenPlanet = (d) => {

    d3.select(`.orbite${d.id}`)
        .style('opacity',0)
        

    d3.selectAll(`.text${d.id}`)
        .style('visibility','hidden')

    d3.select(`button.${d.id}`)
        .style('color','white')

    d3.select(`.line${d.id}`)
        .style('opacity',0)
    

    if(d.id == 'sun')
    {
        d3.selectAll('g.sun circle').style('fill',d => d.color)
    }

   }


   let clickPlanet = (d) => {

    zeroFlage(d.id);

    if(d.flag)
    {
        d.flag = 0;
        hiddenPlanet(d)

        hiddenInfo()
    }
    else
    {
        d.flag = 1;
        showPlanet(d)

        infoPlanete(d)
    }

   }


let zeroFlage = (planet) => {

    DATA.corps.forEach( d => {

        if(planet != d.id)
        {
            d.flag = 0;
            hiddenPlanet(d)
        }
    })
}

let clickDistance = (d) => {

    zeroFlage(d.id);

    if(d.flag)
    {
        d.flag = 0;
        hiddenPlanet(d)
    }
    else
    {
        d.flag = 1;
        showPlanet(d)
    }

}

let hiddenClick = (local) => {

    if(local == 'svg')
    {
        hiddenInfo()
        DATA.corps.forEach(d => hiddenPlanet(d))
        DATA.corps.forEach(d => d.flag = 0)
        flagAll = 0
    }
}
