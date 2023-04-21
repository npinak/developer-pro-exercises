const width = window.innerWidth
let divNumber = 0 // to delete
let lineNumber = 1 
let rect
let currentLine
// let rect = currentLine.getBoundingClientRect()

function addCharacter(e){
    const keyCode = e.keyCode
    const key = String.fromCharCode(keyCode)
    currentLine = document.getElementById(`line${lineNumber}`)
    console.log(currentLine)
    rect = currentLine.getBoundingClientRect()
    console.log(rect)

    //if reached end of screen start a new line
    if(rect.width > width){
        lineNumber++
        //create new div and add it below previous line
        let newLine = document.createElement('div')
        app.appendChild(newLine)
        newLine.setAttribute('class', 'line')
        newLine.setAttribute('id', `line${lineNumber}`)
        currentLine = document.getElementById(`line${lineNumber}`)
    }

    //if return is pressed start a new line

    //if backspace delete last div 

    const div = document.createElement('div')
    div.innerHTML = key

    currentLine.appendChild(div)
}

window.addEventListener('keypress', addCharacter)
