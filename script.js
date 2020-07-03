
let sliderImages = document.querySelectorAll(".slide"), arrowRight = document.querySelector("#arraw-right"), arrowLeft = document.querySelector("#arraw-left") , current = 0;

// to clear all the images

function reset(){
    for(let i = 0 ; i<sliderImages.length ; i++){
        sliderImages[i].style.display = "none"
    }
}
function startSlide(){
    reset();
    sliderImages[current].style.display = "block";
}

// left arrow
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current --;
}
// right arrow
function slideright(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current ++;
}
// right arrow click

arrowRight.addEventListener("click" , function(){
    if(current === sliderImages.length-1){
        current = -1;
    }else{
        slideright()
    }
  

 
})
arrowLeft.addEventListener("click" , function(){
if(current === 0){
current = sliderImages.length;
}
slideLeft();
});
startSlide();

