
d3.select('.drop')
    .attr('ondrop','drop(event)')
    .attr('ondragover','event.preventDefault()')


d3.select('.info')
    .attr('draggable',"true")


let drop = () => {

       d3.select('.info')
        .style('top',`${event.pageY - MouseY}px`)
        .style('left',`${event.pageX - MouseX}px`)



        // récupérer la position de la bull-infos

       
      console.log("page x " + (event.pageX))

       console.log("page y " + (event.pageY))

       console.log("mouse page x " + (event.pageX - MouseX))

       console.log("mouse page y " + (event.pageY - MouseY))

      }

    let MouseX = 0

    let MouseY = 0

    let x = 0

    let y = 0


    let move = false

    d3.select('.info')
        .on('mousedown', () => {

            if(event.target.className == 'info')
            {
               // move = true
            }

            MouseX = event.offsetX

            MouseY = event.offsetY

            x = event.pageX

            y = event.pageY

            console.log(event.offsetX)

            console.log(event.offsetY)

            console.log('test')

        })
        .on('mousemove', () => {

            if(move)
            {
                    console.log("page x " + event.pageX)

                    console.log("Offset x " + event.offsetX)

                    console.log("left " + `${event.pageX - event.offsetX}`)
            }
        })
        .on('mouseup', () => {

            move = false

            console.log("mouveement" + event.movementX)
        })
