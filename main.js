const bgImageEl = document.getElementById("bg-image");

function updateImage() {
    bgImageEl.style.opacity = .9 - (window.pageYOffset / 900);
   
}

window.addEventListener("scroll", () => {
    updateImage();
});