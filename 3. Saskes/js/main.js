"use strict"

const drawBoard = () => {
    // const board = document.getElementsByClassName( 'board' )
    const board = document.querySelector( '.board' ) //All
    let content = ''
    const rowCount = 8
    const colCount = 8
    const rowHeight = 100 / rowCount
    const colWidth = 100 / colCount
    let color = ''
    for ( let y = 0; y < rowCount; y++ ) {
        content += `<div class="row" style="height: ${rowHeight}%">`
        //
        for ( let x = 0; x < colCount; x++ ) {
            if ( 
                ( y % 2 === 1 && x % 2 === 0 ) ||
                ( y % 2 === 0 && x % 2 === 1 )
                //( (x + y) % 2 === 0 )
            ) color = 'black'
            else color = 'white'
            content += `<div class="column ${color}" style="width: ${colWidth}%"> </div>`
            //
        }
        content += `</div>`
    }
    board.innerHTML = content
}
// var object = document.createElement('container');
// object.style.width= "500px";
// object.style.height= "600px";

drawBoard()