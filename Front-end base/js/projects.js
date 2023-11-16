
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

// Add an event listener for the resize event can sua lai sau
window.addEventListener('resize', handleWindowResize);
    
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/api/project/')
        .then(res => {
            if(res.ok){
                console.log("SUCCESS");
                console.log(res);
                return res.json();
            }else{
                console.log("Not success");
                
            }})
        .then(data1 => {
            console.log(data1);
            return fetch('http://localhost:8080/api/topic/')})
        .then(res => {
            if(res.ok){
                console.log("SUCCESS");
                console.log(res);
                return res.json();
            }else{
                console.log("Not success");
                
            }})
        .then(data1 => 
            console.log(data1))
        .catch(err =>{
            console.log("Co loi tai day nay: ", err);
        })
});
// test











// Lam slider
var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 700,
    pagination: {
      el: ".pagi1",
      clickable: true,
    },
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
  });
var swiper2 = new Swiper(".smySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 700,
  pagination: {
    el: ".pagi2",
    clickable: true,
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});
