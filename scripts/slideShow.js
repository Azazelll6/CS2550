let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    stopVideo();
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    sessionStorage.setItem('currentSlide', slideIndex);
}


function stopVideo() {
    let currentSlideIndex = sessionStorage.getItem('currentSlide');
    if (currentSlideIndex) {
        currentSlideIndex = parseInt(currentSlideIndex) - 1;
        let iframe = document.querySelectorAll('.slide')[currentSlideIndex].querySelector('iframe');
        if (!iframe) {
            return;
        }
        iframe.src = iframe.src;
    }
}

