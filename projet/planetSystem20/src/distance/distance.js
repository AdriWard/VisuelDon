
const yMargin = 200;

   
const distanceMAX = 2249200


   
   let distance = d3.select('#distance')
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

            
            distance.append('line')
            .attr('x1',d => 2000 - d.data.DemiGrandAxe/distanceMAX)
            .attr('y1',(d,i) => i*yMargin + 100)
            .attr('x2','3000')
            .attr('y2',(d,i) => i*yMargin + 100)
            .attr('stroke','silver')
            .attr('stroke-width',45)
            .style('opacity',0)
            
            distance.append('line')
            .attr('class',d => `line${d.id}`)
            .attr('x1',d => 2000 - d.data.DemiGrandAxe/distanceMAX)
            .attr('y1',(d,i) => i*yMargin + 100)
            .attr('x2','3000')
            .attr('y2',(d,i) => i*yMargin + 100)
            .attr('stroke',d => d.color)
            .attr('stroke-width',5)
            .style('opacity',0)

            distance.append('circle')
            .attr('id',d => d.id)
            .attr('cx',d => 2000 - d.data.DemiGrandAxe/distanceMAX)
            .attr('cy',(d,i) => i*yMargin + 100)
            .attr('fill',d => d.color)
            .attr('r',d => d.rayon)

            distance.append('text')
            .attr('class',d => `text${d.id}`)
            .attr('x',d => 2000 - d.data.DemiGrandAxe/distanceMAX)
            .attr('y',(d,i) => (i*yMargin + 100) - d.rayon - 100)
            .attr('fill',d => d.color)
            .style('font-family','Verdana')
            .style('font-size','55px')
            .style('text-anchor','middle')
            .text(d => d.name)
            .style('visibility','hidden')



            distance.append('text')
            .attr('class',d => `text${d.id}`)
            .attr('x',(d,i) => 1800 - d.data.DemiGrandAxe/distanceMAX)
            .attr('y',(d,i) => i*yMargin + 100)
            .attr('fill','white')
            .style('font-family','Verdana')
            .style('font-size','40px')
            .style('text-anchor','end')
            .text(d => `Distance : ${d.data.DemiGrandAxe} ${DATA.infoData.DemiGrandAxe}`)
            .style('visibility','hidden')

        
            d3.select('#distance g.sun circle')
            .remove()

            d3.selectAll('#distance g.sun line')
            .remove()

            d3.selectAll('#distance g.sun text')
            .remove()

            d3.select('#distance g.sun')
            .raise()
            .append('circle')
            .attr('id','sun')
            .attr('cx', 3500)
            .attr('cy', 1000)
            .attr('fill','#fcbf1e')
            .attr('r',1000)

            

            //d3.select('#distance g.sun')
            //.style('visibility','hidden')


