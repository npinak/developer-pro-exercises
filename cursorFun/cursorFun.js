let circle = document.getElementById('circle');
let smallCircle = document.getElementById('smallCircle');

console.log(smallCircle)

const onMouseMove = (e) => {
    smallCircle.style.left = e.pageX + 'px';
    smallCircle.style.top = e.pageY + 'px';

    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';

    console.log(smallCircle.style.left)


}


document.addEventListener('mousemove', onMouseMove);

