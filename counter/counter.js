var increase = document.getElementById('increase')
var decrease = document.getElementById('decrease')
var display = document.getElementById('display')
var counter = 0 

display.innerText = counter 



increase.addEventListener('click', function(e){
    counter++
    display.innerText = counter
})

decrease.addEventListener('click', function (e) {
    counter--
    display.innerText = counter
})