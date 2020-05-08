let flagAll = 0

let clickAll = () => {

    flagAll = !flagAll

    if(flagAll)
    {
        d3.selectAll('g.sun circle').style('fill','#d8345f')

        DATA.corps.forEach( d => {
            
            d3.select(`.orbite${d.id}`)
                .style('opacity',100)

            d3.select(`.line${d.id}`)
                .style('opacity',100)
        })
    }
    else
    {
        d3.selectAll('g.sun circle').style('fill',d => d.color)

        DATA.corps.forEach( d => {

            hiddenPlanet(d)
        })
    }    

}