let image0 = "./images/hero-image-0.jpg"
let image1 = "./images/hero-image-1.jpg"
let image2 = "./images/hero-image-2.jpg"
let image3 = "./images/hero-image-3.jpg"
let imageN = "./images/not-found.jpg"

let urls = [image0, image1, image2, image3, imageN]
let carousel = document.querySelector(".image")
let i = 0
console.log(urls)
console.log(carousel)

window.setInterval(changeSlide, 2000)

function changeSlide () {
  console.log(i)
  let image = urls[i]
  carousel.setAttribute("style", `background-image: url(${image})`)
  i >= urls.length - 1 ? i = 0 : i++
}

