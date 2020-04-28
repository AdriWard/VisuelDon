
const xCentre = 1000;

const yCentre = 1000;

const svg = d3.select('svg')
                .on("click", () => {
                    if(d3.event.target.localName == 'svg')
                    {
                        hiddenInfo()
                        DATA.corps.forEach(d => hiddenPlanet(d))
                    }
                })


const planet = svg.selectAll('g')
                .data(DATA.corps)
                .join('g')
                .attr('class',d => d.id)


planet.on("mouseover",d => {if(!d.flag) {showPlanet(d)}})
      .on("mouseout", d =>{if(!d.flag) {hiddenPlanet(d)}})
      .on("click", d => clickPlanet(d))

planet.append('circle')
.attr('id',d => d.id)
.attr('cx',d => xCentre - d.distance )
.attr('cy',yCentre)
.attr('fill',d => d.color)
.attr('r',d => d.rayon)
.append('animateTransform')
.attr('attributeName','transform')
.attr('type','rotate')
.attr('from', `0 ${xCentre} ${yCentre}`)
.attr('to',`360 ${xCentre} ${yCentre}`)
.attr('dur',d => d.revolution)
.attr('repeatCount','indefinite');


/**
planet.append('text')
    .attr('class',d => `text${d.id}`)
    .attr('x',d => xCentre - 20 )
    .attr('y',yCentre - 20)
    .attr('fill',d => d.color)
    .attr('font-family','Verdana')
    .attr('foot-size',55)
    .attr('text-anchor','start')
    .text(d => d.name)
    .style('visibility','hidden')
    .append('animateTransform')
    .attr('attributeName','transform')
    .attr('type','rotate')
    .attr('from', `0 ${xCentre} ${yCentre}`)
    .attr('to',`360 ${xCentre} ${yCentre}`)
    .attr('dur',d => d.revolution)
    .attr('repeatCount','indefinite');
*/

planet.append('circle')
.attr("class",d => `orbite${d.id}`)
.attr('cx',xCentre)
.attr('cy',yCentre)
.attr('r', d => d.distance)
.attr('stroke', d => d.color)
.attr('fill','none')
.style('opacity',0)
.style('stroke-width',2)

planet.append('circle')
.attr("class",d => `orbite2${d.id}`)
.attr('cx',xCentre)
.attr('cy',yCentre)
.attr('r', d => d.distance)
.attr('stroke', d => d.color)
.attr('fill','none')
.style('opacity',0)
.style('stroke-width',35)