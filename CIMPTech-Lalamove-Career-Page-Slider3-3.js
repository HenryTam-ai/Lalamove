 let slide5Index = 0;
    showSlides5();
    function showSlides5() {
      let i;
      let slides5 = document.getElementsByClassName("slide5");
      let dots4 = document.getElementsByClassName("dot4");
      console.log(slides5);
      for (i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";  
      }
      slide5Index++;
      
      if (slide5Index > 4) {slide5Index = 1;}
      for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace("text-slider-active", "");
      }
      slides5[slide5Index-1].style.display = "flex";  
      dots4[slide5Index-1].className += " text-slider-active";
      setTimeout(showSlides5, 5000); // Change image every 2 seconds

    }
