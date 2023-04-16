var rulerText = document.getElementById('rulerText')
var width = document.documentElement.clientWidth;
rulerText.innerHTML = `The width of the window is ${width}`

window.addEventListener('resize', function(){
    width = document.documentElement.clientWidth;
    rulerText.innerHTML = `The width of the window is ${width}`
})