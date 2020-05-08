const xMargin = 380;

const volumeMAX = 1000

   
   let volume = d3.select('#volume')
            .style('height','0vh')
            .style('width','0vm')
            .selectAll('g')
            .data(DATA.corps)
            .enter()
            .append('g')
            .attr('class',d => d.id)
            .on("mouseover",d => {if(!d.flag && !flagAll) {showPlanet(d)}})
            .on("mouseout", d =>{if(!d.flag && !flagAll) {hiddenPlanet(d)}})
            .on("click", d => {if(!flagAll) {clickDistance(d)}})

            

            volume.append('circle')
            .attr('id',d => d.id)
            .attr('cx', (d,i) => i*xMargin)
            .attr('cy',1000)
            .attr('fill',d => d.color)
            .attr('r',d => d.data.rayon/volumeMAX)

            volume.append('circle')
            .attr("class",d => `orbite${d.id}`)
            .attr('cx', (d,i) => i*xMargin)
            .attr('cy',1000)
            .attr('r',d => d.data.rayon/volumeMAX + 100)
            .attr('fill',d => d.color)
            .style('opacity',0)

            volume.append('text')
            .attr('class',d => `text${d.id}`)
            .attr('x',(d,i) => i*xMargin)
            .attr('y',1000 - 100)
            .attr('fill',d => d.color)
            .style('font-family','Verdana')
            .style('font-size','55px')
            .style('text-anchor','middle')
            .text(d => d.name)
            .style('visibility','hidden')



            volume.append('text')
            .attr('class',d => `text${d.id}`)
            .attr('x',(d,i) => i*xMargin)
            .attr('y',1000 + 200)
            .attr('fill','white')
            .style('font-family','Verdana')
            .style('font-size','40px')
            .style('text-anchor','middle')
            .text(d => `volume : ${d.data.volume.volumeValue}x10*${d.data.volume.volumeExponent} ${DATA.infoData.volume}`)
            .style('visibility','hidden')



            d3.select('#volume g.sun circle')
            .attr('id','sun')
            .attr('cx',-xMargin - 220)

            d3.selectAll('#volume g.sun text')
            .attr('x',-xMargin - 220)
            .attr('y',(d,i) => i*100 +1000)

            d3.select('#volume g.sun circle.orbitesun')
            .remove()