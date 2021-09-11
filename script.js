let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;
console.log(totalSlides);

document.getElementById('carousel_button--next')
.addEventListener('click',function(){
    moveToNextSlide();
})

document.getElementById('carousel_button--prev')
.addEventListener('click',function(){
    moveToPrevSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.remove('carousel_item--hidden');
    }

    slides[slidePosition].classList.add('carousel_item--visible');

}

function moveToNextSlide() {
    
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition()
}

function moveToPrevSlide() {
    
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition()
}



                 // Search Functionality

const searchFun = () => {

    let filter = document.getElementById('myInput');
    let fil = filter.value.toUpperCase();
    let image =  document.getElementsByClassName('media-carousel-movies');
    for(var i=0;i<image.length;i++){
        let tit = image[i].getElementsByTagName('b').title;
        if(tit){
            let value = tit.innerText || tit.innerHTML;
            if(value.toUpperCase().indexOf(fil) > -1){
                image[i].style.display = "";
            }else{
                image[i].style.display = "none";
            }
        }
    }
}

                   //dropdown

// function search() {
    

// }


const filter = document.querySelector(".dropdown-content"),
galleryItems = document.querySelectorAll(".gallery-item");

filter.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")){
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");

            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }

        });

    }

})
