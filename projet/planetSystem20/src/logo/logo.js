
let svgLogo = d3.select('#logo')
                .on('click',() => clickAll())
                .append('g')
                .join('g')
                


    svgLogo.append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('fill','white')
    .attr('r',20)




    svgLogo.append('circle')
    .attr('cx',50 )
    .attr('cy',50)
    .attr('fill','white')
    .attr('r',20)
    .append('animateTransform')
    .attr('attributeName','transform')
    .attr('type','rotate')
    .attr('from', `0 100 100`)
    .attr('to',`360 100 100`)
    .attr('dur',40)
    .attr('repeatCount','indefinite');

    
    svgLogo.append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r', 80)
    .attr('stroke','white')
    .attr('fill','none')
    .style('opacity',100)
    .style('stroke-width',2)
    