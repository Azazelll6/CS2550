let modal = document.getElementById("imgModal");
let span = document.getElementsByClassName("close")[0];
let img = document.querySelector(".about-image img");
let modalImg = document.getElementById("modalImage");

img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
modalImg.alt = this.alt;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
    modal.style.display = "none";
    }
}
