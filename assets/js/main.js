









//creo l'array


const images = [
    '../assets/img/01.webp',
    '../assets/img/02.webp',
    '../assets/img/03.webp',
    '../assets/img/04.webp'
    
]

console.log(images);


let activeImage = 0 ;

const imagesEl = document.querySelector('.slider > .images');
console.log(imagesEl);

//loop

for (let i = 0; i < images.length; i++) {

    const imgSrc = images[i];
    const imgEl = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`

    console.log(imgEl)
    
}


