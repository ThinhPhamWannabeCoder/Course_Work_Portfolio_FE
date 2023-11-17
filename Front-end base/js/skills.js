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

const thisSitePlace = "skills"
document.addEventListener('DOMContentLoaded', function() {
    // Fetch lay thong tin topic
    let placeId = null;
    const intro = document.querySelector('.skills__intro');
// const intro_heading = intro.querySelector('h1')
    const intro_quote = intro.querySelector('span i')
    const intro_desc = document.querySelector('.skills__intro__desc');
    fetch(`http://localhost:8080/api/user/introPlace/${thisSitePlace}/`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },})
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Failed to fetch IntroPlace');
            }
        })
        .then(data1 =>{
            placeId = data1.id;
            // Fetch all intro in project site
            return fetch(`http://localhost:8080/api/user/intro/place/${placeId}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              });
        })
        .then(res =>{
            if(res.ok){
                return res.json();

            }
            else{
                throw new Error('Failed to fetchIntro');
            }
        })
        .then(data1 =>{
            
            data1.forEach(item=>{
                
                if(item.introTypeDTO.name == "introduction"){
                    
                    intro_desc.innerText = item.desc;
                } else if(item.introTypeDTO.name == "quote"){
                    intro_quote.innerText = item.desc;
                }
            })

        })
        .catch(err => {
            console.log("Co loi tai qua trinh filter ", err);
        });
    })

  
    
document.addEventListener('DOMContentLoaded', function(){
    // Xac dinh elemtn cha de append vao
    const webSkillsHolder = document.querySelector('#web .mySwiper .swiper-wrapper');
    const dataSkillsHolder = document.querySelector('#data .mySwiper .swiper-wrapper');
    webSkillsHolder.innerHTML= '';
    dataSkillsHolder.innerHTML= '';
    fetch(`http://localhost:8080/api/user/skill/`)
        .then(res =>{
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Failed to fetch =Skill');
            }
        })
        .then(skills =>{
            skills.forEach(item => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('skill_item', 'swiper-slide', 'card');
                skillItem.innerHTML=`
                div class="card-content">
                    <h3 class="skill__name">${item.name}</h3>
                    <div class="skill_item_desc">
                        <div>
                            <span>
                                ${item.desc}
                            </span>
                        </div>
                    </div>
                </div>
                `
                // Cu add vao binh thuong
                if(name in item.domainName){
                    webSkillsHolder.appendChild(skillItem);
                }
                else if(){
                    dataSkillsHolder.appendChild(skillItem)
                }
            })
        })
})

// PROJECT VIEW
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
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