let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 11000); // Change image every 11 seconds
        }


//function for sliding images
var index = 0;
const slides = document.querySelectorAll('.home-img');


function changeSlide(){

  if(index < 0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,11000);
  
}

changeSlide();  









/*FAQ */

const faqHeaders = document.querySelectorAll(".faq-header")
faqHeaders.forEach(faqHeaders => {
  faqHeaders.addEventListener("click", event => {
    faqHeaders.classList.toggle("active");
    const faqAnswer = faqHeaders.nextElementSibling;
    if(faqHeaders.classList.contains("active")){
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
    else{
      faqAnswer.style.maxHeight = 0;
    }
});
});

/*FAQ */

