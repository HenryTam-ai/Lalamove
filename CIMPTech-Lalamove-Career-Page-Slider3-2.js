    var slide4Index = 1;
    showSlides4(slide4Index);

    function plusSlides3(n) {
        showSlides4(slide4Index += n);
    }

    function currentSlide3(n) {
        showSlides4(slide4Index = n);
    }

    function showSlides4(n) {
        var i;
        var slides4 = document.getElementsByClassName("slide4");
        var dots3 = document.getElementsByClassName("dot3");
        if (n > slides4.length) {slide4Index = 1}    
        if (n < 1) {slide4Index = slides4.length}
        for (i = 0; i < slides4.length; i++) {
            slides4[i].style.display = "none";  
        }
        for (i = 0; i < dots3.length; i++) {
            dots3[i].className = dots3[i].className.replace("text-slider-active", "");
        }
        slides4[slide4Index-1].style.display = "flex";  
        dots3[slide4Index-1].className += " text-slider-active";
    }
