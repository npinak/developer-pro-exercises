var box = document.getElementById('box')
var button = document.getElementById('button')

button.addEventListener('click', function() {
    box.classList.toggle('box-left')
    box.classList.toggle('box-right')
    console.log('hello')
})