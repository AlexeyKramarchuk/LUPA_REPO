// function zoom(event) {
//     let zoomer = event.currentTarget;

// console.log(event)

//     event.offsetX ? (offsetX = event.offsetX) : (offsetX = event.touches[0].pageX);
//     event.offsetY ? (offsetY = event.offsetY) : (offsetX = event.touches[0].pageX);

//     let x = offsetX / zoomer.offsetWidth  * 100;
//     let y = offsetY / zoomer.offsetHeight * 100;

//     zoomer.style.backgroundPosition = x + "% " + y +"%";
// }


const wrapper = document.querySelector('.wrapper');
const image = document.querySelector('img');


wrapper.style.width = '500px';
wrapper.style.height = '500px';


image.addEventListener('mousedown', (e) => {
    image.classList.toggle('active')
})

image.addEventListener('mousemove', (e) => {
    console.log(e)
});




