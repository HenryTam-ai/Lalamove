    let slide2Index = 1;
    showSlides2(slide2Index);

    // Next/previous controls
    function plusSlides(n) {
    showSlides2(slide2Index += n);
    }

    function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("slide2");
    if (n > slides2.length) {slide2Index = 1}
    if (n < 1) {slide2Index = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slide2Index-1].style.display = "block";
    }
