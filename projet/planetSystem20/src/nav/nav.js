
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
    

    d3.selectAll('nav > button')
    .on("click", () => showPage(d3.event.target.className))

   
let showPage = className => {

        console.log(className)
   
    d3.selectAll('svg.page')
            .transition()
            .duration(1000)
            .style('height','0vh')
            .style('width','0vm')

   
   d3.select(`svg#${className}`)
            .transition()
            .duration(1000)
            .style('height','95vh')
            .style('width','100vw')

     if(className == 'sunSystem')
     {
        DATA.corps.forEach(d => {

                if(d.flag)
                {
                    infoPlanete(d)
                }                    
             });
        
        flagHiddenMenu = 1  
     }
     else
     {
        flagHiddenMenu = 0

        hiddenInfo() 
     }
}
