let i = 0;
let j  = 4;

const dots = document.querySelectorAll('.dot-container button')

const images = document.querySelectorAll('.image-container img')

function next() {
    document.getElementById('content' + (i + 1)).classList.remove('active');
    i = (j + i + 1) % j;
    document.getElementById('content' + (i + 1)).classList.add('active');
    indecator(i + 1)
}
function prev() {
    document.getElementById('content' + (i + 1)).classList.remove('active')
    i = (j + i - 1) % j;
    document.getElementById('content' + (i + 1)).classList.add('active')
    indecator(i + 1)
}
function indecator(num) {
    dots.forEach(dot => {
        dot.style.background = 'transparent'
    });
    document.querySelector('.dot-container button:nth-child(' + num + ')').style.background = '#8052ec'
}
function dot(index) {
    images.forEach(image => {
        image.classList.remove('active')
    });
    document.getElementById('content' + index).classList.add('active')
    i = index - 1;
    indecator(index)
}