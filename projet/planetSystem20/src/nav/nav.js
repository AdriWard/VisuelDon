
const menu = d3.select('nav .planet')

menu.selectAll('button')
    .data(DATA.corps)
    .enter()
    .append('button')
    .attr('class',d => d.id)
    .text(d => d.name)
    .on("mouseover",d => {if(!d.flag) {showPlanet(d)}})
    .on("mouseout", d =>{if(!d.flag) {hiddenPlanet(d)}})
    .on("click", d => clickPlanet(d))

    

 