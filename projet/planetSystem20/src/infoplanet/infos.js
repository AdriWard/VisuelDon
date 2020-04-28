
/**
let boxInfo =  d3.select('.info')
.style('position','absolute')
.style('top','100px')
.style('right','10%')
.style('height','400px')
.style('width','200px')
.style('background-color','white')
.style('box-shadow','1px 1px 5px #555')
.style('border-radius','10px')
.style('color','gray')
.style('font-family','Verdana')
.style('font-size','12px')
.style('text-align','center')
.style('visibility','hidden')
*/

let infoPlanete = (info) => {

        let boxInfo =  d3.select('.info')

        boxInfo.text('')
                .style('visibility','visible')

        boxInfo.append('h3')
                .text(info.name)
                .style('color',info.color)

        boxInfo.append('p')
                .text(`Demi-Grand axe : ${info.data.DemiGrandAxe} ${DATA.infoData.DemiGrandAxe}`)

        boxInfo.append('p')
                .text(`revolution : ${info.data.revolution} ${DATA.infoData.revolution}`)
        
        boxInfo.append('p')
                .text(`rayon : ${info.data.rayon} ${DATA.infoData.rayon}`)
        
        boxInfo.append('p')
                .text(`superficie : ${info.data.superficie.superficieValue}x10*${info.data.superficie.superficieExponent} ${DATA.infoData.superficie}`)

        boxInfo.append('p')
                .text(`volume : ${info.data.volume.volumeValue}x10*${info.data.volume.volumeExponent} ${DATA.infoData.volume}`)

        boxInfo.append('p')
                .text(`masse : ${info.data.masse.masseValue}x10*${info.data.masse.masseExponent} ${DATA.infoData.masse}`)

        boxInfo.append('p')
                .text(`gravity : ${info.data.gravity} ${DATA.infoData.gravity}`)

        boxInfo.append('p')
                .text(`Rotation : ${info.data.periodeRotation} ${DATA.infoData.periodeRotation}`)

        boxInfo.append('p')
                .text(`temperature : ${info.data.temperature} ${DATA.infoData.temperature}`)

}

let hiddenInfo = () => {

        d3.select('.info').text('').style('visibility','hidden')
}