const images = document.querySelectorAll(".header-slider ul img");
const nextBtn = document.querySelector(".control-next");
const prevBtn = document.querySelector(".control-prev");

let currentImg = 0;

prevBtn.addEventListener("click", (e) => {
  if (currentImg > 0) {
    currentImg--;
  } else {
    currentImg = images.length - 1;
  }
  changeSlide();
});
nextBtn.addEventListener("click", (e) => {
  if (currentImg == images.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  changeSlide();
});

function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[currentImg].style.display = "block";
}
changeSlide();

const scrollContainer = document.querySelectorAll(".products");

for (const product of scrollContainer) {
  product.addEventListener("wheel", (event) => {
    event.preventDefault();
    product.scrollLeft += event.deltaY;
  });
}
