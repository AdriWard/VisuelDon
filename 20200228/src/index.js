
const villes = [
    { nom: 'Lausanne', population: 138905 },
    { nom: 'Yverdon', population: 30143 },
    { nom: 'Montreux', population: 26574 },
    { nom: 'Renens', population: 21036 },
    { nom: 'Nyon', population: 20533 },
    { nom: 'Vevey', population: 19827 },
  ]


  const WIDTH = 1000;
  const HEIGHT = 500;
  const MARGIN = 5;

  const MARGIN_LEFT = WIDTH / 20;
  const MARGIN_BOTTOM = HEIGHT / 20;

  console.log(MARGIN_BOTTOM);
  console.log(MARGIN_LEFT);

  const BAR_WIDTH = WIDTH/villes.length;



  const body = d3.select('body')

  const svg = body.append('svg')
    .attr('viewBox',`0 0 ${WIDTH + MARGIN_BOTTOM} ${HEIGHT + MARGIN_LEFT}`)
    .attr('width',WIDTH)
    .attr('height',HEIGHT)
    .attr('style','background-color: lightgray');

  const heightScale = d3.scaleLinear()
    .domain([0, d3.max(villes, d => d.population)]) // le maximum de population
    .range([0, HEIGHT]);

  const fillScale = d3.scaleLinear()
    .domain([0,d3.max(villes, d => d.population)])
    .range(['white','steelblue']);

  const bars = svg.append('g')
    .attr('transform',`translate(${MARGIN_LEFT},-${MARGIN_BOTTOM})`)

  bars.selectAll('rect')
    .data(villes)
    .enter()
    .append('rect')
    .attr('x',(d,i) => i*BAR_WIDTH)
    .attr('width', BAR_WIDTH - MARGIN)
    .attr('y', d => HEIGHT - heightScale(d.population))
    .attr('height',d => heightScale(d.population))
    .attr('fill',d => fillScale(d.population));

  
  const cityNames = svg.append('g')
    .attr('transform',`translate(${MARGIN_LEFT},0)`)

  cityNames.selectAll('text')
    .data(villes)
    .enter()
    .append('text')
    .attr('x',(d,i) => i*BAR_WIDTH + BAR_WIDTH /2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr('text-anchor', 'middle')
    .attr('font-family','sans-serif')
    .attr('font-size',15)
    .text(d => d.nom)

  const axisY = d3.axisLeft().scale(heightScale)
    .tickFormat(d => `${d / 1000}k`)
    .ticks(5)

  svg.append('g')
    .call(axisY)
/*

  const ul = body.append('ul');

  const lis = ul.selectAll('li')
    .data(villes)
    .enter()
    .append('li')
    .text(d => d.nom);

    */