const navMenu = document.querySelector(".nav__menu"),
    navToggle = document.querySelector("#nav-toggle")



if(navMenu){
    function handleWindowResize() {
        if (window.innerWidth <= 768) {
            // When the window width is 762px or less, add the "show" class to the menu element
            if(navMenu.classList.contains("show__menu")){
                navMenu.classList.remove("show__menu");
                navMenu.classList.add("close__menu");
                // navMenu.classList.add("show__menu");
            }
            else if(navMenu.classList.contains("close__menu")){

            }
            else{
                navMenu.classList.add("close__menu");
            }
        } else {
            // Remove the "show" class if the window is larger than 762px
            navMenu.classList.remove("show__menu");
            if(navMenu.classList.contains("close__menu")){
                navMenu.classList.remove("close__menu");
                // navMenu.classList.add("show__menu");
            }
        }
    }
    
    // Add an event listener for the resize event
    window.addEventListener('resize', handleWindowResize);

    navToggle.addEventListener('click', ()=>{
        if(navMenu.classList.contains("show__menu")){

            navMenu.classList.remove("show__menu");
            navMenu.classList.add("close__menu");

        }
        else{
            
            navMenu.classList.remove("close__menu");
            navMenu.classList.add("show__menu");
        }
    })
}

function handleWindowResize() {
    if (window.innerWidth <= 762) {
        // When the window width is 762px or less, add the "show" class to the menu element
        
    } else {
        // Remove the "show" class if the window is larger than 762px
        console.log("huhu")
    }
}

// Add an event listener for the resize event
window.addEventListener('resize', handleWindowResize);


// SWIPE FUNCTION 
// SKILL VIEW

// PROJECT VIEW
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 700,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });