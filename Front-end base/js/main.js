// SHOW MENU
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

// Lam theo kieu nay thi no se khong dam bao, neu nhu bi mat do nguoi dung an linh 
// tinh thi se khong hoat dong duoc
// navMenu.className = "show__menu" hoac addClassList

// INFINITE SCROLL
const scrollers = document.querySelectorAll(".scroller");

(function(){
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
    
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
})()
// Fetch thông tin intro. ảnh thì nhanh tính sau
const thisSitePlace = "home"

// Fetch thông tin intro
document.addEventListener('DOMContentLoaded', function(){
    // Khai bao toan bo bien se gan vao
    // Home intro
    const homeQuote = document.querySelector('.avatar__container h3');
    const homeIntro = document.querySelector('.avatar__container span')
    // Abou intro
    const aboutIntro = document.querySelector('.about__quote')
    // Skills quote
    const skillQuote = document.querySelector('.skill__intro__quote span')
    // Project quote
    const  projectQuote = document.querySelector('.project__intro__quote span')

    fetch(`http://localhost:8080/api/user/introPlace/name/${thisSitePlace}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },})
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error ('Failed to fetch IntroPlace')
            }
        })
        .then(data1=>{
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
        .then(intros => {
            intros.forEach(intro =>{
                
                if(intro.introTopicDTO.name == 'home'){
                    if(intro.introTypeDTO.name == 'quote'){
                        homeQuote.innerText = intro.desc;
                    }
                    else if(intro.introTypeDTO.name == 'introduction'){
                        homeIntro.innerText = intro.desc;
                    }
                }
                else if(intro.introTopicDTO.name == 'about'){
                    if(intro.introTypeDTO.name == 'quote'){
                        throw new Error("Fetch wrong About introduction");
                    }
                    else if(intro.introTypeDTO.name == 'introduction'){
                        aboutIntro.innerText = intro.desc;
                    }
                }
                else if(intro.introTopicDTO.name == 'skills'){
                    if(intro.introTypeDTO.name == 'quote'){
                        skillQuote.innerText = intro.desc
                    }
                    else if(intro.introTypeDTO.name == 'introduction'){
                        throw new Error("Fetch wrong Skill introduction");
                    }
                }
                else if(intro.introTopicDTO.name == 'projects'){
                    if(intro.introTypeDTO.name == 'quote'){
                        projectQuote.innerText =  intro.desc;
                    }
                    else if(intro.introTypeDTO.name == 'introduction'){
                        throw new Error("Fetch wrong Projects introduction");
                    }
                }
                
            })
        })
        .catch(err => {
            console.log('Co loi tai qua trinh fetch intro tai trang home ', err);
        })
})

// Fetch thông tin background
document.addEventListener('DOMContentLoaded', function(){
    // Lay thong tin se append child vao
    const aboutHolder = document.querySelector('.about__container');
    // aboutHolder.innerHTML=''
    const awardHolder = document.querySelector('.award__list')
    aboutHolder.innerHTML=''
    awardHolder.innerHTML=''
    fetch(`http://localhost:8080/api/user/about/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },})
        .then(res=>{
            if(res.ok){
                return res.json();
            }
            else{
                return new Error("Failed to fetch about");
            }
        })  
        .then(abouts=>{
            abouts.forEach(about=>{
                if(about.type == 'about'){
                    
                    aboutHolder.innerHTML += `
                    <li class="about__item">
                        <div class="item__header">
                            <div class="circle__holder">
                                <div class="circle small"></div>
                            </div>
                            <ul class="item__short">
                            <li class="tag title">${about.header}</li>
                            <li class="tag">${about.tag_1}</li>
                            <li class="tag">${about.tag_2}</li>
                            </ul>
                        </div>
                        <div class="item__desc">
                            <span>${about.desc}</span>
                        </div>
                    </li>
                    `;
                }
                else if(about.type == 'award'){
                    const awardItem = document.createElement('li');
                    awardItem.classList.add('award__item');
                    awardItem.innerHTML=`
                        <h3 class="title">${about.header}</h3>
                        <div><span>
                            ${about.tag_1}
                        </span></div>
                        <div><span>
                            ${about.tag_2}
                        </span></div>`
                    awardHolder.appendChild(awardItem);
                }
                else{
                    throw new Error("You fetch something wrong in about repository");
                }         
            })
        })
        .catch(err =>{
            console.log("co loi tai qua trinh lam viec voi about tai trang project", err)
        })
    })


// Fetch thông tin skills

document.addEventListener('DOMContentLoaded', function(){
    const skillHolder = document.querySelector('.skill__inner-container');
    skillHolder.innerHTML = '';
    
    fetch(`http://localhost:8080/api/user/skill/`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to fetch Skill');
            }
        })
        .then(skills => {
            let count = 0;
            let ul = null;
            
            skills.forEach(skill => {
                if (count % 9 === 0) {
                    ul = document.createElement('ul');
                    ul.classList.add('skill__container', 'scroller__inner');
                    if (count / 9 % 2 === 1) {
                        ul.classList.add('odd');
                    }
                    skillHolder.appendChild(ul);
                }
                
                const li = document.createElement('li');
                li.classList.add('skill__item');
                li.innerHTML = `<div>${skill.name}</div>`;
                ul.appendChild(li);
                
                count++;
            });
        })
        .catch(error => {
            console.error("Co loi tai qua trinh ly skill ", err);
        });
});



// Fetch thông tin project
document.addEventListener('DOMContentLoaded', function() {
    // Tạo holder đẻ gắn
    // Lay rieng id data va id engineer
    // Data
    const projectContainer = document.querySelector('.project__inner-container .mySwiper .swiper-wrapper')
    projectContainer.innerHTML='';
    fetch(`http://localhost:8080/api/user/project/`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                throw new Error('Failed to fetch Project');
            }
        })
        .then(projects=>{

            projects.forEach(data1 =>{
                const projectItem = document.createElement('div');
                projectItem.classList.add('project__item', 'swiper-slide', 'card');
                projectItem.innerHTML=`
                    <div class="project-inner card-content">
                        <div class="project-inner-header">
                          <h3 class="topic">${data1.topicName}</h3>
                          <div class="title">${data1.name}</div>
                        </div>
                        <div class="link_ref"><a href=""><i class="ri-github-fill"></i>Git hub</a></div>
                    </div>
                `;
                projectContainer.appendChild(projectItem);
            })
            initSwiper();
        })
        .catch(err =>{
            console.log('Co loi tai qua tirnh fetch project trang home ', err);
        })
            
        
})










// Swipper project
function initSwiper() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
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
}