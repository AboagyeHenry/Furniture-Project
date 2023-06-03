const image = document.querySelector('.gallery-img-1')
const gallery = document.querySelector('.gallery-mini-img-container')
const backIcon = document.querySelector('.icon-arrow-back')
const forwardIcon = document.querySelector('.icon-arrow-forward')

const images = [
    '/Images/view-1.jpg',
    '/Images/view-2.jpg',
    '/Images/view-3.jpg',
    '/Images/view-4.jpg',
    '/Images/view-5.jpg'
]

gallery.innerHTML = images.map(image => `
    <img class="gallery-mini-img-1" src="${image}" alt="view-1">
`).join('')

let selectedImage = 0

const changeImage = () => {
    image.src = images[selectedImage]
    image.alt = 'view-img'
}
changeImage()

const previousImage = () => {
    if (selectedImage - 1 < 0) return
    selectedImage--
    changeImage()
}

const nextImage = () => {
    if (selectedImage + 1 >= images.length) return
    selectedImage++
    changeImage()
}

backIcon.addEventListener('click', previousImage)

forwardIcon.addEventListener('click', nextImage)

// Change the selected image when a gallery image is clicked
for (let i = 0; i < gallery.children.length; i++) {
    gallery.children[i].addEventListener('click', () => {
        selectedImage = i
        changeImage()
    })
}