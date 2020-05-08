    
  
  let showPlanet = (d) => {

    d3.select(`.orbite${d.id}`)
        .style('opacity',100)
        

    d3.selectAll(`.text${d.id}`)
        .style('visibility','visible')

    d3.select(`button.${d.id}`)
        .style('color',d => d.color)

    d3.select(`.line${d.id}`)
        .style('opacity',100)
   
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

