
const menu = d3.select('nav .planet')

let flagHiddenMenu = 1

menu.selectAll('button')
    .data(DATA.corps)
    .enter()
    .append('button')
    .attr('class',d => d.id)
    .text(d => d.name)
    .on("mouseover",d => {if(!d.flag) {showPlanet(d)}})
    .on("mouseout", d =>{if(!d.flag) {hiddenPlanet(d)}})
    .on("click", d => {if(flagHiddenMenu) {clickPlanet(d)} else {clickDistance(d)}})

    


    d3.select('nav .distance')
    .on("click", () => showDistance())

    d3.select('nav .systeme')
    .on("click", () => showSystem())

    d3.select('nav .volume')
    .on("click", () => showVolume())

   
let showDistance = () => {
   
    d3.select('svg#sunSystem')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')

    d3.select('svg#volume')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')
   
   d3.select('svg#distance')
            .transition()
            .duration(1000)
            .style('height','95vh')
            .style('width','100vw')

    flagHiddenMenu = 0

    hiddenInfo()

}

let showSystem = () => {

    d3.select('svg#distance')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')

    d3.select('svg#volume')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')
   
   d3.select('svg#sunSystem')
            .transition()
            .duration(1000)
            .style('height','95vh')
            .style('width','100vw')

    flagHiddenMenu = 1

    hiddenInfo()

}


let showVolume = () => {

    d3.select('svg#distance')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')

    d3.select('svg#sunSystem')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')
   
   d3.select('svg#volume')
            .transition()
            .duration(1000)
            .style('height','95vh')
            .style('width','100vw')

    flagHiddenMenu = 0

    hiddenInfo()

}

 