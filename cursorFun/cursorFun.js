const circle = document.getElementById('circle');
const smallCircle = document.getElementById('smallCircle');
let timer = setTimeout(() => {
    console.log('set timeout')
},"1000")


console.log(smallCircle)

const onMouseMove = (e) => {
    clearTimeout(timer)

    smallCircle.style.left = e.pageX + 'px';
    smallCircle.style.top = e.pageY + 'px';

    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';

    // console.log(smallCircle.style.left)

    circle.classList.add('expand')

    //after a few seconds add the normal class to remove the expand 
    timer = setTimeout( () => {
        circle.classList.remove('expand')
        circle.classList.add('normal')
    },500)

}


document.addEventListener('mousemove', onMouseMove);


