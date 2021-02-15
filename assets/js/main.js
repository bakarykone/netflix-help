//right
/*
function rightScroll(scroll, rightArrow) {
    const carousel = document.querySelector(scroll);

    const right = document.querySelector(rightArrow);

    right.addEventListener("click", () => {
        carousel.scrollLeft += carousel.offsetWidth;
    })
}

//left
function leftScroll(scroll, leftArrow) {​​
    
    const carousel = document.querySelector(scroll);
    
    
    
    const left = document.querySelector(leftArrow);
    
    
    
    left.addEventListener("click", () => {​​
    
    carousel.scrollLeft -=carousel.offsetWidth;
    
    }​​);
    
    }
    */
   
    // right => Event Listener //



    function rightScroll(scroll, rightArrow) {​​​​

    const carousel = document.querySelector(scroll);
    
    
    
    const right = document.querySelector(rightArrow);
    
    
    
    right.addEventListener("click", () => {​​​​
    
    carousel.scrollLeft += carousel.offsetWidth;
    
    }​​​​);
    
    }​​​​
    
    
    
    // left => Event Listener //
    
    
    
    function leftScroll(scroll, leftArrow) {​​​​
    
    const carousel = document.querySelector(scroll);
    
    
    
    const left = document.querySelector(leftArrow);
    
    
    
    left.addEventListener("click", () => {​​​​
    
    carousel.scrollLeft -= carousel.offsetWidth;
    
    }​​​​);
    
    }​​​​