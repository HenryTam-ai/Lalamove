let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      let dots = document.getElementsByClassName("dot1");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      
      if (slideIndex > 2) {slideIndex = 1;}
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("slider-active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " slider-active";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
