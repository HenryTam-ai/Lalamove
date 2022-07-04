var slide3Index = 1;
showSlides3(slide3Index);

function plusSlides2(n) {
    showSlides3(slide3Index += n);
}

function currentSlide2(n) {
    showSlides3(slide3Index = n);
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("slide3");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides3.length) {slide3Index = 1}    
    if (n < 1) {slide3Index = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace("text-slider-active", "");
    }
    slides3[slide3Index-1].style.display = "flex";  
    dots2[slide3Index-1].className += " text-slider-active";
}
